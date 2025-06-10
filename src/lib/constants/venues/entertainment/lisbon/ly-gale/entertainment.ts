// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a7159e93-8c52-4bf0-919e-bb095583180c",
    vesselId: "ly--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "8665decd-dcae-4a76-a19b-42f4769be8df",
    vesselId: "ly--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "33d36d9d-00ac-4881-84a5-fa84397f132d",
    vesselId: "ly--gale",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a879d875-9ef7-446f-b558-cd74233521b5",
    vesselId: "ly--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "00dac311-6fb3-464d-8774-b7fdfb3a5a7f",
    vesselId: "ly--gale",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
