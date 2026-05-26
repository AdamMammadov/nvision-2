"use client";

import { useIncidentsStore } from "@/store/use-incidents-store";

export default function LiveStats() {
  const incidents =
    useIncidentsStore(
      (state) => state.incidents
    );

  const activeIncidents =
    incidents.filter(
      (incident) =>
        incident.status !== "resolved"
    ).length;

  const highRisk =
    incidents.filter(
      (incident) =>
        incident.severity === "high"
    ).length;

  const resolved =
    incidents.filter(
      (incident) =>
        incident.status === "resolved"
    ).length;

  const sla =
    incidents.length === 0
      ? 100
      : Math.round(
          (resolved /
            incidents.length) *
            100
        );

  return (
    <div className="mt-10 grid grid-cols-4 gap-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-cyan-500/30">
        <p className="text-sm text-slate-400">
          Active Incidents
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          {activeIncidents}
        </h2>

        <p className="mt-2 text-xs text-cyan-400">
          Live AI monitoring
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-red-500/30">
        <p className="text-sm text-slate-400">
          High Risk Zones
        </p>

        <h2 className="mt-4 text-4xl font-bold text-red-400">
          {highRisk}
        </h2>

        <p className="mt-2 text-xs text-red-400">
          AI danger detection
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-cyan-500/30">
        <p className="text-sm text-slate-400">
          Active Inspectors
        </p>

        <h2 className="mt-4 text-4xl font-bold text-cyan-400">
          38
        </h2>

        <p className="mt-2 text-xs text-cyan-400">
          Field monitoring online
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-emerald-500/30">
        <p className="text-sm text-slate-400">
          SLA Compliance
        </p>

        <h2 className="mt-4 text-4xl font-bold text-emerald-400">
          {sla}%
        </h2>

        <p className="mt-2 text-xs text-emerald-400">
          Resolution performance
        </p>
      </div>
    </div>
  );
}