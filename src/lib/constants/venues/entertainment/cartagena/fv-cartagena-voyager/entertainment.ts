// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "b0018540-a7c9-4c85-aa83-8beb9e3a5f25",
    vesselId: "fv-cartagena-voyager",
    type: "Nightclub",
    location: {
      deck: 9,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7047e042-7fe5-47e4-8b51-4c31df03797f",
    vesselId: "fv-cartagena-voyager",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "42916611-81b1-4a4c-bcf4-b74691f496a9",
    vesselId: "fv-cartagena-voyager",
    type: "Comedy",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "9e5310cf-43e2-4c48-b262-0370a1dda163",
    vesselId: "fv-cartagena-voyager",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b048e7d0-e7ed-4f86-a419-61329ee9dff7",
    vesselId: "fv-cartagena-voyager",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
