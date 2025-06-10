// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1131bc0d-6ea5-4874-a1d0-a0c6e777bae6",
    vesselId: "ts-rome-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2a5225f8-3680-4c1d-95cd-04d5c443df57",
    vesselId: "ts-rome-voyager",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "96fe85f2-fa24-47ff-8598-399052859335",
    vesselId: "ts-rome-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "b98de27d-182e-49e7-a326-346e2502184a",
    vesselId: "ts-rome-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
