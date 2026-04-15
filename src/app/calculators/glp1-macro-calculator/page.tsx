import type { Metadata } from "next";
import { Glp1MacroCalculator } from "@/components/glp1-macro-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Macro Calculator | DietUnlocked",
  description: "Turn calorie and protein targets into a practical GLP-1 macro split.",
};

export default function Page() {
  return <Glp1MacroCalculator />;
}
