// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a296012f-b738-4c4a-9872-97451c9e26d7",
    vesselId: "ss--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0153389f-5513-40b7-babe-78bf91eb7c9c",
    vesselId: "ss--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c0342f6-f764-4d74-99eb-6d602fd1a6eb",
    vesselId: "ss--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b07e1b58-f245-49a6-9ce4-dcc3e488d03b",
    vesselId: "ss--of-the-deep",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "73c5e57d-04d0-4e59-9c93-b789fadabd15",
    vesselId: "ss--of-the-deep",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
