"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapboxCoordinates } from "@/lib/utils/api/mapbox-api";

// Define mapboxgl type
declare global {
  interface Window {
    mapboxgl: any;
  }
}

export interface MapComponentProps {
  coordinates: MapboxCoordinates;
  zoom?: number;
  style?: string;
  width?: string;
  height?: string;
  markers?: Array<{
    coordinates: MapboxCoordinates;
    title?: string;
    description?: string;
    color?: string;
  }>;
  onMapLoad?: (map: any) => void;
  className?: string;
}

export default function MapComponent({
  coordinates,
  zoom = 12,
  style = "mapbox://styles/mapbox/streets-v11",
  width = "100%",
  height = "400px",
  markers = [],
  onMapLoad,
  className = "",
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Mapbox GL JS
    const loadMapbox = async () => {
      if (window.mapboxgl) {
        initializeMap();
        return;
      }

      try {
        // Load Mapbox GL JS CSS
        const link = document.createElement("link");
        link.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // Load Mapbox GL JS
        const script = document.createElement("script");
        script.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js";
        script.onload = () => {
          initializeMap();
        };
        script.onerror = () => {
          setError("Failed to load Mapbox GL JS");
        };
        document.head.appendChild(script);
      } catch (err) {
        setError("Failed to load map resources");
      }
    };

    const initializeMap = () => {
      if (!mapContainer.current || map.current) return;

      const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      if (!mapboxToken) {
        setError("Mapbox access token not found");
        return;
      }

      try {
        window.mapboxgl.accessToken = mapboxToken;

        map.current = new window.mapboxgl.Map({
          container: mapContainer.current,
          style: style,
          center: [coordinates.longitude, coordinates.latitude],
          zoom: zoom,
        });

        map.current.on("load", () => {
          setIsLoaded(true);
          
          // Add markers
          markers.forEach((marker, index) => {
            const el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundColor = marker.color || "#3b82f6";
            el.style.width = "12px";
            el.style.height = "12px";
            el.style.borderRadius = "50%";
            el.style.border = "2px solid white";
            el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";

            const popup = new window.mapboxgl.Popup({ offset: 25 });
            
            if (marker.title || marker.description) {
              popup.setHTML(`
                <div class="p-2">
                  ${marker.title ? `<h3 class="font-semibold text-sm">${marker.title}</h3>` : ""}
                  ${marker.description ? `<p class="text-xs text-gray-600">${marker.description}</p>` : ""}
                </div>
              `);
            }

            new window.mapboxgl.Marker(el)
              .setLngLat([marker.coordinates.longitude, marker.coordinates.latitude])
              .setPopup(popup)
              .addTo(map.current);
          });

          // Call onMapLoad callback if provided
          if (onMapLoad) {
            onMapLoad(map.current);
          }
        });

        map.current.on("error", (e: any) => {
          setError("Map failed to load: " + e.error?.message || "Unknown error");
        });
      } catch (err) {
        setError("Failed to initialize map");
      }
    };

    loadMapbox();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [coordinates, zoom, style, markers, onMapLoad]);

  if (error) {
    return (
      <div 
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <p className="text-sm">Failed to load map</p>
          <p className="text-xs mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        ref={mapContainer}
        style={{ width, height }}
        className="rounded-lg overflow-hidden"
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg"
          style={{ width, height }}
        >
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
