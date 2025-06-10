// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "debfdabe-fb29-45eb-818f-6e08d18b9ad7",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ef204c04-ffe1-4c49-a6e3-468dc75e600c",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8879f4f8-1447-46eb-be86-0c2db35542b8",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e5ae313a-2fec-44f9-9e01-020167480732",
    vesselId: "mv--gale",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d75adfb1-5ff8-48ce-8ad7-36bf8488b89c",
    vesselId: "mv--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
