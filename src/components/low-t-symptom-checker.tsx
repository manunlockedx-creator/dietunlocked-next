"use client";

import { useMemo, useState } from "react";
import { AffiliateLink } from "@/components/affiliate-link";

const questions = [
  "Low sex drive or reduced morning erections",
  "Fatigue or low motivation",
  "Brain fog or poor concentration",
  "Loss of muscle or harder time building it back",
  "Increased body fat, especially around the waist",
  "Low mood or irritability",
  "Poor recovery from training",
  "Reduced confidence or drive",
] as const;

export function LowTSymptomChecker() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const score = useMemo(() => answers.reduce((sum, value) => sum + value, 0), [answers]);

  const result =
    score >= 16
      ? {
          label: "High symptom burden",
          tone: "border-red-400/30 bg-red-500/10",
          text: "Your symptom pattern is strong enough that proper testing makes sense before you guess or self-diagnose.",
          cta: { href: "/go/hims-trt", label: "Compare TRT clinics" },
        }
      : score >= 9
        ? {
            label: "Mixed signal",
            tone: "border-amber-400/30 bg-amber-500/10",
            text: "Some symptoms fit, but this is where labs, sleep, stress, and body composition usually separate signal from noise.",
            cta: { href: "/tools/free-testosterone-calculator", label: "Check your lab numbers first" },
          }
        : {
            label: "Lower likelihood",
            tone: "border-emerald-400/30 bg-emerald-500/10",
            text: "Your current symptom pattern is not especially suggestive of low testosterone on its own. Lifestyle, sleep, and stress may be the better first target.",
            cta: { href: "/blog", label: "Read the evidence-first guides" },
          };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#0d1117] p-8 text-zinc-100 shadow-2xl shadow-black/30">
      <h1 className="text-4xl font-semibold tracking-tight text-white">Low T Symptom Checker</h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
        This is not a diagnosis. It is a faster way to see whether your symptoms justify proper testing.
      </p>
      <div className="mt-8 space-y-5">
        {questions.map((question, index) => (
          <div key={question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-base font-medium text-white">{question}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[0, 1, 2, 3].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setAnswers((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)))
                  }
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    answers[index] === value ? "bg-white text-zinc-950" : "bg-zinc-900 text-zinc-300"
                  }`}
                >
                  {value === 0 ? "Never" : value === 1 ? "Sometimes" : value === 2 ? "Often" : "Almost always"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-8 rounded-2xl border p-6 ${result.tone}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">{result.label}</p>
        <p className="mt-3 text-lg leading-8 text-zinc-100">{result.text}</p>
        <p className="mt-2 text-sm text-zinc-400">Symptom score: {score} / 24</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <AffiliateLink
            href={result.cta.href}
            offer="symptom-checker"
            sourcePage="/tools/low-t-symptom-checker"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
          >
            {result.cta.label}
          </AffiliateLink>
          {score >= 16 ? (
            <a href="/tools/trt-cost-calculator" className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-100">
              Compare true TRT costs
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
