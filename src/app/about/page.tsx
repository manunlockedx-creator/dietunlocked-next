export const metadata = {
  title: "About ManUnlocked",
  description: "Why ManUnlocked exists and how it approaches evidence, transparency, and men's health publishing.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">About ManUnlocked</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-400">
        <p>
          ManUnlocked exists because too much men&apos;s health content is built backward. The article comes second,
          the affiliate angle comes first, and the reader gets whatever is left over.
        </p>
        <p>
          We&apos;re building something stricter: evidence-first publishing, transparent conflicts, practical decision tools,
          and plain-English guidance that respects how men actually make health decisions.
        </p>
      </div>
    </main>
  );
}
