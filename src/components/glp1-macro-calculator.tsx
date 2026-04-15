"use client";

import { useState } from "react";

export function Glp1MacroCalculator() {
  const [calories, setCalories] = useState(1800);
  const [protein, setProtein] = useState(110);
  const [fatPct, setFatPct] = useState(0.25);

  const proteinCals = protein * 4;
  const fatCals = Math.round(calories * fatPct);
  const carbsCals = Math.max(0, calories - proteinCals - fatCals);
  const carbs = Math.round(carbsCals / 4);
  const fat = Math.round(fatCals / 9);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Macro Calculator</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Calories target (kcal)</span>
          <input type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Protein (g/day)</span>
          <input type="number" value={protein} onChange={(e) => setProtein(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Fat as % of calories</span>
          <select value={fatPct} onChange={(e) => setFatPct(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value={0.2}>20%</option>
            <option value={0.25}>25%</option>
            <option value={0.3}>30%</option>
            <option value={0.35}>35%</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Direct answer: with a {calories} kcal target and {protein} g protein, your macros would be approximately:</p>
        <div className="mt-2 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-zinc-400">Protein</p>
            <div className="mt-1 text-2xl font-semibold text-white">{protein} g ({proteinCals} kcal)</div>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Fat</p>
            <div className="mt-1 text-2xl font-semibold text-white">{fat} g ({fatCals} kcal)</div>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Carbs</p>
            <div className="mt-1 text-2xl font-semibold text-white">{carbs} g ({carbsCals} kcal)</div>
          </div>
        </div>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-6 py-8">
        <h2>What macro split is best on GLP-1?</h2>
        <p><strong>Direct answer:</strong> prioritize protein first, then adjust fats and carbs to meet calorie targets and personal tolerance. Many GLP-1 users find lower-carb, protein-focused meals easier to tolerate, but carbs are useful for energy and training.</p>

        <h2>How do you fit protein into tiny meals?</h2>
        <p><strong>Direct answer:</strong> distribute protein across small, frequent protein-dense items (yogurt, protein shakes, small eggs/cheese portions), and consider liquid or blended options when solids are poorly tolerated.</p>

        <h2>Why macros matter when appetite is low</h2>
        <p><strong>Direct answer:</strong> when calories are limited by appetite, prioritizing high-quality protein protects lean mass and makes every calorie count.</p>
      </div>
    </section>
  );
}
