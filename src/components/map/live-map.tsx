"use client";

import "@/components/map/fix-leaflet";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("./map-component"),
  {
    ssr: false,
  }
);

export default function LiveMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <Map />
    </div>
  );
}