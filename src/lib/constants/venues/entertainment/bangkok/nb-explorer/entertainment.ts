// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "eefe26e1-f6ac-4c64-81ae-3fd9f795f561",
    vesselId: "nb--explorer",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9c62a570-7ca1-450e-b7ff-3c330432032c",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "eb56f4ee-cac6-4548-bbf2-1390b32a3417",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9e7944fb-3759-4155-9153-faeced4b3c04",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "65cac77e-a151-464f-90a7-ba6ed53ccc21",
    vesselId: "nb--explorer",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
