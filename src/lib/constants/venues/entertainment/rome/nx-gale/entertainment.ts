// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4e48ec7b-f6ca-41d7-b0f9-2b4403c4697f",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "60c1346b-52cf-421d-b46e-3a31d60fd891",
    vesselId: "nx--gale",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "406eb6c1-b59b-4311-a24e-a6e320c4b329",
    vesselId: "nx--gale",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0a1e9fcd-db2d-4b60-8649-26a1f99f5cc3",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "de08e50e-2ad4-44c4-b1b9-5ec0933ee32b",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "5f42dbfd-b307-4079-88ad-0ab31381559b",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "20577c3e-46a4-4836-a744-83f383cea440",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
