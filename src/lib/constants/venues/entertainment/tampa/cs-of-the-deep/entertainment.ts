// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "12a8d065-2623-41e3-981e-0cd4d6f04bee",
    vesselId: "cs--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "5c94cf2f-7a72-4b13-86b7-edc26fac358a",
    vesselId: "cs--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "7b5056d9-f058-4440-9649-6ccd03ade777",
    vesselId: "cs--of-the-deep",
    type: "Game Show",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "da80a09c-ab5b-4922-8d0a-0e08236e1d9a",
    vesselId: "cs--of-the-deep",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9b11fa28-e6e1-406f-b07f-5a7fd0872017",
    vesselId: "cs--of-the-deep",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
