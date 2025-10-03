import { RiskFrameworkSection } from "./types";
import { GLOBAL_ANALYSIS_INSTRUCTIONS } from "./analysisInstructions";

// Section 1: Stablecoin Fundamentals

export interface Section1_1_1_ClassificationTableRow {
  classificationCriteria: string;
  assetDetails: string;
}

export interface Section1_1_1_Output {
  narrative: string;
  comparisonNarrative: string;
  classificationTable: Section1_1_1_ClassificationTableRow[];
}

export interface Section1_1_2_AccessTableRow {
  category: "Institutional Counterpart" | "Centralize exchanges" | "Retail swaps";
  examples: string[];
  accessType: string;
  kycRequired: string; // yes/no + type if yes
}

export interface Section1_1_2_Output {
  mintingNarrative: string;
  accessBulletPoints: {
    institutionalAccess: string;
    retailAccess: string;
  };
  mintingAccessTable: Section1_1_2_AccessTableRow[];
  fiatOnOffNarrative: string;
  fiatRamps: string[];
  geographicAccessibility: string; // one-paragraph narrative
  onboardingFrictionNarrative: string;
  onboardingFrictions: string[];
}

export interface Section1_1_3_Flowcharts {
  acquiringInstitutionalMermaid: string; // mermaid code
  acquiringRetailMermaid: string; // mermaid code
  redeemingInstitutionalMermaid: string; // mermaid code
  redeemingRetailMermaid: string; // mermaid code
}

export interface Section1_1_3_Output {
  workflowNarrative: string;
  acquiringInstitutionalNarrative: string;
  acquiringRetailNarrative: string;
  redeemingInstitutionalNarrative: string;
  redeemingRetailNarrative: string;
  flowcharts: Section1_1_3_Flowcharts;
}

export interface Section1_1_4_Output {
  reservesNarrative: string;
  reserveAssets: string[]; // names only, no amounts
}

export interface Section1_1_5_RevenueTableRow {
  key: string;
  value: string;
}

export interface Section1_1_5_AltRevenueRow {
  revenueStream: string;
  description: string;
}

export interface Section1_1_5_Output {
  feeModelNarrative: string;
  feeModelTable: Section1_1_5_RevenueTableRow[];
  altRevenueNarrative: string;
  altRevenueTable: Section1_1_5_AltRevenueRow[];
  revenueOversightExecutiveSummary: string;
  strategicValueCreationNarrative: string;
}

export interface Section1_1_6_ExecTableRow {
  founder: string;
  role: string;
  responsibilities: string;
  keyStrengths: string;
}

export interface Section1_1_6_Output {
  legalEntity: {
    fullLegalName: string;
    incorporation: string;
    dba?: string;
    mission?: string;
    profitStatus?: string;
    legalConstraints?: string;
  };
  ownershipExecutiveSummary: string;
  governanceExecutiveSummary: string;
  managementTable: Section1_1_6_ExecTableRow[];
  operationsExecutiveSummary: string;
}

export interface Section1_1_7_UpdateRow {
  date: string;
  details: string;
}

export interface Section1_1_7_Output {
  updatesNarrative: string;
  updatesTable: Section1_1_7_UpdateRow[];
}

export interface Section1_2_1_Output {
  backgroundWorkflowNarrative: string;
}

export interface Section1_2_2_Output {
  architectureMermaid: string; // mermaid code
}

export interface Section1_2_3_TokenTypeRow {
  tokenType: string;
  description: string;
}

export interface Section1_2_3_Output {
  crossChainArchitecture: string;
  bridgingProtocol: string;
  nativeChain: string;
  bridgedChainsNarrative: string;
  tokenTypeTable: Section1_2_3_TokenTypeRow[];
  lockboxRoles: string[];
  lockboxType: string;
  governanceModel: string; // e.g., multisig details
  multisigSignatureContracts?: string[];
  bridgingModel: string;
  flowControl: string;
  operationalOversightRisks: string[];
}

export interface Section1_OutputShape {
  section_1_1_1?: Section1_1_1_Output;
  section_1_1_2?: Section1_1_2_Output;
  section_1_1_3?: Section1_1_3_Output;
  section_1_1_4?: Section1_1_4_Output;
  section_1_1_5?: Section1_1_5_Output;
  section_1_1_6?: Section1_1_6_Output;
  section_1_1_7?: Section1_1_7_Output;
  section_1_2_1?: Section1_2_1_Output;
  section_1_2_2?: Section1_2_2_Output;
  section_1_2_3?: Section1_2_3_Output;
}

