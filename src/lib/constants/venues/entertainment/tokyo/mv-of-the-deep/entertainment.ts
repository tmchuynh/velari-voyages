// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "842e06e5-e7bb-4d50-ade9-aca49d3bc189",
    vesselId: "mv--of-the-deep",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4b26a45b-26b8-4a6c-b136-5c660d0ab68c",
    vesselId: "mv--of-the-deep",
    type: "Karaoke",
    location: {
      deck: 7,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d4be2a91-e902-4fa7-973a-4c115c9f529d",
    vesselId: "mv--of-the-deep",
    type: "Live Music",
    location: {
      deck: 6,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "eae79116-8ba6-4dd6-b111-50ba000e6748",
    vesselId: "mv--of-the-deep",
    type: "Game Show",
    location: {
      deck: 14,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "30bd35ed-79aa-41fa-a6a1-121880c112cd",
    vesselId: "mv--of-the-deep",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "c530f638-b716-4317-a2f4-d67661ca662f",
    vesselId: "mv--of-the-deep",
    type: "Magic Show",
    location: {
      deck: 8,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "008d92a0-7cd2-4f93-aa53-e956a38bee40",
    vesselId: "mv--of-the-deep",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Central Court",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
