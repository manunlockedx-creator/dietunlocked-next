import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#05070a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/manunlocked-wordmark.png"
            alt="ManUnlocked"
            width={150}
            height={34}
            priority
            className="h-auto w-[132px] sm:w-[150px]"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/blog" className="hover:text-white">
            Articles
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
