import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata = {
  title: "ManUnlocked Articles",
  description: "Evidence-first guides, reviews, and explainers for men navigating TRT, labs, supplements, and modern telehealth.",
};

const PAGE_SIZE = 12;

const categoryMap: Record<string, string> = {
  all: "All",
  testosterone: "Testosterone & TRT",
  ed: "ED & Sexual Health",
  optimization: "Men's Optimization",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; category?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const currentPage = Math.max(1, Number(params.page) || 1);
  const currentCategory = params.category && params.category in categoryMap ? params.category : "all";

  const allArticles = getAllArticles().filter(
    (article) => article.frontmatter.status === "published",
  );

  const filteredArticles =
    currentCategory === "all"
      ? allArticles
      : allArticles.filter((article) => article.frontmatter.category === currentCategory);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedArticles = filteredArticles.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const buildPageLink = (page: number, category: string) => {
    const query = new URLSearchParams();
    if (category !== "all") query.set("category", category);
    if (page > 1) query.set("page", String(page));
    const qs = query.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          ManUnlocked Library
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Articles that respect your time and your intelligence.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          No recycled listicles, no anonymous clinic advertorials, no fake certainty.
          Just practical guidance built around evidence, tradeoffs, and real decisions.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {Object.entries(categoryMap).map(([value, label]) => {
          const active = value === currentCategory;
          return (
            <Link
              key={value}
              href={buildPageLink(1, value)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${active ? "bg-white text-zinc-950" : "border border-white/10 bg-white/5 text-zinc-300"}`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6">
        {paginatedArticles.map(({ frontmatter }) => (
          <article key={frontmatter.slug} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm text-zinc-500">{frontmatter.publishDate}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              <Link href={`/${frontmatter.slug}`}>{frontmatter.title}</Link>
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-400">{frontmatter.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={buildPageLink(Math.max(1, safePage - 1), currentCategory)}
          className={`rounded-full px-4 py-2 text-sm font-medium ${safePage === 1 ? "pointer-events-none border border-white/10 text-zinc-600" : "border border-white/10 bg-white/5 text-zinc-200"}`}
        >
          Previous
        </Link>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={buildPageLink(page, currentCategory)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${page === safePage ? "bg-white text-zinc-950" : "border border-white/10 bg-white/5 text-zinc-300"}`}
          >
            {page}
          </Link>
        ))}

        <Link
          href={buildPageLink(Math.min(totalPages, safePage + 1), currentCategory)}
          className={`rounded-full px-4 py-2 text-sm font-medium ${safePage === totalPages ? "pointer-events-none border border-white/10 text-zinc-600" : "border border-white/10 bg-white/5 text-zinc-200"}`}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
