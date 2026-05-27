"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("./map-component"),
  {
    ssr: false,

    loading: () => (
      <div
        className="
          flex
          h-[600px]
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-800
          bg-slate-950
          text-slate-400
        "
      >
        Loading live map...
      </div>
    ),
  }
);

export default function LiveMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <Map />
    </div>
  );
}
