"use client";

import { useIncidentsStore } from "@/store/use-incidents-store";

const statusColors = {
  critical:
    "bg-red-500/20 text-red-400 border-red-500/20",

  in_progress:
    "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",

  resolved:
    "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",

  pending:
    "bg-slate-500/20 text-slate-300 border-slate-500/20",
};

export default function IncidentsTable() {
  const incidents =
    useIncidentsStore(
      (state) => state.incidents
    );

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Live Incident Feed
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Real-time municipality incidents and reports
            </p>
          </div>

          <div
            className="
              rounded-xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
            "
          >
            <p className="text-sm text-cyan-400">
              {incidents.length} Active Records
            </p>
          </div>
        </div>
      </div>

      <div className="max-h-[650px] overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800 text-left">
              <th className="p-5 text-sm font-medium text-slate-400">
                Incident
              </th>

              <th className="p-5 text-sm font-medium text-slate-400">
                Location
              </th>

              <th className="p-5 text-sm font-medium text-slate-400">
                Assigned
              </th>

              <th className="p-5 text-sm font-medium text-slate-400">
                Severity
              </th>

              <th className="p-5 text-sm font-medium text-slate-400">
                Status
              </th>

              <th className="p-5 text-sm font-medium text-slate-400">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {incidents.map((incident) => (
              <tr
                key={incident.id}
                className="
                  border-b
                  border-slate-800
                  transition-all
                  hover:bg-slate-800/50
                "
              >
                <td className="p-5">
                  <div>
                    <p className="font-medium">
                      {incident.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Incident ID:
                      #{incident.id}
                    </p>
                  </div>
                </td>

                <td className="p-5 text-slate-300">
                  {incident.location}
                </td>

                <td className="p-5 text-slate-300">
                  {incident.assignedTo}
                </td>

                <td className="p-5">
                  <div
                    className={`
                      inline-flex
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      ${
                        incident.severity ===
                        "high"
                          ? "bg-red-500/20 text-red-400"

                          : incident.severity ===
                            "medium"
                          ? "bg-yellow-500/20 text-yellow-400"

                          : "bg-emerald-500/20 text-emerald-400"
                      }
                    `}
                  >
                    {incident.severity}
                  </div>
                </td>

                <td className="p-5">
                  <div
                    className={`
                      inline-flex
                      rounded-full
                      border
                      px-3
                      py-1
                      text-sm
                      ${
                        statusColors[
                          incident.status as keyof typeof statusColors
                        ]
                      }
                    `}
                  >
                    {incident.status}
                  </div>
                </td>

                <td className="p-5 text-slate-400">
                  {incident.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}