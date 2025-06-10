// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "a1aa7f82-f298-4013-aae9-6ec898914a8c",
    vesselId: "cs-the--mariner",
    type: "Karaoke",
    location: {
      deck: 12,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "6a65f3a6-6a60-476e-bc25-adbd9324b9c9",
    vesselId: "cs-the--mariner",
    type: "Dancing",
    location: {
      deck: 13,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b9be530e-c91d-42bc-b3d9-950cfdadf478",
    vesselId: "cs-the--mariner",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8d135f05-3136-4aab-a928-ecec25e499aa",
    vesselId: "cs-the--mariner",
    type: "Movie Theater",
    location: {
      deck: 11,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "4c770bf4-97d2-46fd-ba8f-fb6afef4baab",
    vesselId: "cs-the--mariner",
    type: "Nightclub",
    location: {
      deck: 7,
      area: "Main Theater",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
