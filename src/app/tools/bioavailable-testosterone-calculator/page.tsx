import { BioavailableTestosteroneCalculator } from "@/components/bioavailable-testosterone-calculator";
export const metadata = { title: "Bioavailable Testosterone Calculator | ManUnlocked", description: "Estimate bioavailable testosterone using total T, SHBG, and albumin." };
export default function Page() { return <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16"><BioavailableTestosteroneCalculator /></main>; }
