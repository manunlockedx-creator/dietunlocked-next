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
    "/editorial-policy",
    "/calculators",
    "/glp1-nutrition",
    "/side-effects",
    "/costs",
    "/calculators/glp1-calorie-calculator",
    "/calculators/glp1-protein-calculator",
    "/calculators/glp1-medication-cost-comparison-calculator",
    "/calculators/glp1-weight-loss-projection-calculator",
    "/calculators/glp1-macro-calculator",
    "/calculators/glp1-hydration-calculator",
    "/calculators/glp1-fiber-intake-calculator",
    "/calculators/glp1-insurance-eligibility-checker",
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
