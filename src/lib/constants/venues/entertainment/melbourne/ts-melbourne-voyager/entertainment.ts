// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a8d8558a-2d24-496a-a9d0-caccd0df49c9",
    vesselId: "ts-melbourne-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "40e5efc0-59f4-4ea1-9f8e-b159f623bb9c",
    vesselId: "ts-melbourne-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6fc8d383-5029-4aec-8aa9-4fc1ffb86113",
    vesselId: "ts-melbourne-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2bd22382-5822-4411-8999-5c66081b7e87",
    vesselId: "ts-melbourne-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "92f4951a-57b1-4e6d-b8b9-d1117d28cb01",
    vesselId: "ts-melbourne-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
