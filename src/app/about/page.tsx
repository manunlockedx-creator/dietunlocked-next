import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DietUnlocked",
  description: "Why DietUnlocked exists and how it approaches GLP-1 nutrition publishing.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">About DietUnlocked</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked exists because most GLP-1 nutrition advice online is either too generic, too salesy, or too thin to be useful when you&apos;re actually trying to eat on Ozempic, Wegovy, Zepbound, or Mounjaro.
        </p>
        <p className="text-lg leading-8 text-zinc-600">
          We&apos;re building a practical library of calculators, explainers, comparison pages, and medically reviewed nutrition content designed for the real questions people have once the prescription is already in their hand.
        </p>
      </div>
    </main>
  );
}
