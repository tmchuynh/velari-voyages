// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2377ddbc-2443-495b-9547-3f25147f40a1",
    vesselId: "ss--gale",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9ce00bfc-66af-4899-979a-edf94682176b",
    vesselId: "ss--gale",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "3651d483-bfb6-49a1-8849-e25f1fd707f9",
    vesselId: "ss--gale",
    type: "Live Music",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "61197003-2dee-4ad1-9a18-48c902a20ef7",
    vesselId: "ss--gale",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "34290e13-ea69-49b1-84e7-7ca6ba655ca9",
    vesselId: "ss--gale",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "dff2a451-181c-4eca-90af-11046c419ff1",
    vesselId: "ss--gale",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
