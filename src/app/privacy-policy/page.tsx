import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DietUnlocked",
  description: "How DietUnlocked handles analytics, form submissions, and reader privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">Privacy Policy</h1>
        <p className="text-lg leading-8 text-zinc-600">
          DietUnlocked collects only the information needed to run the site, measure performance, and process voluntary email signups. A fuller policy will be published before launch.
        </p>
      </div>
    </main>
  );
}
