export default function AIStatusCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-500/20
        bg-gradient-to-br
        from-cyan-500/10
        to-slate-900
        p-6
      "
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10">
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
          AI Prediction Engine
        </div>

        <h2 className="mt-5 text-3xl font-bold">
          87%
        </h2>

        <p className="mt-2 text-slate-300">
          Infrastructure risk prediction accuracy
        </p>

        <div className="mt-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <p className="text-sm text-emerald-400">
            AI systems operational
          </p>
        </div>
      </div>
    </div>
  );
}