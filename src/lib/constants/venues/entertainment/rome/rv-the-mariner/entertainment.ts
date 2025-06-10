// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "e91a7e0a-d283-48a0-bcff-c81b5949b025",
    vesselId: "rv-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Forward Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "8ed30a54-5a65-42d2-8932-525aceb065fd",
    vesselId: "rv-the--mariner",
    type: "Game Show",
    location: {
      deck: 5,
      area: "Midship Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "8a1445f7-fc40-4a58-89a0-af319cf84526",
    vesselId: "rv-the--mariner",
    type: "Karaoke",
    location: {
      deck: 10,
      area: "Entertainment Plaza",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "0b960964-a63b-4685-b9ac-d8754cfbefaf",
    vesselId: "rv-the--mariner",
    type: "Dancing",
    location: {
      deck: 6,
      area: "Atrium",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
