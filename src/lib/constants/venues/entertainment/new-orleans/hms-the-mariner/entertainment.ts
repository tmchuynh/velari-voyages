// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b234a3e6-0c09-4630-9812-a336181db729",
    vesselId: "hms-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "23cd0c19-730f-4709-abf5-0738aea953c7",
    vesselId: "hms-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "55b1d63c-4b70-4476-9a31-18b0714954a3",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f977dbb-09b3-48b5-a8ff-7882abdefd02",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4cba0f51-38f3-4e7f-aa76-f3be9268e3fb",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fc77b75f-65c5-4546-84a5-5b57977ba9ca",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
