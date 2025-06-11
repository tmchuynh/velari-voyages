"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  PlayCircleIcon,
  ChevronRightIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  fetchPopularCruiseDestinationsFromExpedia,
  fetchPopularCruiseLinesFromExpedia,
  fetchPopularDeparturePortsFromExpedia,
  fetchDestinationActivitiesFromExpedia,
} from "@/lib/utils/get/expedia-cruises";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface DashboardData {
  destinations: any[];
  cruiseLines: any[];
  departurePorts: any[];
  activities: any[];
}

export default function ExpediaCruiseDashboard() {
  const [data, setData] = useState<DashboardData>({
    destinations: [],
    cruiseLines: [],
    departurePorts: [],
    activities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);

        // Load all data in parallel
        const [destinations, cruiseLines, departurePorts, activities] =
          await Promise.all([
            fetchPopularCruiseDestinationsFromExpedia(6),
            fetchPopularCruiseLinesFromExpedia(6),
            fetchPopularDeparturePortsFromExpedia(6),
            fetchDestinationActivitiesFromExpedia("caribbean"),
          ]);

        setData({
          destinations,
          cruiseLines,
          departurePorts,
          activities: activities.slice(0, 6), // Limit to 6 for display
        });
      } catch (err) {
        setError("Failed to load cruise data. Please try again.");
        console.error("Error loading cruise data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="mx-auto border-b-2 border-blue-600 rounded-full w-32 h-32 animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading cruise data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-2xl text-red-600">Error</h1>
          <p className="mb-4 text-gray-600">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 font-bold text-5xl">
                Explore the World with Expedia Cruises
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-blue-100 text-xl">
                Discover amazing cruise destinations, top-rated cruise lines,
                convenient departure ports, and exciting activities at every
                stop. Your perfect cruise adventure awaits.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-blue-50 text-blue-600"
                >
                  <PlayCircleIcon className="mr-2 w-5 h-5" />
                  Explore Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-white border-white text-white hover:text-blue-600"
                >
                  View All Cruises
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        {/* Popular Cruise Destinations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <GlobeAltIcon className="mr-3 w-8 h-8 text-blue-600" />
                Popular Cruise Destinations
              </h2>
              <p className="text-gray-600">
                Discover the world's most sought-after cruise destinations
              </p>
            </div>
            <Link href="/cruise-destinations">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-48 overflow-hidden">
                    <Image
                      src={destination.imageUrl}
                      alt={destination.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/destinations/default.jpg";
                      }}
                    />
                    <div className="top-2 right-2 absolute">
                      <Badge
                        variant="secondary"
                        className="bg-black/60 border-none text-white"
                      >
                        {destination.popularityScore}/100
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {destination.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="mr-1 w-4 h-4" />
                      {destination.country} • {destination.region}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                      {destination.description}
                    </p>
                    {destination.bestTimeToVisit?.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {destination.bestTimeToVisit
                          .slice(0, 3)
                          .map((month: string) => (
                            <Badge
                              key={month}
                              variant="outline"
                              className="text-xs"
                            >
                              {month}
                            </Badge>
                          ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Cruise Lines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <svg
                  className="mr-3 w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Most Popular Cruise Lines
              </h2>
              <p className="text-gray-600">
                Top-rated cruise lines with excellent service and amenities
              </p>
            </div>
            <Link href="/cruise-lines">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.cruiseLines.map((line, index) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-shrink-0 w-16 h-16">
                        <Image
                          src={line.logoUrl}
                          alt={line.name}
                          fill
                          className="rounded-lg object-contain"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/images/cruise-lines/default-logo.png";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {line.name}
                        </CardTitle>
                        <div className="flex items-center text-sm text-yellow-600">
                          <StarIcon className="mr-1 w-4 h-4 fill-current" />
                          {line.rating} ({line.reviewCount.toLocaleString()}{" "}
                          reviews)
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                      {line.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Fleet Size:</span>
                        <span className="font-medium">
                          {line.fleetSize} ships
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Price Range:</span>
                        <Badge
                          variant={
                            line.priceRange === "luxury"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {line.priceRange.charAt(0).toUpperCase() +
                            line.priceRange.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {line.specialties.slice(0, 2).map((specialty: string) => (
                        <Badge
                          key={specialty}
                          variant="outline"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Popular Departure Ports */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <BuildingOffice2Icon className="mr-3 w-8 h-8 text-blue-600" />
                Popular Departure Ports
              </h2>
              <p className="text-gray-600">
                Convenient ports with modern facilities and great connections
              </p>
            </div>
            <Link href="/departure-ports">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.departurePorts.map((port, index) => (
              <motion.div
                key={port.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-32 overflow-hidden">
                    <Image
                      src={port.portImage}
                      alt={port.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/images/ports/default.jpg";
                      }}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {port.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPinIcon className="mr-1 w-4 h-4" />
                      {port.city}, {port.country}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Avg. Docking:</span>
                        <span className="font-medium">
                          {port.averageDockingDuration}h
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Type:</span>
                        <Badge variant="outline" className="text-xs">
                          {port.portType.charAt(0).toUpperCase() +
                            port.portType.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {port.facilities.slice(0, 2).map((facility: string) => (
                        <Badge
                          key={facility}
                          variant="outline"
                          className="text-xs"
                        >
                          {facility}
                        </Badge>
                      ))}
                      {port.facilities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{port.facilities.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Activities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="flex items-center mb-2 font-bold text-3xl text-gray-900">
                <PlayCircleIcon className="mr-3 w-8 h-8 text-blue-600" />
                Featured Destination Activities
              </h2>
              <p className="text-gray-600">
                Amazing experiences and excursions at cruise destinations
              </p>
            </div>
            <Link href="/destination-activities">
              <Button variant="outline" className="flex items-center">
                View All
                <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg h-full transition-shadow duration-300 cursor-pointer">
                  <div className="relative rounded-t-lg h-32 overflow-hidden">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.name}
                      fill
                      className="transition-transform duration-500 object-cover group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/images/activities/default.jpg";
                      }}
                    />
                    <div className="top-2 right-2 absolute">
                      <Badge className="bg-black/60 border-none text-white">
                        {activity.category.charAt(0).toUpperCase() +
                          activity.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {activity.name}
                    </CardTitle>
                    <div className="flex items-center text-sm text-yellow-600">
                      <StarIcon className="mr-1 w-4 h-4 fill-current" />
                      {activity.rating} ({activity.reviewCount.toLocaleString()}
                      )
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="gap-2 grid grid-cols-2 mb-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <ClockIcon className="mr-1 w-3 h-3" />
                        {activity.durationHours}h
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CurrencyDollarIcon className="mr-1 w-3 h-3" />$
                        {activity.priceRange.min}-{activity.priceRange.max}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {activity.ageSuitability.family_friendly && (
                        <Badge variant="outline" className="text-xs">
                          <UserGroupIcon className="mr-1 w-3 h-3" />
                          Family
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {activity.difficultyLevel.charAt(0).toUpperCase() +
                          activity.difficultyLevel.slice(1)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-center text-white"
        >
          <h2 className="mb-4 font-bold text-3xl">
            Ready to Start Your Cruise Adventure?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-blue-100">
            Explore our comprehensive collection of cruise destinations, lines,
            and activities. Find the perfect cruise that matches your travel
            dreams and create memories that will last a lifetime.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link href="/cruise-destinations">
              <Button
                size="lg"
                className="bg-white hover:bg-blue-50 text-blue-600"
              >
                Browse Destinations
              </Button>
            </Link>
            <Link href="/cruise-lines">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-white border-white text-white hover:text-blue-600"
              >
                Compare Cruise Lines
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
