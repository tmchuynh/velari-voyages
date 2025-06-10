// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3651ef5f-f2ac-4276-a5b5-89cffbaf8f6c",
    vesselId: "ts-galveston-voyager",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "926d2564-c61e-4a5c-ba9d-7254190b9d66",
    vesselId: "ts-galveston-voyager",
    type: "Nightclub",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "341f0867-a53e-41a0-ad2b-0596c37f12ed",
    vesselId: "ts-galveston-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f7d4a9e3-798a-473f-98b0-3b78f322eefb",
    vesselId: "ts-galveston-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
