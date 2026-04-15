import type { Metadata } from "next";
import { Glp1CalorieCalculator } from "@/components/glp1-calorie-calculator";

export const metadata: Metadata = {
  title: "GLP-1 Calorie Calculator | DietUnlocked",
  description: "Estimate a practical calorie target for GLP-1 weight loss support.",
};

export default function Page() {
  return <Glp1CalorieCalculator />;
}
