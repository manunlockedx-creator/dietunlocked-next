import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer | DietUnlocked",
  description: "Important medical disclaimer for all educational content published on DietUnlocked.",
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Medical Disclaimer</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked publishes educational content only. Nothing on this site is medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting, stopping, or changing a medication, diet, or treatment plan.
        </p>
      </div>
    </main>
  );
}
