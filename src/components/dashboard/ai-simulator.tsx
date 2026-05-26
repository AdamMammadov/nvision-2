"use client";

import { useEffect } from "react";

import { useIncidentsStore } from "@/store/use-incidents-store";

export default function AISimulator() {
  const generateRandomIncident =
    useIncidentsStore(
      (state) =>
        state.generateRandomIncident
    );

  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomIncident();
    }, 15000);

    return () =>
      clearInterval(interval);
  }, []);

  return null;
}