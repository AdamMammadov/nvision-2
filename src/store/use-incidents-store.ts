import { create } from "zustand";

type Incident = {
  id: number;
  title: string;
  location: string;
  status: string;
  assignedTo: string;
  createdAt: string;
};

type IncidentStore = {
  incidents: Incident[];

  addIncident: (incident: Incident) => void;

  updateIncidentStatus: (
    id: number,
    status: string
  ) => void;
};

export const useIncidentsStore =
  create<IncidentStore>((set) => ({
    incidents: [
      {
        id: 1,
        title: "Water pipe explosion",
        location: "Aga Neymatulla Street",
        status: "critical",
        assignedTo: "Azersu",
        createdAt: "5 min ago",
      },

      {
        id: 2,
        title: "Street lighting failure",
        location: "Tebriz Street",
        status: "in_progress",
        assignedTo: "Azerishiq",
        createdAt: "12 min ago",
      },
    ],

    addIncident: (incident) =>
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
        incidents: state.incidents.map(
          (incident) =>
            incident.id === id
              ? {
                  ...incident,
                  status,
                }
              : incident
        ),
      })),
  }));