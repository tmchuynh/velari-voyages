// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cbd04e88-ef4a-43dc-9811-3da1b1b27149",
    vesselId: "rms-hong-kong-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "5c15c9d3-b9bb-45c4-b840-7436158db081",
    vesselId: "rms-hong-kong-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6c380bf5-27b7-42fe-a3a5-34c4c085fbc4",
    vesselId: "rms-hong-kong-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5a209c99-553c-4244-8490-8985270d39dd",
    vesselId: "rms-hong-kong-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46d51dff-4b10-4de1-b3b0-58befb65ef8e",
    vesselId: "rms-hong-kong-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
