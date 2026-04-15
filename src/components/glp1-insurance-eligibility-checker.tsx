export function Glp1InsuranceEligibilityChecker() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Insurance Eligibility Checker</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This checker is being added to DietUnlocked and will help estimate whether a reader may meet common GLP-1 coverage criteria before they talk to a clinician or insurer.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: BMI, metabolic conditions, insurance type, and prior authorization context.
      </div>
    </section>
  );
}
