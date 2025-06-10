// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "3257ef10-683e-46eb-826b-b83df0682e64",
    vesselId: "sy-george-town-voyager",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "0623139c-4f61-40fa-a058-dc9ba40b9183",
    vesselId: "sy-george-town-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "d06e6930-e5f4-49f1-bffc-3b9cb403eafb",
    vesselId: "sy-george-town-voyager",
    type: "Karaoke",
    location: {
      deck: 14,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8a5db3b0-fd5b-4e37-abdf-40bf14487be9",
    vesselId: "sy-george-town-voyager",
    type: "Live Music",
    location: {
      deck: 10,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "404455c3-4552-4ddb-996f-eeb6f1900913",
    vesselId: "sy-george-town-voyager",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
