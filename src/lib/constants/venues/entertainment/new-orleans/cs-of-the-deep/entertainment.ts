// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2860f135-863e-44d0-948e-2d59d61f505d",
    vesselId: "cs--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "97c788de-f0ff-4058-ad13-4a9c26b95d61",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f99986b7-b3fc-407e-b5e8-95885ee1099c",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "771c614e-4687-4d29-adb6-873499a4ac30",
    vesselId: "cs--of-the-deep",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "616c1a29-db03-46aa-b76c-988b32efa1f9",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
