// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "d1793a0e-f7bb-4b6f-bf42-ba33d2b2ed97",
    vesselId: "hms-seattle-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5b2a9e28-8c66-4a8a-9ec8-692a6ea3343a",
    vesselId: "hms-seattle-voyager",
    type: "Live Music",
    location: {
      deck: 9,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8493b007-de0a-4802-990b-58cf6f8e93d2",
    vesselId: "hms-seattle-voyager",
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
    id: "a90f314e-ba17-476d-b4df-5576974c61c5",
    vesselId: "hms-seattle-voyager",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "086d26c3-3a6f-4004-82cc-2877591811a5",
    vesselId: "hms-seattle-voyager",
    type: "Game Show",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ad01bb91-5f0f-4120-ac7c-64b07f5d89f9",
    vesselId: "hms-seattle-voyager",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  }
];
