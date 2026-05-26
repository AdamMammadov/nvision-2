"use client";

import {
  Bot,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

const recommendations = [
  {
    title:
      "Water infrastructure risk detected",
    description:
      "AI predicts increased water pipe failure probability in Tebriz district within next 48 hours.",
    type: "warning",
  },

  {
    title:
      "Inspector route optimized",
    description:
      "Field inspector route updated to reduce response time by 24%.",
    type: "success",
  },

  {
    title:
      "Traffic congestion prevention",
    description:
      "AI recommends delaying maintenance work near metro zone between 17:00-19:00.",
    type: "info",
  },

  {
    title:
      "Emergency response escalation",
    description:
      "Critical SLA threshold exceeded. Escalation sent automatically.",
    type: "warning",
  },
];

export default function AICopilot() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            rounded-2xl
            bg-cyan-500/10
            p-3
          "
        >
          <Bot className="text-cyan-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            AI Municipality Copilot
          </h2>

          <p className="mt-1 text-slate-400">
            Autonomous municipality assistance engine
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {recommendations.map(
          (item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-950
                p-5
                transition-all
                hover:border-cyan-500/30
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                    mt-1
                    rounded-xl
                    p-2
                    ${
                      item.type === "warning"
                        ? "bg-red-500/10 text-red-400"

                        : item.type === "success"
                        ? "bg-emerald-500/10 text-emerald-400"

                        : "bg-cyan-500/10 text-cyan-400"
                    }
                  `}
                >
                  {item.type === "warning" ? (
                    <AlertTriangle size={18} />
                  ) : item.type ===
                    "success" ? (
                    <ShieldCheck size={18} />
                  ) : (
                    <Sparkles size={18} />
                  )}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}