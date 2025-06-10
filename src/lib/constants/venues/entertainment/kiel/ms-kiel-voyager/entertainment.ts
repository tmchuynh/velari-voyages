// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "095d761d-70d4-43f4-887f-8b2d55fba2fb",
    vesselId: "ms-kiel-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4ff20d99-ecc4-4a4d-a3d3-992f844768eb",
    vesselId: "ms-kiel-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2fdc494f-af3b-4f6d-bfba-d830429480dc",
    vesselId: "ms-kiel-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "43d21bd6-3b74-48b2-a576-610e13aeb42c",
    vesselId: "ms-kiel-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "463e5da7-43b2-4a06-98fa-491afce9c649",
    vesselId: "ms-kiel-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "48bbdac8-4c14-499b-871e-b40202656494",
    vesselId: "ms-kiel-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
