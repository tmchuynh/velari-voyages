// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "72b90761-9aaa-4a63-884d-9e7d9ee8e3b2",
    vesselId: "rms-skagway-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f54de475-77db-4344-9973-32e60285115e",
    vesselId: "rms-skagway-voyager",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1d474efe-b40c-4eef-b41d-2156b3c2e1e2",
    vesselId: "rms-skagway-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "10407436-9f4f-4062-9438-f5ececf41c2c",
    vesselId: "rms-skagway-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
