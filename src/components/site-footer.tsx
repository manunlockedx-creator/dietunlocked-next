import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-zinc-500">
        <div className="flex flex-wrap gap-4">
          <Link href="/about">About</Link>
          <Link href="/medical-disclaimer">Medical Disclaimer</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/medical-review-team">Medical Review Team</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DietUnlocked. Evidence-based nutrition for the GLP-1 era.</p>
          <p>Medical content is informational only and not a substitute for professional care.</p>
        </div>
      </div>
    </footer>
  );
}
