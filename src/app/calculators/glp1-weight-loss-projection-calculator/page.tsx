import type { Metadata } from "next";
import { Glp1WeightLossProjectionCalculator } from "@/components/glp1-weight-loss-projection-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Weight Loss Projection Calculator | DietUnlocked",
  description: "Estimate realistic GLP-1 weight loss ranges by medication and timeline.",
};

export default function Page() {
  return <Glp1WeightLossProjectionCalculator />;
}
