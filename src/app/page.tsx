import Link from "next/link";
import { ConvertKitForm } from "@/components/convertkit-form";
import { getAllArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const sections = [
  { key: "glp1-nutrition", title: "GLP-1 Nutrition", href: "/blog?category=glp1-nutrition" },
  { key: "side-effects", title: "Side Effects & Fixes", href: "/blog?category=side-effects" },
  { key: "costs", title: "Costs & Decisions", href: "/blog?category=costs" },
] as const;

const calculatorCards = [
  {
    title: "GLP-1 Protein Requirement Calculator",
    description: "Estimate a realistic protein target for muscle retention while appetite is suppressed.",
    href: "/calculators/glp1-protein-calculator",
  },
  {
    title: "GLP-1 Calorie Calculator",
    description: "Get a calorie target built around weight loss, lean mass, and reduced intake tolerance.",
    href: "/calculators/glp1-calorie-calculator",
  },
  {
    title: "GLP-1 Cost Comparison Calculator",
    description: "Compare telehealth, insurance, and out-of-pocket GLP-1 cost scenarios.",
    href: "/calculators/glp1-medication-cost-comparison-calculator",
  },
] as const;

export default function Home() {
  const articles = getAllArticles().filter((article) => article.frontmatter.status === "published");
  const featuredArticle = articles[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20">
      <section className="space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">DietUnlocked</p>
          <h1 className="mx-auto max-w-5xl bg-gradient-to-r from-[#c9f6d4] via-[#7be495] to-[#34d399] bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto max-w-3xl text-2xl leading-8 text-zinc-300">{siteConfig.subtagline}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Featured article</p>
            {featuredArticle ? (
              <>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{featuredArticle.frontmatter.title}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">{featuredArticle.frontmatter.excerpt}</p>
                <Link
                  href={`/${featuredArticle.frontmatter.slug}`}
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
                >
                  Read article
                </Link>
              </>
            ) : (
              <>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">DietUnlocked is being built the right way.</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  We&apos;re setting up a GLP-1 nutrition library built around practical food guidance, calculators, and honest comparisons, not recycled fluff.
                </p>
              </>
            )}
          </article>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Featured calculators</p>
            <div className="mt-5 space-y-4">
              {calculatorCards.map((card) => (
                <div key={card.href} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{card.description}</p>
                  <Link href={card.href} className="mt-4 inline-flex text-sm font-semibold text-emerald-300">
                    Open calculator →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="my-16 h-px w-full bg-white/10" />

      <section className="space-y-12">
        {sections.map((section) => {
          const sectionArticles = articles.filter((article) => article.frontmatter.category === section.key).slice(0, 4);
          return (
            <div key={section.key} className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white">{section.title}</h2>
                <Link href={section.href} className="text-sm font-semibold text-emerald-300">
                  View all →
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {sectionArticles.length > 0 ? (
                  sectionArticles.map(({ frontmatter }) => (
                    <article key={frontmatter.slug} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{frontmatter.publishDate}</p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{frontmatter.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">{frontmatter.excerpt}</p>
                      <Link href={`/${frontmatter.slug}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-300">
                        Read more →
                      </Link>
                    </article>
                  ))
                ) : (
                  <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-white/5 p-6 text-sm leading-7 text-zinc-500 md:col-span-2 xl:col-span-4">
                    Articles in this category will appear here automatically as they&apos;re published.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Free guide</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Get the free 7-Day GLP-1 meal plan</h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-400">
            A practical starter plan built around high protein, smaller meals, and foods that are easier to tolerate on Ozempic, Wegovy, Zepbound, or Mounjaro.
          </p>
        </div>
        <div className="mt-6 max-w-xl">
          <ConvertKitForm />
        </div>
      </section>
    </main>
  );
}
