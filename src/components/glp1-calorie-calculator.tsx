"use client";

import { useState } from "react";

function toKg(w: number, unit: string) {
  return unit === "lb" ? w * 0.45359237 : w;
}
function toCm(h: number, unit: string) {
  return unit === "in" ? h * 2.54 : h;
}

export function Glp1CalorieCalculator() {
  const [unitW, setUnitW] = useState("lb");
  const [unitH, setUnitH] = useState("in");
  const [weight, setWeight] = useState(180);
  const [height, setHeight] = useState(70);
  const [age, setAge] = useState(40);
  const [sex, setSex] = useState("male");
  const [activity, setActivity] = useState("sedentary");
  const [goal, setGoal] = useState("conservative");

  const weightKg = toKg(Number(weight) || 0, unitW);
  const heightCm = toCm(Number(height) || 0, unitH);

  // Mifflin-St Jeor
  let bmr = 0;
  if (sex === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  const activityMap: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };

  const activityFactor = activityMap[activity] ?? 1.2;
  const tdee = Math.round(bmr * activityFactor);

  // Deficit by goal — GLP-1 users often need smaller deficits to preserve lean mass
  const goalMap: Record<string, number> = {
    conservative: 0.85, // 15% below TDEE
    moderate: 0.78, // 22% below
    aggressive: 0.7, // 30% below
  };

  const targetMultiplier = goalMap[goal] ?? 0.85;
  let targetCalories = Math.round(tdee * targetMultiplier);

  // enforce minimal safe floor based on sex (simple heuristic)
  const minCal = sex === "male" ? 1400 : 1200;
  if (targetCalories < minCal) targetCalories = minCal;

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">GLP-1 Calorie Calculator</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Weight unit</span>
          <select value={unitW} onChange={(e) => setUnitW(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Weight ({unitW})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Height unit</span>
          <select value={unitH} onChange={(e) => setUnitH(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="in">in</option>
            <option value="cm">cm</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Height ({unitH})</span>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Age</span>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Sex</span>
          <select value={sex} onChange={(e) => setSex(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Activity</span>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="sedentary">Sedentary</option>
            <option value="light">Light activity</option>
            <option value="moderate">Moderate</option>
            <option value="active">High activity</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-600">Goal</span>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="mt-2 rounded-xl border border-black/5 bg-zinc-50 px-3 py-2 text-zinc-950 focus:border-emerald-500 focus:outline-none">
            <option value="conservative">Conservative weight loss</option>
            <option value="moderate">Moderate weight loss</option>
            <option value="aggressive">Aggressive (not recommended)</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-lg bg-zinc-100 border border-black/5 p-5">
        <p className="text-sm text-zinc-700">Direct answer: your estimated TDEE is <strong>{tdee} kcal/day</strong>. A GLP-1-aware target is about <strong>{targetCalories} kcal/day</strong> (adjusted for activity and a conservative deficit to protect lean mass).</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-600">Estimated BMR</p>
            <div className="mt-1 text-2xl font-semibold text-zinc-950">{Math.round(bmr)} kcal</div>
          </div>
          <div>
            <p className="text-xs text-zinc-600">Estimated TDEE</p>
            <div className="mt-1 text-2xl font-semibold text-zinc-950">{tdee} kcal</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-zinc-600">Methodology: Mifflin–St Jeor BMR × activity factor, then conservative deficit applied (15% default) to preserve lean mass while allowing steady loss on GLP-1 therapy.</div>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-black/5 bg-white px-6 py-8">
        <h2>How many calories should you eat on GLP-1?</h2>
        <p><strong>Direct answer:</strong> it depends on your TDEE, but on GLP-1 we recommend a modest deficit (conservative: ~10–20%) rather than an aggressive cut — because appetite is already suppressed and lean-mass protection matters.</p>

        <h2>Why does the math change on GLP-1?</h2>
        <p><strong>Direct answer:</strong> GLP-1 reduces appetite and food volume tolerance. A too-aggressive target can lead to under-eating and unintended lean mass loss. That’s why conservative targets and higher protein are paired together.</p>

        <h2>When should you raise your calorie target?</h2>
        <p><strong>Direct answer:</strong> bump calories if you’re losing strength, feeling faint, or if weight loss is faster than 2% body weight per week consistently — those can be signs you’re losing too much lean mass or not fueling recovery.</p>

        <h2>What the evidence says</h2>
        <p><strong>Representative sources:</strong> STEP trial semaglutide outcomes and body composition analyses; clinical guidance on safe calorie floors for adults during weight loss.</p>
      </div>
    </section>
  );
}
