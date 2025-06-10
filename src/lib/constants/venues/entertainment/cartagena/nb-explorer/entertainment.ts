// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "011446be-0b14-478c-a4c7-cf2b3d0ee7ea",
    vesselId: "nb--explorer",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "12644423-fb50-478a-a044-e494de7a27c6",
    vesselId: "nb--explorer",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0e78cb9e-6b31-4c08-9ec2-7b2d8bac3b56",
    vesselId: "nb--explorer",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6e1a0639-8178-4c35-8024-c8d045a7f24c",
    vesselId: "nb--explorer",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
