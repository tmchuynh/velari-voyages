// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d1c4f050-5f9b-4594-baca-dafb159ab810",
    vesselId: "my--explorer",
    type: "Live Music",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b2b05ed4-7d54-4390-ac1e-592420379962",
    vesselId: "my--explorer",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "81f1cbf9-111c-484e-a42b-cecd98da9c04",
    vesselId: "my--explorer",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "66944813-26b9-4130-9d77-42303f0a8430",
    vesselId: "my--explorer",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8b478511-bc75-4a09-a67b-0e2991b430ef",
    vesselId: "my--explorer",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
