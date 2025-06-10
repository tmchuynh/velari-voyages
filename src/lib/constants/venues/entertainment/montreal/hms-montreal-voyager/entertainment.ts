// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d2d7e3d6-39be-497a-aeed-87cadc5cae42",
    vesselId: "hms-montreal-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a312c8a7-1332-4353-8e66-c3c704459215",
    vesselId: "hms-montreal-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1df72fbd-4bd1-43ba-add0-ad997d0e6dfb",
    vesselId: "hms-montreal-voyager",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5d6f6005-f373-430a-b442-be15a0e8f1c9",
    vesselId: "hms-montreal-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b3e4222a-e07b-4150-890d-0434bdbcb955",
    vesselId: "hms-montreal-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
