"use client";

import { useMemo, useState } from "react";
import { AffiliateLink } from "@/components/affiliate-link";

export function TdeeCalculator() {
  const [age, setAge] = useState("35");
  const [weight, setWeight] = useState("190");
  const [height, setHeight] = useState("70");
  const [activity, setActivity] = useState("1.55");

  const tdee = useMemo(() => {
    const kg = (Number(weight) || 0) * 0.453592;
    const cm = (Number(height) || 0) * 2.54;
    const bmr = 10 * kg + 6.25 * cm - 5 * (Number(age) || 0) + 5;
    return Math.round(bmr * Number(activity));
  }, [activity, age, height, weight]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#0d1117] p-8 text-zinc-100 shadow-2xl shadow-black/30">
      <h1 className="text-4xl font-semibold tracking-tight text-white">TDEE Calculator (Men’s Edition)</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">Use Mifflin-St Jeor as the baseline, then layer activity honestly. This gives you a practical maintenance calorie target, not a magic number.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Age</span><input value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Weight (lb)</span><input value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Height (in)</span><input value={height} onChange={(e) => setHeight(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Activity</span><select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white"><option value="1.2">Sedentary</option><option value="1.375">Light</option><option value="1.55">Moderate</option><option value="1.725">Very active</option></select></label>
      </div>
      <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">Estimated maintenance</p>
        <p className="mt-2 text-4xl font-semibold text-white">{tdee} <span className="text-base font-medium text-zinc-400">calories/day</span></p>
        <p className="mt-3 text-base leading-7 text-zinc-200">Use this as the maintenance starting point. Cut 300 to 500 calories for fat loss, or add 150 to 250 for lean gain if recovery and protein are in place.</p>
        <AffiliateLink href="/blog" offer="tdee-content" sourcePage="/tools/tdee-calculator-men" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950">Read body composition guides</AffiliateLink>
      </div>
    </section>
  );
}
