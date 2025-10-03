import { RiskFrameworkSection } from "./types";
import { GLOBAL_ANALYSIS_INSTRUCTIONS } from "./analysisInstructions";

// Section 1: Stablecoin Fundamentals (V2)

const section1V2Guide = `# SECTION 1: Stablecoin Fundamentals

Write a short narrative about what we are going to discuss in this section and the risk we could find in this topic.

## 1.1 Description of the Stablecoin

### 1.1.1 Stablecoin Classification

Write a structured risk analysis summary in paragraph form of {Asset Name}, presented in the style of a financial analyst.

- Begin by categorizing the stablecoin model (fiat-backed, crypto-backed, or algorithmic).
- Clearly describe the reserve composition and collateral framework.
- Assess the implications for regulatory compliance and institutional adoption.
- Highlight key strengths (such as simplicity, transparency, or stability) in plain, direct language.
- Briefly outline the main risks (custody, concentration, governance) without relying on technical jargon.
- Maintain a concise, professional, and analytical tone, avoiding promotional or marketing language.

---

### {Asset Name} Classification Snapshot

Use this as the reference: {snapshot reference}. Present findings in a **table format** with the following columns:

- **Classification Criteria**
- **{Asset Name} Details**

**Rows:**

- **Primary Type**
    
    Specify the classification: Fiat-backed, Crypto-backed, or Algorithmic.
    
- **Backing Ratio**
    
    State the collateralization level, such as 1:1 USD or percentage-backed.
    
- **Reserve Assets**
    
    List the underlying assets (e.g., cash, U.S. Treasuries, crypto collateral). Include links where available.
    
- **Peg Mechanism**
    
    Explain the peg logic (e.g., fixed to USD, managed basket).
    
- **Redemption Model**
    
    Describe redemption and withdrawal mechanics, including relevant partners.
    
- **{Asset Name} Custodian**
    
    Identify the custodial institutions holding reserves. Include links where available.
    
- **{Asset Name} Asset Manager**
    
    Specify the entity managing reserves or the protocol.
    
- **Governance Structure**
    
    Indicate whether governance is centralized, DAO-based, or another model.
    
- **Regulatory Approach**
    
    Describe licensing, compliance practices, and oversight measures.
    

---

### Comparative Note

Conclude with a simple comparison to other {Primary Type} stablecoins.

### 1.1.2 User Adoption & Accessibility

- **Minting Eligibility**
    
    Write a narrative explaining who is able to mint the stablecoin. If there are products or tools offered by the issuer for easier swaps, include them.
    
    **Bullet Points (only these two):**
    
    - Institutional Access
    - Retail Access
- **Minting Platforms / Access Points & KYC Requirements**
    
    Write a narrative describing where and how minting occurs.
    
    Then create a table with the following columns:
    
    - Category
    - Examples (bullet points)
    - Access Type
    - KYC Required (be precise about requirements)
    
    **Rows:**
    
    - Institutional Counterpart
    - Centralized Exchanges
    - Retail Swaps
- **Fiat On/Off Ramps**
    
    Write a short narrative about fiat on/off ramp access.
    
    Provide a bullet-point list of the ramps.
    
- **Geographic Accessibility**
    
    Write a one-paragraph narrative (executive summary style) describing whether the stablecoin can be used globally or is restricted by regions or geopolitical controls.
    
- **Onboarding Frictions**
    
    Write a narrative identifying major friction points for onboarding.
    
    Follow with a bullet-point list of the significant frictions (professional but simple tone).
    

---

### 1.1.3 User Flow

- Write a simple narrative about the workflow design for acquiring and redeeming {Asset}, both via Direct Mint and Secondary Market.

**Acquiring {Asset}**

- **Institutional User**
    - Write a short narrative.
    - Provide a flowchart using **mermaid code**:
        
        \`\`\`mermaid
        flowchart LR
        A[KYC Verification] --> B[Deposit USD to {Asset Manager}] --> C[{Issuer} Smart Contract Mint] --> D[Token Distribution]
        
        \`\`\`
        
- **Retail User**
    - Write a short narrative.
    - Provide a flowchart using **mermaid code**:
        
        \`\`\`mermaid
        flowchart LR
        A[User sends swap request using crypto tokens] --> B[DEX/CEX smart contract executes the trade] --> C[User receives {Asset}]
        
        \`\`\`
        

**Redeeming {Asset}**

- **Institutional User**
    - Write a short narrative.
    - Provide a flowchart using **mermaid code**:
        
        \`\`\`mermaid
        flowchart LR
        A[Redemption Request] --> B[{Asset} Collected] --> C[{Issuer} Smart Contract Burn Tokens] --> D[Equivalent USD Released]
        
        \`\`\`
        
- **Retail User**
    - Write a short narrative.
    - Provide a flowchart using **mermaid code**:
        
        \`\`\`mermaid
        flowchart LR
        A[User sends swap request using {Asset}] --> B[DEX/CEX smart contract executes the trade] --> C[User receives crypto tokens]
        
        \`\`\`
        

---

### 1.1.4 Reserves Overview

- Write a simple narrative about the {Asset} reserves.
- Display the reserve assets as a bullet-point list (do not include amounts).

---

### 1.1.5 Fees and Business Model

- **Fee Model**
    
    Write a simple narrative about the fee model.
    
    Create a table to display fees.
    
- **Alternative Revenue Streams**
    
    Write a simple narrative about other revenue streams.
    
    Create a table with:
    
    - Column 1: Revenue Stream
    - Column 2: Description (short but informative)
- **Executive Summary**
    
    Write an executive summary covering:
    
    - Revenue Oversight
    - Revenue Allocation and Usage
    - Partner Revenue Sharing
    - Corporate Revenue Usage
- **Strategic Value Creation**
    
    Write a short narrative paragraph comparing the business model with peers and highlighting its strategic positioning.
    

---

### 1.1.6 Ecosystem & Governance Overview

- **Legal Entity & Incorporation**
    
    Fill in the following placeholders:
    
    - Full Legal Name: {Company Name}
    - Incorporation (State/Country & Type): [e.g., Delaware C-Corp]
    - DBA / Operating Name: [If applicable]
    - Mission / Purpose: [Brief statement]
    - Profit Status: [For-profit, non-profit, etc.]
    - Legal Constraints / Charter Obligations: [Key rules affecting governance, revenue, operations]
- **Ownership & Beneficiaries**
    
    Write an executive summary (not bullet style) about:
    
    - Ownership Type
    - Economic Beneficiaries
    - Revenue/Surplus Policy
    - Cap Table Details
- **Governance & Oversight**
    
    Write an executive summary (not bullet style) about:
    
    - Board/Directors
    - Governance Obligations
    - Decision-making Structure
    - Charter References / Key Articles
- **Management & Operations**
    
    Create a **Management & Operations table**
    
    The table must include:
    
    - Founder
    - Role
    - Responsibilities
    - Key Strengths
    
    Then write an executive summary about:
    
    - Day-to-Day Management
    - External Oversight / Audits

---

### 1.1.7 History

- Write a simple narrative about the update history of {Asset}.
- Create a table with the following columns:
    - Date
    - Update Details

---

## 1.2 System Architecture Overview

### 1.2.1 Background Workflow

- Write a technical narrative expanding on the user flow from 1.1.3.
- Cover backend processes:
    - Fiat custody
    - Reserve fund operations
    - Mint/burn logic
    - Settlement confirmation
- Include redemption workflow (burn {Asset} → release fiat).

---

### 1.2.2 Architecture Diagram

- Create a flowchart of the background workflow (1.2.1) using **mermaid code**.

---

### 1.2.3 Key Technical Components

For each heading below, write a structured paragraph with a **professional, expert, and risk-focused tone**.

- **Cross-chain Architecture**
    - Describe the bridging protocol used (e.g., Wormhole, Portal).
    - Identify the native chain where {Asset} is minted.
    - Explain bridging to other chains.
    - Reference developer docs for token type/behavior.
    - Provide a table listing token types with short descriptions.
- **Lockbox & Custodial Mechanisms**
    - Describe {Asset} Lockbox roles.
    - State lockbox type.
    - Explain smart contract governance (e.g., multisig).
    - If multisig, list contracts required for signatures (bullet list).
- **Bridging Models & Flow Control**
    - Describe the bridging model used.
    - Explain the flow control mechanisms.
- **Operational Oversight & Risk Considerations**
    - Write a narrative, then provide a bullet-point list of key oversight and risk considerations.
`;

export const Section1V2FrameworkGuide: RiskFrameworkSection = {
  id: "section-1-v2",
  title: "Stablecoin Fundamentals",
  guide: `${section1V2Guide}\n\n---\n\n${GLOBAL_ANALYSIS_INSTRUCTIONS}`,
  outputType: "narrative",
};

