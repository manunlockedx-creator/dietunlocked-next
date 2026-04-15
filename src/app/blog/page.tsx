import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "DietUnlocked Articles",
  description: "Evidence-based GLP-1 nutrition guides, comparisons, and explainers.",
};

const categoryLabels: Record<string, string> = {
  "glp1-nutrition": "GLP-1 Nutrition",
  "side-effects": "Side Effects & Fixes",
  costs: "Costs & Decisions",
};

export default function BlogPage() {
  const articles = getAllArticles().filter((article) => article.frontmatter.status === "published");

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Library</p>
        <h1 className="text-5xl font-semibold tracking-tight text-white">DietUnlocked Library</h1>
        <p className="text-xl leading-8 text-zinc-400">
          Evidence-based GLP-1 nutrition articles, practical food guidance, and decision-focused comparisons.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.length > 0 ? (
          articles.map(({ frontmatter }) => (
            <article key={frontmatter.slug} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {categoryLabels[frontmatter.category] ?? frontmatter.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{frontmatter.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{frontmatter.excerpt}</p>
              <Link href={`/${frontmatter.slug}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-300">
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/5 p-6 text-sm leading-7 text-zinc-500 md:col-span-2 xl:col-span-3">
            Published articles will appear here as the DietUnlocked library goes live.
          </div>
        )}
      </div>
    </main>
  );
}
