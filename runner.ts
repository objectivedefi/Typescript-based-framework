
import { AssetInput, Assessment, RiskAssessmentFramework, RiskFrameworkSection } from "./framework";
import { applyReferenceUrlEdits } from "./utils/references";
import { bfsCrawl } from "./utils/crawler";
import { readLocalFilesAsReferences } from "./utils/files";
import { callPerplexity } from "./utils/llm";

export interface RunOptions {
  depth?: number;
  addRef?: string[];
  removeRef?: string[];
  addFile?: string[];
  usePerplexity?: boolean;
  perplexityModel?: string;
}

function fillPlaceholders(text: string, asset: string, issuer: string): string {
  return text
    .replaceAll("{Asset Name}", asset)
    .replaceAll("{Asset}", asset)
    .replaceAll("{Stablecoin Name}", asset)
    .replaceAll("{Name of the Asset}", asset)
    .replaceAll("{issuer}", issuer)
    .replaceAll("{Issuer}", issuer);
}

export async function runAssessment(
  assetInput: AssetInput,
  framework: RiskAssessmentFramework,
  options: RunOptions = {}
): Promise<Assessment> {
  const depth = options.depth ?? 1;

  // Build references
  const fileRefs = await readLocalFilesAsReferences(options.addFile ?? []);
  const base = [...assetInput.references, ...fileRefs];
  const finalReferences = applyReferenceUrlEdits(base, options.addRef, options.removeRef);

  // Crawl
  // TODO: Consider throttling, robots.txt, and domain allowlist
  const crawled = await bfsCrawl(
    finalReferences.map((r) => r.url),
    { depth, sameOriginOnly: false }
  );

  // Merge crawled results
  const references = [...finalReferences, ...crawled];

  const results: Record<string, any> = {};

  for (const section of framework.sections) {
    const guide = fillPlaceholders(section.guide, assetInput.name, assetInput.issuer);
    let llmOutput: string | undefined;
    if (options.usePerplexity) {
      // Provide more context - top 35 references with more content
      const context = references
        .slice(0, 35)
        .map((r) => `- ${r.url}${r.scrapedContent ? `\n  ${r.scrapedContent.slice(0, 4000)}` : ""}`)
        .join("\n");
      const prompt = `You are to produce a structured risk assessment analysis for: "${section.title}".

CRITICAL REQUIREMENTS:
1. Follow the EXACT framework structure provided in the guide below
2. Use the exact subsection numbering and titles from the framework (e.g., 1.1.1, 1.1.2, etc.)
3. Address each numbered subsection separately with its own heading
4. Do NOT skip any subsections listed in the framework
5. Do NOT create additional sections not in the framework
6. Do NOT renumber or reorganize the framework structure

OUTPUT FORMAT REQUIREMENTS:
- Write primarily in NARRATIVE PARAGRAPHS, not bullet points
- ONLY use bullet points for listing specific items when the framework explicitly requests lists (e.g., "list of X", "bullet points for Y")
- ONLY create tables when the framework explicitly defines table structures (e.g., "ClassificationTableRow", "AccessTableRow", "management team table")
- When tables are required, format them in markdown table syntax
- When diagrams/flowcharts are required, provide them in Mermaid syntax
- Write in flowing, analytical prose with proper paragraph structure
- Each subsection should be 2-4 detailed paragraphs minimum unless it's a pure data table

ANALYSIS DEPTH:
- Provide DEEP, detailed analysis - do not be brief or superficial
- Include specific names, numbers, addresses, percentages, and technical details from the references
- Every technical detail must be paired with its risk implications
- Compare to industry peers (USDC, DAI, FRAX) with specific examples
- Describe stress scenarios and failure modes in detail
- If information is missing from references, explicitly state "Further analysis required: [specific information needed]" but do NOT say this if the information IS available in the references
- Use the full context provided - extract all relevant details from the references

WRITING STYLE:
- Professional, analytical, risk-focused prose
- Paragraphs should flow naturally and build on each other
- Avoid generic statements - be specific and evidence-based
- Connect concepts across subsections
- Maintain technical precision while being readable

Framework Guide to Follow:
${guide}

Context References (USE ALL OF THIS INFORMATION):
${context}

Return a comprehensive, narrative-driven analysis that follows the framework structure exactly. Make it detailed, insightful, and thoroughly researched using ALL available reference information.`;
      try {
        llmOutput = await callPerplexity([
          { role: "system", content: "You are an expert DeFi risk analyst. Write detailed narrative analysis in paragraph form. Use bullets and tables ONLY when explicitly required by the framework. Extract and use ALL relevant information from the provided references." },
          { role: "user", content: prompt },
        ], { model: options.perplexityModel ?? "sonar", temperature: 0.2, maxTokens: 8000 });
      } catch (e: any) {
        llmOutput = `LLM call failed: ${e?.message ?? e}`;
      }
    }
    results[section.id] = {
      title: section.title,
      outputType: section.outputType,
      guide,
      references: references.slice(0, 10),
      llm: options.usePerplexity ? llmOutput : undefined,
    } as any;
  }

  const assessment: Assessment = {
    frameworkId: framework.id,
    asset: assetInput.name,
    issuer: assetInput.issuer,
    results,
  };

  return assessment;
}

