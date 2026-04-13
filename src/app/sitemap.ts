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
    "/calculators",
    "/calculators/free-testosterone-calculator",
    "/calculators/low-t-symptom-checker",
    "/calculators/trt-cost-calculator",
    "/calculators/bioavailable-testosterone-calculator",
    "/calculators/testosterone-by-age-calculator",
    "/calculators/tdee-calculator-men",
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
