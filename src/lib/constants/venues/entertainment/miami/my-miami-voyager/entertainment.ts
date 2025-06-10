// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "661c5e99-bf14-4a29-8b21-23a6aad286ba",
    vesselId: "my-miami-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "650ae28e-c2c4-4469-8a76-40753e505fca",
    vesselId: "my-miami-voyager",
    type: "Live Music",
    location: {
      deck: 14,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "88509225-873a-4064-b1a3-463de4f70d59",
    vesselId: "my-miami-voyager",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0d73bfeb-d575-4704-8963-f2a6c15fc464",
    vesselId: "my-miami-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "212f5fec-3ccb-4cb5-8b5b-b3902e3b5894",
    vesselId: "my-miami-voyager",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "85f606d4-a983-4e61-8c47-a742e8cdd44c",
    vesselId: "my-miami-voyager",
    type: "Game Show",
    location: {
      deck: 13,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
