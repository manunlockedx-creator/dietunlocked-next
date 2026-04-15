import type { Metadata } from "next";
import { Glp1ProteinCalculator } from "@/components/glp1-protein-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Protein Requirement Calculator | DietUnlocked",
  description: "Estimate a practical protein target for people using GLP-1 medications.",
};

export default function Page() {
  return <Glp1ProteinCalculator />;
}
