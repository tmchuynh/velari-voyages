// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "53fa5470-7697-4c98-9945-12ea0b0073fc",
    vesselId: "mv--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "38bd5bb9-a1ba-4db2-b4a7-94c40656c834",
    vesselId: "mv--gale",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "8f3c4f74-2c10-47d7-8c0c-3527eab14cb4",
    vesselId: "mv--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ceda69ec-71e9-406a-948c-ef21cf2af966",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2ee94bd0-3f42-405b-9867-074947d26b4b",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "b2b3356a-6fbc-4f7e-b9b1-40d2871b0dbe",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
