"use client";

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
  MapPinIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  fetchAllCruisesFromExpedia,
  fetchPopularCruiseDestinationsFromExpedia,
  fetchPopularCruiseLinesFromExpedia,
  fetchPopularDeparturePortsFromExpedia,
} from "@/lib/utils/get/expedia-cruises";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/cards/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/button/Button";
import { OceanLoading } from "@/components/Loading";
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
import { useRouter } from "next/navigation";

export default function CruisesPage() {
  const router = useRouter();
  const [cruises, setCruises] = useState<any[]>([]);
  const [destinations, setDestinations] = useState<any[]>([]);
  const [cruiseLines, setCruiseLines] = useState<any[]>([]);
  const [departurePorts, setDeparturePorts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and sort states
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedCruiseLine, setSelectedCruiseLine] = useState<string>("");
  const [selectedDeparturePort, setSelectedDeparturePort] =
    useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  // Load all data on mount
  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);

        // Load all data in parallel
        const [cruiseData, destinationData, cruiseLineData, portData] =
          await Promise.all([
            fetchAllCruisesFromExpedia(),
            fetchPopularCruiseDestinationsFromExpedia(50),
            fetchPopularCruiseLinesFromExpedia(50),
            fetchPopularDeparturePortsFromExpedia(50),
          ]);

        setCruises(cruiseData);
        setDestinations(destinationData);
        setCruiseLines(cruiseLineData);
        setDeparturePorts(portData);
      } catch (err) {
        setError("Failed to load cruise data. Please try again.");
        console.error("Error loading cruise data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  // Filter and sort cruises
  const filteredAndSortedCruises = useMemo(() => {
    const filtered = cruises.filter((cruise) => {
      const matchesSearch =
        cruise.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cruise.destination?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDestination =
        !selectedDestination ||
        cruise.destination === selectedDestination ||
        cruise.destinations?.includes(selectedDestination);

      const matchesCruiseLine =
        !selectedCruiseLine ||
        cruise.cruise_line === selectedCruiseLine ||
        cruise.cruise_line_id === selectedCruiseLine;

      const matchesDeparturePort =
        !selectedDeparturePort ||
        cruise.departure_port === selectedDeparturePort ||
        cruise.departure_port_id === selectedDeparturePort;

      const matchesPriceRange =
        !priceRange ||
        (() => {
          const price = cruise.starting_price || cruise.price || 0;
          switch (priceRange) {
            case "budget":
              return price < 1000;
            case "mid-range":
              return price >= 1000 && price < 3000;
            case "luxury":
              return price >= 3000 && price < 8000;
            case "ultra-luxury":
              return price >= 8000;
            default:
              return true;
          }
        })();

      const matchesDuration =
        !duration ||
        (() => {
          const days = cruise.duration_days || cruise.nights || 0;
          switch (duration) {
            case "short":
              return days <= 5;
            case "medium":
              return days > 5 && days <= 10;
            case "long":
              return days > 10;
            default:
              return true;
          }
        })();

      return (
        matchesSearch &&
        matchesDestination &&
        matchesCruiseLine &&
        matchesDeparturePort &&
        matchesPriceRange &&
        matchesDuration
      );
    });

    // Sort cruises
    filtered.sort((a, b) => {
      let valueA, valueB;

      switch (sortBy) {
        case "name":
          valueA = a.name || "";
          valueB = b.name || "";
          break;
        case "price":
          valueA = a.starting_price || a.price || 0;
          valueB = b.starting_price || b.price || 0;
          break;
        case "duration":
          valueA = a.duration_days || a.nights || 0;
          valueB = b.duration_days || b.nights || 0;
          break;
        case "rating":
          valueA = a.rating || 0;
          valueB = b.rating || 0;
          break;
        default:
          valueA = a.name || "";
          valueB = b.name || "";
      }

      if (typeof valueA === "string") {
        const comparison = valueA
          .toLowerCase()
          .localeCompare(valueB.toLowerCase());
        return sortOrder === "asc" ? comparison : -comparison;
      } else {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
    });

    return filtered;
  }, [
    cruises,
    searchTerm,
    selectedDestination,
    selectedCruiseLine,
    selectedDeparturePort,
    priceRange,
    duration,
    sortBy,
    sortOrder,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedCruises.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAndSortedCruises.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    selectedDestination,
    selectedCruiseLine,
    selectedDeparturePort,
    priceRange,
    duration,
    sortBy,
    sortOrder,
    itemsPerPage,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDestination("");
    setSelectedCruiseLine("");
    setSelectedDeparturePort("");
    setPriceRange("");
    setDuration("");
    setSortBy("name");
    setSortOrder("asc");
  };

  if (loading) {
    return <OceanLoading text="Loading cruise data..." />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card variant="glass" className="p-8 max-w-md text-center">
          <div className="flex justify-center items-center bg-destructive/10 mx-auto mb-4 rounded-full w-16 h-16">
            <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <CardTitle className="mb-4 text-destructive">Error Loading Cruises</CardTitle>
          <p className="mb-4 text-muted-foreground">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 font-bold text-4xl md:text-6xl">
              Discover Your Perfect Cruise
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Browse {cruises.length} cruises from top cruise lines worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <GlobeAltIcon className="w-5 h-5" />
                <span>{destinations.length} Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <BuildingOffice2Icon className="w-5 h-5" />
                <span>{cruiseLines.length} Cruise Lines</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                <span>{departurePorts.length} Departure Ports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex lg:flex-row flex-col gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 items-center">
              <MagnifyingGlassIcon className="top-6 left-3 absolute w-5 h-5 transform -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search cruises, destinations, cruise lines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 h-12"
            >
              <AdjustmentsHorizontalIcon className="mr-2 w-5 h-5" />
              Filters
              {(selectedDestination ||
                selectedCruiseLine ||
                selectedDeparturePort ||
                priceRange ||
                duration) && (
                <Badge variant="destructive" className="ml-2 px-2 py-0 text-xs">
                  Active
                </Badge>
              )}
            </Button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <Card className="p-6">
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-4">
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Select
                        value={selectedDestination}
                        onValueChange={setSelectedDestination}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any destination</SelectItem>
                          {destinations.map((dest) => (
                            <SelectItem key={dest.id} value={dest.name}>
                              {dest.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="cruise-line">Cruise Line</Label>
                      <Select
                        value={selectedCruiseLine}
                        onValueChange={setSelectedCruiseLine}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any cruise line" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any cruise line</SelectItem>
                          {cruiseLines.map((line) => (
                            <SelectItem key={line.id} value={line.name}>
                              {line.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="departure-port">Departure Port</Label>
                      <Select
                        value={selectedDeparturePort}
                        onValueChange={setSelectedDeparturePort}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Any port" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any port</SelectItem>
                          {departurePorts.map((port) => (
                            <SelectItem key={port.id} value={port.name}>
                              {port.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="price-range">Price Range</Label>
                      <Select value={priceRange} onValueChange={setPriceRange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any price</SelectItem>
                          <SelectItem value="budget">
                            Budget (Under $1,000)
                          </SelectItem>
                          <SelectItem value="mid-range">
                            Mid-range ($1,000 - $3,000)
                          </SelectItem>
                          <SelectItem value="luxury">
                            Luxury ($3,000 - $8,000)
                          </SelectItem>
                          <SelectItem value="ultra-luxury">
                            Ultra-luxury ($8,000+)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any duration</SelectItem>
                          <SelectItem value="short">
                            Short (5 days or less)
                          </SelectItem>
                          <SelectItem value="medium">
                            Medium (6-10 days)
                          </SelectItem>
                          <SelectItem value="long">Long (11+ days)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <Button variant="outline" onClick={clearFilters}>
                      <XMarkIcon className="mr-2 w-4 h-4" />
                      Clear Filters
                    </Button>
                    <div className="text-gray-600 text-sm">
                      {filteredAndSortedCruises.length} of {cruises.length}{" "}
                      cruises found
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sort and View Options */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-by">Sort by:</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? (
                <ArrowUpIcon className="w-4 h-4" />
              ) : (
                <ArrowDownIcon className="w-4 h-4" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Label htmlFor="items-per-page">Per page:</Label>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(Number(value))}
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="48">48</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        {filteredAndSortedCruises.length === 0 ? (
          <div className="py-12 text-center">
            <GlobeAltIcon className="mx-auto mb-4 w-16 h-16 text-gray-400" />
            <h3 className="mb-2 font-semibold text-gray-600 text-xl">
              No cruises found
            </h3>
            <p className="mb-4 text-gray-500">
              Try adjusting your filters or search terms
            </p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        ) : (
          <>
            {/* Cruise Grid */}
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {currentItems.map((cruise, index) => (
                <motion.div
                  key={cruise.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg h-full transition-shadow duration-300">
                    <div className="relative">
                      <Image
                        src={
                          cruise.image_url ||
                          cruise.ship_image ||
                          "/images/cruise-placeholder.jpg"
                        }
                        alt={cruise.name || "Cruise"}
                        width={400}
                        height={200}
                        className="rounded-t-lg w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "/images/cruise-placeholder.jpg";
                        }}
                      />
                      {cruise.rating && (
                        <div className="top-3 right-3 absolute flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium text-sm">
                            {cruise.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <div className="mb-2">
                        <h3 className="mb-1 font-semibold text-lg line-clamp-2">
                          {cruise.name || "Cruise Experience"}
                        </h3>
                        <p className="mb-2 text-gray-600 text-sm">
                          {cruise.cruise_line || "Premium Cruise Line"}
                        </p>
                      </div>

                      <div className="space-y-2 mb-4">
                        {cruise.destination && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{cruise.destination}</span>
                          </div>
                        )}

                        {cruise.departure_port && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <GlobeAltIcon className="w-4 h-4" />
                            <span>From {cruise.departure_port}</span>
                          </div>
                        )}

                        {(cruise.duration_days || cruise.nights) && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <ClockIcon className="w-4 h-4" />
                            <span>
                              {cruise.duration_days || cruise.nights} days
                            </span>
                          </div>
                        )}

                        {(cruise.starting_price || cruise.price) && (
                          <div className="flex items-center gap-2 font-semibold text-green-600 text-sm">
                            <CurrencyDollarIcon className="w-4 h-4" />
                            <span>
                              From $
                              {(
                                cruise.starting_price || cruise.price
                              ).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/cruises/${cruise.id}`)}
                        >
                          <EyeIcon className="mr-2 w-4 h-4" />
                          View Details
                        </Button>

                        <Button
                          size="sm"
                          onClick={() =>
                            router.push(`/your-trip?cruise=${cruise.id}`)
                          }
                        >
                          Book Now
                          <ChevronRightIcon className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNum);
                            }}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            setCurrentPage(currentPage + 1);
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
