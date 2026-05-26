import DashboardLayout from "@/components/layout/dashboard-layout";
import LiveMap from "@/components/map/live-map";

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
