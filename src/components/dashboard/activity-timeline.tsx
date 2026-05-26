"use client";

import {
  Activity,
  BellRing,
  ShieldAlert,
} from "lucide-react";

const activities = [
  {
    icon: BellRing,
    text: "New water leakage reported",
    time: "2 min ago",
    color: "text-red-400",
  },

  {
    icon: Activity,
    text: "Inspector assigned automatically",
    time: "5 min ago",
    color: "text-cyan-400",
  },

  {
    icon: ShieldAlert,
    text: "AI detected possible road collapse",
    time: "12 min ago",
    color: "text-yellow-400",
  },

  {
    icon: Activity,
    text: "Incident resolved successfully",
    time: "20 min ago",
    color: "text-emerald-400",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">
        Live Activity Feed
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Real-time municipality operations
      </p>

      <div className="mt-8 space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex gap-4"
            >
              <div
                className={`
                  mt-1
                  rounded-xl
                  bg-slate-800
                  p-3
                  ${activity.color}
                `}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <p className="font-medium">
                  {activity.text}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}