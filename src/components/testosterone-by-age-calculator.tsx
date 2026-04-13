"use client";

import { useMemo, useState } from "react";

const ranges = [
  { min: 20, max: 29, low: 300, high: 1000 },
  { min: 30, max: 39, low: 280, high: 950 },
  { min: 40, max: 49, low: 250, high: 900 },
  { min: 50, max: 59, low: 230, high: 850 },
  { min: 60, max: 69, low: 220, high: 800 },
];

export function TestosteroneByAgeCalculator() {
  const [age, setAge] = useState("35");
  const [totalT, setTotalT] = useState("450");
  const range = useMemo(() => ranges.find((item) => Number(age) >= item.min && Number(age) <= item.max) ?? ranges[ranges.length - 1], [age]);
  const status = Number(totalT) < range.low ? "below" : Number(totalT) > range.high ? "above" : "within";
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#0d1117] p-8 text-zinc-100 shadow-2xl shadow-black/30">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Testosterone by Age Calculator</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">This gives a rough age-band comparison, not a diagnosis. Symptoms, free T, SHBG, sleep, and metabolic health still matter more than one number.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Age</span><input value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Total Testosterone (ng/dL)</span><input value={totalT} onChange={(e) => setTotalT(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
      </div>
      <div className={`mt-8 rounded-2xl border p-6 ${status === "below" ? "border-red-400/30 bg-red-500/10" : status === "within" ? "border-emerald-400/30 bg-emerald-500/10" : "border-amber-400/30 bg-amber-500/10"}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">Age band {range.min}–{range.max}</p>
        <p className="mt-2 text-lg leading-8 text-zinc-100">Reference range: {range.low}–{range.high} ng/dL. Your value appears {status} that rough age band.</p>
      </div>
    </section>
  );
}
