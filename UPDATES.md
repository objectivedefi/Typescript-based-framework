# Risk Assessment Framework Updates

## Summary of Changes

This document outlines the improvements made to fix the framework structure adherence and data quality issues.

## Issues Fixed

### 1. ❌ LLM Not Following Framework Structure
**Problem**: The LLM was creating its own section numbering (starting at section 4 instead of 1.1.1)

**Root Cause**: The framework guides had placeholder text instead of actual detailed structure

**Solution**: 
- ✅ Added complete Section 1 framework guide with all subsections (1.1.1 - 1.2.3)
- ✅ Enhanced LLM prompt in `runner.ts` with explicit structure requirements
- ✅ Added critical requirements to prevent LLM from renumbering or reorganizing

### 2. ❌ Poor Data Quality in Analysis
**Problem**: Generated analysis was lacking detailed data despite having good references

**Root Causes**:
- Malformed URLs in AUSDReferences.ts (concatenated URLs)
- Basic scraper not extracting content effectively
- Short context window for LLM

**Solutions**:
- ✅ Fixed all malformed URLs in `references/AUSDReferences.ts`
- ✅ Enhanced scraper with better content extraction:
  - Longer timeout (30s instead of 15s)
  - Better User-Agent headers
  - Structured content extraction (preserving headings)
  - Removes navigation/ads/scripts
  - Increased content limit (15,000 chars instead of unlimited)
- ✅ Added scraping status logging for debugging

### 3. ✅ Markdown Generation Feature
**New Feature**: Added ability to generate professional markdown reports

**Files Added**:
- `utils/markdown.ts` - Markdown generation utilities
- Updated `cli.ts` with markdown options

## Files Modified

### 1. `framework/section1.ts`
- **Before**: Placeholder text: `"... full section text omitted for brevity in code..."`
- **After**: Complete 108-line framework guide with all subsections detailed
- **Impact**: LLM now knows exact structure to follow

### 2. `runner.ts`
- **Before**: Simple prompt asking to "follow the guide"
- **After**: Enhanced prompt with 6 critical requirements explicitly forbidding renumbering
- **Impact**: Much stronger enforcement of framework structure

### 3. `references/AUSDReferences.ts`
- **Before**: 4 malformed URLs (concatenated multiple URLs)
- **After**: 23 properly formatted URLs, organized by category
- **Impact**: All URLs now accessible to scraper

### 4. `utils/scraper.ts`
- **Before**: Basic scraping with 15s timeout, simple text extraction
- **After**: Enhanced scraping with:
  - 30s timeout
  - Realistic browser headers
  - Structured content extraction
  - Heading preservation
  - Status logging
  - Better error handling
- **Impact**: Much better content extraction from websites

### 5. `cli.ts`
- **Added**: Markdown output options
- **New flags**:
  - `--outputMarkdown [path]` - Generate markdown report
  - `--includeReferences` - Include reference links
  - `--includeLLMOutput` - Include LLM analysis
  - `--includeGuide` - Include framework guide

## How to Use the Updates

### Generate Assessment with Better Data
```cmd
set PERPLEXITY_API_KEY=your-api-key-here
npx ts-node cli.ts --asset AUSD --issuer "Agora Blue Ltd" --assetRefs ./references/AUSDReferences --usePerplexity --depth 3
```

### Generate Markdown Report
```cmd
npx ts-node cli.ts --asset AUSD --issuer "Agora Blue Ltd" --assetRefs ./references/AUSDReferences --usePerplexity --outputMarkdown "AUSD_Report.md"
```

### Test Scraper Performance
Watch the console output to see:
- ✅ Successfully scraped URLs with character counts
- ❌ Failed URLs with error messages

## Expected Improvements

### Framework Structure
- **Before**: Random numbering, LLM-generated structure
- **After**: Follows exact framework (1.1.1, 1.1.2, 1.1.3, etc.)

### Data Quality
- **Before**: Generic analysis, missing specific details
- **After**: Detailed analysis with:
  - Specific custodian names
  - Contract addresses
  - Audit details
  - Technical specifications
  - Regulatory information

### Output Format
- **Before**: JSON only
- **After**: JSON or professional Markdown with:
  - Table of contents
  - Clickable section links
  - Organized references
  - Clean formatting

## Next Steps

### 1. Complete Other Framework Sections
The same updates should be applied to:
- `framework/section2.ts` (Market Performance)
- `framework/section3_1.ts` (Operational Overview)
- `framework/section3_2.ts` (Smart Contract Risk)
- `framework/section4.ts` (Custody & Collateral)
- `framework/section5.ts` (Synthesis & Recommendations)

### 2. Increase LLM Token Limit
Current limit: 1400 tokens (may truncate long analyses)
Recommended: 3000-4000 tokens for comprehensive coverage

In `runner.ts` line 87, change:
```typescript
maxTokens: 1400  // Current
maxTokens: 3500  // Recommended
```

### 3. Add More References
Consider adding:
- Blockchain explorers (Etherscan contract addresses)
- DeFi analytics platforms
- Regulatory filings
- Third-party audits
- Community forums

### 4. Test and Iterate
1. Run assessment with updated framework
2. Review output for structure compliance
3. Check if subsections are properly numbered
4. Verify data quality improvements
5. Adjust prompts if needed

## Troubleshooting

### If LLM Still Doesn't Follow Structure:
1. Check that `framework/section1.ts` has the full guide (not placeholder)
2. Verify the prompt includes "CRITICAL REQUIREMENTS"
3. Increase token limit to allow full response
4. Try different Perplexity models (sonar-pro, sonar-reasoning)

### If Data Quality Is Still Poor:
1. Check console logs to see which URLs failed to scrape
2. Add delay between requests if hitting rate limits
3. Try adding more specific reference URLs
4. Consider using --addFile to include local PDF documents

### If Scraper Fails:
1. Some sites block automated requests
2. Some sites require JavaScript (use Puppeteer for these)
3. Check network connectivity
4. Verify URLs are accessible in browser

## Summary

These updates address the core issues:
✅ Framework structure is now clearly defined and enforced
✅ URLs are fixed and properly formatted
✅ Scraper extracts more content more reliably
✅ LLM prompt explicitly prevents structure deviation
✅ Markdown generation added for better reports

The framework should now produce properly structured, data-rich risk assessments that follow the exact subsection format specified in the framework guide.


