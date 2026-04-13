"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ConvertKitForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/convertkit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus("success");
      setEmail("");
      window.gtag?.("event", "lead_magnet_signup", {
        form_location: "homepage",
      });
      return;
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Email signup</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
        Get the no-BS men&apos;s health briefing.
      </h2>
      <p className="mt-3 text-base leading-7 text-zinc-600">
        Research-backed breakdowns, useful tools, and zero fake urgency.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@domain.com"
          className="min-w-0 flex-1 rounded-full border border-zinc-300 px-4 py-3 text-sm text-zinc-950"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {status === "loading" ? "Submitting..." : "Join free"}
        </button>
      </div>
      {status === "success" ? <p className="mt-3 text-sm text-emerald-700">You&apos;re in.</p> : null}
      {status === "error" ? <p className="mt-3 text-sm text-red-700">Signup failed. Try again.</p> : null}
    </form>
  );
}
