// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2a84f80b-855f-4189-b3cd-f75e02ad2979",
    vesselId: "rms--explorer",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "fdafa7cb-6441-4729-816b-b5ae2623eb2b",
    vesselId: "rms--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "ce278fc6-b06d-47ba-a9da-1400b48bb32f",
    vesselId: "rms--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a4e84aca-4fe4-4602-823b-e730909e03fe",
    vesselId: "rms--explorer",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "693d65b3-65f2-49ca-a735-398fe3307834",
    vesselId: "rms--explorer",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
