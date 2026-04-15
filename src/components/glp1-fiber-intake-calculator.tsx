export function Glp1FiberIntakeCalculator() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Fiber Intake Calculator</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This calculator is being added to DietUnlocked and will estimate a useful daily fiber target to support digestion and reduce constipation risk on GLP-1 medications.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: calorie intake, food tolerance, hydration, and GI side effect context.
      </div>
    </section>
  );
}
