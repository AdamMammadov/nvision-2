"use client";

import { useIncidentsStore } from "@/store/use-incidents-store";

export default function AIHeatmap() {
  const incidents =
    useIncidentsStore(
      (state) => state.incidents
    );

  const high =
    incidents.filter(
      (i) => i.severity === "high"
    ).length;

  const medium =
    incidents.filter(
      (i) => i.severity === "medium"
    ).length;

  const low =
    incidents.filter(
      (i) => i.severity === "low"
    ).length;

  const zones = [
    {
      name: "Tebriz District",
      level:
        high > 6
          ? "HIGH"
          : high > 3
          ? "MEDIUM"
          : "LOW",
      color:
        high > 6
          ? "from-red-500 to-red-700"

          : high > 3
          ? "from-yellow-500 to-yellow-700"

          : "from-emerald-500 to-emerald-700",
    },

    {
      name: "Aga Neymatulla",
      level:
        medium > 5
          ? "MEDIUM"
          : "LOW",
      color:
        medium > 5
          ? "from-yellow-500 to-yellow-700"

          : "from-emerald-500 to-emerald-700",
    },

    {
      name: "Montin Area",
      level:
        high > 8
          ? "HIGH"
          : "LOW",
      color:
        high > 8
          ? "from-red-500 to-red-700"

          : "from-emerald-500 to-emerald-700",
    },

    {
      name: "Metro Zone",
      level:
        medium > 2
          ? "MEDIUM"
          : "LOW",
      color:
        medium > 2
          ? "from-yellow-500 to-yellow-700"

          : "from-emerald-500 to-emerald-700",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            AI Heatmap Analysis
          </h2>

          <p className="mt-2 text-slate-400">
            District-wide predictive danger scanning
          </p>
        </div>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          LIVE AI SCAN
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        {zones.map((zone) => (
          <div
            key={zone.name}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-950
            "
          >
            <div
              className={`
                h-3
                bg-gradient-to-r
                ${zone.color}
              `}
            />

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {zone.name}
                </h3>

                <div
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    ${
                      zone.level === "HIGH"
                        ? "bg-red-500/20 text-red-400"

                        : zone.level === "MEDIUM"
                        ? "bg-yellow-500/20 text-yellow-400"

                        : "bg-emerald-500/20 text-emerald-400"
                    }
                  `}
                >
                  {zone.level}
                </div>
              </div>

              <div className="mt-6">
                <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`
                      h-full
                      animate-pulse
                      bg-gradient-to-r
                      ${zone.color}
                      ${
                        zone.level === "HIGH"
                          ? "w-[88%]"

                          : zone.level === "MEDIUM"
                          ? "w-[58%]"

                          : "w-[26%]"
                      }
                    `}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <p className="text-slate-400">
                    AI Risk Score
                  </p>

                  <p className="font-semibold">
                    {zone.level === "HIGH"
                      ? "8.9/10"

                      : zone.level === "MEDIUM"
                      ? "5.4/10"

                      : "2.1/10"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}