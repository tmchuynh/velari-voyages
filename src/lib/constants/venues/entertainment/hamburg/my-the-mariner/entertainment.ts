// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "90e6a97b-3523-4d36-883c-2c713aac57cf",
    vesselId: "my-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "bfd84dce-e5be-415d-b451-544e7fa033a0",
    vesselId: "my-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "463ca713-ca48-4b53-94e7-e08863a55d07",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7da022c7-c0d0-43f8-9cb3-f4b032d88ae7",
    vesselId: "my-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
