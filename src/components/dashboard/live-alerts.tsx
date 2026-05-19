"use client";

import { Siren } from "lucide-react";

const alerts = [
  {
    id: 1,
    text: "Critical water incident detected",
    time: "2 min ago",
  },

  {
    id: 2,
    text: "AI predicted electricity outage risk",
    time: "10 min ago",
  },

  {
    id: 3,
    text: "Road damage escalation warning",
    time: "15 min ago",
  },
];

export default function LiveAlerts() {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-red-500/20 p-3">
          <Siren className="text-red-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Live AI Alerts
          </h2>

          <p className="text-sm text-slate-400">
            Real-time municipality warnings
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="
              rounded-xl
              border
              border-red-500/10
              bg-slate-900/60
              p-4
            "
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">
                {alert.text}
              </p>

              <span className="text-sm text-slate-400">
                {alert.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}