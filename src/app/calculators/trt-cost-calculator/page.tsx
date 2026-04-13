import { TrtCostCalculator } from "@/components/trt-cost-calculator";
export const metadata = { title: "TRT Cost Calculator | ManUnlocked", description: "Estimate real TRT cost once labs, meds, and follow-up costs are included." };
export default function Page() { return <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16"><TrtCostCalculator /></main>; }
