// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "2e1c3a23-b7a9-4d3b-a4a7-af79fdeebd57",
    vesselId: "rv-southampton-voyager",
    type: "Karaoke",
    location: {
      deck: 13,
      area: "Sky Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "92eb0f41-4171-4c1d-8b90-5db759daade7",
    vesselId: "rv-southampton-voyager",
    type: "Comedy",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8d6bc1b8-d8d1-4138-837f-9aa8659633c2",
    vesselId: "rv-southampton-voyager",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "52819cc5-3e7b-45da-97e1-a1d8920eea3f",
    vesselId: "rv-southampton-voyager",
    type: "Magic Show",
    location: {
      deck: 12,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a91ab206-221d-4b5b-b788-864aee4b2724",
    vesselId: "rv-southampton-voyager",
    type: "Dancing",
    location: {
      deck: 9,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
