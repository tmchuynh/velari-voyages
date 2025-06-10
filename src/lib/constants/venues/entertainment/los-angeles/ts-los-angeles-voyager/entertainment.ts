// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "cfea3b93-4ce6-4ff5-805d-0b060240520f",
    vesselId: "ts-los-angeles-voyager",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c8223232-9534-4040-8d39-5a5eef9048f5",
    vesselId: "ts-los-angeles-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fb8d5e4e-9137-4fce-8de0-d1ee8a48d878",
    vesselId: "ts-los-angeles-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52fddee4-be79-4f79-8a95-b237023ab2ec",
    vesselId: "ts-los-angeles-voyager",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
