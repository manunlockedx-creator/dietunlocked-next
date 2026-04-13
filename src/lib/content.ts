import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  updatedDate?: string;
  status: "draft" | "review" | "published";
  category: string;
  tags?: string[];
  author: string;
  medicalReviewer?: string;
  reviewDate?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  affiliateDisclosure?: boolean;
  containsAffiliateLinks?: boolean;
  medicalDisclaimer?: boolean;
  faq?: Array<{ question: string; answer: string }>;
  schema?: {
    article?: boolean;
    faq?: boolean;
    medicalWebPage?: boolean;
  };
  informationGain?: string[];
  citations?: Array<{ title: string; url: string }>;
};

export type Article = {
  frontmatter: ArticleFrontmatter;
  content: string;
};

function readArticleFile(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllArticleSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllArticles() {
  return getAllArticleSlugs()
    .map(readArticleFile)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishDate).getTime() -
        new Date(a.frontmatter.publishDate).getTime(),
    );
}

export function getArticleBySlug(slug: string) {
  return readArticleFile(slug);
}
