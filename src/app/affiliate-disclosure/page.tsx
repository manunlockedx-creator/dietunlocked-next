import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | DietUnlocked",
  description: "How DietUnlocked handles affiliate links, sponsored placements, and conflicts of interest.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Affiliate Disclosure</h1>
        <p className="text-lg leading-8 text-zinc-400">
          DietUnlocked may earn a commission when you click certain links and sign up for a product or service. That does not increase your cost, and it does not change our editorial standards.
        </p>
      </div>
    </main>
  );
}
