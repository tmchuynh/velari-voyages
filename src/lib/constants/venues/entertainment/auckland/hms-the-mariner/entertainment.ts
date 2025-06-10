// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0fdb042d-a4dd-4219-8b4b-9f5252ad24c9",
    vesselId: "hms-the--mariner",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "163de552-b2c3-481c-8541-591e8c6da5c2",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5bcea8ee-bf11-417a-92b9-aece9658dc7b",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "64db5466-14c3-46f1-9c45-53b548f7ff77",
    vesselId: "hms-the--mariner",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c128a27c-df2b-4e6e-8ab1-e89b2939342f",
    vesselId: "hms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
