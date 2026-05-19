"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Map,
  ShieldAlert,
  Users,
  BarChart3,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Incidents",
    icon: ShieldAlert,
    href: "/incidents",
  },
  {
    title: "Inspectors",
    icon: Users,
    href: "/inspectors",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          N-Vision
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Municipality Control Center
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.title}
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                px-4
                py-3
                transition-all
                ${
                  isActive
                    ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                    : "border-transparent bg-slate-900 text-slate-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}