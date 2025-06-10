// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fa269605-5d39-4c94-9874-86de770d6f64",
    vesselId: "hms-the--mariner",
    type: "Live Music",
    location: {
      deck: 11,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "2b927d7c-6357-4793-976c-f32fb235ce21",
    vesselId: "hms-the--mariner",
    type: "Dancing",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "bf0ff141-41bb-46c5-bd5e-30d3f79ac765",
    vesselId: "hms-the--mariner",
    type: "Magic Show",
    location: {
      deck: 5,
      area: "Grand Ballroom",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "f6117ad5-63c3-4ad4-8c1f-da5c0c3ae046",
    vesselId: "hms-the--mariner",
    type: "Comedy",
    location: {
      deck: 6,
      area: "Aft Lounge",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  }
];
