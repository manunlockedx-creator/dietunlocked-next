import Link from "next/link";

const tools = [
  {
    href: "/calculators/free-testosterone-calculator",
    title: "Free Testosterone Calculator",
    description: "Estimate free testosterone from total T, SHBG, and albumin using the Vermeulen equation.",
  },
  {
    href: "/calculators/low-t-symptom-checker",
    title: "Low T Symptom Checker",
    description: "Score the most common symptoms and see whether proper testing is worth the next step.",
  },
  {
    href: "/calculators/trt-cost-calculator",
    title: "TRT Cost Calculator",
    description: "Compare the real annual cost of TRT once labs, meds, and follow-ups are included.",
  },
  {
    href: "/calculators/bioavailable-testosterone-calculator",
    title: "Bioavailable Testosterone Calculator",
    description: "Estimate bioavailable testosterone when total T alone is not telling the full story.",
  },
  {
    href: "/calculators/testosterone-by-age-calculator",
    title: "Testosterone by Age Calculator",
    description: "See where your total testosterone roughly falls against age-band reference ranges.",
  },
  {
    href: "/calculators/tdee-calculator-men",
    title: "TDEE Calculator (Men’s Edition)",
    description: "Estimate maintenance calories and use it to guide fat loss or lean gain decisions.",
  },
];

export const metadata = {
  title: "Calculators | ManUnlocked",
  description: "Calculator hub for testosterone, TRT cost, symptoms, and body composition calculators.",
};

export default function ToolsHubPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Calculators</p>
        <h1 className="text-5xl font-semibold tracking-tight text-white">Every calculator in one place.</h1>
        <p className="text-xl leading-8 text-zinc-400">Use the tool you need now, or move through them in sequence if you’re trying to make a smarter testosterone or body-composition decision.</p>
      </div>
      <div className="mt-10 grid gap-5">
        {tools.map((tool) => (
          <article key={tool.href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">{tool.title}</h2>
            <p className="mt-3 text-base leading-7 text-zinc-400">{tool.description}</p>
            <Link href={tool.href} className="mt-4 inline-flex text-sm font-semibold text-amber-400">Open calculator →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
