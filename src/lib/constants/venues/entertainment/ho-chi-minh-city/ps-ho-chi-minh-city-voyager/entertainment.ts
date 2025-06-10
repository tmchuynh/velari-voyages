// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "766219cc-814f-47e4-ac33-2786dd4ace7b",
    vesselId: "ps-ho-chi-minh-city-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "694c79eb-a549-4ad6-b4e9-03c3dae19324",
    vesselId: "ps-ho-chi-minh-city-voyager",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "faf856ea-655c-4de0-9a74-6355aba46bf6",
    vesselId: "ps-ho-chi-minh-city-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "2219f43f-e2a0-46f6-a57d-b8158a6cc302",
    vesselId: "ps-ho-chi-minh-city-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
