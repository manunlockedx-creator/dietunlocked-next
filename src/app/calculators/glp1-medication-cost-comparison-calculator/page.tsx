import type { Metadata } from "next";
import { Glp1MedicationCostComparisonCalculator } from "@/components/glp1-medication-cost-comparison-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Medication Cost Comparison Calculator | DietUnlocked",
  description: "Compare telehealth, insurance, and out-of-pocket GLP-1 cost scenarios.",
};

export default function Page() {
  return <Glp1MedicationCostComparisonCalculator />;
}
