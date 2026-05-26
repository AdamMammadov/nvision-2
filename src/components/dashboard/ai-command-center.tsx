"use client";

import {
  ShieldAlert,
  BrainCircuit,
  Activity,
  Radar,
} from "lucide-react";

export default function AICommandCenter() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-gradient-to-br
        from-slate-950
        to-slate-900
        p-6
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            AI Command Center
          </h2>

          <p className="mt-2 text-slate-400">
            Predictive municipality intelligence
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-emerald-500/20
            bg-emerald-500/10
            px-4
            py-2
          "
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <p className="text-sm text-emerald-400">
            AI ONLINE
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        {/* THREAT LEVEL */}

        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-red-400" />

            <h3 className="text-xl font-semibold">
              District Threat Level
            </h3>
          </div>

          <div className="mt-6">
            <div className="h-4 overflow-hidden rounded-full bg-slate-800">
              <div
                className="
                  h-full
                  w-[72%]
                  animate-pulse
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-500
                  to-red-500
                "
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                Risk Analysis
              </p>

              <p className="font-bold text-red-400">
                HIGH
              </p>
            </div>
          </div>
        </div>

        {/* AI PREDICTION */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="flex items-center gap-3">
            <BrainCircuit className="text-cyan-400" />

            <h3 className="text-xl font-semibold">
              Predictive Engine
            </h3>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-slate-900 p-3">
              <p className="text-sm text-slate-400">
                Predicted Water Failure
              </p>

              <p className="mt-1 font-semibold">
                Tebriz Street
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-3">
              <p className="text-sm text-slate-400">
                Estimated Risk Window
              </p>

              <p className="mt-1 font-semibold text-yellow-400">
                Next 48 Hours
              </p>
            </div>
          </div>
        </div>

        {/* LIVE AI */}

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <div className="flex items-center gap-3">
            <Activity className="text-emerald-400" />

            <h3 className="text-xl font-semibold">
              Live AI Decisions
            </h3>
          </div>

          <div className="mt-6 space-y-3">
            <div className="rounded-xl bg-slate-900 p-3 text-sm">
              Route inspector redirected to Zone 4
            </div>

            <div className="rounded-xl bg-slate-900 p-3 text-sm">
              SLA escalation sent to Azersu
            </div>

            <div className="rounded-xl bg-slate-900 p-3 text-sm">
              Traffic disruption risk detected
            </div>
          </div>
        </div>

        {/* RADAR */}

        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
          <div className="flex items-center gap-3">
            <Radar className="text-purple-400" />

            <h3 className="text-xl font-semibold">
              Emergency Radar
            </h3>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div
              className="
                relative
                flex
                h-48
                w-48
                items-center
                justify-center
                rounded-full
                border
                border-purple-500/30
              "
            >
              <div className="absolute h-40 w-40 animate-ping rounded-full border border-purple-500/20" />

              <div className="absolute h-28 w-28 rounded-full border border-purple-500/30" />

              <div className="h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_20px_#c084fc]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}