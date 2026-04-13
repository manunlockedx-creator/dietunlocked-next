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
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-16">
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

      <article className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-amber-400 prose-strong:text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          {frontmatter.category}
        </p>
        <h1 className="mt-3 text-5xl font-semibold text-white">{frontmatter.title}</h1>
        <p className="text-xl leading-8 text-zinc-400">{frontmatter.excerpt}</p>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
          <span>Published {frontmatter.publishDate}</span>
          {frontmatter.medicalReviewer ? <span>Medical review: {frontmatter.medicalReviewer}</span> : null}
        </div>
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} />
      </article>
    </main>
  );
}
