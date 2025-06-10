// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f8081ec3-8a5e-4c78-b986-ab401e6c960e",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Magic Show",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5f53d6d7-7bae-4624-9ff6-06c52e295609",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Movie Theater",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2eea673c-3b78-4d5e-99a7-4664c4889479",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f43edd78-6c13-415d-a435-e1c8b4a90eea",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Nightclub",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b1103aa2-a1c3-41b9-8ac2-3646820727fb",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "1a513fc0-d521-4f07-a892-4704adaf67c9",
    vesselId: "rv-rio-de-janeiro-voyager",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
