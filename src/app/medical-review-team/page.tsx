import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Review Team | DietUnlocked",
  description: "How medical review works at DietUnlocked and the role of Dr. Fatimah Khan, MBBS.",
};

export default function MedicalReviewTeamPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Medical Review Team</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked uses medical review for articles that make clinical claims, discuss side effects, cover medication dosing, or give specific health recommendations. Editorial pieces, cost breakdowns, and non-clinical content do not require medical review.
        </p>

        <div className="rounded-[1.5rem] border border-black/5 bg-white p-6">
          <h2 className="text-2xl font-semibold text-zinc-950">Dr. Fatimah Khan, MBBS</h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            Dr. Fatimah Khan is the named medical reviewer for reviewed DietUnlocked content. Her review is used to tighten clinical framing, side-effect language, and safety guidance before publication where medical review is required.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            DietUnlocked uses the same Fiverr medical-review workflow already established for ManUnlocked. When an article is medically reviewed, the published frontmatter is updated to show <span className="font-semibold text-zinc-900">Dr. Fatimah Khan, MBBS</span> and the review date.
          </p>
        </div>
      </div>
    </main>
  );
}
