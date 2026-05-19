"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", incidents: 24 },
  { day: "Tue", incidents: 18 },
  { day: "Wed", incidents: 32 },
  { day: "Thu", incidents: 21 },
  { day: "Fri", incidents: 43 },
  { day: "Sat", incidents: 28 },
  { day: "Sun", incidents: 15 },
];

export default function IncidentsChart() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Weekly Incident Analytics
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Real-time municipality activity overview
        </p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="incidentGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#06b6d4"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              stroke="#64748b"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="incidents"
              stroke="#06b6d4"
              fill="url(#incidentGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}