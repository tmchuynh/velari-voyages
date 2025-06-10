// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "71eedc04-1a80-46ff-893d-c5d6ac9f738f",
    vesselId: "nx--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9174e1b2-4f92-42c1-9f1b-6113468f53c7",
    vesselId: "nx--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9693c435-f286-4090-affe-d29ef0c53ae3",
    vesselId: "nx--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "685eb3b9-5b43-418a-882d-de8a881249d3",
    vesselId: "nx--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
