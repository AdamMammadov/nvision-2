"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";

import { Plus } from "lucide-react";

export default function CreateIncidentModal() {
  const [title, setTitle] = useState("");

  const [location, setLocation] =
    useState("");

  return (
    <Dialog.Root>
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

            <button
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