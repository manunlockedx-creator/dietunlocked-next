import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | DietUnlocked",
  description: "How DietUnlocked handles affiliate links, sponsored placements, and conflicts of interest.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Affiliate Disclosure</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked may earn a commission when you click certain links and sign up for a product or service. That does not increase your cost, and it does not change our editorial standards.
        </p>
      </div>
    </main>
  );
}
