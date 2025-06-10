// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "61c18bcf-04a2-43c2-8682-cb3416b95aa4",
    vesselId: "ps-boston-voyager",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e59cf928-ed04-46d6-afed-dca227fdd63d",
    vesselId: "ps-boston-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "ef00f609-9b0a-486c-a9f3-c7df70b5974f",
    vesselId: "ps-boston-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "74b16ef3-0cfe-469f-a197-6298024edd33",
    vesselId: "ps-boston-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
