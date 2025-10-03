import { RiskFrameworkSection } from "./types";
import { GLOBAL_ANALYSIS_INSTRUCTIONS } from "./analysisInstructions";

// Section 4: Regulation & Compliance (V2)

const section4V2Guide = `# SECTION 4: Regulation & Compliance

Write a short narrative introducing this section. Explain that it examines {Asset Name}'s compliance posture, oversight of reserves, governance, and interaction with regulators. Highlight that risks may stem from insufficient legal protections, weak governance, or inadequate regulatory oversight.

Use **{developer docs}**, **{Reserves attestation file name}**, and **{Proof of Asset reserves}** as references for **Sections 4.1–4.2**.

Use **{terms and use file name}** (plus other provided documents) for **Section 4.3**.

---

## 4.1 Reserves Oversight & Assurance

### 4.1.1 Reserve Assets

Write an **executive summary** covering:

- **Composition**: List and describe the types of assets held as reserves, specifying amounts and proportions.
- **Liquidity**: Assess how easily reserves can be liquidated to meet redemption demands.
- **Quality**: Evaluate creditworthiness and risk profile of each reserve asset, noting if backed by government guarantees or collateral.
- **Transparency**: State whether wallet addresses, attestations, or detailed disclosures are available.

Also include:

- **Description of Custodian**: Identify custodial entities, including regulatory status.
- **Asset-Custodian Allocation**: Note which types of assets are held by which custodian. Mention institutional protections/insurance where applicable.

**Audit Results / Credentials**

- State whether reports are audited or unaudited.
- Identify the auditing institution or credentials.
- Cite attestations or management assertions on accuracy.

---

### 4.1.2 Overcollateralization Buffer

You are an expert DeFi risk analyst. Write a **risk-focused narrative** for this section.

Determine which buffer model applies based on the stablecoin's design:

1. **If Fiat-backed (1:1):**
    - State reserves are maintained at a strict 1:1 ratio against circulating supply.
    - Make clear that there is **no explicit overcollateralization buffer**.
    - Show formula explicitly:
        - *Collateral Buffer = Total Reserve Assets − Circulating Supply of {ASSET}*
        - Since reserves = supply, **Collateral Buffer = 0**.
    - Discuss risks if reserves fall below parity (e.g., redemption failure, undercollateralization).
2. **If Crypto-backed (overcollateralized):**
    - Present the formulas directly in the narrative:
        - *Collateral Buffer = Total Reserve Assets − Circulating Supply of {ASSET}*
        - *Collateral Buffer % = [(Total Reserve Assets − Circulating Supply of {ASSET}) ÷ Circulating Supply of {ASSET}] × 100*
    - Use values from {Reserves attestation file name}.
    - Explain how this buffer provides a cushion against collateral price volatility.
    - Discuss risks if **Collateral Buffer → 0** (e.g., insolvency, halted redemptions).
3. **If Hybrid (fiat + crypto):**
    - Break down the buffer into two parts:
        - Fiat component (strict 1:1 reserves).
        - Crypto component (overcollateralized buffer).
    - Display both formulas:
        - *Fiat Coverage = Fiat Reserves ÷ Fiat-backed Supply*
        - *Crypto Buffer = Total Crypto Collateral − Circulating Supply of Crypto-backed {ASSET}*
        - *Crypto Buffer % = [(Total Crypto Collateral − Circulating Supply of Crypto-backed {ASSET}) ÷ Circulating Supply of Crypto-backed {ASSET}] × 100*
    - Discuss **dual exposure risks**: custodial failure on fiat side + volatility/undercollateralization on crypto side.

---

### 4.1.3 Custody of Reserves

Write a narrative covering:

- Identity of custodians (reference {snapshot reference}).
- Security practices followed by custodians.
- Asset segregation between issuer funds vs. user funds.

---

### 4.1.4 Attestations & Audits

Use {Proof of Asset reserves} as reference.

Write a narrative covering:

- Frequency of attestations.
- Existence of independent third-party audits.
- Whether reports are public and accessible.

---

### 4.1.5 Payment Rails

Write a narrative covering:

- Supported networks and settlement systems.
- Settlement times and reliability risks.

---

## 4.2 Governance & Control

Write a narrative explaining who has authority to make protocol changes and how accountability is enforced.

### 4.2.1 Governance Structure

Write a professional, risk-focused narrative covering:

- Centralization vs. decentralization of governance.
- Upgrade authority and decision-making processes.
- Transparency of governance decisions.
- Protections against malicious or compromised upgrades.
- Roles of third parties in governance or oversight.

---

## 4.3 Regulatory & Legal Compliance

Write a narrative introducing this subsection, focusing on {Asset Name}'s interaction with regulators, licenses held, user restrictions, AML/KYC compliance, and customer protection. Use {terms and use file name} for reference.

---

### 4.3.1 Licensing & Registrations

Write a narrative covering:

- Regulatory approvals in jurisdictions of operation.
- Licenses held (e.g., money transmitter, e-money, VASP).

---

### 4.3.2 Sanctions & AML/KYC Compliance

Write a narrative covering:

- Restricted jurisdictions.
- Blacklist/whitelist enforcement mechanisms.
- AML/KYC requirements for onboarding users.

---

### 4.3.3 User Restrictions

Write a narrative covering:

- Who can/cannot use {Asset Name}.
- Geographic restrictions, age limitations, or institutional requirements.

---

### 4.3.4 Restrictions on Illegal Use

Write a narrative covering:

- Explicit prohibitions on illicit activity (from terms of service).
- Enforcement mechanisms (e.g., blacklisting, freezing assets).

---

### 4.3.5 Customer Protection Measures

Write a narrative covering:

- Disclosures provided (reserves, audits, risks).
- Redemption rights and protections.
- Complaint resolution processes.
- Liability disclaimers and user warnings.
- Safeguards in case of issuer insolvency.
`;

export const Section4V2FrameworkGuide: RiskFrameworkSection = {
  id: "section-4-v2",
  title: "Regulation & Compliance",
  guide: `${section4V2Guide}\n\n---\n\n${GLOBAL_ANALYSIS_INSTRUCTIONS}`,
  outputType: "narrative",
};

