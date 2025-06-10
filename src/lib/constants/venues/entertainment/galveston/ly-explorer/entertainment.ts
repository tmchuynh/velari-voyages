// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d437368b-73c0-4b33-8688-c4abf3d45b0e",
    vesselId: "ly--explorer",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b44c86bf-60a5-44cc-95fe-5109cbb1faa1",
    vesselId: "ly--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e01e359d-1923-4e2e-b4cd-d426119173d5",
    vesselId: "ly--explorer",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5d2f01cf-f483-4685-9e20-1ceb36840e01",
    vesselId: "ly--explorer",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0399478a-c69f-46c9-b184-37afce7371bb",
    vesselId: "ly--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6847ad5b-5b2b-4d2b-9c45-fdbeabc5890a",
    vesselId: "ly--explorer",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
