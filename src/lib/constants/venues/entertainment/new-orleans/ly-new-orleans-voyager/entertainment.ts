// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "9ce1b900-a869-4685-bb09-ab48353cb222",
    vesselId: "ly-new-orleans-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "4c47ecdb-2264-47ba-936f-f72e7990ce6f",
    vesselId: "ly-new-orleans-voyager",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Observation Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7ca78ce3-8360-4b71-bfc2-298cf172bb91",
    vesselId: "ly-new-orleans-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "78692dd6-fade-4b31-b3c2-8bc692a54c13",
    vesselId: "ly-new-orleans-voyager",
    type: "Movie Theater",
    location: {
      deck: 15,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "fa06c240-fb8a-464b-b4b1-8ab81763db55",
    vesselId: "ly-new-orleans-voyager",
    type: "Live Music",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
