"use client";

import { useState } from "react";

export function Glp1HydrationCalculator() {
  const [unit, setUnit] = useState("kg");
  const [weight, setWeight] = useState(82);
  const [activity, setActivity] = useState("low");

  const weightKg = unit === "kg" ? weight : weight * 0.45359237;

  // baseline: 30-40 ml per kg, adjust for activity
  const baseLow = 30;
  const baseHigh = 40;
  const activityAdj = activity === "low" ? 1 : activity === "moderate" ? 1.1 : 1.25;

  const lowMl = Math.round(weightKg * baseLow * activityAdj);
  const highMl = Math.round(weightKg * baseHigh * activityAdj);

  const lowL = (lowMl / 1000).toFixed(2);
  const highL = (highMl / 1000).toFixed(2);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Hydration Calculator</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weight unit</span>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weight ({unit})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Activity</span>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Direct answer: aim for about <strong>{lowL}–{highL} L/day</strong> (≈ {lowMl}–{highMl} ml/day), adjusted for activity.</p>
        <div className="mt-4 text-sm text-zinc-400">On GLP-1 medications thirst cues can be muted — schedule fluid intake and watch urine color. Increase fluids if you have heat or increased activity.</div>
      </div>

      <div className="mt-6 prose max-w-none text-zinc-300">
        <h2>How much water should someone on GLP-1 drink?</h2>
        <p>Direct answer: aim for roughly 30–40 mL/kg as a starting point, then adjust up for activity, climate, and side effects like constipation.</p>

        <h2>Why thirst signals can be unreliable on GLP-1</h2>
        <p>Direct answer: GLP-1 medications can blunt appetite and thirst; that means scheduled sipping and urine color checks are better cues than waiting to feel thirsty.</p>

        <h2>Practical tips</h2>
        <ul>
          <li>Carry a small water bottle and sip regularly.</li>
          <li>Prefer electrolyte-containing fluids if you have GI losses or show lightheadedness.</li>
          <li>Use urine color (pale straw) as a quick check — very dark urine = drink more and check with clinician if persistent.</li>
        </ul>
      </div>
    </section>
  );
}
