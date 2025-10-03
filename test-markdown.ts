import { Assessment } from "./framework/types";
import { StablecoinFrameworkV1 } from "./framework/stablecoinFrameworkV1";
import { generateMarkdownReport, saveMarkdownReport } from "./utils/markdown";
import * as fs from "fs";

async function testMarkdownGeneration() {
  try {
    // Read the existing assessment.json file
    const assessmentData = fs.readFileSync("assessment.json", "utf8");
    
    // Parse the JSON, skipping the first few lines that contain command output
    const lines = assessmentData.split('\n');
    const jsonStartIndex = lines.findIndex(line => line.trim() === '{');
    const jsonContent = lines.slice(jsonStartIndex).join('\n');
    const assessment: Assessment = JSON.parse(jsonContent);

    console.log("Loaded assessment for:", assessment.asset);
    console.log("Framework ID:", assessment.frameworkId);
    console.log("Number of sections:", Object.keys(assessment.results).length);

    // Generate markdown report
    const markdown = generateMarkdownReport(assessment, StablecoinFrameworkV1, {
      includeReferences: true,
      includeLLMOutput: true,
      includeGuide: false,
    });

    // Save to file
    const outputPath = "test_AUSD_assessment.md";
    await saveMarkdownReport(assessment, StablecoinFrameworkV1, outputPath, {
      includeReferences: true,
      includeLLMOutput: true,
      includeGuide: false,
    });

    console.log(`✅ Markdown report generated successfully!`);
    console.log(`📄 File saved as: ${outputPath}`);
    console.log(`📊 Report length: ${markdown.length} characters`);
    
    // Show a preview of the markdown
    console.log("\n--- Preview (first 500 characters) ---");
    console.log(markdown.substring(0, 500) + "...");

  } catch (error) {
    console.error("❌ Error testing markdown generation:", error);
  }
}

testMarkdownGeneration();

