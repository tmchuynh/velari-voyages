// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a3d1c9de-9c62-4895-9e77-2f23c51c02a2",
    vesselId: "ps-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "16204650-938b-43a4-a1af-66627e225aa8",
    vesselId: "ps-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9fefed6d-f900-4b3a-9a86-1ae44e05fe34",
    vesselId: "ps-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "6b2780d3-1edc-4aca-90d4-ef1a55dd7665",
    vesselId: "ps-the--mariner",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e69fcb9a-a412-4ee0-8fb9-04013123aaf3",
    vesselId: "ps-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
