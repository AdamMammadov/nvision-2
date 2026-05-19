import DashboardLayout from "@/components/layout/dashboard-layout";

import IncidentsTable from "@/components/incidents/incidents-table";

import IncidentsChart from "@/components/charts/incidents-chart";

import AIStatusCard from "@/components/dashboard/ai-status-card";

import LiveAlerts from "@/components/dashboard/live-alerts";

import CreateIncidentModal from "@/components/incidents/create-incident-modal";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            N-Vision 2.0
          </h1>

          <p className="mt-3 text-slate-400">
            AI-powered municipality management platform
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3">
            <p className="text-sm text-emerald-400">
              System Active
            </p>
          </div>

          <CreateIncidentModal />
        </div>
      </div>

      {/* TOP STATS */}

      <div className="mt-10 grid grid-cols-4 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            Active Incidents
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            124
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            High Risk Zones
          </p>

          <h2 className="mt-4 text-4xl font-bold text-red-400">
            12
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            Active Inspectors
          </p>

          <h2 className="mt-4 text-4xl font-bold text-cyan-400">
            38
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">
            SLA Compliance
          </p>

          <h2 className="mt-4 text-4xl font-bold text-emerald-400">
            94%
          </h2>
        </div>
      </div>

      {/* INCIDENT TABLE */}

      <IncidentsTable />

      {/* ANALYTICS + AI */}

      <div className="mt-10 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <IncidentsChart />
        </div>

        <AIStatusCard />
      </div>

      {/* ALERTS */}

      <div className="mt-10">
        <LiveAlerts />
      </div>
    </DashboardLayout>
  );
}