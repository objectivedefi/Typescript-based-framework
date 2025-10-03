import { RiskFrameworkSection } from "./types";
import { GLOBAL_ANALYSIS_INSTRUCTIONS } from "./analysisInstructions";

// Section 3: On-chain Management (V2)

const section3V2Guide = `# SECTION 3: On-chain Management

Write a short narrative introducing this section. Explain that it evaluates how {Asset Name} is managed at the smart contract level, the operational mechanics underpinning minting, burning, and bridging, and the potential risks that arise from these design choices.

---

## 3.1 Operational Overview

### 3.1.1 Smart Contract Structure

Create an **executive summary** with a professional and risk-focused tone covering the following details:

- **Contract addresses:** {Contract address}
- **Proxy admin address owner:** {proxy admin address owner}
- **Chain nativity:** {Chain Nativity}
- **Upgradeability mechanism:** {Upgrade mechanism}

Then write a **separate narrative** about the **Mint/Burn Flow** at the smart contract level.

Include the following details:

- **Minter:** {Address}
- **Burner:** {Address}

---

Create another **executive summary** covering:

- **Chain deployment details**: Quick description + bullet list of blockchains where {Asset Name} is deployed or available.
- **Bridging protocol:** {Bridging protocol} → Provide a short paragraph describing how the protocol works and the risks involved with using it.

---

### 3.1.2 Smart Contract Controls

Write a professional, expert narrative describing the following:

- **Smart Contract management type:** {Smart Contract management}
- **Lockboxes:** {lock boxes}
- **Address Roles & Permissions:** Provide a short description of each role with the following format:

\`Role: {Smart Contract address}\`

---

### 3.1.3 Dependencies

Write a short narrative identifying whether {Asset Name} has reliance on third parties or other assets. Be precise and concise without excessive jargon.

---

### 3.1.4 Operational Security Practices

**Incident Response**

- Describe how {Smart Contract Management} roles are used to respond to incidents.
- Summarize the **history of prior incidents** and how they were handled.
    - Incident references: {History of prior events reference}

---

### 3.1.5 Oracle Mechanism

Write a narrative identifying which oracles are used for pricing and collateral valuation, and assess manipulation resistance.

- If **fiat-backed stablecoin**: Emphasize reliance on **off-chain institutional procedures** for reserve and price management rather than decentralized oracles. Clarify that peg stability is supported by attestations and audits.
- If **crypto- or hybrid-backed stablecoin**: Describe how **decentralized oracle networks** (e.g., Chainlink) provide real-time collateral valuation and liquidation logic. Highlight strengths (automation, transparency) and risks (manipulation, latency, oracle dependency).

---

## 3.2 Development and Security Metrics

Write a short narrative introducing this section. Clarify that it focuses on evaluating technical maturity, development activity, documentation transparency, and the robustness of security practices. Emphasize risks such as poor maintenance, outdated audits, or lack of disclosure.

---

### 3.2.1 Development Activity

- Leave a placeholder for a graph.
- Write a description interpreting development activity trends and associated risks.

---

### 3.2.2 Number of Active Developers

- Leave a placeholder for a graph.
- Write a description about the development team's size and implications for project sustainability.

---

### 3.2.3 Documentation Quality

Provide the following links:

- Developer docs: {developer docs}
- GitHub: {GitHub link}

Assess documentation quality using this framework:

1. **Technical Depth (30%)**
    - 5 → Includes contract specs, role definitions, mint/burn flows, upgradeability, governance.
    - 3 → Covers general architecture but lacks detailed flows/governance.
    - 1 → Marketing-level docs only.
2. **Completeness & Coverage (20%)**
    - 5 → Covers all major components, version history.
    - 3 → Partial coverage.
    - 1 → Fragmented or incomplete.
3. **GitHub Repository Transparency (20%)**
    - 5 → Public repo, contracts, commits, release tags, comments, active maintenance.
    - 3 → Repo exists but incomplete/stale.
    - 1 → Repo private/absent.
    - 0 → No repo.
4. **Accessibility & Clarity (10%)**
    - 5 → Clear, structured, multi-audience, with examples/diagrams.
    - 3 → Readable but incomplete for non-developers.
    - 1 → Hard to navigate.
5. **Maintenance & Updating (10%)**
    - 5 → Updated alongside upgrades, timestamps visible.
    - 3 → Exists but lags recent changes.
    - 1 → Outdated.
6. **Independent Verification & Audit Alignment (10%)**
    - 5 → Docs align with on-chain deployments and audits.
    - 3 → Some alignment, with gaps.
    - 1 → No link between docs, contracts, and audits.

**Composite Scoring**

- 4.0–5.0 → Strong Documentation
- 3.0–3.9 → Adequate
- 2.0–2.9 → Weak
- 0–1.9 → High Risk

---

### 3.2.4 Upgrade Frequency

- Leave space for a description of upgrade cadence, with risk commentary.

---

### 3.2.5 Smart Contract Audits

Write a professional risk-focused paragraph covering:

- Whether audits exist
- Whether they are updated
- Who conducted them
- Scope of the audits
- Audit dates

---

### 3.2.6 Known Vulnerabilities Count

Write a professional risk-focused paragraph discussing:

- Common issues identified during audits
- Their severity
- Whether they were remediated

---

### 3.2.7 Bug Bounty Program Size

If available, provide details. If none → "No information available."

---

### 3.2.8 Historical Downtime

If available, provide details. If none → "No information available."

---

### 3.2.9 Time-to-Patch Metric

Summarize the average time taken to patch vulnerabilities.

If no data is available → "No information available."
`;

export const Section3V2FrameworkGuide: RiskFrameworkSection = {
  id: "section-3-v2",
  title: "On-chain Management",
  guide: `${section3V2Guide}\n\n---\n\n${GLOBAL_ANALYSIS_INSTRUCTIONS}`,
  outputType: "narrative",
};

