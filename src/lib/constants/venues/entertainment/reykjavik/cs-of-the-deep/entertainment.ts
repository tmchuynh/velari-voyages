// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "8f046189-1ddd-4459-b190-b9ed62330848",
    vesselId: "cs--of-the-deep",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9b5e7e01-f54a-4e11-a161-13ea5d22647f",
    vesselId: "cs--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "15bb4a2c-5b55-456e-ba14-0b2fb23fcdf8",
    vesselId: "cs--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 11,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "08b90ee0-9229-4982-9460-55b5128e094e",
    vesselId: "cs--of-the-deep",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
