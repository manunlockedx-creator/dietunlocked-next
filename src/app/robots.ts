import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rules = [
    { userAgent: "*", allow: "/" },
    { userAgent: "GPTBot", allow: "/" },
    { userAgent: "Google-Extended", allow: "/" },
    { userAgent: "PerplexityBot", allow: "/" },
    { userAgent: "ClaudeBot", allow: "/" },
    { userAgent: "Applebot-Extended", allow: "/" },
  ];

  return {
    rules,
    sitemap: "https://www.dietunlocked.com/sitemap.xml",
    host: "https://www.dietunlocked.com",
  };
}
