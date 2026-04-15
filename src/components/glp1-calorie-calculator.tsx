export function Glp1CalorieCalculator() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
      <h1 className="text-4xl font-semibold tracking-tight text-white">GLP-1 Calorie Calculator</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
        This calculator is being wired into the DietUnlocked starter now. It will estimate a practical calorie target for people using Ozempic, Wegovy, Zepbound, or Mounjaro while protecting lean mass and accounting for reduced appetite.
      </p>
      <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-400">
        Planned inputs: age, sex, height, weight, activity, target rate of loss, and medication context.
      </div>
    </section>
  );
}
