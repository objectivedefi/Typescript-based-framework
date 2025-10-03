# Stablecoin Risk Assessment Framework V2

## Overview

Framework V2 is a comprehensive, updated risk assessment framework that provides a more streamlined and focused approach to stablecoin analysis. This version emphasizes regulatory compliance, on-chain management, and quantitative risk scoring.

## Key Differences from V1

| Aspect | V1 | V2 |
|--------|----|----|
| **Sections** | 6 sections (including market performance, operational metrics) | 4 sections (fundamentals, on-chain, compliance, risk scoring) |
| **Focus** | Broad market and operational overview | Deep technical and regulatory analysis |
| **Risk Scoring** | Narrative-based | Structured rubric with weighted composite scores |
| **Section 2** | Market Performance & Risk Assessment | Removed (not needed for all stablecoins) |
| **Section 3** | Split into operational overview | Consolidated into on-chain management |
| **Section 5** | General recommendations | Quantitative risk framework with scores |

## Framework Structure

### Section 1: Stablecoin Fundamentals
Comprehensive overview covering:
- **1.1 Description of the Stablecoin**
  - Classification with snapshot table
  - User adoption & accessibility
  - User flows (with mermaid diagrams)
  - Reserves overview
  - Fees and business model
  - Ecosystem & governance overview
  - History
- **1.2 System Architecture Overview**
  - Background workflow
  - Architecture diagram
  - Key technical components (cross-chain, lockbox, bridging)

### Section 3: On-chain Management
Technical smart contract analysis:
- **3.1 Operational Overview**
  - Smart contract structure
  - Smart contract controls
  - Dependencies
  - Operational security practices
  - Oracle mechanism
- **3.2 Development and Security Metrics**
  - Development activity
  - Active developers
  - Documentation quality (scored rubric)
  - Upgrade frequency
  - Smart contract audits
  - Known vulnerabilities
  - Bug bounty programs
  - Historical downtime
  - Time-to-patch metrics

### Section 4: Regulation & Compliance
Legal and regulatory posture:
- **4.1 Reserves Oversight & Assurance**
  - Reserve assets
  - Overcollateralization buffer (with formulas)
  - Custody of reserves
  - Attestations & audits
  - Payment rails
- **4.2 Governance & Control**
  - Governance structure
- **4.3 Regulatory & Legal Compliance**
  - Licensing & registrations
  - Sanctions & AML/KYC compliance
  - User restrictions
  - Restrictions on illegal use
  - Customer protection measures

### Section 5: Risk Assessment Framework
Quantitative risk scoring system:
- **5.1 Reserve & Collateralization Risk** (30% weight)
- **5.2 Redemption Mechanism Risk** (20% weight)
- **5.3 Run Risk & Liquidity Depth** (20% weight)
- **5.4 Governance & Centralization Risk** (15% weight)
- **5.5 Compliance & Regulatory Risk** (15% weight)
- **5.6 Composite Risk Rating** (weighted score table)
- **5.7 Analyst Conclusion** (executive summary)

Each risk dimension includes:
- Findings (factual data)
- Stress scenario (what-if analysis)
- Scoring rubric (1-5 scale)
- Risk score with rationale

## Usage

### Running an Assessment with V2

```bash
npm run cli -- \
  --asset AUSD \
  --issuer "Agora Blue Ltd" \
  --assetRefs ./references/AUSDReferences \
  --framework StablecoinFrameworkV2 \
  --usePerplexity --perplexityModel sonar \
  --depth 5 \
  --outputMarkdown
```

### Key Parameters

- `--framework StablecoinFrameworkV2` - Use the V2 framework (now the default)
- All other parameters remain the same as V1

### Output Location

Reports are saved to: `outputs/{ASSET}_risk_assessment_{DATE}.md`

## When to Use V2 vs V1

### Use V2 When:
- ✅ You need quantitative risk scoring
- ✅ Regulatory compliance is a priority
- ✅ You want detailed on-chain/smart contract analysis
- ✅ You need structured, comparable risk metrics
- ✅ Analyzing institutional-grade stablecoins

### Use V1 When:
- ✅ You need market performance analysis
- ✅ You want broader operational metrics
- ✅ You're analyzing newer/less established stablecoins
- ✅ Market dynamics are critical to the analysis

## Special Features in V2

### 1. **Overcollateralization Buffer Formulas**
V2 includes explicit mathematical formulas for:
- Fiat-backed (1:1): `Collateral Buffer = Total Reserve Assets − Circulating Supply`
- Crypto-backed: `Collateral Buffer % = [(Total Reserve − Supply) ÷ Supply] × 100`
- Hybrid models: Separate formulas for fiat and crypto components

### 2. **Documentation Quality Scoring**
Structured rubric evaluating:
- Technical Depth (30%)
- Completeness & Coverage (20%)
- GitHub Repository Transparency (20%)
- Accessibility & Clarity (10%)
- Maintenance & Updating (10%)
- Independent Verification (10%)

**Composite scores:**
- 4.0–5.0 → Strong Documentation
- 3.0–3.9 → Adequate
- 2.0–2.9 → Weak
- 0–1.9 → High Risk

### 3. **Composite Risk Rating**
Weighted scoring system producing:
- **1.0–1.9 = Low Risk**
- **2.0–3.4 = Medium Risk**
- **3.5–5.0 = High Risk**

### 4. **Mermaid Flowcharts**
Required for:
- Institutional acquisition
- Retail acquisition
- Institutional redemption
- Retail redemption
- Architecture diagrams

## Migration from V1

To migrate an existing assessment from V1 to V2:

1. Update your CLI command to use `--framework StablecoinFrameworkV2`
2. Review V2 structure - some sections have been reorganized
3. Note that market performance analysis (Section 2 from V1) is not in V2
4. Risk scoring is now quantitative rather than purely narrative

## Best Practices

1. **Use comprehensive references**: V2 requires more detailed technical information
2. **Provide audit documents**: Critical for Section 3 and Section 5 scoring
3. **Include regulatory documents**: Terms of use, licenses, attestations
4. **Developer docs are essential**: V2 heavily relies on technical documentation
5. **Enable deep crawling**: Use `--depth 5` or higher for thorough information gathering

## Examples

### Minimal Run
```bash
npm run cli -- --asset AUSD --issuer "Agora" --framework StablecoinFrameworkV2 --usePerplexity --outputMarkdown
```

### Comprehensive Run
```bash
npm run cli -- \
  --asset AUSD \
  --issuer "Agora Blue Ltd" \
  --assetRefs ./references/AUSDReferences \
  --framework StablecoinFrameworkV2 \
  --addRef "https://additional-source.com" \
  --usePerplexity \
  --perplexityModel sonar \
  --depth 10 \
  --outputMarkdown \
  --includeReferences \
  --includeLLMOutput
```

## Notes

- **Default Framework**: V2 is now the default framework
- **Backwards Compatible**: V1 remains available via `--framework StablecoinFrameworkV1`
- **Enhanced Prompting**: V2 benefits from all the improvements made to LLM prompting and context gathering
- **Structured Output**: V2 emphasizes tables, formulas, and quantitative metrics over purely narrative analysis

