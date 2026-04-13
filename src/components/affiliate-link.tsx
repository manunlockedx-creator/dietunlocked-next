"use client";

import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AffiliateLinkProps = {
  href: string;
  offer: string;
  sourcePage: string;
  children: React.ReactNode;
  className?: string;
};

export function AffiliateLink({ href, offer, sourcePage, children, className }: AffiliateLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      rel="sponsored noopener noreferrer"
      onClick={() => {
        window.gtag?.("event", "affiliate_click", {
          offer_slug: offer,
          source_page: sourcePage,
        });
      }}
    >
      {children}
    </Link>
  );
}
