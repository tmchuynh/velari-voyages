// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e46335a9-b4a8-4f3e-a75c-ea13ecabbd4f",
    vesselId: "fv--gale",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c2c2fbb5-79b2-472f-ad34-4397e024225e",
    vesselId: "fv--gale",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "fc7bed7a-ab00-4323-ad20-e0da391a69c8",
    vesselId: "fv--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e2feb13c-745c-4cb1-b396-a81f16d213f2",
    vesselId: "fv--gale",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "36f2fe75-f71c-4257-b41b-2380a6460dcd",
    vesselId: "fv--gale",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
