import type { Metadata } from "next";
import Link from "next/link";

const calculators = [
  {
    href: "/calculators/glp1-calorie-calculator",
    title: "GLP-1 Calorie Calculator",
    description: "Estimate a practical calorie target while using Ozempic, Wegovy, Zepbound, or Mounjaro.",
  },
  {
    href: "/calculators/glp1-protein-calculator",
    title: "GLP-1 Protein Requirement Calculator",
    description: "Set a protein target designed to protect lean mass when appetite is low.",
  },
  {
    href: "/calculators/glp1-medication-cost-comparison-calculator",
    title: "GLP-1 Medication Cost Comparison Calculator",
    description: "Compare insurance, telehealth, and cash-pay GLP-1 cost scenarios.",
  },
  {
    href: "/calculators/glp1-weight-loss-projection-calculator",
    title: "GLP-1 Weight Loss Projection Calculator",
    description: "Estimate realistic weight loss ranges by medication and timeline.",
  },
  {
    href: "/calculators/glp1-macro-calculator",
    title: "GLP-1 Macro Calculator",
    description: "Turn calorie and protein targets into a practical macro split.",
  },
  {
    href: "/calculators/glp1-hydration-calculator",
    title: "GLP-1 Hydration Calculator",
    description: "Estimate a hydration target when thirst signals feel unreliable.",
  },
  {
    href: "/calculators/glp1-fiber-intake-calculator",
    title: "GLP-1 Fiber Intake Calculator",
    description: "Estimate a fiber target to support digestion and reduce constipation risk.",
  },
  {
    href: "/calculators/glp1-insurance-eligibility-checker",
    title: "GLP-1 Insurance Eligibility Checker",
    description: "Estimate whether you may meet common GLP-1 coverage criteria.",
  },
] as const;

export const metadata: Metadata = {
  title: "Calculators | DietUnlocked",
  description: "Calculator hub for GLP-1 nutrition, protein, hydration, cost, and planning tools.",
};

export default function CalculatorsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Calculators</p>
        <h1 className="text-5xl font-semibold tracking-tight text-white">GLP-1 tools that do real work</h1>
        <p className="text-xl leading-8 text-zinc-400">
          Use the tool you need now, or move through them in sequence if you&apos;re trying to make a smarter nutrition, cost, or medication-support decision.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {calculators.map((calculator) => (
          <article key={calculator.href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">{calculator.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{calculator.description}</p>
            <Link href={calculator.href} className="mt-4 inline-flex text-sm font-semibold text-emerald-300">
              Open calculator →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
