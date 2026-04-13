import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export default function Home() {
  const featuredArticle = getAllArticles()[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20">
      <section className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Evidence-first men&apos;s health
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Men&apos;s health guidance without the recycled garbage.
          </h1>
          <p className="max-w-2xl text-xl leading-9 text-zinc-600">
            ManUnlocked is built for men who want clearer answers on testosterone,
            telehealth, labs, supplements, and sexual health without being shoved
            through a lazy affiliate funnel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Read the library
            </Link>
            <Link
              href={`/${featuredArticle.frontmatter.slug}`}
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-950"
            >
              Start with Article 1
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Live now
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-950">
            {featuredArticle.frontmatter.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            {featuredArticle.frontmatter.excerpt}
          </p>
          <Link
            href={`/${featuredArticle.frontmatter.slug}`}
            className="mt-6 inline-flex text-sm font-semibold text-amber-700"
          >
            Read article →
          </Link>
        </div>
      </section>
    </main>
  );
}
