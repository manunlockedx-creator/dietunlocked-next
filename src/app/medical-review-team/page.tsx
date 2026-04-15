import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Review Team | DietUnlocked",
  description: "How medical review will work at DietUnlocked.",
};

export default function MedicalReviewTeamPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Medical Review Team</h1>
        <p className="text-lg leading-8 text-zinc-400">
          DietUnlocked is being set up to publish medically reviewed GLP-1 nutrition content. Reviewer bios and review standards will appear here once the review team is finalized.
        </p>
      </div>
    </main>
  );
}
