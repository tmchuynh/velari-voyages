"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon, TicketIcon } from "@heroicons/react/24/outline";
import { TicketmasterEvent, getEventsByCity, getEventsByLocation } from "@/lib/utils/api/ticketmaster-api";

export interface EventsComponentProps {
  city?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  radius?: number;
  maxEvents?: number;
  className?: string;
}

export default function EventsComponent({
  city,
  coordinates,
  radius = 25,
  maxEvents = 6,
  className = "",
}: EventsComponentProps) {
  const [events, setEvents] = useState<TicketmasterEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        let fetchedEvents: TicketmasterEvent[] = [];

        if (coordinates) {
          fetchedEvents = await getEventsByLocation(
            coordinates.latitude,
            coordinates.longitude,
            radius,
            { size: maxEvents }
          );
        } else if (city) {
          fetchedEvents = await getEventsByCity(city, { size: maxEvents });
        } else {
          setError("Either city or coordinates must be provided");
          return;
        }

        setEvents(fetchedEvents);
      } catch (err) {
        setError("Failed to fetch events");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    if (city || coordinates) {
      fetchEvents();
    }
  }, [city, coordinates, radius, maxEvents]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "TBA";
    }
  };

  const formatTime = (timeString?: string) => {
    if (!timeString) return "Time TBA";
    try {
      const [hours, minutes] = timeString.split(":");
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return "Time TBA";
    }
  };

  const getEventImage = (event: TicketmasterEvent) => {
    if (event.images && event.images.length > 0) {
      // Find a medium-sized image or fallback to the first one
      const mediumImage = event.images.find(img => img.width >= 300 && img.width <= 600);
      return mediumImage?.url || event.images[0]?.url;
    }
    return "/images/default-event.jpg";
  };

  const getPriceRange = (event: TicketmasterEvent) => {
    if (event.priceRanges && event.priceRanges.length > 0) {
      const price = event.priceRanges[0];
      if (price.min === price.max) {
        return `${price.currency} ${price.min}`;
      }
      return `${price.currency} ${price.min} - ${price.max}`;
    }
    return "Price TBA";
  };

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="font-bold text-gray-900 text-xl">Local Events</h3>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg animate-pulse overflow-hidden">
              <div className="bg-gray-300 h-40"></div>
              <div className="space-y-2 p-4">
                <div className="bg-gray-300 rounded w-3/4 h-4"></div>
                <div className="bg-gray-300 rounded w-1/2 h-3"></div>
                <div className="bg-gray-300 rounded w-2/3 h-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <h3 className="mb-2 font-bold text-gray-900 text-xl">Local Events</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <h3 className="mb-2 font-bold text-gray-900 text-xl">Local Events</h3>
        <p className="text-gray-600">No events found in this area.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900 text-xl">Local Events</h3>
        <p className="text-gray-600 text-sm">{events.length} events found</p>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={getEventImage(event)}
                alt={event.name}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/default-event.jpg";
                }}
              />
              <div className="top-2 right-2 absolute bg-black bg-opacity-70 px-2 py-1 rounded text-white text-xs">
                {event.classifications?.[0]?.genre?.name || "Event"}
              </div>
            </div>

            <div className="p-4">
              <h4 className="mb-2 font-semibold text-gray-900 line-clamp-2">
                {event.name}
              </h4>

              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <CalendarDaysIcon className="flex-shrink-0 mr-2 w-4 h-4" />
                  <span>
                    {formatDate(event.dates.start.localDate)}
                    {event.dates.start.localTime && (
                      <span className="ml-1">at {formatTime(event.dates.start.localTime)}</span>
                    )}
                  </span>
                </div>

                {event._embedded?.venues?.[0] && (
                  <div className="flex items-center">
                    <MapPinIcon className="flex-shrink-0 mr-2 w-4 h-4" />
                    <span className="line-clamp-1">
                      {event._embedded.venues[0].name}
                      {event._embedded.venues[0].city && (
                        <span className="text-gray-500">
                          , {event._embedded.venues[0].city.name}
                        </span>
                      )}
                    </span>
                  </div>
                )}

                <div className="flex items-center">
                  <TicketIcon className="flex-shrink-0 mr-2 w-4 h-4" />
                  <span>{getPriceRange(event)}</span>
                </div>
              </div>

              {event.info && (
                <p className="mt-2 text-gray-500 text-xs line-clamp-2">
                  {event.info}
                </p>
              )}

              <div className="mt-4">
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full font-medium text-sm text-white transition-colors duration-200"
                >
                  View Tickets
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
