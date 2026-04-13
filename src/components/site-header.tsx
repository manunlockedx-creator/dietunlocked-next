import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#05070a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/manunlocked-wordmark.png"
            alt="ManUnlocked"
            width={24}
            height={24}
            priority
            className="h-6 w-6 rounded-sm object-contain"
          />
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
