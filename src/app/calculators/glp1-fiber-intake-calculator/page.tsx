import type { Metadata } from "next";
import { Glp1FiberIntakeCalculator } from "@/components/glp1-fiber-intake-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Fiber Intake Calculator | DietUnlocked",
  description: "Estimate a practical fiber target for GLP-1 digestion support.",
};

export default function Page() {
  return <Glp1FiberIntakeCalculator />;
}
