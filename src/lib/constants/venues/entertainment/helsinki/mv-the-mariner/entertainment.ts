// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "95e2432e-7ea8-4d62-a96b-4361a1989c00",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f9c86d7a-1b48-451c-a2eb-2fca9180c1a4",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f20a0088-48e1-4825-8bc1-94215c7cf969",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4b0c82b8-8425-454b-997a-ce46dd69fca8",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4068ced1-2faa-4784-b9ae-850c06113eac",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3c6d4243-98fe-4628-86fd-0c9c7d0eaf32",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
