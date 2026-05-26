"use client";

import dynamic from "next/dynamic";
import DashboardLayout from "@/components/layout/dashboard-layout";

// LiveMap komponentini SSR söndürülmüş şəkildə dinamik yükləyirik
const LiveMap = dynamic(() => import("@/components/map/live-map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-slate-100 rounded-lg animate-pulse">
      <p className="text-slate-500">Xəritə yüklənir...</p>
    </div>
  ),
});

export default function IncidentsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Live Incident Map
          </h1>

          <p className="mt-3 text-slate-400">
            Real-time municipality monitoring system
          </p>
        </div>
      </div>

      <div className="mt-10">
        <LiveMap />
      </div>
    </DashboardLayout>
  );
}
