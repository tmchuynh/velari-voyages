// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a8da8fbf-da74-4580-95c4-7609dd8938e5",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6e824eeb-cb2b-4ed9-9b63-2150f7bf2ad9",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d846e81e-deef-499e-8bcc-7d9dec0c9ef0",
    vesselId: "my--explorer",
    type: "Magic Show",
    location: {
      deck: 14,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "80e94f7a-96ed-4fae-bb8a-7169408adac1",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2f11bbd4-a582-40d5-9f1a-7b30aa98159a",
    vesselId: "my--explorer",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e83fb67e-f5bf-4f01-a024-2730ac5479dc",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
