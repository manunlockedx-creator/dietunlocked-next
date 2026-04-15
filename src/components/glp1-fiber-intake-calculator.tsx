"use client";

import { useState } from "react";

export function Glp1FiberIntakeCalculator() {
  const [unit, setUnit] = useState("kg");
  const [weight, setWeight] = useState(82);
  const [calories, setCalories] = useState(1800);

  const weightKg = unit === "kg" ? weight : weight * 0.45359237;

  // Simple rule: 14 g fiber per 1000 kcal is general; GLP-1 users may need slightly higher soluble fiber focus
  const basePerKcal = 14 / 1000;
  const recommended = Math.round(calories * basePerKcal * 10) / 10; // grams

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Fiber Intake Calculator</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Calories (kcal)</span>
          <input type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

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
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Direct answer: based on a standard guideline (14 g per 1000 kcal), target about <strong>{recommended} g fiber/day</strong>. Prioritize soluble fiber and increase slowly to avoid worsening GI symptoms.</p>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-6 py-8">
        <h2>How much fiber do GLP-1 users need?</h2>
        <p><strong>Direct answer:</strong> aim for about 14 g fiber per 1,000 kcal as a baseline, then adjust for symptoms and tolerance — many GLP-1 users need a gradual ramp to avoid constipation or bloating.</p>

        <h2>What type of fiber is best?</h2>
        <p><strong>Direct answer:</strong> soluble fiber (oats, psyllium, fruits) is often gentler and better for managing stool consistency; increase fiber along with hydration to reduce constipation risk.</p>
      </div>
    </section>
  );
}
