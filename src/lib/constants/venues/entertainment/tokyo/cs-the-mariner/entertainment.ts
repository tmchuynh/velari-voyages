// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a6822cd8-ac15-4b94-94fe-d3ade7335613",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "037cce3e-d06d-4a48-9a01-d16cb4e715c8",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "c659d20d-7c65-49de-b1f5-17059dbd05ff",
    vesselId: "cs-the--mariner",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "82a582d9-9020-4ce6-be2f-0091e2843d76",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6e67ff61-a019-42cf-8e7d-25b2e30ee9cd",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
