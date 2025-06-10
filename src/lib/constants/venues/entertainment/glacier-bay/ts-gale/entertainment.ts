// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "6002d8f4-66f4-42ee-b3bb-1ff8c88742f9",
    vesselId: "ts--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7aa5a6a5-c839-4fcb-b371-fb5eb6d50bac",
    vesselId: "ts--gale",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e27fa865-2bea-4d59-b602-1adbe5d3ab8d",
    vesselId: "ts--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "915ad89b-c494-4a0e-8b3d-cec88caec84f",
    vesselId: "ts--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "16b34850-9a11-48b5-89e6-c3d99c1735f3",
    vesselId: "ts--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1eaf982e-c084-414e-8866-18509cb7a7c7",
    vesselId: "ts--gale",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "ea6e921f-8adf-4234-98b8-18e58e3ff7aa",
    vesselId: "ts--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
