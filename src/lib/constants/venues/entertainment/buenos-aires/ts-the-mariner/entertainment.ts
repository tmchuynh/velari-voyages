// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1fdbdbba-5897-4019-b4af-5740c09600e2",
    vesselId: "ts-the--mariner",
    type: "Comedy",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6d8b36df-ffe1-4b1e-81fe-0a1d99dd65bb",
    vesselId: "ts-the--mariner",
    type: "Karaoke",
    location: {
      deck: 11,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2f886ab1-ab3d-4075-9c06-ec00a5af89e9",
    vesselId: "ts-the--mariner",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "7a031a6d-1394-49f4-a050-b4ef975b15ec",
    vesselId: "ts-the--mariner",
    type: "Magic Show",
    location: {
      deck: 7,
      area: "Sky Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9b441047-ca22-47ef-b32f-02fe0871d96c",
    vesselId: "ts-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
