import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#0b120e]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-300">
            D
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-100">DietUnlocked</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="hover:text-white">
            Articles
          </Link>
          <Link href="/calculators" className="hover:text-white">
            Calculators
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
