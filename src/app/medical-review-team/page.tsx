export const metadata = {
  title: "Medical Review Team | ManUnlocked",
  description: "How medical review works at ManUnlocked and the role of Dr. Fatimah in content review.",
};

export default function MedicalReviewTeamPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Medical Review Team</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-700">
        <p>
          ManUnlocked uses medical review to tighten diagnostic thresholds, safety language, and treatment framing on
          clinically sensitive content.
        </p>
        <p>
          Dr. Fatimah is the named medical reviewer for reviewed ManUnlocked content. Review notes stay internal,
          while the reviewer name and review date appear on published pages when applicable.
        </p>
      </div>
    </main>
  );
}
