"use client";

import { useState } from "react";

const defaultPrograms = [
  { id: "telehealth", label: "Telehealth program (monthly)", cost: 350 },
  { id: "pharmacy", label: "Pharmacy cash per month", cost: 900 },
  { id: "insurance", label: "Insurance OOP estimate/month", cost: 50 },
];

export function Glp1MedicationCostComparisonCalculator() {
  const [programs, setPrograms] = useState(defaultPrograms);

  function updateCost(id: string, v: number) {
    setPrograms((prev) => prev.map((p) => (p.id === id ? { ...p, cost: v } : p)));
  }

  const total = programs.reduce((s, p) => s + p.cost, 0);

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">GLP-1 Medication Cost Comparison</h1>

      <p className="mt-4 text-sm text-zinc-700">Direct answer: costs vary widely. Use this quick comparer to see telehealth vs pharmacy vs insurance out-of-pocket scenarios for a monthly snapshot.</p>

      <div className="mt-6 space-y-4">
        {programs.map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <label className="flex-1 text-sm text-zinc-700">{p.label}</label>
            <input
              type="number"
              value={p.cost}
              onChange={(e) => updateCost(p.id, Number(e.target.value))}
              className="w-36 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-zinc-100 border border-black/5 p-5">
        <p className="text-sm text-zinc-700">Estimated monthly cost snapshot</p>
        <div className="mt-2 text-2xl font-semibold text-zinc-950">${total.toLocaleString()}</div>
        <p className="mt-2 text-sm text-zinc-600">This is a simple compare view. Use it to decide which pathway (telehealth, pharmacy, insurance) fits your budget.</p>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-black/5 bg-white px-6 py-8">
        <h2>How much does GLP-1 really cost in 2026?</h2>
        <p><strong>Direct answer:</strong> it depends on the route — pharmacy cash prices for semaglutide formulations often exceed $800–$1,200/month; telehealth packages vary ($200–$600/mo) and insurance OOP can be as low as $0–$100 depending on coverage.</p>

        <h2>Why the price range is so wide</h2>
        <p><strong>Direct answer:</strong> list price, manufacturer pricing, telehealth fees, lab work, and insurance coverage differences all produce a wide range. Telehealth sometimes bundles prescription + follow-up for one fee; pharmacies charge list price for the medication itself.</p>

        <h2>How to use this tool</h2>
        <p><strong>Direct answer:</strong> replace the example numbers with your actual telehealth monthly fee, expected pharmacy cost, and likely insurance OOP to see which pathway is cheapest for you right now.</p>

        <h2>Where the data comes from</h2>
        <p><strong>Representative sources:</strong> telehealth pricing pages and published pharmacy list-price ranges; always check current pricing for your state and plan.</p>
      </div>
    </section>
  );
}
