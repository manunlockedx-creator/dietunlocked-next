import { TdeeCalculator } from "@/components/tdee-calculator";
export const metadata = { title: "TDEE Calculator for Men | ManUnlocked", description: "Estimate maintenance calories using a men's TDEE calculator built for practical body composition decisions." };
export default function Page() { return <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16"><TdeeCalculator /></main>; }
