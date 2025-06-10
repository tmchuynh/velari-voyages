// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ed12a984-a6c6-465e-aa22-d917586b4978",
    vesselId: "ms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e171ae48-956b-4eb9-a287-9f45ee90bc7c",
    vesselId: "ms-the--mariner",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e1363e86-ab55-42dd-9f6d-2da67925644c",
    vesselId: "ms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b3db0e24-aab8-41ce-85fe-478f0db335dc",
    vesselId: "ms-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8c124207-794f-4e44-8d13-698a93e00972",
    vesselId: "ms-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "df494db8-83c1-4387-8283-ab338dc8460b",
    vesselId: "ms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
