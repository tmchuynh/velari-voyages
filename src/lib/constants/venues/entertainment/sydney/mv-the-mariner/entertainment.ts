// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "359dd9be-363c-49ef-aada-7303e57b9279",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "12fc77c1-5ba9-4046-a5d2-196d356d1b34",
    vesselId: "mv-the--mariner",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "689f0dbc-68c6-485d-bb6b-2671298c4113",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "a5b539d8-5280-48a3-8bc6-083facc5214c",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 9,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6d2bcd0e-d2b2-489a-b540-5c59514828d3",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b0a4cd18-ffc1-4991-9f01-65721011e5c6",
    vesselId: "mv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
