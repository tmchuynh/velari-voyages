// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "56c48ddb-fc8f-4265-9ce7-50884b733617",
    vesselId: "cs-oslo-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "db8b92db-c75d-4fcd-a67b-a095b60688f1",
    vesselId: "cs-oslo-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3bcf0dd3-b368-4fbd-acaf-2d3b38e65924",
    vesselId: "cs-oslo-voyager",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cd3649c6-f061-4a79-8b38-d86239a6745c",
    vesselId: "cs-oslo-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3d71d0b4-8e22-4b73-99cf-c8ca437b2118",
    vesselId: "cs-oslo-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
