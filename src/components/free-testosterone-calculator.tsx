"use client";

import { useMemo, useState } from "react";
import { AffiliateLink } from "@/components/affiliate-link";

type Result = {
  freeT: number;
  freePct: number;
  category: "low" | "lownormal" | "optimal";
  label: string;
  interpretation: string;
};

function vermeulenFreeT(totalT: number, shbg: number, albumin: number) {
  const T = totalT * 3.467e-11;
  const S = shbg * 1e-9;
  const A = (albumin * 10) / 66430;
  const KaS = 1.0e9;
  const KaA = 3.6e4;

  const a = KaS * KaA * A + KaS * S + KaA * A - KaS * T + 1;
  const b = 1 + KaA * A + KaS * S - KaS * T - KaA * A * T;
  const c = -T;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null;

  const ftMol = (-b + Math.sqrt(discriminant)) / (2 * a);
  if (ftMol <= 0) return null;

  const freeT = ftMol / 3.467e-11;
  const freePct = (freeT / totalT) * 100;

  return {
    freeT: Math.round(freeT * 100) / 100,
    freePct: Math.round(freePct * 100) / 100,
  };
}

function getResult(totalT: number, shbg: number, albumin: number): Result | null {
  const base = vermeulenFreeT(totalT, shbg, albumin);
  if (!base) return null;

  if (base.freeT < 6.5) {
    return {
      ...base,
      category: "low",
      label: "Below range",
      interpretation:
        `At ${base.freeT} ng/dL (${base.freePct}% of total), your estimated free testosterone is below the range most endocrinologists consider acceptable. ` +
        `That often lines up with symptoms like low libido, fatigue, weak recovery, and flat mood, especially if total testosterone is also low.`,
    };
  }

  if (base.freeT < 10) {
    return {
      ...base,
      category: "lownormal",
      label: "Low-normal",
      interpretation:
        `At ${base.freeT} ng/dL (${base.freePct}% of total), you're technically in range but still low enough that a symptomatic man could feel it. ` +
        `High-normal SHBG often makes this more misleading than total testosterone alone suggests.`,
    };
  }

  return {
    ...base,
    category: "optimal",
    label: "Healthy range",
    interpretation:
      `At ${base.freeT} ng/dL (${base.freePct}% of total), your free testosterone estimate is in a healthier range. ` +
      `That does not automatically mean everything is perfect, but it makes frank androgen deficiency less likely.`,
  };
}

export function FreeTestosteroneCalculator() {
  const [totalT, setTotalT] = useState("450");
  const [shbg, setShbg] = useState("35");
  const [albumin, setAlbumin] = useState("4.3");
  const [submitted, setSubmitted] = useState(false);

  const parsed = useMemo(() => {
    const total = Number(totalT);
    const binding = Number(shbg);
    const alb = Number(albumin);
    if (!total || !binding || !alb) return null;
    return getResult(total, binding, alb);
  }, [albumin, shbg, totalT]);

  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-[#0d1117] p-8 text-zinc-100 shadow-sm">
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Free Testosterone Calculator</h2>
        <p className="max-w-2xl text-sm leading-6 text-zinc-400">
          Estimate your free testosterone from total testosterone, SHBG, and albumin using the
          Vermeulen equation, the same model many clinical labs use for calculated free T.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-zinc-200">
          <span>Total Testosterone (ng/dL)</span>
          <input
            value={totalT}
            onChange={(event) => setTotalT(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none ring-0"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-200">
          <span>SHBG (nmol/L)</span>
          <input
            value={shbg}
            onChange={(event) => setShbg(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none ring-0"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-200">
          <span>Albumin (g/dL)</span>
          <input
            value={albumin}
            onChange={(event) => setAlbumin(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-base text-white outline-none ring-0"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-5 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white"
      >
        Calculate free testosterone
      </button>

      {submitted && parsed ? (
        <div
          className={`mt-6 rounded-2xl border p-6 ${
            parsed.category === "low"
              ? "border-red-400/30 bg-red-500/10"
              : parsed.category === "lownormal"
                ? "border-amber-400/30 bg-amber-500/10"
                : "border-emerald-400/30 bg-emerald-500/10"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">{parsed.label}</p>
          <p className="mt-2 text-4xl font-semibold text-white">
            {parsed.freeT} <span className="text-base font-medium text-zinc-400">ng/dL</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400">{parsed.freePct}% of your total testosterone is free.</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200">{parsed.interpretation}</p>
          <div className="mt-6 flex flex-col gap-3 text-sm font-medium sm:flex-row">
            {parsed.category === "low" ? (
              <AffiliateLink
                href="/go/hims-trt"
                offer="hims-trt"
                sourcePage="/tools/free-testosterone-calculator"
                className="rounded-full bg-white px-5 py-3 text-center text-zinc-950"
              >
                Compare TRT options
              </AffiliateLink>
            ) : null}
          </div>
        </div>
      ) : null}

      <p className="mt-5 text-xs leading-5 text-zinc-500">
        Educational only, not a diagnosis. Formula based on Vermeulen et al. 1999.
      </p>
    </section>
  );
}
