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
          <Link href="/tools/free-testosterone-calculator" className="hover:text-white">
            Free T
          </Link>
          <Link href="/tools/low-t-symptom-checker" className="hover:text-white">
            Symptom Quiz
          </Link>
          <Link href="/tools/trt-cost-calculator" className="hover:text-white">
            TRT Cost
          </Link>
          <Link href="/tools/bioavailable-testosterone-calculator" className="hover:text-white">
            Bioavailable T
          </Link>
          <Link href="/tools/testosterone-by-age-calculator" className="hover:text-white">
            T by Age
          </Link>
          <Link href="/tools/tdee-calculator-men" className="hover:text-white">
            TDEE
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
