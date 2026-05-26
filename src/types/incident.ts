export type IncidentStatus =
  | "critical"
  | "in_progress"
  | "resolved";

export type Incident = {
  id: number;

  title: string;

  location: string;

  status: IncidentStatus;

  assignedTo: string;

  createdAt: string;

  severity:
    | "high"
    | "medium"
    | "low";
};