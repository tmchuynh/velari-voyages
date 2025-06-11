/**
 * Mapbox API Integration
 * 
 * This module provides functions to interact with the Mapbox API for maps and geocoding
 */

const MAPBOX_API_BASE_URL = "https://api.mapbox.com";
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export interface MapboxCoordinates {
  longitude: number;
  latitude: number;
}

export interface MapboxGeocodingResponse {
  type: string;
  features: Array<{
    id: string;
    type: string;
    place_name: string;
    relevance: number;
    properties: Record<string, any>;
    bbox?: [number, number, number, number];
    center: [number, number];
    geometry: {
      type: string;
      coordinates: [number, number];
    };
    context?: Array<{
      id: string;
      text: string;
      short_code?: string;
    }>;
  }>;
}

export interface MapboxDirectionsResponse {
  routes: Array<{
    geometry: {
      coordinates: Array<[number, number]>;
      type: string;
    };
    legs: Array<{
      summary: string;
      weight: number;
      duration: number;
      steps: Array<any>;
      distance: number;
    }>;
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
  }>;
  waypoints: Array<{
    hint: string;
    distance: number;
    name: string;
    location: [number, number];
  }>;
  code: string;
  uuid: string;
}

/**
 * Geocode a location to get coordinates
 */
export async function geocodeLocation(query: string): Promise<MapboxGeocodingResponse | null> {
  if (!MAPBOX_ACCESS_TOKEN) {
    console.error("Mapbox access token not found");
    return null;
  }

  try {
    const response = await fetch(
      `${MAPBOX_API_BASE_URL}/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_ACCESS_TOKEN}&limit=1`
    );

    if (!response.ok) {
      throw new Error(`Mapbox geocoding failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error geocoding location:", error);
    return null;
  }
}

/**
 * Get directions between two points
 */
export async function getDirections(
  start: MapboxCoordinates,
  end: MapboxCoordinates,
  profile: "driving" | "walking" | "cycling" = "driving"
): Promise<MapboxDirectionsResponse | null> {
  if (!MAPBOX_ACCESS_TOKEN) {
    console.error("Mapbox access token not found");
    return null;
  }

  try {
    const response = await fetch(
      `${MAPBOX_API_BASE_URL}/directions/v5/mapbox/${profile}/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?access_token=${MAPBOX_ACCESS_TOKEN}&geometries=geojson&overview=full`
    );

    if (!response.ok) {
      throw new Error(`Mapbox directions failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting directions:", error);
    return null;
  }
}

/**
 * Generate a static map URL
 */
export function generateStaticMapUrl(
  coordinates: MapboxCoordinates,
  zoom: number = 12,
  width: number = 600,
  height: number = 400,
  style: string = "mapbox://styles/mapbox/streets-v11"
): string {
  if (!MAPBOX_ACCESS_TOKEN) {
    console.error("Mapbox access token not found");
    return "";
  }

  return `${MAPBOX_API_BASE_URL}/styles/v1/mapbox/streets-v11/static/pin-s+3b82f6(${coordinates.longitude},${coordinates.latitude})/${coordinates.longitude},${coordinates.latitude},${zoom}/${width}x${height}?access_token=${MAPBOX_ACCESS_TOKEN}`;
}

/**
 * Get map style URL for use with Mapbox GL JS
 */
export function getMapStyleUrl(style: string = "streets-v11"): string {
  return `mapbox://styles/mapbox/${style}`;
}
