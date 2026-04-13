type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  updatedDate?: string;
  image?: string;
  author: string;
  faq?: Array<{ question: string; answer: string }>;
};

export function ArticleSchema({
  title,
  description,
  url,
  publishDate,
  updatedDate,
  image,
  author,
  faq,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: updatedDate ?? publishDate,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "ManUnlocked",
    },
    mainEntityOfPage: url,
    image: image ? [image] : undefined,
  };

  const faqSchema = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
