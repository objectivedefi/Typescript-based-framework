## Risk Assessment Framework (TypeScript)

This repository scaffolds a modular risk assessment framework for stablecoins, including:
- Strongly-typed framework sections
- Utilities for scraping and crawling
- A runner to execute assessments
- A CLI for interactive runs

### Quickstart

1. Install dependencies
```bash
cd risk-assessment-framework
npm install
```

2. Set your Perplexity API key (required for analysis)
```bash
$env:PERPLEXITY_API_KEY="your-api-key-here"  # Windows PowerShell
export PERPLEXITY_API_KEY="your-api-key-here"  # Linux/Mac
```

3. Run an assessment
```bash
npm run cli -- \
  --asset "AUSD" \
  --issuer "Agora Blue Ltd" \
  --assetRefs ./references/AUSDReferences \
  --framework StablecoinFrameworkV2 \
  --usePerplexity \
  --depth 5 \
  --outputMarkdown
```

Reports are saved to: `outputs/{ASSET}_risk_assessment_{DATE}.md`

### Framework Versions

- **V2 (Default)**: Comprehensive framework with quantitative risk scoring, regulatory compliance focus, and on-chain management analysis. See [FRAMEWORK_V2_GUIDE.md](FRAMEWORK_V2_GUIDE.md) for details.
- **V1**: Original framework with broader market performance and operational metrics. Use `--framework StablecoinFrameworkV1` to select.

### CLI Options

```bash
--asset <name>              Asset name (required)
--issuer <name>             Issuer name (required)
--assetRefs <path>          Path to reference module
--framework <name>          StablecoinFrameworkV1 or StablecoinFrameworkV2 (default: V2)
--usePerplexity             Enable LLM analysis (recommended)
--perplexityModel <model>   Perplexity model (default: sonar)
--depth <number>            Crawler depth (default: 1, recommended: 5-10)
--addRef <url...>           Add additional reference URLs
--removeRef <pattern...>    Remove references by URL pattern
--outputMarkdown [path]     Save as markdown (auto-generates filename if no path)
--includeReferences         Include references in output (default: true)
--includeLLMOutput          Include LLM analysis in output (default: true)
```

### Project Structure

```
risk-assessment-framework/
├── framework/
│   ├── types.ts
│   ├── analysisInstructions.ts
│   ├── section1.ts
│   ├── section2.ts
│   ├── section3_1.ts
│   ├── section3_2.ts
│   ├── section4.ts
│   ├── section5.ts
│   ├── stablecoinFrameworkV1.ts
│   └── index.ts
├── utils/
│   ├── scraper.ts
│   ├── crawler.ts
│   └── references.ts
├── runner.ts
├── cli.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Notes
- Section guide strings merge the original framework text for that section with the global analysis instructions.
- The runner includes TODOs for LLM enrichment and dynamic data ingestion.
- The crawler/scraper are basic, safe defaults intended for extension.

