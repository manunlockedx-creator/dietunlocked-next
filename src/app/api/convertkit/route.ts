import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json({ error: "ConvertKit not configured" }, { status: 500 });
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: apiKey,
      email: body.email,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
