import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ManUnlocked",
    template: "%s | ManUnlocked",
  },
  description: siteConfig.description,
  verification: {
    google: "GccoXHnJ_6B2SZsRUjg-cs4UXf6cYJorC3EDVpQSzqI",
    other: {
      "impact-site-verification": "873674fe-4849-4c70-9523-1ced38dc94c6",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05070a] text-zinc-100">
        <Analytics />
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
