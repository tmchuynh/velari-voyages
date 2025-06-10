// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "db3b9049-0f9c-4736-80d0-b08f1100ef9d",
    vesselId: "mv-singapore-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a094ef4a-846c-4f04-af54-a0e266ea59bd",
    vesselId: "mv-singapore-voyager",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "009d702f-5c3d-496f-8b63-65e2ec37296a",
    vesselId: "mv-singapore-voyager",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fc1f0312-b8cf-46a8-a54c-5b7b6ec0b968",
    vesselId: "mv-singapore-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c2f005a5-04dd-47e7-861b-1df917113a4d",
    vesselId: "mv-singapore-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
