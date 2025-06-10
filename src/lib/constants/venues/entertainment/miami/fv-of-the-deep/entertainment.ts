// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "5b5b3f84-ec95-40c5-880c-ab35d3088d56",
    vesselId: "fv--of-the-deep",
    type: "Movie Theater",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dcc634d9-861d-4390-b795-7d6e5b8b1987",
    vesselId: "fv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Observation Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "dad49a35-4021-4f2f-8293-5fd806b9c506",
    vesselId: "fv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "6186b56c-48ef-4396-8a6a-c564a68a0c08",
    vesselId: "fv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "83fc35f3-117f-42e5-a686-a7a682b7c152",
    vesselId: "fv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4f883888-5136-4a33-98ae-7e39b3659ab7",
    vesselId: "fv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 15,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
