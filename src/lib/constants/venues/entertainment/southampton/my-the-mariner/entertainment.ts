// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e4a7ece4-d325-463f-8729-4576e5442d73",
    vesselId: "my-the--mariner",
    type: "Dancing",
    location: {
      deck: 14,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "0bce907c-e737-413d-8e10-17c3bf92f838",
    vesselId: "my-the--mariner",
    type: "Game Show",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "852636c9-6224-43aa-b3d7-901a49f6e308",
    vesselId: "my-the--mariner",
    type: "Live Music",
    location: {
      deck: 7,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "01114fc8-b7b5-4456-b700-9c2f4d1df870",
    vesselId: "my-the--mariner",
    type: "Nightclub",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "d11148cc-fb82-468c-8a3b-607da32f9d36",
    vesselId: "my-the--mariner",
    type: "Comedy",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "f3a48add-9a9d-46fc-ad46-74150cc2ef25",
    vesselId: "my-the--mariner",
    type: "Karaoke",
    location: {
      deck: 9,
      area: "Grand Ballroom",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
