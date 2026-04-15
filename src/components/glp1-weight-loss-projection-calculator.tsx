export function Glp1WeightLossProjectionCalculator() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Weight Loss Projection Calculator</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This calculator is being built for DietUnlocked and will estimate realistic GLP-1 weight loss ranges based on medication type, starting body weight, and timeline.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: starting weight, medication, timeline, dose progression, and expected adherence.
      </div>
    </section>
  );
}
