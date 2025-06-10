// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "24492fa7-ab7c-4b3b-9a4c-32e2dca46ff9",
    vesselId: "ts--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3e4a1d8f-c12f-4095-9f72-ba715de67722",
    vesselId: "ts--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "87e828cf-22c7-4c28-a031-cc34a153382e",
    vesselId: "ts--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "554ee657-7552-4cde-a19c-e294c32513ed",
    vesselId: "ts--of-the-deep",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2620ac18-ff41-4c68-b224-d49711eac679",
    vesselId: "ts--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
