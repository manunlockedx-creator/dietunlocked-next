import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArticleSchema } from "@/components/article-schema";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = getArticleBySlug(slug);
    return {
      title: article.frontmatter.metaTitle ?? article.frontmatter.title,
      description: article.frontmatter.metaDescription ?? article.frontmatter.excerpt,
      alternates: {
        canonical: article.frontmatter.canonicalUrl ?? `${siteConfig.url}/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  let article;
  try {
    article = getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = article;
  const url = frontmatter.canonicalUrl ?? `${siteConfig.url}/${slug}`;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.metaDescription ?? frontmatter.excerpt}
        url={url}
        publishDate={frontmatter.publishDate}
        updatedDate={frontmatter.updatedDate}
        image={frontmatter.featuredImage}
        author={frontmatter.author}
        faq={frontmatter.faq}
      />

      <article className="mx-auto w-full max-w-[720px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          {frontmatter.category}
        </p>
        <h1 className="mt-3 text-5xl font-semibold leading-tight text-white">{frontmatter.title}</h1>
        <p className="mt-5 text-xl leading-8 text-zinc-400">{frontmatter.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-500">
          <span>Published {frontmatter.publishDate}</span>
          {frontmatter.medicalReviewer ? <span>Medical review: {frontmatter.medicalReviewer}</span> : null}
        </div>
        <div className="mt-10 prose prose-invert max-w-none prose-p:my-6 prose-p:text-[18px] prose-p:leading-8 prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-t prose-h2:border-white/10 prose-h2:pt-8 prose-h2:text-4xl prose-h2:text-white prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-2xl prose-h3:text-white prose-a:text-amber-400 prose-strong:text-white prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-2 prose-li:text-[17px] prose-li:leading-8 prose-li:marker:text-zinc-500 prose-blockquote:border-l-2 prose-blockquote:border-amber-500 prose-blockquote:pl-4 prose-blockquote:text-zinc-300 [&_.ftc-disclosure]:my-8 [&_.ftc-disclosure]:rounded-2xl [&_.ftc-disclosure]:border [&_.ftc-disclosure]:border-white/10 [&_.ftc-disclosure]:bg-white/5 [&_.ftc-disclosure]:px-5 [&_.ftc-disclosure]:py-4 [&_.ftc-disclosure]:text-sm [&_.ftc-disclosure]:leading-7 [&_.faq-question]:mt-8 [&_.faq-question]:mb-2 [&_.faq-question]:text-xl [&_.faq-question]:font-semibold [&_.faq-question]:text-white">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} />
        </div>
      </article>
    </main>
  );
}
