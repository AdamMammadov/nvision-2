"use client";

import { useEffect } from "react";

import DashboardLayout from "@/components/layout/dashboard-layout";

import IncidentsTable from "@/components/incidents/incidents-table";

import IncidentsChart from "@/components/charts/incidents-chart";

import AIStatusCard from "@/components/dashboard/ai-status-card";

import LiveAlerts from "@/components/dashboard/live-alerts";

import CreateIncidentModal from "@/components/incidents/create-incident-modal";

import AISimulator from "@/components/dashboard/ai-simulator";

import LiveStats from "@/components/dashboard/live-stats";

import AICommandCenter from "@/components/dashboard/ai-command-center";

import AIHeatmap from "@/components/dashboard/ai-heatmap";

import AICopilot from "@/components/dashboard/ai-copilot";

import PriorityEngine from "@/components/dashboard/priority-engine";

import SLAMonitor from "@/components/dashboard/sla-monitor";

import HeatmapPanel from "@/components/dashboard/heatmap-panel";

import ActivityTimeline from "@/components/dashboard/activity-timeline";

import { useIncidentsStore } from "@/store/use-incidents-store";

export default function DashboardPage() {
  const fetchIncidents =
    useIncidentsStore(
      (state) => state.fetchIncidents
    );

  useEffect(() => {
    fetchIncidents();

    const interval = setInterval(() => {
      fetchIncidents();
    }, 15000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <AISimulator />

      {/* HEADER */}

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
          <div
            className="
              rounded-2xl
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-5
              py-3
            "
          >
            <p className="text-sm text-emerald-400">
              System Active
            </p>
          </div>

          <CreateIncidentModal />
        </div>
      </div>

      {/* LIVE STATS */}

      <LiveStats />

      {/* AI COMMAND CENTER */}

      <div className="mt-10">
        <AICommandCenter />
      </div>

      {/* AI HEATMAP */}

      <div className="mt-10">
        <AIHeatmap />
      </div>

      {/* AI COPILOT */}

      <div className="mt-10">
        <AICopilot />
      </div>

      {/* INCIDENT TABLE */}

      <div className="mt-10">
        <IncidentsTable />
      </div>

      {/* ANALYTICS + AI */}

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 min-w-0">
          <IncidentsChart />
        </div>

        <AIStatusCard />
      </div>

      {/* SLA + PRIORITY + ALERTS */}

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <PriorityEngine />

        <SLAMonitor />

        <LiveAlerts />
      </div>

      {/* AI HEAT ZONES + LIVE ACTIVITY */}

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <HeatmapPanel />

        <ActivityTimeline />
      </div>
    </DashboardLayout>
  );
}