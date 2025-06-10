// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "ae405301-5653-4530-891c-96ce8db04330",
    vesselId: "ly-quebec-city-voyager",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "c744294b-c415-495a-845a-53ee4c6270e1",
    vesselId: "ly-quebec-city-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "77af7e41-0359-43e9-9195-5b3381f920b8",
    vesselId: "ly-quebec-city-voyager",
    type: "Dancing",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0bab5f5d-36e4-49b4-8ba6-4ddd1775f9d7",
    vesselId: "ly-quebec-city-voyager",
    type: "Comedy",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "1c730a96-c1a9-43d6-8b2b-783a108e5453",
    vesselId: "ly-quebec-city-voyager",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "16281953-a27f-49fb-82e3-67097c8f17f9",
    vesselId: "ly-quebec-city-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
