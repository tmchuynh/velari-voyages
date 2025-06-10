// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9529036d-ac47-4822-b601-8a12f6ca1633",
    vesselId: "rv-nice-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "319681e0-f178-40d7-a1f0-b27203193506",
    vesselId: "rv-nice-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0de2ba4b-168e-48ae-afff-ee358c60acc2",
    vesselId: "rv-nice-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "603a950f-9ddd-49d3-96af-62a3e18ccea3",
    vesselId: "rv-nice-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5331f929-19a2-4a7c-85ca-519653244406",
    vesselId: "rv-nice-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
