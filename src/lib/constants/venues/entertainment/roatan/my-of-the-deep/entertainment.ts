// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "705b3376-9bc8-4b00-b4b3-ed5ed9475788",
    vesselId: "my--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fd54e659-64de-410e-8c59-1175521759eb",
    vesselId: "my--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9ca9f786-6a22-4988-9dc2-c5adf7b7cca0",
    vesselId: "my--of-the-deep",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "cbb95821-4f11-4251-9ebd-d71c48ae0b44",
    vesselId: "my--of-the-deep",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
