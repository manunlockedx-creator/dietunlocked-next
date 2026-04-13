import { FreeTestosteroneCalculator } from "@/components/free-testosterone-calculator";

export const metadata = {
  title: "Free Testosterone Calculator | ManUnlocked",
  description:
    "Estimate free testosterone using total testosterone, SHBG, and albumin with the Vermeulen equation.",
};

export default function FreeTestosteroneCalculatorPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Tools</p>
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-950">
          Free Testosterone Calculator
        </h1>
        <p className="text-xl leading-8 text-zinc-600">
          Total testosterone can look normal while free testosterone still comes in low enough to explain symptoms.
          This calculator gives you a cleaner estimate using SHBG and albumin instead of total T alone.
        </p>
      </div>
      <FreeTestosteroneCalculator />
    </main>
  );
}
