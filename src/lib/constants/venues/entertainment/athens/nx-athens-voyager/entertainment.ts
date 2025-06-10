// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "04f714ff-6e85-4e74-bf38-44e05d79e317",
    vesselId: "nx-athens-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0ec9fa77-205d-457e-b50e-d03f5c16d3cc",
    vesselId: "nx-athens-voyager",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "33670914-24b1-47e4-93e8-d856e309e206",
    vesselId: "nx-athens-voyager",
    type: "Movie Theater",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "78fb9b0d-c02f-40ec-9a9c-85b99bd182b1",
    vesselId: "nx-athens-voyager",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "93d5c54b-3b5c-41ee-88fa-6371a926ec23",
    vesselId: "nx-athens-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
