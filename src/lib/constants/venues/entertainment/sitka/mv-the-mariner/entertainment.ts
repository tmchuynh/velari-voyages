// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "c6e23f88-2898-48ce-b386-02fea5c0e098",
    vesselId: "mv-the--mariner",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "77edcd31-1eb4-4cd6-9ec2-968f304ab4dd",
    vesselId: "mv-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "71aaed5c-4f06-48a9-8b39-bd27e39033e7",
    vesselId: "mv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "5222badd-e2ff-4d66-a6e8-e7ec08d24164",
    vesselId: "mv-the--mariner",
    type: "Nightclub",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f5f167ff-ab6d-4744-81d5-fc370c0e4274",
    vesselId: "mv-the--mariner",
    type: "Game Show",
    location: {
      deck: 11,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
