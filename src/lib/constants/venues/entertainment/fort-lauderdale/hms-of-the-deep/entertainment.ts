// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "205ec3c6-b2fc-4717-86fe-64746ad6b6ca",
    vesselId: "hms--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "83376d8b-fd85-4504-9ddf-0010825203c4",
    vesselId: "hms--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c6b16e93-3f65-4195-af24-6340eaceb93c",
    vesselId: "hms--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "46497d81-ece0-46e4-8015-61210f658c42",
    vesselId: "hms--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "b6e2f781-aef2-409d-8053-45f55fc5e6c3",
    vesselId: "hms--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
