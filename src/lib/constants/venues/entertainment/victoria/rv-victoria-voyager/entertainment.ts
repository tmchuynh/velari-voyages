// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2422bd1e-c5a5-4557-a126-d43a48eee4af",
    vesselId: "rv-victoria-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c20880db-804c-41ec-b1a3-435c32dd563a",
    vesselId: "rv-victoria-voyager",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "25f4b877-c707-4d2f-ac5d-8559315a8d58",
    vesselId: "rv-victoria-voyager",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "885aee69-a8fd-4f18-a2be-ad718944e18e",
    vesselId: "rv-victoria-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b25a1f3b-4a86-49b2-88bc-f1b433b4165b",
    vesselId: "rv-victoria-voyager",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
