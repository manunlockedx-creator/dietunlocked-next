import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/affiliate-disclosure"];

  const articlePages = getAllArticles()
    .filter((article) => article.frontmatter.status === "published")
    .map((article) => ({
      url: `${siteConfig.url}/${article.frontmatter.slug}`,
      lastModified: article.frontmatter.updatedDate ?? article.frontmatter.publishDate,
    }));

  return [
    ...staticPages.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...articlePages,
  ];
}
