import Link from "next/link";
import { FreeTestosteroneCalculator } from "@/components/free-testosterone-calculator";
import { getAllArticles } from "@/lib/content";

export default function Home() {
  const articles = getAllArticles().slice(0, 3);
  const featuredArticle = articles[0];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20">
      <section className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="mx-auto max-w-5xl bg-gradient-to-r from-[#ff8a4c] via-[#ff6a3d] to-[#ff3b30] bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl">
            Men&apos;s health without the bullshit.
          </h1>
          <p className="mx-auto max-w-3xl text-2xl leading-8 text-zinc-400">
            Tools, research, and transparent reviews.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto_auto]">
          <article className="order-1 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Featured</p>
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

          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="space-y-6">
              <FreeTestosteroneCalculator />
              <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">FEATURED VIDEO</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-full max-w-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-lg shadow-black/30 sm:max-w-[320px] lg:max-w-[300px]">
                    <video
                      className="block aspect-[9/16] h-auto max-h-[560px] w-full bg-black object-cover"
                      controls
                      playsInline
                      muted
                      preload="metadata"
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
