"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";

import { Plus } from "lucide-react";

import { useIncidentsStore } from "@/store/use-incidents-store";

export default function CreateIncidentModal() {
  const [title, setTitle] = useState("");

  const [location, setLocation] =
    useState("");

  const [severity, setSeverity] =
    useState<
      "high" | "medium" | "low"
    >("high");

  const [open, setOpen] =
    useState(false);

  const addIncident =
    useIncidentsStore(
      (state) => state.addIncident
    );

  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Dialog.Trigger asChild>
        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-cyan-500
            px-5
            py-3
            font-medium
            text-black
            transition-all
            hover:scale-105
          "
        >
          <Plus size={18} />

          Add Incident
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
          "
        />

        <Dialog.Content
          className="
            fixed
            left-1/2
            top-1/2
            w-[95%]
            max-w-xl
            -translate-x-1/2
            -translate-y-1/2
            rounded-2xl
            border
            border-slate-800
            bg-slate-950
            p-8
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <Dialog.Title className="text-3xl font-bold">
                Create Incident
              </Dialog.Title>

              <p className="mt-2 text-slate-400">
                Add a new municipality issue
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Incident Title
              </label>

              <input
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Water leakage..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  outline-none
                  transition-all
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Location
              </label>

              <input
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Tebriz Street..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  outline-none
                  transition-all
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Severity
              </label>

              <select
                value={severity}
                onChange={(e) =>
                  setSeverity(
                    e.target.value as
                      | "high"
                      | "medium"
                      | "low"
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  outline-none
                  focus:border-cyan-500
                "
              >
                <option value="high">
                  High Risk
                </option>

                <option value="medium">
                  Medium Risk
                </option>

                <option value="low">
                  Low Risk
                </option>
              </select>
            </div>

            <button
              onClick={() => {
                if (!title || !location)
                  return;

                addIncident({
                  id: Date.now(),

                  title,

                  location,

                  status:
                    severity === "high"
                      ? "critical"
                      : severity ===
                        "medium"
                      ? "in_progress"
                      : "resolved",

                  severity,

                  assignedTo:
                    "Dispatcher Team",

                  createdAt: "Just now",
                });

                setTitle("");

                setLocation("");

                setSeverity("high");

                setOpen(false);
              }}
              className="
                mt-4
                w-full
                rounded-xl
                bg-cyan-500
                py-3
                font-medium
                text-black
                transition-all
                hover:scale-[1.02]
              "
            >
              Create Incident
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}