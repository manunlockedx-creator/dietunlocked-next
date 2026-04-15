import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 text-zinc-950">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white shadow-sm">
            D
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-900">DietUnlocked</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-zinc-500">
          <Link href="/" className="hover:text-zinc-950">
            Home
          </Link>
          <Link href="/blog" className="hover:text-zinc-950">
            Articles
          </Link>
          <Link href="/calculators" className="hover:text-zinc-950">
            Calculators
          </Link>
          <Link href="/about" className="hover:text-zinc-950">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
