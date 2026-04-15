"use client";

import { useState } from "react";

const drugProfiles = {
  semaglutide: { label: "Semaglutide (Ozempic/Wegovy)", lowPct: 0.12, highPct: 0.17 },
  tirzepatide: { label: "Tirzepatide (Mounjaro/SURMOUNT)", lowPct: 0.18, highPct: 0.26 },
  generic: { label: "Generic GLP-1", lowPct: 0.08, highPct: 0.14 },
} as const;

export function Glp1WeightLossProjectionCalculator() {
  const [weight, setWeight] = useState(220);
  const [unit, setUnit] = useState("lb");
  const [drug, setDrug] = useState("semaglutide");
  const [weeks, setWeeks] = useState(24);

  const kg = unit === "lb" ? weight * 0.45359237 : weight;
  const profile = drugProfiles[drug as keyof typeof drugProfiles];

  // Use linearized projection (approx) based on percent at 68 weeks
  const pctLow = profile.lowPct * (weeks / 68);
  const pctHigh = profile.highPct * (weeks / 68);

  const lowLoss = Math.round((pctLow * weight) * 10) / 10;
  const highLoss = Math.round((pctHigh * weight) * 10) / 10;
  const targetLow = Math.round((weight - lowLoss) * 10) / 10;
  const targetHigh = Math.round((weight - highLoss) * 10) / 10;

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">GLP-1 Weight Loss Projection</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Unit</span>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Starting weight ({unit})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Weeks</span>
          <input type="number" value={weeks} min={4} max={104} onChange={(e) => setWeeks(Number(e.target.value))} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none" />
        </label>

        <label className="flex flex-col sm:col-span-2">
          <span className="text-sm text-zinc-600">Medication</span>
          <select value={drug} onChange={(e) => setDrug(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            {Object.entries(drugProfiles).map(([key, p]) => (
              <option key={key} value={key}>{p.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-zinc-100 border border-black/5 p-5">
        <p className="text-sm text-zinc-700">Direct answer: projected weight after {weeks} weeks on {profile.label} is approximately <strong>{targetHigh}–{targetLow} {unit}</strong> (range based on trial averages).</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-600">Estimated weight loss (range)</p>
            <div className="mt-1 text-2xl font-semibold text-zinc-950">{lowLoss}–{highLoss} {unit}</div>
          </div>
          <div>
            <p className="text-xs text-zinc-600">Projected weight</p>
            <div className="mt-1 text-2xl font-semibold text-zinc-950">{targetHigh}–{targetLow} {unit}</div>
          </div>
        </div>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-black/5 bg-white px-6 py-8">
        <h2>How much weight can you expect on GLP-1?</h2>
        <p><strong>Direct answer:</strong> trial averages vary by drug and dose — semaglutide trials report ~12–17% average loss at 68 weeks; tirzepatide trials report higher averages. This tool linearizes those percentages to provide a short-term projection.</p>

        <h2>Why individual results vary</h2>
        <p><strong>Direct answer:</strong> baseline BMI, adherence, dose escalation, diet composition, and physical activity all shape outcomes. Use projections as a rough guide, not a promise.</p>

        <h2>Where the numbers come from</h2>
        <p><strong>Representative sources:</strong> STEP trials for semaglutide and SURMOUNT trials for tirzepatide. These are averages — your mileage will vary.</p>
      </div>
    </section>
  );
}
