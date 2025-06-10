// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2c6536d5-a106-4fff-974a-fb9bc2dc8831",
    vesselId: "fv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "954f2212-eafe-46da-ad73-99cd74bdac2a",
    vesselId: "fv-the--mariner",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4fbfa6e2-7bfc-4353-ad70-8016f4c7bae3",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "01d4617e-ce22-4d13-84ec-adff368de43d",
    vesselId: "fv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7df34f88-7ae8-4781-bcf9-27e82e324f8e",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "aab8915f-cb72-4ea6-8a7b-3640f35388d9",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
