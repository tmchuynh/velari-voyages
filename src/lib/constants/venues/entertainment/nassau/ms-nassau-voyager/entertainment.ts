// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "22c94dfa-5e0a-42d6-9cb2-2083e2edc932",
    vesselId: "ms-nassau-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bc634c89-2ac6-488b-b3ff-67e595f23021",
    vesselId: "ms-nassau-voyager",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fa5387c8-4ebf-49d1-bcc9-a39568c5976b",
    vesselId: "ms-nassau-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c84c6e41-29ce-42e5-a8e5-19eda12a9723",
    vesselId: "ms-nassau-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
