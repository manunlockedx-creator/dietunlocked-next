import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata = {
  title: "ManUnlocked Articles",
  description: "Evidence-first guides, reviews, and explainers for men navigating TRT, labs, supplements, and modern telehealth.",
};

export default function BlogPage() {
  const articles = getAllArticles().filter(
    (article) => article.frontmatter.status === "published",
  );

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          ManUnlocked Library
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950">
          Articles that respect your time and your intelligence.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          No recycled listicles, no anonymous clinic advertorials, no fake certainty.
          Just practical guidance built around evidence, tradeoffs, and real decisions.
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {articles.map(({ frontmatter }) => (
          <article key={frontmatter.slug} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">{frontmatter.publishDate}</p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-950">
              <Link href={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-600">{frontmatter.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
