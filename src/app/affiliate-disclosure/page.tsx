export const metadata = {
  title: "Affiliate Disclosure | ManUnlocked",
  description:
    "How ManUnlocked handles affiliate links, sponsored placements, and conflicts of interest.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Affiliate Disclosure</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          ManUnlocked may earn a commission when you click certain links and sign up for a product or service.
          That does not change our editorial standards.
        </p>
        <p>
          We disclose affiliate relationships clearly, avoid hiding sponsored links inside clinical recommendations,
          and include non-affiliate options when they materially help readers make better decisions.
        </p>
      </div>
    </main>
  );
}
