import { LowTSymptomChecker } from "@/components/low-t-symptom-checker";
export const metadata = { title: "Low T Symptom Checker | ManUnlocked", description: "Score the most common low testosterone symptoms and see whether proper testing is worth your next move." };
export default function Page() { return <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16"><LowTSymptomChecker /></main>; }
