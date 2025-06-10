// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f24a45b9-6a2c-476c-b5cb-ee5cc3e43823",
    vesselId: "rv-copenhagen-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "e0ecebc6-ed7e-4b16-97aa-d7c1cac7ee11",
    vesselId: "rv-copenhagen-voyager",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "08761e51-fbf3-4edf-8861-63047951eae4",
    vesselId: "rv-copenhagen-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "a62dc9e8-2946-4d6c-a7a1-917cf1985346",
    vesselId: "rv-copenhagen-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0815d4a8-280b-4315-a7c0-e6d69bb485c5",
    vesselId: "rv-copenhagen-voyager",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "feb447ad-b76d-47cb-b81f-16824365ce00",
    vesselId: "rv-copenhagen-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
