"use client";
import ContactDepartmentCard from "@/components/cards/ContactDepartmentCard";
import CruiseInfo from "@/components/cards/CruiseInfo";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cruiseDepartureLocations } from "@/lib/constants/info/city";
import {
  capitalize,
  formatKebebToTitleCase,
  formatNumberToCurrency,
  formatTitleToCamelCase,
  removeAccents,
} from "@/lib/utils/format";
// import { Cruise } from "@/lib/interfaces/services/cruises"; // Cruise type becomes unused if filters/cruises logic is commented
import { getCruises } from "@/lib/utils/get";
import { /*useRouter,*/ useSearchParams } from "next/navigation"; // useRouter becomes unused
import { useEffect, useMemo, /*useMemo,*/ useState } from "react"; // useMemo becomes unused if filterOptions/filteredCruises are commented
import { FaFilter } from "react-icons/fa";

export default function CityCruisesPage() {
  const searchParams = useSearchParams();
  // const router = useRouter(); // Unused
  const country = searchParams.get("country"); // Unused
  const city = searchParams.get("city");
  const [cruises, setCruises] = useState<any[]>([]); // Using any[] if Cruise type is unused, or keep Cruise[] if preferred
  const [searchQuery, setSearchQuery] = useState(""); // Unused
  const [sortBy, setSortBy] = useState("city"); // Unused
  const [popularSort, setPopularSort] = useState("first"); // Unused
  //   const [filteredCruises, setFilteredCruises] = useState([]); // Removed as it's replaced by the memoized version
  const [loading, setLoading] = useState(true);

  const [showFilters, setShowFilters] = useState(false); // Unused
  const [filters, setFilters] = useState({
    // Unused if filteredCruises and resetFilters are commented
    minPrice: 0,
    maxPrice: 1500,
    rating: 0,
    tags: [] as string[],
    tourCategoryId: "all",
  });

  const cityWithoutAccents = removeAccents(city);
  const cityFormatted =
    cityWithoutAccents.replaceAll(" ", "-").charAt(0).toLowerCase() +
    formatTitleToCamelCase(formatKebebToTitleCase(cityWithoutAccents.slice(1)))
      .replace("'", "")
      .replace("-", "");

  const cruiseID = `${cityFormatted}Cruises`;

  console.log("City:", city);
  console.log("Country:", country);
  console.log("Search Params:", searchParams.toString());

  console.log(
    `Loading cruises for city: export const ${cruiseID}: Cruise[] = []`
  );
  console.log(
    `Importing from: @/lib/constants/cruises/${formatKebebToTitleCase(
      city || ""
    )}`
  );
  console.log("Constant name:", `export const ${city}Cruises: Cruise[] = [];`);

  const cityInfo = cruiseDepartureLocations.find(
    (attraction) =>
      attraction.city.toLowerCase() ===
      formatKebebToTitleCase(city || "")?.toLowerCase()
  );

  console.log("City Info:", cityInfo);
  console.log("Cruises:", cruises);

  useEffect(() => {
    async function loadTours() {
      if (city) {
        const cityName = Array.isArray(city) ? city[0] : city;
        setLoading(true);
        try {
          const tourData = await getCruises(decodeURIComponent(cityName));
          setCruises(tourData);
        } catch (error) {
          console.error("Failed to load tour data:", error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadTours();
  }, [city]);

  const handleTagToggle = (tag: string) => {
    setFilters((prev) => {
      const updatedTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: updatedTags };
    });
  };

  // The following filter-related logic is commented out because
  // filterOptions, filteredCruises, and resetFilters are not currently used in the JSX output,
  // leading to "unused variable" errors.

  const filterOptions = useMemo(() => {
    if (!cruises.length)
      return {
        rating: 0,
        categories: [],
        tags: [],
        tourCategoryId: "all",
        prices: { min: 0, max: 0 },
      };

    const categories = [...new Set(cruises.map((tour) => tour.tourCategoryId))];
    const allTags = new Set<string>();
    cruises.forEach((tour) =>
      tour.tags?.forEach((tag: string) => allTags.add(tag))
    );

    const currentCruisePrices = cruises
      .map((tour) => tour.basePrice)
      .filter((price) => typeof price === "number" && !isNaN(price));

    return {
      categories,
      tags: Array.from(allTags),
      prices: {
        min: Math.min(...currentCruisePrices),
        max: Math.max(...currentCruisePrices),
      },
    };
  }, [cruises]);

  // Add useEffect to update filters when cruise data is loaded
  useEffect(() => {
    if (filterOptions.prices.max > 0) {
      setFilters((prev) => ({
        ...prev,
        minPrice: filterOptions.prices.min,
        maxPrice: filterOptions.prices.max,
      }));
    }
  }, [filterOptions.prices.min, filterOptions.prices.max]);

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const filteredCruises = useMemo(() => {
    return cruises.filter((tour) => {
      // Price filter
      const tourPrice = tour.basePrice;
      if (tourPrice < filters.minPrice || tourPrice > filters.maxPrice)
        return false;

      // Rating filter
      if (filters.rating > 0 && tour.rating < filters.rating) return false;

      // Tags filter
      if (
        filters.tags.length > 0 &&
        !filters.tags.some((tag) => tour.tags?.includes(tag))
      )
        return false;

      // Category filter
      if (
        filters.tourCategoryId !== "all" &&
        tour.tourCategoryId !== filters.tourCategoryId
      )
        return false;

      return true;
    });
  }, [cruises, filters]);

  const resetFilters = () => {
    setFilters({
      minPrice: filterOptions.prices.min,
      maxPrice: filterOptions.prices.max,
      rating: 0,
      tags: [],
      tourCategoryId: "all",
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>
          Tours in{" "}
          {city ? decodeURIComponent(Array.isArray(city) ? city[0] : city) : ""}
          : {cityInfo?.subtitle}
        </h1>
        <blockquote>{cityInfo?.quote}</blockquote>
      </header>

      <section>
        <ContactDepartmentCard department="Ports & Itinerary Planning" />
      </section>

      <section className="space-y-4">
        <div className="flex md:flex-row flex-col justify-between items-start gap-4">
          <div className="w-full">
            <Label>
              <strong>Search</strong>
            </Label>
            <Input
              type="text"
              className="mt-2"
              placeholder="Search by city, country, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="space-y-2">
              <Label>
                <strong>Sort by:</strong>
              </Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sort option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                <strong>Popular:</strong>
              </Label>
              <Select value={popularSort} onValueChange={setPopularSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Select popularity filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No priority</SelectItem>
                  <SelectItem value="first">Show first</SelectItem>
                  <SelectItem value="last">Show last</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2>Available Cruises</h2>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="icon"
            size={"sm"}
            className="flex items-center gap-2"
          >
            <FaFilter />
          </Button>
        </div>

        {showFilters && (
          <Card className="mb-6">
            <CardContent>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
                {/* Price filter - replaced with slider */}
                <div className="space-y-4 col-span-1 md:col-span-2">
                  <div className="flex justify-between">
                    <Label>
                      <strong>Price Range</strong>
                    </Label>
                    <span className="text-sm">
                      {formatNumberToCurrency(filters.minPrice)} -{" "}
                      {formatNumberToCurrency(filters.maxPrice)}
                    </span>
                  </div>
                  <Slider
                    min={filterOptions.prices.min}
                    max={filterOptions.prices.max}
                    step={50}
                    value={[filters.minPrice, filters.maxPrice]}
                    onValueChange={(values) => {
                      if (Array.isArray(values) && values.length === 2) {
                        handleFilterChange("minPrice", values[0]);
                        handleFilterChange("maxPrice", values[1]);
                      }
                    }}
                    className="py-4"
                  />
                </div>

                {/* Rating filter */}
                <div className="space-y-2">
                  <Label htmlFor="rating-filter">
                    <strong>Minimum Rating</strong>
                  </Label>
                  <Select
                    value={filters.rating.toString()}
                    onValueChange={(value) =>
                      handleFilterChange("rating", Number(value))
                    }
                  >
                    <SelectTrigger id="rating-filter">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any rating</SelectItem>
                      <SelectItem value="1">★ and above</SelectItem>
                      <SelectItem value="2">★★ and above</SelectItem>
                      <SelectItem value="3">★★★ and above</SelectItem>
                      <SelectItem value="4">★★★★ and above</SelectItem>
                      <SelectItem value="5">★★★★★ only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category filter */}
                <div className="space-y-2">
                  <Label htmlFor="category-filter">
                    <strong>Tour Category</strong>
                  </Label>
                  <Select
                    value={filters.tourCategoryId}
                    onValueChange={(value) =>
                      handleFilterChange("tourCategoryId", value)
                    }
                  >
                    <SelectTrigger id="category-filter">
                      <SelectValue placeholder="Any category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any category</SelectItem>
                      {filterOptions.categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags filter */}
                <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
                  <Label>
                    <strong>Tags</strong>
                  </Label>
                  <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
                    {filterOptions.tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag}`}
                          checked={filters.tags.includes(tag)}
                          onCheckedChange={() => handleTagToggle(tag)}
                        />
                        <Label
                          htmlFor={`tag-${tag}`}
                          className="cursor-pointer"
                        >
                          {capitalize(tag)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  Showing {filteredCruises.length} of {cruises.length} cruises
                </div>
                <Button
                  variant="destructive"
                  onClick={resetFilters}
                  className="mr-2"
                >
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCruises.map((tour, index) => (
          <CruiseInfo
            key={index}
            cruise={tour}
            city={`${city}`}
            country={`${country}`}
          />
        ))}
      </div>
    </div>
  );
}
