// Entertainment categories for this vessel
// This file contains entertainment category information for shows and events

import { EntertainmentCategory } from "@/lib/interfaces/services/venues";

export const entertainmentCategories: EntertainmentCategory[] = [
  {
    id: "fcd92ccb-1863-41a2-857a-a35a9dc70582",
    vesselId: "fv-roatan-voyager",
    type: "Live Music",
    location: {
      deck: 15,
      area: "Upper Deck",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "0fde7e84-dd29-435d-8af3-9b0d6d9004d2",
    vesselId: "fv-roatan-voyager",
    type: "Dancing",
    location: {
      deck: 12,
      area: "Atrium",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "a6438f67-46ca-49dd-b991-93b55b26d93a",
    vesselId: "fv-roatan-voyager",
    type: "Comedy",
    location: {
      deck: 15,
      area: "Main Theater",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: false,
  },
  {
    id: "9535bac7-2ba5-4e9d-94f3-f02159495c7e",
    vesselId: "fv-roatan-voyager",
    type: "Nightclub",
    location: {
      deck: 6,
      area: "Entertainment Plaza",
    },
    hasBar: true,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "9c9a2e20-a72b-4aab-a7b9-f380e6c758cd",
    vesselId: "fv-roatan-voyager",
    type: "Magic Show",
    location: {
      deck: 15,
      area: "Forward Lounge",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  },
  {
    id: "b01a581f-03b5-430a-93f0-b91736af4898",
    vesselId: "fv-roatan-voyager",
    type: "Movie Theater",
    location: {
      deck: 9,
      area: "Midship Theater",
    },
    hasBar: true,
    hasFoodService: true,
    hasAccessibleSeating: true,
  },
  {
    id: "77397f44-3ce6-4f6e-aca2-1521a158f53f",
    vesselId: "fv-roatan-voyager",
    type: "Game Show",
    location: {
      deck: 7,
      area: "Central Court",
    },
    hasBar: false,
    hasFoodService: false,
    hasAccessibleSeating: true,
  }
];
