import type { Metadata } from "next";
import { Glp1InsuranceEligibilityChecker } from "@/components/glp1-insurance-eligibility-checker";

export const metadata: Metadata = {
  title: "GLP-1 Insurance Eligibility Checker | DietUnlocked",
  description: "Estimate whether you may meet common GLP-1 insurance coverage criteria.",
};

export default function Page() {
  return <Glp1InsuranceEligibilityChecker />;
}
