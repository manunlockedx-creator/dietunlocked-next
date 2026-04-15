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
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Weight Loss Projection</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Unit</span>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Starting weight ({unit})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weeks</span>
          <input type="number" value={weeks} min={4} max={104} onChange={(e) => setWeeks(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col sm:col-span-2">
          <span className="text-sm text-zinc-400">Medication</span>
          <select value={drug} onChange={(e) => setDrug(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            {Object.entries(drugProfiles).map(([key, p]) => (
              <option key={key} value={key}>{p.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Direct answer: projected weight after {weeks} weeks on {profile.label} is approximately <strong>{targetHigh}–{targetLow} {unit}</strong> (range based on trial averages).</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-400">Estimated weight loss (range)</p>
            <div className="mt-1 text-2xl font-semibold text-white">{lowLoss}–{highLoss} {unit}</div>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Projected weight</p>
            <div className="mt-1 text-2xl font-semibold text-white">{targetHigh}–{targetLow} {unit}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 prose max-w-none text-zinc-300">
        <h2>How much weight can you expect on GLP-1?</h2>
        <p>Direct answer: trial averages vary by drug and dose — semaglutide trials report ~12–17% average loss at 68 weeks; tirzepatide trials report higher averages. This tool linearizes those percentages to provide a short-term projection.</p>

        <h2>Why individual results vary</h2>
        <p>Direct answer: baseline BMI, adherence, dose escalation, diet composition, and physical activity all shape outcomes. Use projections as a rough guide, not a promise.</p>

        <h2>Where the numbers come from</h2>
        <p>Representative sources: STEP trials for semaglutide and SURMOUNT trials for tirzepatide. These are averages — your mileage will vary.</p>
      </div>
    </section>
  );
}
