// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1fba95af-5665-4f15-a869-af8461f34f64",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "149ec589-59d0-48f3-8fa7-cc92dc80e842",
    vesselId: "nx--of-the-deep",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0c14e96f-60ff-48e6-bf19-a5a2d1cff036",
    vesselId: "nx--of-the-deep",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0fecf91e-348b-4ba9-bb57-647803758713",
    vesselId: "nx--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "2e7db3a3-a826-4b24-bed6-8df47ee32430",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
