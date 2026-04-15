import type { Metadata } from "next";
import { Glp1HydrationCalculator } from "@/components/glp1-hydration-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Hydration Calculator | DietUnlocked",
  description: "Estimate a hydration target for people using GLP-1 medications.",
};

export default function Page() {
  return <Glp1HydrationCalculator />;
}
