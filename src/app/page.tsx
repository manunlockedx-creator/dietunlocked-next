import Link from "next/link";
import { FreeTestosteroneCalculator } from "@/components/free-testosterone-calculator";
import { getAllArticles } from "@/lib/content";

export default function Home() {
  const articles = getAllArticles().slice(0, 3);
  const featuredArticle = articles[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20">
      <section className="space-y-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
            Evidence-first men&apos;s health
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Clearer answers for testosterone, telehealth, labs, and the stuff most men get sold instead of taught.
          </h1>
          <p className="max-w-3xl text-xl leading-9 text-zinc-400">
            ManUnlocked is built for men who want evidence-first guidance, practical tools, and transparent reviews,
            without the fake urgency and lazy affiliate sludge.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Latest article</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {featuredArticle.frontmatter.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-400">
                {featuredArticle.frontmatter.excerpt}
              </p>
              <Link
                href={`/${featuredArticle.frontmatter.slug}`}
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
              >
                Read article
              </Link>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {articles.slice(1).map(({ frontmatter }) => (
                <article key={frontmatter.slug} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Recent</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{frontmatter.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{frontmatter.excerpt}</p>
                  <Link href={`/${frontmatter.slug}`} className="mt-4 inline-flex text-sm font-semibold text-amber-400">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div>
            <FreeTestosteroneCalculator />
          </div>
        </div>
      </section>

    </main>
  );
}
