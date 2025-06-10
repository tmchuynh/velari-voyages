// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c2317382-7fe0-42a6-8db4-3f4ded107f28",
    vesselId: "hms-philipsburg-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4ab7b972-5f24-4956-975d-6cdafd0929e4",
    vesselId: "hms-philipsburg-voyager",
    type: "Game Show",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e7d3ab55-be99-415b-a285-7836d36bb561",
    vesselId: "hms-philipsburg-voyager",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "cedb61d0-9a07-4765-b33d-266567b0d647",
    vesselId: "hms-philipsburg-voyager",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d92a4455-640b-4bde-b94b-514df04d578e",
    vesselId: "hms-philipsburg-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "58ad64be-8292-4668-9e92-aa43ac0ed3d9",
    vesselId: "hms-philipsburg-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
