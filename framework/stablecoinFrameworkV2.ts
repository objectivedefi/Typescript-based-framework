import { RiskAssessmentFramework } from "./types";
import { Section1V2FrameworkGuide } from "./section1_v2";
import { Section3V2FrameworkGuide } from "./section3_v2";
import { Section4V2FrameworkGuide } from "./section4_v2";
import { Section5V2FrameworkGuide } from "./section5_v2";

export const StablecoinFrameworkV2: RiskAssessmentFramework = {
  id: "stablecoin-framework-v2",
  title: "Stablecoin Risk Assessment Framework V2",
  sections: [
    Section1V2FrameworkGuide,
    Section3V2FrameworkGuide,
    Section4V2FrameworkGuide,
    Section5V2FrameworkGuide,
  ],
};

