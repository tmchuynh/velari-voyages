// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "1ae1cdb4-fc73-4992-a0dd-2826d10d493e",
    vesselId: "nx-fort-lauderdale-voyager",
    type: "Magic Show",
    location: {
      deck: 13,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "db8fc5b0-b9d7-49cd-9587-d8ed78befe7c",
    vesselId: "nx-fort-lauderdale-voyager",
    type: "Comedy",
    location: {
      deck: 12,
      area: "Upper Deck",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e360dd00-fdc3-436c-9079-3861a97a35fa",
    vesselId: "nx-fort-lauderdale-voyager",
    type: "Dancing",
    location: {
      deck: 10,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: true,
    hasAccessibleSeating: false,
  },
  {
    id: "e5fde6fc-d13e-44ce-9924-ab8e9772f84f",
    vesselId: "nx-fort-lauderdale-voyager",
    type: "Movie Theater",
    location: {
      deck: 5,
      area: "Pool Deck",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "f2e0c3f3-a9ca-4ed0-857c-5b7b660644ab",
    vesselId: "nx-fort-lauderdale-voyager",
    type: "Karaoke",
    location: {
      deck: 8,
      area: "Aft Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
