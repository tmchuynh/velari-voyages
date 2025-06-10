// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f408aa68-a079-4115-ba1e-c19cfa7cb576",
    vesselId: "rms--gale",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8dd2e782-80fc-4a3a-9cee-8c8512b78794",
    vesselId: "rms--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "37cbd78b-659a-47e2-b7bf-12ec089ce368",
    vesselId: "rms--gale",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "923b09bc-ef36-4ef9-8f63-e15aea136534",
    vesselId: "rms--gale",
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
    id: "d8adfd42-e7f1-4365-bd41-dadd264ba0a9",
    vesselId: "rms--gale",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "afa47798-1db8-4124-b6d9-94ee40c08bf4",
    vesselId: "rms--gale",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
