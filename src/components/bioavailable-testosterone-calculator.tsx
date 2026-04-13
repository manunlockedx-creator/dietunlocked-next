"use client";

import { useMemo, useState } from "react";

function estimateBioavailable(totalT: number, shbg: number, albumin: number) {
  const total = totalT * 3.467e-11;
  const s = shbg * 1e-9;
  const a = (albumin * 10) / 66430;
  const kaS = 1.0e9;
  const kaA = 3.6e4;
  const coefA = kaS * kaA * a + kaS * s + kaA * a - kaS * total + 1;
  const coefB = 1 + kaA * a + kaS * s - kaS * total - kaA * a * total;
  const coefC = -total;
  const freeMol = (-coefB + Math.sqrt(coefB * coefB - 4 * coefA * coefC)) / (2 * coefA);
  const freeNg = freeMol / 3.467e-11;
  const boundToAlbumin = freeMol * kaA * a;
  const bioMol = freeMol + boundToAlbumin;
  return Math.round((bioMol / 3.467e-11) * 100) / 100;
}

export function BioavailableTestosteroneCalculator() {
  const [totalT, setTotalT] = useState("450");
  const [shbg, setShbg] = useState("35");
  const [albumin, setAlbumin] = useState("4.3");
  const bioavailable = useMemo(() => estimateBioavailable(Number(totalT) || 0, Number(shbg) || 0, Number(albumin) || 0), [albumin, shbg, totalT]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#0d1117] p-8 text-zinc-100 shadow-2xl shadow-black/30">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Bioavailable Testosterone Calculator</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">Bioavailable testosterone includes free testosterone plus the fraction loosely bound to albumin. In practice, it helps when total T looks okay but symptoms still don’t line up.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Total Testosterone (ng/dL)</span><input value={totalT} onChange={(e) => setTotalT(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>SHBG (nmol/L)</span><input value={shbg} onChange={(e) => setShbg(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
        <label className="space-y-2 text-sm font-medium text-zinc-200"><span>Albumin (g/dL)</span><input value={albumin} onChange={(e) => setAlbumin(e.target.value)} className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white" /></label>
      </div>
      <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">Estimated bioavailable testosterone</p>
        <p className="mt-2 text-4xl font-semibold text-white">{Number.isFinite(bioavailable) ? bioavailable : 0} <span className="text-base font-medium text-zinc-400">ng/dL</span></p>
      </div>
    </section>
  );
}
