"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  CalendarIcon,
  UsersIcon,
  MapIcon,
  BuildingOfficeIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { FaShip, FaBed, FaWifi, FaTv, FaBath } from "react-icons/fa";
import {
  getShipDetails,
  getAvailableCabinCategories,
} from "@/lib/utils/api/vecto-cruise-api";
import {
  type ShipDetails,
  type CabinCategory,
} from "@/lib/utils/api/vecto-cruise-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdBalcony } from "react-icons/md";
import Image from "next/image";

// Mock deck data (since API doesn't provide deck information)
const mockDecks = [
  {
    id: "1",
    name: "Sun Deck",
    level: 15,
    image: "/deck-sun.jpg",
    description: "Top deck with pool and sun loungers",
  },
  {
    id: "2",
    name: "Lido Deck",
    level: 14,
    image: "/deck-lido.jpg",
    description: "Main pool deck with restaurants",
  },
  {
    id: "3",
    name: "Promenade Deck",
    level: 7,
    image: "/deck-promenade.jpg",
    description: "Shopping and entertainment",
  },
  {
    id: "4",
    name: "Main Deck",
    level: 6,
    image: "/deck-main.jpg",
    description: "Reception and main dining",
  },
  {
    id: "5",
    name: "Atlantic Deck",
    level: 4,
    image: "/deck-atlantic.jpg",
    description: "Cabin accommodations",
  },
  {
    id: "6",
    name: "Pacific Deck",
    level: 3,
    image: "/deck-pacific.jpg",
    description: "Cabin accommodations",
  },
];

