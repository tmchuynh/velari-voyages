// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a912a213-b47f-402f-8a24-d5a833a05bb4",
    vesselId: "nb--gale",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "63211228-744b-4d6c-bafb-ea5d81b98e43",
    vesselId: "nb--gale",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "654fa479-7302-482b-9046-e4cb376b454a",
    vesselId: "nb--gale",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8febeff5-5380-4086-9c1c-37cc65691f4d",
    vesselId: "nb--gale",
    type: "Comedy",
    location: {
      deck: 8,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "819a3e32-cf93-4831-9a08-a8f4e6072ce8",
    vesselId: "nb--gale",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  }
];
