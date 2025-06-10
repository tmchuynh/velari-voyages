// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d4b946b6-fac1-478b-ba38-bd8a04e84070",
    vesselId: "nb--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "46eb5c16-d980-4f5f-944a-5cfa13621493",
    vesselId: "nb--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "55436a4d-91c3-485b-b048-b21b49e8d5b1",
    vesselId: "nb--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "666ae664-241a-4783-91f4-cbb8b615b345",
    vesselId: "nb--of-the-deep",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
