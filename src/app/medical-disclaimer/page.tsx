export const metadata = {
  title: "Medical Disclaimer | ManUnlocked",
  description: "Important medical disclaimer for all educational content published on ManUnlocked.",
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Medical Disclaimer</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          ManUnlocked publishes educational content only. Nothing on this site is medical advice, diagnosis,
          or treatment.
        </p>
        <p>
          Always bring lab interpretation, symptoms, treatment decisions, and medication questions to a licensed
          healthcare professional who knows your history.
        </p>
      </div>
    </main>
  );
}
