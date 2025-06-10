// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c73579f3-7a20-480e-9bd3-6e1f58cb6fee",
    vesselId: "ss-montevideo-voyager",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e8eba26a-1dc2-4aeb-a7a4-ef05faf29ae8",
    vesselId: "ss-montevideo-voyager",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d753b4b6-705c-4785-b7ac-2d5c6ed63893",
    vesselId: "ss-montevideo-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1b32d223-dec7-4b85-966c-4fa7cf6eb418",
    vesselId: "ss-montevideo-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
