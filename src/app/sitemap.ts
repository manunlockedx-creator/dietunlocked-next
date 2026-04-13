import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/affiliate-disclosure",
    "/medical-disclaimer",
    "/medical-review-team",
    "/privacy-policy",
    "/tools/free-testosterone-calculator",
    "/tools/low-t-symptom-checker",
    "/tools/trt-cost-calculator",
    "/tools/bioavailable-testosterone-calculator",
    "/tools/testosterone-by-age-calculator",
    "/tools/tdee-calculator-men",
  ];

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
