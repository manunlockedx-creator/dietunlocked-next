export const metadata = {
  title: "Contact | ManUnlocked",
  description: "How to contact ManUnlocked for editorial questions, corrections, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Contact</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          For editorial questions, correction requests, or partnership inquiries, contact the ManUnlocked editorial
          team through the site&apos;s primary support channel.
        </p>
        <p>
          If you are reporting a factual error, include the page URL, the sentence in question, and the supporting
          evidence.
        </p>
      </div>
    </main>
  );
}
