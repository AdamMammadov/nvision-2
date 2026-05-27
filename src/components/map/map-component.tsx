"use client";

import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useIncidentsStore } from "@/store/use-incidents-store";

type LeafletType = typeof import("leaflet");

const coordinates: [number, number][] = [
  [40.4093, 49.8671],
  [40.4121, 49.8512],
  [40.4045, 49.8701],
  [40.4183, 49.8622],
  [40.4062, 49.8544],
  [40.4144, 49.8655],
  [40.4012, 49.8731],
  [40.4201, 49.8581],
  [40.4164, 49.8474],
  [40.4082, 49.8791],
  [40.3991, 49.8612],
  [40.4222, 49.8699],
];

export default function MapComponent() {
  const incidents =
    useIncidentsStore(
      (state) => state.incidents
    );

  const [L, setL] =
    useState<LeafletType | null>(
      null
    );

  useEffect(() => {
    import("leaflet").then(setL);
  }, []);

  if (!L) {
    return (
      <div className="flex h-[600px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
        <p className="text-slate-400">
          Loading map...
        </p>
      </div>
    );
  }

  const customIcon = (
    color: string
  ) =>
    new L.DivIcon({
      className: "",
      html: `
        <div
          style="
            width:18px;
            height:18px;
            border-radius:999px;
            background:${color};
            border:3px solid white;
            box-shadow:0 0 20px ${color};
          "
        ></div>
      `,
    });

  return (
    <MapContainer
      center={[40.4093, 49.8671]}
      zoom={14}
      className="z-0 h-[600px] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {incidents.map(
        (incident, index) => {
          const color =
            incident.severity ===
            "high"
              ? "#ef4444"
              : incident.severity ===
                "medium"
              ? "#eab308"
              : "#10b981";

          const position =
            coordinates[
              index %
                coordinates.length
            ];

          return (
            <Marker
              key={incident.id}
              position={position}
              icon={customIcon(
                color
              )}
            >
              <Popup>
                <div className="min-w-[220px] space-y-3">
                  <div>
                    <h2 className="text-lg font-bold">
                      {
                        incident.title
                      }
                    </h2>

                    <p className="text-sm text-slate-500">
                      {
                        incident.location
                      }
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
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
                      {
                        incident.severity
                      }{" "}
                      risk
                    </div>

                    <div
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        ${
                          incident.status ===
                          "critical"
                            ? "bg-red-500/20 text-red-400"
                            : incident.status ===
                              "in_progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-emerald-500/20 text-emerald-400"
                        }
                      `}
                    >
                      {
                        incident.status
                      }
                    </div>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">
                        Assigned:
                      </span>{" "}
                      {
                        incident.assignedTo
                      }
                    </p>

                    <p>
                      <span className="font-semibold">
                        Time:
                      </span>{" "}
                      {
                        incident.createdAt
                      }
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        }
      )}
    </MapContainer>
  );
}
