import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-950">
          ManUnlocked
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/blog" className="hover:text-zinc-950">
            Articles
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-zinc-950">
            Affiliate Disclosure
          </Link>
        </nav>
      </div>
    </header>
  );
}
