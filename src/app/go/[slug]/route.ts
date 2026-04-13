import { NextResponse } from "next/server";
import { affiliateLinks } from "@/lib/site";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const match = Object.values(affiliateLinks).find((link) => link.slug === slug);

  if (!match) {
    return NextResponse.redirect(new URL("/", _request.url), { status: 307 });
  }

  return NextResponse.redirect(match.href, {
    status: 307,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
