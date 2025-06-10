// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "92874be4-5857-4f1f-828c-d9dbfb5c01c3",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "64e6f06a-c431-4ba5-8f51-41dc97964c55",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a11dc0fc-0bdc-4a82-a196-21610451baf5",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3197b5e5-9981-4556-9054-19074da70847",
    vesselId: "my--explorer",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "dfa1b3b4-3294-4f05-93a5-58771b18ee8e",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 15,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
