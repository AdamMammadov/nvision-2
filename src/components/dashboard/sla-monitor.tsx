"use client";

import { Clock3 } from "lucide-react";

const incidents = [
  {
    title: "Water leakage",
    remaining: "01:12:44",
    status: "danger",
  },

  {
    title: "Street light outage",
    remaining: "02:44:11",
    status: "warning",
  },

  {
    title: "Road collapse",
    remaining: "00:24:19",
    status: "critical",
  },
];

export default function SLAMonitor() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-orange-500/20 p-3 text-orange-400">
          <Clock3 size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            SLA Countdown Monitor
          </h2>

          <p className="text-sm text-slate-400">
            Real-time deadline tracking
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className={`
              rounded-xl
              border
              p-4
              transition-all

              ${
                incident.status === "critical"
                  ? "border-red-500/30 bg-red-500/10 animate-pulse"
                  : incident.status === "warning"
                  ? "border-yellow-500/20 bg-yellow-500/5"
                  : "border-slate-800 bg-slate-950"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {incident.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  SLA Remaining Time
                </p>
              </div>

              <div className="text-right">
                <h2
                  className={`
                    text-3xl
                    font-bold

                    ${
                      incident.status === "critical"
                        ? "text-red-400"
                        : incident.status === "warning"
                        ? "text-yellow-400"
                        : "text-cyan-400"
                    }
                  `}
                >
                  {incident.remaining}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}