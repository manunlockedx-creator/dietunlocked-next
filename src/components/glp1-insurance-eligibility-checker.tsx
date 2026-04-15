"use client";

import { useState } from "react";

export function Glp1InsuranceEligibilityChecker() {
  const [unit, setUnit] = useState("lb");
  const [weight, setWeight] = useState(220);
  const [height, setHeight] = useState(70);
  const [comorb, setComorb] = useState({ diabetes: true, htn: false, sleepApnea: false });

  const weightKg = unit === "lb" ? weight * 0.45359237 : weight;
  const heightM = (unit === "lb" ? height * 2.54 : height) / 100;
  const bmi = +(weightKg / (heightM * heightM)).toFixed(1);

  // Common rule of thumb: BMI >=30 qualifies; BMI >=27 with comorbidity often considered
  const qualifies = bmi >= 30 || (bmi >= 27 && Object.values(comorb).some(Boolean));

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">GLP-1 Insurance Eligibility Checker</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weight unit</span>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white">
            <option value="lb">lb</option>
            <option value="kg">kg</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Weight ({unit})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-zinc-400">Height ({unit === 'lb' ? 'in' : 'cm'})</span>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-2 rounded-md bg-black/10 px-3 py-2 text-white" />
        </label>
      </div>

      <div className="mt-4">
        <p className="text-sm text-zinc-300">Comorbidities (select any that apply):</p>
        <div className="mt-2 flex gap-4">
          <label className="text-sm"><input type="checkbox" checked={comorb.diabetes} onChange={(e)=>setComorb({...comorb, diabetes:e.target.checked})} className="mr-2"/>Type 2 diabetes</label>
          <label className="text-sm"><input type="checkbox" checked={comorb.htn} onChange={(e)=>setComorb({...comorb, htn:e.target.checked})} className="mr-2"/>Hypertension</label>
          <label className="text-sm"><input type="checkbox" checked={comorb.sleepApnea} onChange={(e)=>setComorb({...comorb, sleepApnea:e.target.checked})} className="mr-2"/>Sleep apnea</label>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-black/10 p-5">
        <p className="text-sm text-zinc-300">Your BMI estimate: <strong>{bmi}</strong></p>
        <p className="mt-2 text-sm text-zinc-300">Quick eligibility heuristic: <strong>{qualifies ? 'Likely to meet common coverage thresholds' : 'May not meet typical coverage thresholds'}</strong></p>
        <p className="mt-2 text-sm text-zinc-400">Note: actual coverage rules vary by insurer. This is meant as a quick pre-check, not an insurance determination.</p>
      </div>

      <div className="article-content mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] px-6 py-8">
        <h2>How do insurers usually decide who gets GLP-1 coverage?</h2>
        <p><strong>Direct answer:</strong> most common public criteria are BMI ≥30, or BMI ≥27 with specific weight-related comorbidities (type 2 diabetes, sleep apnea, etc.).</p>

        <h2>What should you do next if you look eligible?</h2>
        <p><strong>Direct answer:</strong> get documentation of BMI and comorbidities from your clinician, check your plan’s prior authorization requirements, and compare telehealth programs if coverage is denied.</p>
      </div>
    </section>
  );
}
