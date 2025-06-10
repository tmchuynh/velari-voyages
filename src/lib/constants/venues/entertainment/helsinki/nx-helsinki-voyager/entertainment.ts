// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "f2005322-09f5-41ed-92a2-0f9437a4d835",
    vesselId: "nx-helsinki-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "965763dd-a76d-42e5-8912-112c89a69660",
    vesselId: "nx-helsinki-voyager",
    type: "Magic Show",
    location: {
      deck: 10,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "dbe59060-6a30-45e9-aa4f-40c44aa0a8c0",
    vesselId: "nx-helsinki-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "3fc316dc-0762-4a20-9efc-9ee11c1167f6",
    vesselId: "nx-helsinki-voyager",
    type: "Movie Theater",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "e4dcd288-adce-41db-8f92-322bf0343bad",
    vesselId: "nx-helsinki-voyager",
    type: "Nightclub",
    location: {
      deck: 15,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
