import { createContext } from "react";

export const ActiveEventsContext = createContext({
  activeEvents: [],
  dimensions: []
});
