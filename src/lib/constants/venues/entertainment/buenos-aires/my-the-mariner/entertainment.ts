// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e62db4a7-eb24-484b-8608-b195caf10ff4",
    vesselId: "my-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "3422729d-8a91-4de1-8855-42c88223441a",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7bcc3e9b-93c0-4645-9570-b139ac5f5c5d",
    vesselId: "my-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9bb20f78-774d-4ec8-8c82-70d9ddf4deb9",
    vesselId: "my-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
