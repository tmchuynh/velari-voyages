// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "264fc3db-fce4-4457-9594-13e9338fcb0a",
    vesselId: "mv--gale",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "ef1fdf0d-d504-44a2-b65c-e74efdf194e5",
    vesselId: "mv--gale",
    type: "Live Music",
    location: {
      deck: 5,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0184933f-2a35-432c-b266-df0356eba7ab",
    vesselId: "mv--gale",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "4b971197-6fd2-4c10-843d-b6cb70523e2f",
    vesselId: "mv--gale",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6c0c6aa0-7490-45ac-a6d2-02aaf642f63f",
    vesselId: "mv--gale",
    type: "Dancing",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
