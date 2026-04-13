"use client";

import { useMemo, useState } from "react";
import { AffiliateLink } from "@/components/affiliate-link";

const clinicDefaults = {
  premium: { monthly: 249, labsQuarterly: 99, followupsQuarterly: 0 },
  mid: { monthly: 179, labsQuarterly: 85, followupsQuarterly: 0 },
  budget: { monthly: 129, labsQuarterly: 69, followupsQuarterly: 0 },
};

export function TrtCostCalculator() {
  const [monthly, setMonthly] = useState("179");
  const [labsQuarterly, setLabsQuarterly] = useState("85");
  const [followupsQuarterly, setFollowupsQuarterly] = useState("0");

  const annual = useMemo(() => {
    const month = Number(monthly) || 0;
    const labs = Number(labsQuarterly) || 0;
    const followups = Number(followupsQuarterly) || 0;
    return month * 12 + labs * 4 + followups * 4;
  }, [followupsQuarterly, labsQuarterly, monthly]);

  const monthlyTrueCost = Math.round((annual / 12) * 100) / 100;

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#0d1117] p-8 text-zinc-100 shadow-2xl shadow-black/30">
      <h1 className="text-4xl font-semibold tracking-tight text-white">TRT Cost Calculator</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
        Most clinics advertise the monthly fee and quietly hide labs, follow-ups, and refill friction. This calculator shows the true annual cost.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={() => { setMonthly(String(clinicDefaults.premium.monthly)); setLabsQuarterly(String(clinicDefaults.premium.labsQuarterly)); setFollowupsQuarterly(String(clinicDefaults.premium.followupsQuarterly)); }} className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-300">Premium clinic</button>
        <button type="button" onClick={() => { setMonthly(String(clinicDefaults.mid.monthly)); setLabsQuarterly(String(clinicDefaults.mid.labsQuarterly)); setFollowupsQuarterly(String(clinicDefaults.mid.followupsQuarterly)); }} className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-300">Mid-tier clinic</button>
        <button type="button" onClick={() => { setMonthly(String(clinicDefaults.budget.monthly)); setLabsQuarterly(String(clinicDefaults.budget.labsQuarterly)); setFollowupsQuarterly(String(clinicDefaults.budget.followupsQuarterly)); }} className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-300">Budget clinic</button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Monthly clinic fee ($)</span><input value={monthly} onChange={(e) => setMonthly(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Quarterly labs ($)</span><input value={labsQuarterly} onChange={(e) => setLabsQuarterly(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Quarterly follow-ups ($)</span><input value={followupsQuarterly} onChange={(e) => setFollowupsQuarterly(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
      </div>
      <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">True annual cost</p>
        <p className="mt-2 text-4xl font-semibold text-white">${annual.toLocaleString()}</p>
        <p className="mt-2 text-sm text-zinc-400">About ${monthlyTrueCost.toLocaleString()} per month once the hidden extras are included.</p>
        <AffiliateLink href="/go/hims-trt" offer="hims-trt" sourcePage="/tools/trt-cost-calculator" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950">Compare clinic pricing</AffiliateLink>
      </div>
    </section>
  );
}
