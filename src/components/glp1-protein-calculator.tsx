"use client";

import { useState } from "react";

export function Glp1ProteinCalculator() {
  const [unit, setUnit] = useState("lb");
  const [weight, setWeight] = useState(180);
  const [activity, setActivity] = useState("sedentary");
  const [medIntensity, setMedIntensity] = useState("standard");

  const toKg = (w: number) => (unit === "lb" ? w * 0.45359237 : w);
  const weightKg = toKg(Number(weight) || 0);

  // Base clinical guidance for GLP-1 users: 1.2 - 1.6 g/kg
  let baseLow = 1.2;
  let baseHigh = 1.6;

  const activityMap = { sedentary: 1.0, light: 1.05, moderate: 1.1, active: 1.2 } as const;
  const medMap = { low: 0.95, standard: 1.0, high: 1.05 } as const;

  const activityFactor = activityMap[activity as keyof typeof activityMap] ?? 1.0;
  const medFactor = medMap[medIntensity as keyof typeof medMap] ?? 1.0;

  const lowG = Math.round(baseLow * activityFactor * medFactor * weightKg);
  const highG = Math.round(baseHigh * activityFactor * medFactor * weightKg);

  const perMeal3 = [Math.round(lowG / 3), Math.round(highG / 3)];

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Protein Requirement Calculator</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Unit</span>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="lb">Pounds (lb)</option>
            <option value="kg">Kilograms (kg)</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weight ({unit})</span>
          <input
            type="number"
            value={weight}
            min={30}
            max={600}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Activity level</span>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="sedentary">Sedentary</option>
            <option value="light">Light activity</option>
            <option value="moderate">Moderate activity</option>
            <option value="active">High activity / regular strength training</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Medication intensity</span>
          <select value={medIntensity} onChange={(e) => setMedIntensity(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="low">Low dose / early titration</option>
            <option value="standard">Typical maintenance</option>
            <option value="high">High dose / aggressive loss</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Direct answer: For someone on GLP-1, aim for about {lowG}–{highG} g of protein per day ({(Math.round(((lowG+highG)/2) * 10)/10)} g avg). That’s roughly {perMeal3[0]}–{perMeal3[1]} g per meal if you eat three times a day.</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-400">Recommended daily protein range</p>
            <div className="mt-1 text-2xl font-semibold text-white">{lowG}–{highG} g/day</div>
          </div>

          <div>
            <p className="text-xs text-zinc-400">Per-meal target (3 meals)</p>
            <div className="mt-1 text-2xl font-semibold text-white">{perMeal3[0]}–{perMeal3[1]} g/meal</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-zinc-400">
          <p className="mb-2">Methodology: clinical guidance for GLP-1 users commonly recommends 1.2–1.6 g/kg/day to protect lean mass; this calculator multiplies that range by activity and medication intensity adjustments to produce a realistic target.</p>
          <p><strong>Sources:</strong> STEP trials and clinical guidance on lean mass preservation.</p>
        </div>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-6 py-8">
        <h2>How much protein do you actually need on GLP-1?</h2>
        <p><strong>Direct answer:</strong> more than the standard 0.8 g/kg recommendation — typically 1.2–1.6 g/kg is used in clinical guidance for people at risk of lean mass loss during weight loss on GLP-1 medications.</p>
        <p><strong>Why:</strong> clinical trial data show a non-trivial portion of weight lost on semaglutide can be lean mass, so a higher protein target helps protect muscle when overall intake is reduced.</p>

        <h2>How do you hit that target when your appetite is tiny?</h2>
        <p><strong>Direct answer:</strong> prioritize protein-dense, low-volume items (liquid protein, concentrated dairy, eggs, lean deli, protein powders), spread protein across small meals, and aim for high-protein snacks.</p>
        <ul>
          <li>Examples: 1 cup Greek yogurt (~20g), 1 scoop whey (~20–25g), 3 eggs (~18g), 4 oz chicken (~28g).</li>
          <li>Tip: if total grams are hard, use 2–3 fortified high-protein mini-meals each day to reach targets.</li>
        </ul>

        <h2>When should you see a clinician about protein or labs?</h2>
        <p><strong>Direct answer:</strong> repeat morning labs after a 12-week nutrition reset if symptoms persist; see a clinician sooner if you have unexplained severe fatigue, rapid strength loss, or other red flags.</p>

        <h2>What the evidence says</h2>
        <p>Representative studies: STEP trials for semaglutide and research on body composition changes during GLP-1 treatment. Use these as context — individual needs vary.</p>

        <h2>Practical example</h2>
        <p><strong>Direct answer:</strong> A 180 lb (82 kg) person using GLP-1 with moderate activity and standard intensity would target roughly {Math.round((1.2*activityFactor*medFactor*weightKg))}–{Math.round((1.6*activityFactor*medFactor*weightKg))} g/day. That can be hit with 3 meals of ~{perMeal3[0]}–{perMeal3[1]} g or 2 meals + 1 protein snack.</p>

        <h2>Quick meal ideas</h2>
        <ul>
          <li>Greek yogurt + whey powder + berries (30–40 g protein)</li>
          <li>Small omelet with cottage cheese and spinach (25–35 g)</li>
          <li>Protein shake with milk + nut butter (25–40 g)</li>
        </ul>

        <h2>References</h2>
        <ul>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/33567185/">Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP)</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/36449799/">Body composition changes during semaglutide treatment</a></li>
        </ul>
      </div>
    </section>
  );
}