const section1Guide = `# SECTION 1: Stablecoin Fundamentals

## 1.1 Asset Overview

### 1.1.1 Classification and Categorization
Provide a comprehensive classification of the stablecoin, including:
- **Stablecoin Type**: (e.g., fiat-backed, crypto-backed, algorithmic, hybrid)
- **Backing Mechanism**: Detailed description of what backs the stablecoin
- **Peg Target**: What the stablecoin is pegged to (USD, EUR, basket, etc.)
- **Regulatory Status**: Current regulatory classification and compliance
- **Risk Classification**: High-level risk category compared to peers

Create a classification comparison table with criteria and asset details.

### 1.1.2 Minting and Access
Analyze how users can acquire the stablecoin:
- **Institutional Access**: How institutions can mint/acquire tokens
- **Retail Access**: How retail users can acquire tokens
- **Geographic Restrictions**: Where the stablecoin is available
- **KYC/AML Requirements**: Identity verification requirements
- **Onboarding Friction**: Barriers to entry and user experience

Include a detailed access table showing different user categories, examples, access types, and KYC requirements.

### 1.1.3 Acquisition and Redemption Workflows
Document the complete user journey:
- **Institutional Acquisition Process**: Step-by-step workflow
- **Retail Acquisition Process**: Step-by-step workflow  
- **Institutional Redemption Process**: Step-by-step workflow
- **Retail Redemption Process**: Step-by-step workflow

Create flowcharts (Mermaid format) for each workflow showing decision points, requirements, and potential failure modes.

### 1.1.4 Reserve Composition
Detail the backing assets:
- **Reserve Asset Types**: Cash, treasuries, commercial paper, etc.
- **Asset Allocation**: Percentage breakdown of reserve composition
- **Custodial Arrangements**: Who holds the reserves and how
- **Liquidity Profile**: How quickly reserves can be liquidated

### 1.1.5 Revenue Model and Fee Structure
Analyze the economic model:
- **Fee Structure**: Minting, redemption, transfer, and other fees
- **Revenue Streams**: How the issuer generates revenue
- **Alternative Revenue**: Non-fee revenue sources
- **Revenue Oversight**: Governance and transparency of revenue model
- **Strategic Value Creation**: How the model creates sustainable value

Include detailed fee tables and alternative revenue analysis.

### 1.1.6 Issuer and Governance Structure
Profile the organization behind the stablecoin:
- **Legal Entity**: Full legal name, incorporation, regulatory status
- **Ownership Structure**: Who owns and controls the entity
- **Management Team**: Key executives, roles, and backgrounds
- **Governance Model**: Decision-making processes and oversight
- **Operational Structure**: How the organization operates day-to-day

Include management team table with roles, responsibilities, and key strengths.

### 1.1.7 Recent Updates and Changes
Track recent developments:
- **Protocol Updates**: Recent changes to the stablecoin mechanism
- **Regulatory Changes**: New compliance requirements or approvals
- **Partnership Updates**: New integrations or business relationships
- **Operational Changes**: Updates to processes, custodians, or infrastructure

Include chronological table of significant updates.

## 1.2 Technical Architecture

### 1.2.1 Background Workflow
Explain the high-level technical operation:
- **System Architecture**: How the technical components work together
- **Transaction Flow**: How minting, transfers, and redemptions work technically
- **Integration Points**: How the system connects to external services
- **Operational Dependencies**: Critical technical dependencies

### 1.2.2 Architecture Diagram
Provide a comprehensive technical architecture diagram showing:
- **Smart Contracts**: Core contract components and relationships
- **External Systems**: Custodians, oracles, bridges, etc.
- **User Interfaces**: How users interact with the system
- **Data Flow**: How information moves through the system

Create a Mermaid architecture diagram.

### 1.2.3 Cross-Chain and Multi-Chain Architecture
For multi-chain stablecoins, analyze:
- **Native Chain**: Primary blockchain and why it was chosen
- **Bridged Chains**: Secondary chains and bridging mechanisms
- **Token Types**: Native vs. wrapped vs. synthetic tokens
- **Cross-Chain Security**: How security is maintained across chains
- **Governance Model**: How multi-chain governance works
- **Operational Oversight**: Monitoring and management across chains

Include token type comparison table and analysis of cross-chain risks.

---

**Risk Analysis Requirements:**
- Every technical detail must be paired with its risk implications
- Compare architecture choices to industry peers (USDC, DAI, FRAX)
- Identify single points of failure and attack vectors
- Analyze how the system behaves under stress (high redemption volume, network congestion)
- Flag any missing or unverifiable technical information
- Preserve exact subsection structure - address each numbered item separately
`;

export const Section1FrameworkGuide: RiskFrameworkSection = {
  id: "section-1",
  title: "Stablecoin Fundamentals",
  guide: `${section1Guide}\n\n---\n\n${GLOBAL_ANALYSIS_INSTRUCTIONS}`,
  outputType: "narrative",
};

