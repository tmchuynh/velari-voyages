// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "0dc84e84-1b87-49cf-9b0a-0dd189e35d13",
    vesselId: "fv-the--mariner",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1b9dfd1e-a853-4f57-a2cd-e3dacf73e620",
    vesselId: "fv-the--mariner",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8cc47bc1-bfc9-4b57-95b1-d1d8e141f2fa",
    vesselId: "fv-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "03c1e5fa-cdf7-41c6-87ae-99312cee5b0b",
    vesselId: "fv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "83e061f6-52b3-410d-b09e-72acd51492aa",
    vesselId: "fv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
