// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "595a9c40-dc03-465f-9b6d-35efa095cb3a",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0652579-828c-4a1c-ace7-c3ae0f95cde0",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "00389b07-79d0-4617-8821-261fd8d2749a",
    vesselId: "mv-the--mariner",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a1de55bf-40e1-410f-9938-0128e6ba611b",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3769b0dc-f42b-48d7-a08b-754e8021f54d",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
