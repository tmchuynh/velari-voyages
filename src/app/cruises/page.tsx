"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XMarkIcon,
  ChevronRightIcon,
  EyeIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaShip, FaAnchor } from "react-icons/fa";
import { getItineraries } from "@/lib/utils/api/vecto-cruise-api";
import { type Itinerary } from "@/lib/utils/api/vecto-cruise-api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function CruisesPage() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [lengthFilter, setLengthFilter] = useState<string>("all");
  const [departureCity, setDepartureCity] = useState<string>("all");
  const [returnCity, setReturnCity] = useState<string>("all");
  const [destinationFilter, setDestinationFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<
    | "title"
    | "destination"
    | "departDate"
    | "returnDate"
    | "departureCity"
    | "returnCity"
    | "length"
  >("departDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load data on mount
  useEffect(() => {
    const loadItineraries = async () => {
      try {
        setLoading(true);
        const response = await getItineraries();
        if (response.success && response.data) {
          setItineraries(response.data);
        } else {
          setError("Failed to load cruises. Please try again.");
        }
      } catch (err) {
        setError("Failed to load cruises. Please try again.");
        console.error("Error loading itineraries:", err);
      } finally {
        setLoading(false);
      }
    };

    loadItineraries();
  }, []);

  // Extract unique values for filters from actual API data
  const uniqueLengths = useMemo(() => {
    const lengths = itineraries
      .map((it) => it.itinerary_num_nights)
      .filter(Boolean);
    return [...new Set(lengths)].sort((a, b) => a - b);
  }, [itineraries]);

  const uniqueDepartureCities = useMemo(() => {
    const cities = itineraries
      .map((it) => it.itinerary_depart_city)
      .filter(Boolean);
    return [...new Set(cities)].sort();
  }, [itineraries]);

  const uniqueReturnCities = useMemo(() => {
    const cities = itineraries
      .map((it) => it.itinerary_return_city)
      .filter(Boolean);
    return [...new Set(cities)].sort();
  }, [itineraries]);

  const uniqueDestinations = useMemo(() => {
    const destinations = itineraries
      .map((it) => it.itinerary_destination_name)
      .filter(Boolean);
    return [...new Set(destinations)].sort();
  }, [itineraries]);

  // Filter and sort itineraries
  const filteredAndSortedItineraries = useMemo(() => {
    const filtered = itineraries.filter((itinerary) => {
      const matchesSearch =
        itinerary.itinerary_title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        itinerary.itinerary_destination_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        itinerary.cruise_line?.cruise_line_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        itinerary.ship?.ship_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesLength =
        lengthFilter === "all" ||
        itinerary.itinerary_num_nights === parseInt(lengthFilter);

      const matchesDepartureCity =
        departureCity === "all" ||
        itinerary.itinerary_depart_city === departureCity;

      const matchesReturnCity =
        returnCity === "all" || itinerary.itinerary_return_city === returnCity;

      const matchesDestination =
        destinationFilter === "all" ||
        itinerary.itinerary_destination_name === destinationFilter;

      return (
        matchesSearch &&
        matchesLength &&
        matchesDepartureCity &&
        matchesReturnCity &&
        matchesDestination
      );
    });

    // Sort itineraries
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = a.itinerary_title.localeCompare(b.itinerary_title);
          break;
        case "destination":
          comparison = a.itinerary_destination_name.localeCompare(
            b.itinerary_destination_name,
          );
          break;
        case "departDate":
          comparison =
            new Date(a.itinerary_depart_date).getTime() -
            new Date(b.itinerary_depart_date).getTime();
          break;
        case "returnDate":
          comparison =
            new Date(a.itinerary_return_date).getTime() -
            new Date(b.itinerary_return_date).getTime();
          break;
        case "departureCity":
          comparison = a.itinerary_depart_city.localeCompare(
            b.itinerary_depart_city,
          );
          break;
        case "returnCity":
          comparison = a.itinerary_return_city.localeCompare(
            b.itinerary_return_city,
          );
          break;
        case "length":
          comparison = a.itinerary_num_nights - b.itinerary_num_nights;
          break;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [
    itineraries,
    searchTerm,
    lengthFilter,
    departureCity,
    returnCity,
    destinationFilter,
    sortBy,
    sortOrder,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedItineraries.length / itemsPerPage,
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedItineraries.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    lengthFilter,
    departureCity,
    returnCity,
    destinationFilter,
    sortBy,
    sortOrder,
    itemsPerPage,
  ]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <p className="text-lg text-white">Loading cruises...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="flex justify-center items-center min-h-screen"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="max-w-md text-center">
          <div className="bg-red-500/20 backdrop-blur-sm p-6 border border-red-400/50 rounded-xl">
            <p className="mb-4 text-red-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg text-red-300 hover:text-red-200 transition-colors"
            >
              Try Again
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-3xl text-white">
                Cruise Itineraries
              </h1>
              <p className="mt-1 text-gray-300">
                Discover amazing cruise destinations and experiences
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Items per page selector */}
              <div className="flex items-center space-x-2">
                <Label className="text-sm text-white">Show:</Label>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => setItemsPerPage(Number(value))}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 w-20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filter toggle */}
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  showFilters
                    ? "bg-blue-500/30 text-blue-300"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                <span className="sm:block hidden">Filters</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex gap-6">
          {/* Sidebar - Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -300, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 320 }}
                exit={{ opacity: 0, x: -300, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <Card className="top-8 sticky bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white">
                        Filters & Sorting
                      </CardTitle>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Search */}
                    <div className="space-y-2">
                      <Label className="text-white">Search Cruises</Label>
                      <div className="relative">
                        <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          type="text"
                          placeholder="Search by title or destination..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-white/5 pl-10 border-white/20 focus:border-blue-400 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Cruise Length Filter */}
                    <div className="space-y-2">
                      <Label className="text-white">Cruise Length</Label>
                      <Select
                        value={lengthFilter}
                        onValueChange={setLengthFilter}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Lengths</SelectItem>
                          {uniqueLengths.map((length) => (
                            <SelectItem key={length} value={length.toString()}>
                              {length} Days
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Departure City Filter */}
                    <div className="space-y-2">
                      <Label className="text-white">Departure City</Label>
                      <Select
                        value={departureCity}
                        onValueChange={setDepartureCity}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Cities</SelectItem>
                          {uniqueDepartureCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Return City Filter */}
                    <div className="space-y-2">
                      <Label className="text-white">Return City</Label>
                      <Select value={returnCity} onValueChange={setReturnCity}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Cities</SelectItem>
                          {uniqueReturnCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Destination Filter */}
                    <div className="space-y-2">
                      <Label className="text-white">Destination</Label>
                      <Select
                        value={destinationFilter}
                        onValueChange={setDestinationFilter}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Destinations</SelectItem>
                          {uniqueDestinations.map((destination) => (
                            <SelectItem key={destination} value={destination}>
                              {destination}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort By */}
                    <div className="space-y-2">
                      <Label className="text-white">Sort By</Label>
                      <Select
                        value={sortBy}
                        onValueChange={(value) => setSortBy(value as any)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="title">Title</SelectItem>
                          <SelectItem value="destination">
                            Destination
                          </SelectItem>
                          <SelectItem value="departDate">
                            Departure Date
                          </SelectItem>
                          <SelectItem value="returnDate">
                            Return Date
                          </SelectItem>
                          <SelectItem value="departureCity">
                            Departure City
                          </SelectItem>
                          <SelectItem value="returnCity">
                            Return City
                          </SelectItem>
                          <SelectItem value="length">Cruise Length</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort Order */}
                    <div className="space-y-2">
                      <Label className="text-white">Sort Order</Label>
                      <div className="flex items-center space-x-2">
                        <Toggle
                          pressed={sortOrder === "asc"}
                          onPressedChange={(pressed) =>
                            setSortOrder(pressed ? "asc" : "desc")
                          }
                          className="flex items-center space-x-2 data-[state=on]:bg-blue-500/30 data-[state=on]:text-blue-300"
                        >
                          {sortOrder === "asc" ? (
                            <ArrowUpIcon className="w-4 h-4" />
                          ) : (
                            <ArrowDownIcon className="w-4 h-4" />
                          )}
                          <span>
                            {sortOrder === "asc" ? "Ascending" : "Descending"}
                          </span>
                        </Toggle>
                      </div>
                    </div>

                    {/* Results Info */}
                    <div className="bg-blue-500/20 p-3 border border-blue-400/30 rounded-lg">
                      <p className="text-blue-300 text-sm">
                        Showing {currentItems.length} of{" "}
                        {filteredAndSortedItineraries.length} cruises
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Results Grid */}
            <motion.div
              layout
              className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8"
            >
              <AnimatePresence mode="popLayout">
                {currentItems.map((itinerary, index) => (
                  <motion.div
                    key={itinerary.itinerary_id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      layout: { duration: 0.3 },
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="group bg-white/10 hover:bg-white/15 backdrop-blur-md border-white/20 h-full text-white transition-all duration-300">
                      <CardContent className="p-6">
                        {/* Cruise Header */}
                        <div className="mb-4">
                          <h3 className="mb-2 font-semibold text-white text-xl group-hover:text-blue-300 transition-colors">
                            {itinerary.itinerary_title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <GlobeAltIcon className="w-4 h-4 text-blue-400" />
                            <span className="font-medium text-blue-300">
                              {itinerary.itinerary_destination_name}
                            </span>
                          </div>
                        </div>

                        {/* Cruise Details */}
                        <div className="space-y-3 mb-4">
                          {/* Duration */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <ClockIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">
                                Duration:
                              </span>
                            </div>
                            <span className="font-medium text-white">
                              {itinerary.itinerary_num_nights} Nights
                            </span>
                          </div>

                          {/* Departure Date */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">
                                Departs:
                              </span>
                            </div>
                            <span className="font-medium text-white">
                              {format(
                                parseISO(itinerary.itinerary_depart_date),
                                "MMM dd, yyyy",
                              )}
                            </span>
                          </div>

                          {/* Return Date */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">
                                Returns:
                              </span>
                            </div>
                            <span className="font-medium text-white">
                              {format(
                                parseISO(itinerary.itinerary_return_date),
                                "MMM dd, yyyy",
                              )}
                            </span>
                          </div>

                          {/* Departure City */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <MapPinIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">
                                From:
                              </span>
                            </div>
                            <span className="font-medium text-white">
                              {itinerary.itinerary_depart_city}
                            </span>
                          </div>

                          {/* Return City */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <FaAnchor className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300 text-sm">To:</span>
                            </div>
                            <span className="font-medium text-white">
                              {itinerary.itinerary_return_city}
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-between items-center pt-4 border-white/10 border-t">
                          <Link
                            href={`/cruises/${itinerary.itinerary_id}`}
                            className="inline-flex items-center space-x-2 font-medium text-blue-400 text-sm hover:text-blue-300 transition-colors"
                          >
                            <span>View Itinerary</span>
                            <ChevronRightIcon className="w-4 h-4" />
                          </Link>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-blue-500/20 hover:bg-blue-500/30 p-2 rounded-lg transition-colors"
                          >
                            <EyeIcon className="w-4 h-4 text-blue-300" />
                          </motion.button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results */}
            {filteredAndSortedItineraries.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-xl">
                  <FaShip className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    No cruises found
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Try adjusting your search terms or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setLengthFilter("all");
                      setDepartureCity("all");
                      setReturnCity("all");
                      setDestinationFilter("all");
                      setSortBy("departDate");
                      setSortOrder("asc");
                    }}
                    className="bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-lg text-blue-300 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-4 border border-white/20 rounded-xl">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          className={`${
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "text-white hover:bg-white/20"
                          }`}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                          const distance = Math.abs(page - currentPage);
                          return (
                            distance === 0 ||
                            distance === 1 ||
                            page === 1 ||
                            page === totalPages
                          );
                        })
                        .map((page, index, array) => {
                          const showEllipsis =
                            index > 0 && array[index - 1] !== page - 1;

                          return (
                            <React.Fragment key={page}>
                              {showEllipsis && (
                                <PaginationItem>
                                  <span className="px-3 py-2 text-gray-400">
                                    ...
                                  </span>
                                </PaginationItem>
                              )}
                              <PaginationItem>
                                <PaginationLink
                                  onClick={() => handlePageChange(page)}
                                  isActive={currentPage === page}
                                  className={`${
                                    currentPage === page
                                      ? "bg-blue-500/30 text-blue-300 border-blue-400/50"
                                      : "text-white hover:bg-white/20"
                                  }`}
                                >
                                  {page}
                                </PaginationLink>
                              </PaginationItem>
                            </React.Fragment>
                          );
                        })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              Math.min(totalPages, currentPage + 1),
                            )
                          }
                          className={`${
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : "text-white hover:bg-white/20"
                          }`}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
