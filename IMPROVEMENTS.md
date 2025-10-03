# Risk Assessment Framework Improvements

## Summary of Changes (October 3, 2025)

### 1. ✅ Organized Output Structure
- **Created `outputs/` folder** for all generated reports
- Reports now automatically save to `outputs/{asset}_risk_assessment_{date}.md`
- Added `.gitkeep` file to maintain folder structure in git
- Created `.gitignore` to manage repository cleanliness

### 2. ✅ Improved Analysis Quality

#### Enhanced LLM Prompting (`runner.ts`)
- **Increased context size**: From 1,500 to 4,000 characters per reference
- **More references**: From 25 to 35 references passed to LLM
- **Higher token limit**: Increased from 3,500 to 8,000 tokens for more detailed analysis
- **Better format instructions**: 
  - Emphasize narrative paragraphs over bullet points
  - Use bullets ONLY when framework explicitly requests lists
  - Use tables ONLY when framework defines table structures
  - Require 2-4 detailed paragraphs minimum per subsection

#### New System Prompt
The system now instructs the LLM to:
- "Write detailed narrative analysis in paragraph form"
- "Use bullets and tables ONLY when explicitly required by the framework"
- "Extract and use ALL relevant information from the provided references"

#### Updated User Prompt with:
- **OUTPUT FORMAT REQUIREMENTS** section explaining when to use tables vs narrative
- **ANALYSIS DEPTH** section requiring specific details (names, numbers, addresses)
- **WRITING STYLE** section emphasizing flowing analytical prose
- Explicit instruction: "Further analysis required" only if info is truly missing

### 3. ✅ Better Content Gathering

#### Scraper Improvements (`utils/scraper.ts`)
- **Doubled content limit**: From 15,000 to 30,000 characters per page
- Better extraction of main content areas
- Preserves headings and structure

#### Context Improvements
- Each reference now provides 4,000 chars (vs 1,500)
- 35 references passed to LLM (vs 25)
- Total context: ~140,000 characters vs previous ~37,500 characters
- **~3.7x more information** for the LLM to work with

### 4. ✅ Framework Analysis Instructions (`framework/analysisInstructions.ts`)
Updated presentation guidelines to:
- "Write primarily in narrative paragraphs - avoid overusing bullet points"
- "ONLY use bullet points when the framework explicitly requests lists"
- "ONLY create tables when the framework explicitly defines table structures"
- "Split dense areas into well-developed paragraphs (2-4 sentences each)"

## Expected Improvements

### Before
- ❌ Reports saved in root directory (disorganized)
- ❌ Analysis mostly bullet points (bland, list-like)
- ❌ Tables created unnecessarily
- ❌ Shallow analysis with "Further analysis required" even when info was available
- ❌ Limited context (37,500 chars) caused information to be missed
- ❌ Generic statements without specific details

### After
- ✅ Reports organized in `outputs/` folder
- ✅ Rich narrative paragraphs with risk analysis
- ✅ Tables only when explicitly required by framework
- ✅ Deep, detailed analysis with specific names, numbers, and technical details
- ✅ 3.7x more context (140,000 chars) ensures comprehensive information gathering
- ✅ Evidence-based analysis with proper citations

## How to Test

Run an assessment:
```bash
npm run cli -- \
  --asset AUSD \
  --issuer "Agora Blue Ltd" \
  --assetRefs ./references/AUSDReferences \
  --usePerplexity --perplexityModel sonar \
  --depth 5 \
  --outputMarkdown
```

The report will be saved to: `outputs/AUSD_risk_assessment_{date}.md`

## Next Steps for Further Improvement

1. **Implement structured output parsing** - Parse the TypeScript interfaces (e.g., `Section1_1_1_Output`) to ensure LLM returns properly structured data
2. **Add reference quality scoring** - Prioritize primary sources (whitepapers, audits) over secondary sources
3. **Implement caching** - Cache scraped content to avoid re-scraping on reruns
4. **Add retry logic** - Retry failed scrapes with exponential backoff
5. **PDF/Document parsing** - Better extraction from PDF files (audit reports, whitepapers)
6. **Multi-model support** - Support GPT-4, Claude, or other LLMs as alternatives to Perplexity

