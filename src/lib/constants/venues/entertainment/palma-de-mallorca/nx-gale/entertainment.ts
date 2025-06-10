// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c99af825-eaf0-4dae-a447-5dbe731cbdee",
    vesselId: "nx--gale",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "3f684320-0b18-4431-b3b4-77c3f18bbaeb",
    vesselId: "nx--gale",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "71e14761-d5ed-4115-8a85-084293ed9c1b",
    vesselId: "nx--gale",
    type: "Game Show",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "892e60d8-19b5-40ba-9b57-fed713b287e0",
    vesselId: "nx--gale",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2eadc274-f32e-4822-bfc1-b8976275427f",
    vesselId: "nx--gale",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "17918032-7de1-473b-8044-f08ae626ae10",
    vesselId: "nx--gale",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
