import { create } from "zustand";

import { Incident } from "@/types/incident";

import { supabase } from "@/lib/supabase";

type IncidentStore = {
  incidents: Incident[];

  setIncidents: (
    incidents: Incident[]
  ) => void;

  addIncident: (
    incident: Incident
  ) => void;

  updateIncidentStatus: (
    id: number,
    status: Incident["status"]
  ) => void;

  generateRandomIncident: () => void;

  fetchIncidents: () => Promise<void>;

  createIncident: (
    incident: Omit<
      Incident,
      "id"
    >
  ) => Promise<void>;
};

const randomIncidents = [
  {
    title: "Gas leakage detected",
    location: "Faiq Yusifov Street",
    assignedTo: "Azeriqaz",
    severity: "high",
    status: "critical",
  },

  {
    title: "Traffic light malfunction",
    location: "Ataturk Avenue",
    assignedTo:
      "Baku Transport Agency",
    severity: "medium",
    status: "in_progress",
  },

  {
    title: "Road collapse risk",
    location:
      "Koroglu Rahimov Street",
    assignedTo: "Road Maintenance",
    severity: "high",
    status: "critical",
  },

  {
    title: "Garbage overflow",
    location: "Tebriz Street",
    assignedTo:
      "Cleaning Department",
    severity: "low",
    status: "resolved",
  },

  {
    title:
      "Electricity instability",
    location:
      "Hesen Eliyev Street",
    assignedTo: "Azerishiq",
    severity: "medium",
    status: "in_progress",
  },
];

export const useIncidentsStore =
  create<IncidentStore>(
    (set, get) => {
      const channel =
        supabase.channel(
          "realtime-incidents"
        );

      channel.on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "incidents",
        },
        async () => {
          await get().fetchIncidents();
        }
      );

      channel.subscribe();

      return {
        incidents: [],

        setIncidents: (
          incidents
        ) =>
          set({
            incidents,
          }),

        addIncident: (
          incident
        ) =>
          set((state) => ({
            incidents: [
              incident,
              ...state.incidents,
            ],
          })),

        updateIncidentStatus: (
          id,
          status
        ) =>
          set((state) => ({
            incidents:
              state.incidents.map(
                (incident) =>
                  incident.id === id
                    ? {
                        ...incident,
                        status,
                      }
                    : incident
              ),
          })),

        fetchIncidents:
          async () => {
            try {
              const response =
                await fetch(
                  "/api/incidents"
                );

              const data =
                await response.json();

              const formatted =
                data.map(
                  (
                    incident: any
                  ) => ({
                    id: incident.id,

                    title:
                      incident.title,

                    location:
                      incident.location,

                    status:
                      incident.status,

                    severity:
                      incident.severity,

                    assignedTo:
                      incident.assigned_to,

                    createdAt:
                      new Date(
                        incident.created_at
                      ).toLocaleString(),
                  })
                );

              set({
                incidents:
                  formatted,
              });
            } catch (error) {
              console.error(error);
            }
          },

        createIncident:
          async (
            incident
          ) => {
            try {
              await fetch(
                "/api/incidents",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify(
                    incident
                  ),
                }
              );

              await get().fetchIncidents();
            } catch (error) {
              console.error(error);
            }
          },

        generateRandomIncident:
          () =>
            set((state) => {
              const random =
                randomIncidents[
                  Math.floor(
                    Math.random() *
                      randomIncidents.length
                  )
                ];

              const newIncident =
                {
                  id: Date.now(),

                  title:
                    random.title,

                  location:
                    random.location,

                  assignedTo:
                    random.assignedTo,

                  severity:
                    random.severity as
                      | "high"
                      | "medium"
                      | "low",

                  status:
                    random.status as
                      | "critical"
                      | "in_progress"
                      | "resolved",

                  createdAt:
                    "LIVE",
                };

              return {
                incidents: [
                  newIncident,
                  ...state.incidents,
                ],
              };
            }),
      };
    }
  );