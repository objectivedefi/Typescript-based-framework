# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2025-10-03

### Added - Framework V2
- **New Framework V2** - Comprehensive stablecoin risk assessment framework
  - Section 1: Stablecoin Fundamentals (expanded)
  - Section 3: On-chain Management (new consolidated section)
  - Section 4: Regulation & Compliance (enhanced)
  - Section 5: Risk Assessment Framework (quantitative scoring)
- **Quantitative Risk Scoring System**
  - Weighted composite scores (1-5 scale)
  - 5 risk dimensions with stress scenarios
  - Low/Medium/High risk classification
- **Structured Documentation Quality Rubric**
  - 6-criteria scoring system
  - Composite scoring (0-5 scale)
  - Strong/Adequate/Weak/High Risk classification
- **Overcollateralization Buffer Formulas**
  - Fiat-backed (1:1 ratio)
  - Crypto-backed (overcollateralized)
  - Hybrid models (dual formulas)
- **Mermaid Flowchart Requirements**
  - User acquisition flows (institutional/retail)
  - User redemption flows (institutional/retail)
  - Architecture diagrams

### Changed
- **Default Framework** changed from V1 to V2
- **CLI Framework Selection** - Now supports both V1 and V2 via `--framework` parameter
- **Framework Structure** - V2 removes Section 2 (Market Performance) and consolidates operational metrics

### Improved - Analysis Quality (applies to both V1 and V2)
- **3.7x More Context** - Increased from 37,500 to 140,000 characters per section
  - References: 25 → 35 per section
  - Chars per reference: 1,500 → 4,000
  - Chars per scraped page: 15,000 → 30,000
- **Better Output Format**
  - Emphasis on narrative paragraphs over bullet points
  - Tables only when explicitly required by framework
  - Increased token limit: 3,500 → 8,000 tokens per section
- **Enhanced LLM Prompts**
  - Clear format requirements (narrative vs tables vs bullets)
  - Explicit depth requirements (2-4 paragraphs per subsection)
  - Better handling of "Further analysis required" statements
  - Stronger system prompt emphasizing narrative structure

### Fixed
- **Output Organization** - All reports now save to `outputs/` folder
- **Framework Display** - Fixed compiled section guides showing proper content
- **CLI Framework Selection** - Both V1 and V2 properly selectable

### Added - Infrastructure
- `outputs/` folder for organized report storage
- `.gitignore` file for repository management
- `FRAMEWORK_V2_GUIDE.md` - Comprehensive V2 documentation
- `IMPROVEMENTS.md` - Detailed changelog of quality improvements
- `CHANGELOG.md` - This file

## [0.1.0] - 2025-10-02

### Initial Release
- **Framework V1** - Original 6-section stablecoin risk assessment framework
  - Section 1: Stablecoin Fundamentals
  - Section 2: Market Performance & Risk Assessment
  - Section 3.1: Operational Overview
  - Section 3.2: Development and Security Metrics
  - Section 4: Regulation & Compliance
  - Section 5: Risk Assessment
- **CLI Tool** - Command-line interface for running assessments
- **Web Scraper** - Basic scraping with cheerio
- **Web Crawler** - BFS crawling with configurable depth
- **Perplexity Integration** - LLM-powered analysis
- **Markdown Output** - Generate formatted markdown reports
- **Reference Management** - Add/remove reference URLs
- **TypeScript Framework** - Strongly-typed framework sections

### Features
- Modular framework structure
- Customizable reference sources
- LLM enrichment (optional)
- Web crawling with depth control
- JSON and Markdown output formats

