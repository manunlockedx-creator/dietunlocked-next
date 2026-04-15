export function Glp1MedicationCostComparisonCalculator() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Medication Cost Comparison Calculator</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This calculator is being prepared for DietUnlocked and will compare GLP-1 costs across insurance, cash-pay, telehealth, and meal-support scenarios.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: medication, monthly dose, insurance coverage, telehealth fees, labs, and add-on support costs.
      </div>
    </section>
  );
}
