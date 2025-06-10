// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "7e32610f-f5d9-45d5-be7f-9fd1c20809ea",
    vesselId: "nb-venice-voyager",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "915d6528-29bb-40dc-9d63-ee5c86e39add",
    vesselId: "nb-venice-voyager",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8e7e2227-8285-483c-aee2-7ee7594aee4c",
    vesselId: "nb-venice-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5def3702-780d-4e4d-977c-ea297b8e21b9",
    vesselId: "nb-venice-voyager",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8da04c55-0a6d-4f05-8e6f-73ee3ce01d33",
    vesselId: "nb-venice-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5c4b60bd-b262-4b06-8a5e-4323ce98570d",
    vesselId: "nb-venice-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
