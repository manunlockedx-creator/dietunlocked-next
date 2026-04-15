export function Glp1ProteinCalculator() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Protein Requirement Calculator</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This calculator is being set up for DietUnlocked and will estimate a practical daily protein target for people on GLP-1 medications who want to preserve muscle while losing weight.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: current weight, goal weight, activity, age, and appetite tolerance.
      </div>
    </section>
  );
}
