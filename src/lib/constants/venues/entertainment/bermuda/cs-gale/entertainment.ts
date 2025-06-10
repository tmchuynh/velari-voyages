// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "4dd640ae-099c-4fe0-aa47-f6640cc83035",
    vesselId: "cs--gale",
    type: "Magic Show",
    location: {
      deck: 9,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "be9fc1b1-fba4-4b3d-9ad1-bd1d3ef5513b",
    vesselId: "cs--gale",
    type: "Dancing",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e1ab96fe-4da6-4c6c-8e5c-af813aad2705",
    vesselId: "cs--gale",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "2a498d55-071b-47dc-bb7a-bd737a013dd4",
    vesselId: "cs--gale",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
