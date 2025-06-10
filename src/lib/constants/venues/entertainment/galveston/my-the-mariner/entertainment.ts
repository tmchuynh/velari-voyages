// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9ec00043-83a8-4982-95bf-b294050701fc",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7c054382-1217-4092-9eb6-2be5d45d028c",
    vesselId: "my-the--mariner",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "71b64e46-3304-45bf-be33-8a09a3406aad",
    vesselId: "my-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fd08221d-b983-4772-a80c-dfc13bd521e8",
    vesselId: "my-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
