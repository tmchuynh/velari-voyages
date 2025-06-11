"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import MapComponent from "@/components/maps/MapComponent";
import EventsComponent from "@/components/events/EventsComponent";
import CurrencyConverter from "@/components/currency/CurrencyConverter";
import HolidayCalendar from "@/components/calendar/HolidayCalendar";
import { getCruiseById } from "@/lib/utils/get/cruises";
import { geocodeLocation } from "@/lib/utils/api/mapbox-api";
import { Cruise } from "@/lib/interfaces/services/cruises";

export default function CruiseDetailsPage() {
  const params = useParams();
  const cruiseId = params.cruise as string;
  const [cruise, setCruise] = useState<Cruise | null>(null);
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
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
    return (
      <div className="mx-auto px-4 py-8 container">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-300 rounded w-64"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-300 rounded"></div>
            <div className="h-64 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!cruise) {
    return (
      <div className="mx-auto px-4 py-8 container">
        <h1 className="mb-6 font-bold text-3xl">Cruise Not Found</h1>
        <p className="text-gray-600">
          The cruise you're looking for could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8 container max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Cruise Header */}
        <div className="mb-8">
          <h1 className="mb-4 font-bold text-4xl text-gray-900">{cruise.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Departure:</span> {cruise.departureLocation?.city}, {cruise.departureLocation?.country}
            </div>
            <div>
              <span className="font-medium">Arrival:</span> {cruise.arrivalLocation?.city}, {cruise.arrivalLocation?.country}
            </div>
            <div>
              <span className="font-medium">Price:</span> ${cruise.basePrice?.toLocaleString()}
            </div>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed">{cruise.description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Map and Events */}
          <div className="xl:col-span-2 space-y-8">
            {/* Departure Location Map */}
            {coordinates && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Departure Location</h2>
                <MapComponent
                  coordinates={{ longitude: coordinates.longitude, latitude: coordinates.latitude }}
                  zoom={12}
                  height="300px"
                  markers={[
                    {
                      coordinates: { longitude: coordinates.longitude, latitude: coordinates.latitude },
                      title: `${cruise.departureLocation?.city} Port`,
                      description: "Cruise departure location",
                      color: "#3b82f6"
                    }
                  ]}
                  className="rounded-lg overflow-hidden shadow-md"
                />
              </motion.div>
            )}

            {/* Local Events */}
            {cruise.departureLocation?.city && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <EventsComponent
                  city={cruise.departureLocation.city}
                  coordinates={coordinates || undefined}
                  maxEvents={6}
                />
              </motion.div>
            )}
          </div>

          {/* Right Column - Tools */}
          <div className="space-y-8">
            {/* Date Selection Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Select Cruise Date</h2>
              <HolidayCalendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                country={cruise.departureLocation?.country || "United States"}
                minDate={new Date()}
                showHolidayTooltip={true}
              />
              {selectedDate && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">Selected Date:</span> {selectedDate.toLocaleDateString()}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Currency Converter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CurrencyConverter
                defaultFromCurrency="USD"
                defaultAmount={cruise.basePrice || 1000}
                showMultipleConversions={true}
                popularCurrencies={["EUR", "GBP", "JPY", "CAD", "AUD", "CHF"]}
              />
            </motion.div>
          </div>
        </div>

        {/* Cruise Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cruise Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Itinerary</h3>
              {cruise.itinerary?.route && cruise.itinerary.route.length > 0 ? (
                <ul className="space-y-1 text-sm text-gray-600">
                  {cruise.itinerary.route.slice(0, 5).map((stop, index) => (
                    <li key={index}>• {stop.city}, {stop.country}</li>
                  ))}
                  {cruise.itinerary.route.length > 5 && (
                    <li className="text-blue-600">+ {cruise.itinerary.route.length - 5} more stops</li>
                  )}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">Itinerary details coming soon</p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Crew Members</h3>
              {cruise.crewMembers && cruise.crewMembers.length > 0 ? (
                <div className="space-y-2">
                  {cruise.crewMembers.slice(0, 3).map((crew, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-gray-900">{crew.name}</p>
                      <p className="text-gray-600">{crew.role}</p>
                    </div>
                  ))}
                  {cruise.crewMembers.length > 3 && (
                    <p className="text-sm text-blue-600">+ {cruise.crewMembers.length - 3} more crew members</p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-600">Crew information coming soon</p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Tags & Categories</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Category:</span> {cruise.category?.replace('-', ' ') || 'General'}
                </p>
                {cruise.tags && cruise.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cruise.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
