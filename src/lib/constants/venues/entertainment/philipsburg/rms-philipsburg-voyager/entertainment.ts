// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0f67b039-4fe8-4e74-8550-bcc216204377",
    vesselId: "rms-philipsburg-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0a59930a-35b7-4f1c-a237-625c05d72206",
    vesselId: "rms-philipsburg-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bd196d1b-357c-4e08-a59d-64ead212f093",
    vesselId: "rms-philipsburg-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "318339c8-d3a2-4379-af04-ac6a4d562576",
    vesselId: "rms-philipsburg-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
