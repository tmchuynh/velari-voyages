// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "bf58295f-0b20-41a6-97ee-c86582e4041c",
    vesselId: "sv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3d762334-9bcf-4903-944f-17511cb592c9",
    vesselId: "sv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "68ac33a9-3e6d-4560-b828-60d27f2d7d3e",
    vesselId: "sv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6cd3b4bb-e95c-46b3-b700-c979c9377518",
    vesselId: "sv--of-the-deep",
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
    id: "0de52c4c-97fc-4d7f-823c-33e825541e09",
    vesselId: "sv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
