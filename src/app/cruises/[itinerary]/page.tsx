"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  TagIcon,
  StarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FaShip, FaAnchor, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { getItineraryDetails } from "@/lib/utils/api/vecto-cruise-api";
import { type ItineraryDetails } from "@/lib/utils/api/vecto-cruise-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function ItineraryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const itineraryId = params.itinerary as string;

  const [itinerary, setItinerary] = useState<ItineraryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItineraryData = async () => {
      try {
        setLoading(true);

        const response = await getItineraryDetails(itineraryId);
        if (response.success && response.data) {
          setItinerary(response.data);
        } else {
          setError("Itinerary not found");
        }
      } catch (err) {
        setError("Failed to load itinerary details. Please try again.");
        console.error("Error loading itinerary details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (itineraryId) {
      loadItineraryData();
    }
  }, [itineraryId]);

  // Background animation variants
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
        "linear-gradient(45deg, #1e293b, #334155, #475569)",
        "linear-gradient(45deg, #334155, #475569, #64748b)",
        "linear-gradient(45deg, #0f172a, #1e293b, #334155)",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (loading) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="text-center">
          <motion.div
            className="mx-auto mb-4 border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-lg text-white">Loading itinerary details...</p>
        </div>
      </motion.div>
    );
  }

  if (error || !itinerary) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="max-w-md text-center">
          <div className="bg-red-500/20 backdrop-blur-sm p-6 border border-red-400/50 rounded-xl">
            <p className="mb-4 text-red-300">
              {error || "Itinerary not found"}
            </p>
            <button
              onClick={() => router.back()}
              className="bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg text-red-300 hover:text-red-200 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen"
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="top-1/4 left-1/4 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="right-1/4 bottom-1/4 absolute bg-purple-500/10 blur-3xl rounded-full w-96 h-96"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white/10 backdrop-blur-md border-white/20 border-b"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="flex items-center text-white hover:text-blue-300 transition-colors"
            >
              <ArrowLeftIcon className="mr-2 w-5 h-5" />
              <span className="font-medium">Back to Cruises</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Itinerary Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8">
              <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <h1 className="mb-4 font-bold text-4xl text-white">
                    {itinerary.itinerary_title}
                  </h1>

                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mb-6">
                    <div className="flex items-center space-x-3">
                      <GlobeAltIcon className="w-6 h-6 text-blue-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Destination</p>
                        <p className="font-medium text-white">
                          {itinerary.itinerary_destination_name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <ClockIcon className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Duration</p>
                        <p className="font-medium text-white">
                          {itinerary.itinerary_num_nights} Nights
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="w-6 h-6 text-green-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Departure Date</p>
                        <p className="font-medium text-white">
                          {format(
                            parseISO(itinerary.itinerary_depart_date),
                            "MMMM dd, yyyy"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="w-6 h-6 text-orange-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Return Date</p>
                        <p className="font-medium text-white">
                          {format(
                            parseISO(itinerary.itinerary_return_date),
                            "MMMM dd, yyyy"
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Departure Port</p>
                        <p className="font-medium text-white">
                          {itinerary.itinerary_depart_city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <FaAnchor className="w-6 h-6 text-pink-400" />
                      <div>
                        <p className="text-gray-300 text-sm">Return Port</p>
                        <p className="font-medium text-white">
                          {itinerary.itinerary_return_city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ports of Call */}
                  {itinerary.itinerary_ports_of_call && (
                    <div className="mb-6">
                      <h3 className="mb-2 font-semibold text-lg text-white">
                        Ports of Call
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {itinerary.itinerary_ports_of_call}
                      </p>
                    </div>
                  )}
                </div>

                {/* Ship Info & Pricing */}
                <div className="space-y-6">
                  {/* Ship Details */}
                  {itinerary.ship && (
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <FaShip className="w-6 h-6 text-blue-400" />
                          <h3 className="font-semibold text-lg text-white">
                            Your Ship
                          </h3>
                        </div>

                        <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 mb-3 rounded-lg w-full h-32">
                          <FaShip className="w-12 h-12 text-white" />
                        </div>

                        <h4 className="mb-2 font-medium text-white">
                          {itinerary.ship.ship_name}
                        </h4>
                        <p className="mb-4 text-gray-300 text-sm">
                          Experience luxury cruising with world-class amenities
                          and exceptional service.
                        </p>

                        <Link
                          href={`/cruise-lines/cruise-ships/${itinerary.ship.ship_id}`}
                          className="inline-flex items-center space-x-2 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                        >
                          <span>View Ship Details</span>
                          <ChevronRightIcon className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  )}

                  {/* Pricing (if available) */}
                  {(itinerary.low_inside_price ||
                    itinerary.low_oceanview_price ||
                    itinerary.low_balcony_price ||
                    itinerary.low_suite_price) && (
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="mb-4 font-semibold text-lg text-white">
                          Starting Prices
                        </h3>
                        <div className="space-y-3">
                          {itinerary.low_inside_price && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">
                                Interior
                              </span>
                              <span className="font-medium text-white">
                                ${itinerary.low_inside_price}
                              </span>
                            </div>
                          )}
                          {itinerary.low_oceanview_price && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">
                                Ocean View
                              </span>
                              <span className="font-medium text-white">
                                ${itinerary.low_oceanview_price}
                              </span>
                            </div>
                          )}
                          {itinerary.low_balcony_price && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">
                                Balcony
                              </span>
                              <span className="font-medium text-white">
                                ${itinerary.low_balcony_price}
                              </span>
                            </div>
                          )}
                          {itinerary.low_suite_price && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">
                                Suite
                              </span>
                              <span className="font-medium text-white">
                                ${itinerary.low_suite_price}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Itinerary Days */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Daily Itinerary
              </CardTitle>
            </CardHeader>
            <CardContent>
              {itinerary.itinerary_days &&
              itinerary.itinerary_days.length > 0 ? (
                <div className="space-y-6">
                  {itinerary.itinerary_days.map((day, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/5 p-6 border border-white/10 rounded-xl"
                    >
                      <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
                        {/* Day Image */}
                        <div className="lg:col-span-1">
                          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-full h-40 overflow-hidden">
                            {day.city_image ? (
                              <Image
                                src={day.city_image}
                                alt={day.city_name}
                                width={300}
                                height={160}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex justify-center items-center w-full h-full">
                                <FaMapMarkerAlt className="w-12 h-12 text-white" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Day Details */}
                        <div className="lg:col-span-3">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="mb-1 font-semibold text-white text-xl">
                                Day {day.itinerary_day_number}: {day.city_name}
                              </h3>
                              <p className="text-blue-300 text-sm">
                                {format(
                                  parseISO(day.itinerary_day_date),
                                  "EEEE, MMMM dd, yyyy"
                                )}
                              </p>
                            </div>

                            <div className="text-right">
                              {day.itinerary_day_arrival_time && (
                                <div className="flex items-center space-x-2 mb-1">
                                  <FaClock className="w-4 h-4 text-green-400" />
                                  <span className="text-green-300 text-sm">
                                    Arrive: {day.itinerary_day_arrival_time}
                                  </span>
                                </div>
                              )}
                              {day.itinerary_day_departure_time && (
                                <div className="flex items-center space-x-2">
                                  <FaClock className="w-4 h-4 text-orange-400" />
                                  <span className="text-orange-300 text-sm">
                                    Depart: {day.itinerary_day_departure_time}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {day.city_description && (
                            <p className="text-gray-300 leading-relaxed">
                              {day.city_description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <FaMapMarkerAlt className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    Itinerary Details Coming Soon
                  </h3>
                  <p className="text-gray-300">
                    Daily itinerary information is currently being updated.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Promotions */}
        {itinerary.promotions_collection &&
          itinerary.promotions_collection.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl text-white">
                    <TagIcon className="w-6 h-6 text-yellow-400" />
                    <span>Special Promotions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                    {itinerary.promotions_collection.map((promotion, index) => (
                      <motion.div
                        key={promotion.promotion_id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 border border-yellow-400/30 rounded-xl"
                      >
                        <div className="flex items-start space-x-3">
                          <StarIcon className="mt-1 w-6 h-6 text-yellow-400" />
                          <div className="flex-1">
                            <h3 className="mb-2 font-semibold text-lg text-white">
                              {promotion.name}
                            </h3>
                            <p className="mb-3 text-sm text-yellow-300">
                              Code: {promotion.code}
                            </p>

                            {promotion.consumer_description && (
                              <p className="mb-3 text-gray-300 text-sm">
                                {promotion.consumer_description}
                              </p>
                            )}

                            <div className="text-gray-400 text-xs">
                              <p>
                                Valid:{" "}
                                {format(parseISO(promotion.start), "MMM dd")} -{" "}
                                {format(
                                  parseISO(promotion.expiration),
                                  "MMM dd, yyyy"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
      </main>
    </motion.div>
  );
}
