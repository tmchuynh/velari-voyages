// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "886f3d62-37b3-44e0-89f1-729929926c82",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Comedy",
    location: {
      deck: 10,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "8d43021d-d3c7-45d2-b94a-afe2a3f5b77e",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b3a20af4-b389-409c-9f9c-8af556fabaeb",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e50c43f6-a7ab-41b1-bf85-07fc1af4d7b7",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "4266fcb3-fae4-4b85-91ef-496d3f39b624",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Nightclub",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d4a9ca1b-f26e-4dde-9e0b-a77723c70659",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f0216e81-387c-4b33-a8c0-6b7014503048",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "56d38583-d540-48b9-8eed-97ba1762fdee",
    vesselId: "rms-ho-chi-minh-city-voyager",
    type: "Dancing",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