export default function ShipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const shipId = params.ship as string;

  const [ship, setShip] = useState<ShipDetails | null>(null);
  const [cabinCategories, setCabinCategories] = useState<CabinCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShipData = async () => {
      try {
        setLoading(true);

        // Get ship details
        const shipResponse = await getShipDetails(shipId);
        if (shipResponse.success && shipResponse.data) {
          setShip(shipResponse.data);

          // Note: Using a mock itinerary ID since we need one for cabin categories
          // In a real implementation, you'd need to get available itineraries for this ship
          const mockItineraryId = "mock-itinerary-id";
          try {
            const cabinsResponse =
              await getAvailableCabinCategories(mockItineraryId);
            if (cabinsResponse.success && cabinsResponse.data) {
              setCabinCategories(cabinsResponse.data);
            }
          } catch (cabinError) {
            // Cabin categories not available, continue without them
            console.log("Cabin categories not available for this ship");
          }
        } else {
          setError("Ship not found");
        }
      } catch (err) {
        setError("Failed to load ship details. Please try again.");
        console.error("Error loading ship details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (shipId) {
      loadShipData();
    }
  }, [shipId]);

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
          <p className="text-lg text-white">Loading ship details...</p>
        </div>
      </motion.div>
    );
  }

  if (error || !ship) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="max-w-md text-center">
          <div className="bg-red-500/20 backdrop-blur-sm p-6 border border-red-400/50 rounded-xl">
            <p className="mb-4 text-red-300">{error || "Ship not found"}</p>
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
              <span className="font-medium">Back to Ships</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Ship Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Ship Image */}
                <div className="flex-shrink-0">
                  <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-48 h-32 overflow-hidden">
                    {ship.imageUrl ? (
                      <Image
                        src={ship.imageUrl}
                        alt={ship.name}
                        width={192}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaShip className="w-16 h-16 text-white" />
                    )}
                  </div>
                </div>

                {/* Ship Info */}
                <div className="flex-1">
                  <h1 className="mb-2 font-bold text-4xl text-white">
                    {ship.name}
                  </h1>
                  <p className="mb-4 text-gray-300 text-lg">
                    {ship.description ||
                      "Experience luxury cruising at its finest with exceptional amenities and service."}
                  </p>

                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Ship Code:</span>
                      <span className="font-medium text-blue-300">
                        {ship.code}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ship Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Ship Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* Capacity */}
                {ship.capacity && (
                  <div className="bg-blue-500/20 p-4 border border-blue-400/30 rounded-xl text-center">
                    <UsersIcon className="mx-auto mb-2 w-8 h-8 text-blue-400" />
                    <p className="mb-1 text-gray-300 text-sm">Guest Capacity</p>
                    <p className="font-bold text-2xl text-white">
                      {ship.capacity.toLocaleString()}
                    </p>
                  </div>
                )}

                {/* Year Built */}
                {ship.yearBuilt && (
                  <div className="bg-purple-500/20 p-4 border border-purple-400/30 rounded-xl text-center">
                    <CalendarIcon className="mx-auto mb-2 w-8 h-8 text-purple-400" />
                    <p className="mb-1 text-gray-300 text-sm">Year Built</p>
                    <p className="font-bold text-2xl text-white">
                      {ship.yearBuilt}
                    </p>
                  </div>
                )}

                {/* Length */}
                {ship.length && (
                  <div className="bg-green-500/20 p-4 border border-green-400/30 rounded-xl text-center">
                    <ArrowsPointingOutIcon className="mx-auto mb-2 w-8 h-8 text-green-400" />
                    <p className="mb-1 text-gray-300 text-sm">Length</p>
                    <p className="font-bold text-2xl text-white">
                      {ship.length}m
                    </p>
                  </div>
                )}

                {/* Width */}
                {ship.width && (
                  <div className="bg-orange-500/20 p-4 border border-orange-400/30 rounded-xl text-center">
                    <MapIcon className="mx-auto mb-2 w-8 h-8 text-orange-400" />
                    <p className="mb-1 text-gray-300 text-sm">Width</p>
                    <p className="font-bold text-2xl text-white">
                      {ship.width}m
                    </p>
                  </div>
                )}

                {/* Decks */}
                {ship.decks && (
                  <div className="bg-cyan-500/20 p-4 border border-cyan-400/30 rounded-xl text-center">
                    <BuildingOfficeIcon className="mx-auto mb-2 w-8 h-8 text-cyan-400" />
                    <p className="mb-1 text-gray-300 text-sm">Decks</p>
                    <p className="font-bold text-2xl text-white">
                      {ship.decks}
                    </p>
                  </div>
                )}

                {/* Additional specs from ship.specifications if available */}
                {ship.specifications &&
                  Object.entries(ship.specifications)
                    .slice(0, 3)
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-indigo-500/20 p-4 border border-indigo-400/30 rounded-xl text-center"
                      >
                        <BoltIcon className="mx-auto mb-2 w-8 h-8 text-indigo-400" />
                        <p className="mb-1 text-gray-300 text-sm capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="font-bold text-2xl text-white">{value}</p>
                      </div>
                    ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ship Decks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ship Decks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {mockDecks.map((deck, index) => (
                  <motion.div
                    key={deck.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white/5 hover:bg-white/10 p-4 border border-white/10 rounded-xl transition-colors"
                  >
                    <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 mb-3 rounded-lg w-full h-32">
                      <BuildingOfficeIcon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="mb-1 font-semibold text-lg text-white">
                      {deck.name}
                    </h3>
                    <p className="mb-2 text-blue-300 text-sm">
                      Level {deck.level}
                    </p>
                    <p className="text-gray-300 text-sm">{deck.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cabin Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Cabin Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cabinCategories.length > 0 ? (
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {cabinCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/5 hover:bg-white/10 p-6 border border-white/10 rounded-xl transition-colors"
                    >
                      {/* Cabin Image */}
                      <div className="flex justify-center items-center bg-gradient-to-br from-amber-500 to-orange-600 mb-4 rounded-lg w-full h-40">
                        <FaBed className="w-12 h-12 text-white" />
                      </div>

                      {/* Cabin Name */}
                      <h3 className="mb-2 font-semibold text-white text-xl">
                        {category.name}
                      </h3>

                      {/* Cabin Code */}
                      <p className="mb-3 text-blue-300 text-sm">
                        Code: {category.code}
                      </p>

                      {/* Description */}
                      <p className="mb-4 text-gray-300 text-sm">
                        {category.description ||
                          "Comfortable accommodations with modern amenities and elegant design."}
                      </p>

                      {/* Cabin Details */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">
                            Max Occupancy:
                          </span>
                          <span className="font-medium text-white">
                            {category.maxOccupancy} guests
                          </span>
                        </div>

                        {category.size && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">Size:</span>
                            <span className="font-medium text-white">
                              {category.size} sq ft
                            </span>
                          </div>
                        )}

                        {/* Amenities */}
                        {category.amenities &&
                          category.amenities.length > 0 && (
                            <div className="mt-3">
                              <p className="mb-2 text-gray-400 text-sm">
                                Amenities:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {category.amenities
                                  .slice(0, 4)
                                  .map((amenity, idx) => {
                                    const getAmenityIcon = (
                                      amenity: string
                                    ) => {
                                      const lower = amenity.toLowerCase();
                                      if (
                                        lower.includes("wifi") ||
                                        lower.includes("internet")
                                      )
                                        return <FaWifi className="w-3 h-3" />;
                                      if (
                                        lower.includes("tv") ||
                                        lower.includes("television")
                                      )
                                        return <FaTv className="w-3 h-3" />;
                                      if (
                                        lower.includes("bath") ||
                                        lower.includes("shower")
                                      )
                                        return <FaBath className="w-3 h-3" />;
                                      if (
                                        lower.includes("balcony") ||
                                        lower.includes("deck")
                                      )
                                        return (
                                          <MdBalcony className="w-3 h-3" />
                                        );
                                      return <StarIcon className="w-3 h-3" />;
                                    };

                                    return (
                                      <span
                                        key={idx}
                                        className="inline-flex items-center space-x-1 bg-blue-500/20 px-2 py-1 rounded text-blue-300 text-xs"
                                      >
                                        {getAmenityIcon(amenity)}
                                        <span>{amenity}</span>
                                      </span>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <FaBed className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    Cabin Information Not Available
                  </h3>
                  <p className="text-gray-300">
                    Cabin category details are currently not available for this
                    ship.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </motion.div>
  );
}
