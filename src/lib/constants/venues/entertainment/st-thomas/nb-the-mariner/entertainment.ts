// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ca447b44-8aa9-498d-8c52-a0687d2d47ce",
    vesselId: "nb-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c7c2b50f-649a-4f24-aa1d-ebce4a6e20fd",
    vesselId: "nb-the--mariner",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "6ba7f96d-895f-4557-8006-e4660ef86ea5",
    vesselId: "nb-the--mariner",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "c211af77-9a09-4921-920c-c725fdc485ea",
    vesselId: "nb-the--mariner",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5c51f733-6344-4a19-a6b8-d380bf766fed",
    vesselId: "nb-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "13eaa13d-c88d-48fb-a33a-674d2cb9d728",
    vesselId: "nb-the--mariner",
    type: "Nightclub",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "13b11c09-8985-4318-bc42-bc99ade4bdde",
    vesselId: "nb-the--mariner",
    type: "Magic Show",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
