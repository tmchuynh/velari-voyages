// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "64b0e3cc-b53c-45f5-b6fc-a5585d8d3a29",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f1bfd028-fefc-42e7-b439-e7bd42dffb2c",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5936be20-63bb-4e04-b2ca-632bc919555d",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "74eaa3d1-2b7d-419d-aa55-838c10638c60",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "853142e9-1804-4cfd-bdd2-365392dad602",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "a73337a3-3808-4129-aa18-d102e95f8765",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c294d6b8-426a-42f2-af8e-2743a6dc97bd",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
