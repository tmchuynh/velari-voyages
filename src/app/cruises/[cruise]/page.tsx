"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import MapComponent from "@/components/maps/MapComponent";
import EventsComponent from "@/components/events/EventsComponent";
import CurrencyConverter from "@/components/currency/CurrencyConverter";
import HolidayCalendar from "@/components/calendar/HolidayCalendar";
import CruiseAnalytics from "@/components/charts/CruiseAnalytics";
import { OceanLoading } from "@/components/Loading";
import { geocodeLocation } from "@/lib/utils/api/mapbox-api";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { getCruiseById } from "@/lib/utils/get/cruises";

export default function CruiseDetailsPage() {
  const params = useParams();
  const cruiseId = params.cruise as string;
  const [cruise, setCruise] = useState<Cruise | null>(null);
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCruiseData = async () => {
      if (!cruiseId) return;

      try {
        const cruiseData = await getCruiseById(cruiseId);
        if (cruiseData) {
          setCruise(cruiseData);

          // Geocode the departure location for map and events
          if (cruiseData.departureLocation?.city) {
            const geoResult = await geocodeLocation(
              `${cruiseData.departureLocation.city}, ${cruiseData.departureLocation.country}`
            );

            if (geoResult?.features?.[0]) {
              const [longitude, latitude] = geoResult.features[0].center;
              setCoordinates({ latitude, longitude });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching cruise data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCruiseData();
  }, [cruiseId]);

  if (loading) {
    return <OceanLoading text="Loading cruise details..." />;
  }

  if (!cruise) {
    return (
      <div className="mx-auto px-4 py-16 text-center container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md"
        >
          <div className="flex justify-center items-center bg-gradient-to-br from-primary to-secondary mx-auto mb-6 rounded-full w-16 h-16">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="mb-4">Cruise Not Found</h1>
          <p className="text-muted-foreground">
            The cruise you're looking for could not be found. It may have been
            moved or is no longer available.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 max-w-7xl container">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="main-content"
      >
        {/* Cruise Header */}
        <header className="mb-12 text-center">
          <motion.h1
            className="mb-6 gradient-ocean"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {cruise.title}
          </motion.h1>

          <motion.div
            className="mx-auto p-6 rounded-xl max-w-4xl glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3 text-sm">
              <div className="text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-2 rounded-full w-12 h-12">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h5>Departure</h5>
                <p className="font-medium">
                  {cruise.departureLocation?.city},{" "}
                  {cruise.departureLocation?.country}
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-secondary/10 mx-auto mb-2 rounded-full w-12 h-12">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h5>Duration</h5>
                <p className="font-medium">
                  {cruise.itinerary?.totalDuration || "7 days"}
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-tertiary/10 mx-auto mb-2 rounded-full w-12 h-12">
                  <svg
                    className="w-6 h-6 text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h5>Starting From</h5>
                <p className="font-medium text-lg">
                  ${cruise.basePrice?.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Analytics Dashboard */}
        <section className="mb-16">
          <CruiseAnalytics />
        </section>

        {/* Main Content Grid */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Map Component */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="chart-container">
              <h3 className="mb-4">Route Map</h3>
              {coordinates && (
                <div className="rounded-lg h-96 overflow-hidden">
                  <MapComponent
                    coordinates={coordinates}
                    zoom={6}
                    className="h-full"
                  />
                </div>
              )}
            </div>

            {/* Currency Converter */}
            <div className="chart-container">
              <h3 className="mb-4">Currency Converter</h3>
              <CurrencyConverter />
            </div>
          </motion.div>

          {/* Events and Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Events */}
            {coordinates && (
              <div className="chart-container">
                <h3 className="mb-4">Local Events</h3>
                <EventsComponent coordinates={coordinates} />
              </div>
            )}

            {/* Holiday Calendar */}
            <div className="chart-container">
              <h3 className="mb-4">Holiday Calendar</h3>
              <HolidayCalendar
                country={cruise.departureLocation?.country || "United States"}
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate || undefined}
              />
            </div>
          </motion.div>
        </div>

        {/* Cruise Description */}
        {cruise.description && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <div className="mx-auto p-8 rounded-xl max-w-4xl glass">
              <h2 className="mb-6 text-center">About This Cruise</h2>
              <div className="max-w-none prose prose-lg">
                <p>{cruise.description}</p>
              </div>
            </div>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}
