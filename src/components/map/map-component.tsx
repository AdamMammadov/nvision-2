"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import { incidents } from "@/lib/mock/incidents";

const customIcon = (color: string) =>
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

const coordinates: [number, number][] = [
  [40.4093, 49.8671],
  [40.4121, 49.8512],
  [40.4045, 49.8701],
  [40.4183, 49.8622],
];

export default function MapComponent() {
  return (
    <MapContainer
      center={[40.4093, 49.8671]}
      zoom={14}
      className="h-[600px] w-full z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {incidents.map((incident, index) => {
        const color =
          incident.status === "critical"
            ? "#ef4444"
            : incident.status === "resolved"
            ? "#10b981"
            : incident.status === "in_progress"
            ? "#eab308"
            : "#64748b";

        return (
          <Marker
            key={incident.id}
            position={coordinates[index]}
            icon={customIcon(color)}
          >
            <Popup>
              <div className="space-y-2">
                <h2 className="font-bold">
                  {incident.title}
                </h2>

                <p>{incident.location}</p>

                <p>
                  Status: {incident.status}
                </p>

                <p>
                  Assigned: {incident.assignedTo}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}