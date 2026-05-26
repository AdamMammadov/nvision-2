"use client";

import { Flame } from "lucide-react";

const zones = [
  {
    area: "Tebriz Street",
    risk: 94,
    level: "Critical",
  },

  {
    area: "Ataturk Avenue",
    risk: 76,
    level: "High",
  },

  {
    area: "Aga Neymatulla",
    risk: 58,
    level: "Medium",
  },

  {
    area: "Faiq Yusifov",
    risk: 33,
    level: "Low",
  },
];

export default function HeatmapPanel() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-red-500/20 p-3 text-red-400">
          <Flame size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Heat Zones
          </h2>

          <p className="text-sm text-slate-400">
            Predictive infrastructure risks
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {zones.map((zone, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {zone.area}
                </h3>

                <p className="text-xs text-slate-400">
                  {zone.level} risk zone
                </p>
              </div>

              <h2
                className={`
                  text-2xl
                  font-bold

                  ${
                    zone.risk > 80
                      ? "text-red-400"
                      : zone.risk > 60
                      ? "text-orange-400"
                      : zone.risk > 40
                      ? "text-yellow-400"
                      : "text-emerald-400"
                  }
                `}
              >
                {zone.risk}%
              </h2>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                style={{
                  width: `${zone.risk}%`,
                }}
                className={`
                  h-full
                  rounded-full

                  ${
                    zone.risk > 80
                      ? "bg-gradient-to-r from-red-500 to-orange-500"
                      : zone.risk > 60
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                      : zone.risk > 40
                      ? "bg-gradient-to-r from-yellow-500 to-lime-400"
                      : "bg-gradient-to-r from-emerald-500 to-cyan-500"
                  }
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}