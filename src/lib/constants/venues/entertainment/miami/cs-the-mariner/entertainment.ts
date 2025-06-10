// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "be117b89-b81c-42c1-9933-7ac0cd6ce4ff",
    vesselId: "cs-the--mariner",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "11872e62-f3f9-4a1d-9dec-ece49bf26ced",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "e2efc9e1-165c-46ba-9139-14e5b7496d72",
    vesselId: "cs-the--mariner",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2492a2a3-5547-473f-ac37-05239adc2851",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0f08a55f-bb28-4ac6-b276-305c20936025",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
