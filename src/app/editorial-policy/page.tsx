import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy | DietUnlocked",
  description: "How DietUnlocked researches, writes, reviews, and updates GLP-1 nutrition content.",
};

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Editorial Policy</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked content is being built around a research-first workflow, human voice standards, information gain checks, and medical review where appropriate.
        </p>
      </div>
    </main>
  );
}
