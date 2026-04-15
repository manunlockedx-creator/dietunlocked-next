import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DietUnlocked",
  description: "How to contact DietUnlocked for editorial questions, corrections, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Contact</h1>
        <p className="text-lg leading-8 text-zinc-400">
          For editorial questions, correction requests, or partnership inquiries, contact the DietUnlocked editorial team.
        </p>
      </div>
    </main>
  );
}
