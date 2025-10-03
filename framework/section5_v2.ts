import { RiskFrameworkSection } from "./types";
import { GLOBAL_ANALYSIS_INSTRUCTIONS } from "./analysisInstructions";

// Section 5: Risk Assessment Framework (V2)

const section5V2Guide = `# SECTION 5: Risk Assessment Framework

This section evaluates the principal risks that may undermine the stability, credibility, and resilience of **{Asset Name}**. Each risk dimension is scored using a standardized rubric, with higher scores reflecting greater vulnerability. Stress scenarios are considered to test resilience under adverse conditions. The resulting composite rating provides a holistic view of {Asset Name}'s risk posture relative to peers.

---

## 5.1 Reserve & Collateralization Risk (Weight: 30%)

- **Findings**:
    
    {Asset Name} holds reserves of {Reserve Value/Composition} against a circulating supply of {Supply Value}, producing a **collateral buffer of {X%}**.
    
    In comparison, peers maintain buffers ranging {Peer Range} (e.g., USDC ~100%, DAI >130%).
    
- **Stress Scenario**:
    
    If **{Y% of supply}** were redeemed within 24 hours, reserves would {remain sufficient / fall short / require intervention}.
    
- **Scoring Rubric**:
    - 1 = Fully verifiable reserves ≥100%, diversified custodians, frequent attestations.
    - 3 = 90–100% backing, reliance on limited custodians, weaker attestations.
    - 5 = <90% backing or unverifiable reserves.

**Risk Score: {1–5} → {Rationale}**

---

## 5.2 Redemption Mechanism Risk (Weight: 20%)

- **Findings**:
    
    Redemptions depend on {Mechanism: fiat rails, on-chain contracts, intermediaries}. Processing speed is influenced by {banking hours / smart contract efficiency / third-party settlement}. Transparency is {Strong/Moderate/Weak}.
    
- **Stress Scenario**:
    
    If {custodian freeze / contract malfunction / banking outage}, redemptions could {face delays / halt entirely}, heightening peg slippage.
    
- **Scoring Rubric**:
    - 1 = Real-time, automated, and transparent redemption with minimal friction.
    - 3 = Dependent on custodians or fiat rails with moderate delays.
    - 5 = Opaque, discretionary, or easily suspended redemptions.

**Risk Score: {1–5} → {Rationale}**

---

## 5.3 Run Risk & Liquidity Depth (Weight: 20%)

- **Findings**:
    
    Liquidity is concentrated in {Top Pools}, with depth measured at {Value}, compared to {Peer Value} for peers. A {1m trade} would incur slippage of {X%}. Pool and venue diversification is {High/Low}.
    
- **Stress Scenario**:
    
    If {Y% of supply} is rapidly exited, slippage could widen to {Z%}. A depeg of paired stablecoins would further degrade liquidity.
    
- **Scoring Rubric**:
    - 1 = Broad, deep liquidity across major CEX/DEXs, slippage <0.5%.
    - 3 = Concentrated liquidity, moderate depth, slippage 1–2%.
    - 5 = Shallow liquidity, slippage >2%, reliant on few venues.

**Risk Score: {1–5} → {Rationale}**

---

## 5.4 Governance & Centralization Risk (Weight: 15%)

- **Findings**:
    
    Governance model = {proxy-admin / multi-sig / DAO}. Key decision-making authority lies with {Entity/Key Holders}. Decentralization is assessed as {High/Medium/Low}.
    
- **Stress Scenario**:
    
    If {admin key compromise / governance failure / regulatory freeze}, outcomes may include {unlimited minting / halted redemptions / reputational loss}.
    
- **Scoring Rubric**:
    - 1 = DAO or multi-sig with strong checks and high transparency.
    - 3 = Hybrid model with partial transparency and concentrated authority.
    - 5 = Centralized control with minimal oversight, single point of failure.

**Risk Score: {1–5} → {Rationale}**

---

## 5.5 Compliance & Regulatory Risk (Weight: 15%)

- **Findings**:
    
    Issuer jurisdiction = {Country}. Licensing status = {None/Partial/Full}. Attestations performed by {Auditor/Issuer}. Relative to peers (e.g., Circle, Paxos), compliance posture is {Stronger/Comparable/Weaker}.
    
- **Stress Scenario**:
    
    In the event of {regulatory enforcement / exchange delisting / licensing revocation}, adoption and liquidity could {shrink / collapse}.
    
- **Scoring Rubric**:
    - 1 = Fully licensed and regulated with independent audits.
    - 3 = Partial licensing, self-attestation, or regulatory ambiguity.
    - 5 = Unlicensed, no audits, high regulatory exposure.

**Risk Score: {1–5} → {Rationale}**

---

## 5.6 Composite Risk Rating

| Dimension | Weight | Score (1–5) | Weighted Score |
| --- | --- | --- | --- |
| Reserve & Collateralization | 30% | {X} | {X × 0.30} |
| Redemption Mechanism | 20% | {X} | {X × 0.20} |
| Run Risk & Liquidity Depth | 20% | {X} | {X × 0.20} |
| Governance & Centralization | 15% | {X} | {X × 0.15} |
| Compliance & Regulatory | 15% | {X} | {X × 0.15} |
| **Composite Weighted Score** | 100% | **{X}** | **{Sum}** |

- **Interpretation**:
    - **1.0–1.9 = Low Risk**
    - **2.0–3.4 = Medium Risk**
    - **3.5–5.0 = High Risk**

---

## 5.7 Analyst Conclusion

The analysis shows that **{Asset Name}** benefits from **{strengths — e.g., strong collateralization discipline, transparent attestations, healthy liquidity positioning}**, supporting its role as a credible stablecoin. At the same time, **{weaknesses — e.g., governance concentration, reliance on custodians, unclear licensing}** introduce non-trivial vulnerabilities.

Relative to its closest peers (**{e.g., USDC, DAI, USDT}**), the risk profile is **{more robust / largely aligned / materially weaker}**, particularly when stress-tested against shocks such as **{rapid redemption events, custodian disruption, peer depeg scenarios}**. In these circumstances, resilience is projected as **{stable / moderately pressured / fragile}**.

**Overall Risk Rating: {Low/Medium/High}**, with the forward-looking outlook considered **{Stable / Watch / Negative}** pending changes in reserves transparency, governance practices, or regulatory developments.
`;

export const Section5V2FrameworkGuide: RiskFrameworkSection = {
  id: "section-5-v2",
  title: "Risk Assessment Framework",
  guide: `${section5V2Guide}\n\n---\n\n${GLOBAL_ANALYSIS_INSTRUCTIONS}`,
  outputType: "narrative",
};

