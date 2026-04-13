import { TestosteroneByAgeCalculator } from "@/components/testosterone-by-age-calculator";
export const metadata = { title: "Testosterone by Age Calculator | ManUnlocked", description: "See where your testosterone roughly falls against age-band reference ranges." };
export default function Page() { return <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16"><TestosteroneByAgeCalculator /></main>; }
