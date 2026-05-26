"use client";

import { AlertTriangle } from "lucide-react";

const incidents = [
  {
    title: "Water explosion",
    severity: "Critical",
    score: 98,
    location: "Tebriz Street",
  },

  {
    title: "Electric outage",
    severity: "High",
    score: 84,
    location: "Aga Neymatulla",
  },

  {
    title: "Road collapse risk",
    severity: "Medium",
    score: 63,
    location: "Ataturk Avenue",
  },
];

export default function PriorityEngine() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-red-500/20 p-3 text-red-400">
          <AlertTriangle size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Priority Engine
          </h2>

          <p className="text-sm text-slate-400">
            Incident criticality ranking
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className="
              rounded-xl
              border
              border-slate-800
              bg-slate-950
              p-4
              transition-all
              hover:border-red-500/30
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {incident.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {incident.location}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-red-400">
                  {incident.severity}
                </p>

                <h2 className="text-2xl font-bold text-white">
                  {incident.score}
                </h2>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                style={{
                  width: `${incident.score}%`,
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-red-500
                  to-orange-400
                "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}