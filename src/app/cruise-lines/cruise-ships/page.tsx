"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  XMarkIcon,
  ChevronRightIcon,
  EyeIcon,
  CalendarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { FaShip } from "react-icons/fa";
import {
  getCruiseLines,
  getCruiseLineShips,
  getShipDetails,
  ShipDetails,
} from "@/lib/utils/api/vecto-cruise-api";
import { type Ship, type CruiseLine } from "@/lib/utils/api/vecto-cruise-api";
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
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CruiseShipsPage() {
  const [ships, setShips] = useState<(ShipDetails & { cruise_line_name: string; cruise_line_id: string })[]>([]);
  const [cruiseLines, setCruiseLines] = useState<CruiseLine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCruiseLine, setSelectedCruiseLine] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "year" | "capacity">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Get all cruise lines first
        const cruiseLinesResponse = await getCruiseLines();
        if (cruiseLinesResponse.success && cruiseLinesResponse.data) {
          setCruiseLines(cruiseLinesResponse.data);

          // Get ships for all cruise lines
          const allShips: (ShipDetails & { cruise_line_name: string; cruise_line_id: string })[] = [];
          for (const line of cruiseLinesResponse.data) {
            const shipsResponse = await getCruiseLineShips({
              cruise_line_id: line.cruise_line_id,
            });
            if (shipsResponse.success && shipsResponse.data) {
              const shipDetails: (ShipDetails & { cruise_line_name: string; cruise_line_id: string })[] = await Promise.all(
                shipsResponse.data.map(async (ship) => {
                  const details = await getShipDetails(ship.ship_id);
                  if (details.success && details.data) {
                    return {
                      ...ship,
                      ...details.data,
                      cruise_line_name: line.cruise_line_name,
                      cruise_line_id: line.cruise_line_id,
                    };
                  }
                  return {
                    ...ship,
                    ship_description: '',
                    ship_image_thumb: '',
                    ship_image: '',
                    ship_year_built: null,
                    ship_year_refurbished: null,
                    ship_registry: null,
                    ship_tonnage: null,
                    ship_num_cabins: null,
                    ship_num_handicap_cabins: null,
                    ship_capacity: null,
                    ship_num_elevators: null,
                    ship_num_restaruants: null,
                    ship_num_bars: null,
                    ship_num_pools: null,
                    ship_num_theaters: null,
                    ship_has_meeting_rooms: null,
                    ship_has_casino: null,
                    ship_has_disco: null,
                    ship_has_fitness_center: null,
                    ship_has_childrens_program: null,
                    ship_has_internet_cafe: null,
                    ship_has_spa: null,
                    ship_has_library: null,
                    ship_code: null,
                    ship_decks: [],
                    ship_cabin_categories: [],
                    cruise_line_name: line.cruise_line_name,
                    cruise_line_id: line.cruise_line_id,
                  };
                }),
              );

              allShips.push(...shipDetails);

              // Add cruise line name to each ship for filtering
              // const shipsWithLineInfo = shipsResponse.data.map((ship) => ({
              //   ...ship,
              //   cruise_line_name: line.cruise_line_name,
              //   cruise_line_id: line.cruise_line_id,
              //   cruise_line_description: line.cruise_line_description,
              //   cruise_line_logo_thumb: line.cruise_line_logo_thumb,
              //   cruise_line_logo: line.cruise_line_logo,
              // }));
              // allShips.push(...shipsWithLineInfo);
            }
          }
          setShips(allShips);
        }
      } catch (err) {
        setError("Failed to load cruise ships. Please try again.");
        console.error("Error loading ships:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter and sort ships
  const filteredAndSortedShips = useMemo(() => {
    const filtered = ships.filter((ship) => {
      const matchesSearch =
        ship.ship_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ship.ship_id.toString().includes(searchTerm);

      const matchesCruiseLine =
        selectedCruiseLine === "all" || ship.cruise_line_name === selectedCruiseLine;

      return matchesSearch && matchesCruiseLine;
    });

    // Sort ships
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.ship_name.localeCompare(b.ship_name);
          break;
        case "year":
          comparison = (a.ship_year_built || 0) - (b.ship_year_built || 0);
          break;
        case "capacity":
          comparison = (a.ship_capacity || 0) - (b.ship_capacity || 0);
          break;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [ships, searchTerm, selectedCruiseLine, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedShips.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedShips.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCruiseLine, sortBy, sortOrder, itemsPerPage]);

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
          <p className="text-lg text-white">Loading cruise ships...</p>
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
              <h1 className="font-bold text-3xl text-white">Cruise Ships</h1>
              <p className="mt-1 text-gray-300">
                Explore our magnificent fleet of cruise ships
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
                      <Label className="text-white">Search Ships</Label>
                      <div className="relative">
                        <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                        <Input
                          type="text"
                          placeholder="Search by name or ID..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-white/5 pl-10 border-white/20 focus:border-blue-400 text-white placeholder-gray-400"
                        />
                      </div>
                      <p className="text-gray-400 text-xs">
                        Try searching for "breeze" or ship ID
                      </p>
                    </div>

                    {/* Cruise Line Filter */}
                    <div className="space-y-2">
                      <Label className="text-white">Cruise Line</Label>
                      <Select
                        value={selectedCruiseLine}
                        onValueChange={setSelectedCruiseLine}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>                          <SelectContent>
                            <SelectItem value="all">All Cruise Lines</SelectItem>
                            {cruiseLines.map((line) => (
                              <SelectItem key={line.cruise_line_id} value={line.cruise_line_name}>
                                {line.cruise_line_name}
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
                          <SelectItem value="name">Ship Name</SelectItem>
                          <SelectItem value="year">Year Built</SelectItem>
                          <SelectItem value="capacity">Capacity</SelectItem>
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
                        {filteredAndSortedShips.length} ships
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
              className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8"
            >
              <AnimatePresence mode="popLayout">
                {currentItems.map((ship, index) => (
                  <motion.div
                    key={ship.ship_id}
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
                        {/* Ship Image */}
                        <div className="mb-4">
                          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-full h-48 overflow-hidden">
                            {ship.ship_image || ship.ship_image_thumb ? (
                              <Image
                                src={ship.ship_image || ship.ship_image_thumb}
                                alt={ship.ship_name}
                                width={400}
                                height={200}
                                className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex justify-center items-center w-full h-full">
                                <FaShip className="w-16 h-16 text-white" />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Ship Details */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-white text-xl group-hover:text-blue-300 transition-colors">
                            {ship.ship_name}
                          </h3>
                          
                          <p className="text-gray-300 text-sm">
                            {ship.cruise_line_name}
                          </p>
                          
                          <p className="text-gray-400 text-xs">
                            ID: {ship.ship_code || ship.ship_id}
                          </p>

                          {/* Ship Stats */}
                          <div className="space-y-2">
                            {ship.ship_capacity && (
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Capacity:</span>
                                <span className="text-white">
                                  {ship.ship_capacity.toLocaleString()}
                                </span>
                              </div>
                            )}
                            {ship.ship_year_built && (
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Year Built:</span>
                                <span className="text-white">
                                  {ship.ship_year_built}
                                </span>
                              </div>
                            )}
                            {ship.ship_tonnage && (
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-400">Tonnage:</span>
                                <span className="text-white">{ship.ship_tonnage?.toLocaleString()}</span>
                              </div>
                            )}
                          </div>

                          {/* View Details Button */}
                          <div className="pt-4 border-white/10 border-t">
                            <Link
                              href={`/cruise-lines/cruise-ships/${ship.ship_id}`}
                              className="inline-flex items-center space-x-2 font-medium text-blue-400 text-sm hover:text-blue-300 transition-colors"
                            >
                              <span>View Details</span>
                              <ChevronRightIcon className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* No Results */}
            {filteredAndSortedShips.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-xl">
                  <FaShip className="mx-auto mb-4 w-16 h-16 text-gray-400" />
                  <h3 className="mb-2 font-semibold text-white text-xl">
                    No ships found
                  </h3>
                  <p className="mb-4 text-gray-300">
                    Try adjusting your search terms or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCruiseLine("all");
                      setSortBy("name");
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
