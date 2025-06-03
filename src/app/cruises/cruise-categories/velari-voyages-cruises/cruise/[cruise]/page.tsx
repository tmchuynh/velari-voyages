"use client";
import CruiseInfo from "@/components/cards/CruiseInfo";
import Loading from "@/components/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  cruiseCategoryPackages,
  cruisePackages,
} from "@/lib/constants/info/cruisePackages";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { Package } from "@/lib/types/types";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { capitalize, formatNumberToCurrency } from "@/lib/utils/format";
import {
  getAllCruises,
  getCruises,
  getCruisesByCategory,
} from "@/lib/utils/get";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CruiseInformationPage() {
  const searchParams = useSearchParams();
  const departureLocationCity = searchParams.get("departureLocationCity");
  const departureLocationCountry = searchParams.get("departureLocationCountry");
  const arrivalLocationCity = searchParams.get("arrivalLocationCity");
  const arrivalLocationCountry = searchParams.get("arrivalLocationCountry");
  const cruise = searchParams.get("cruise");
  const category = searchParams.get("category");
  const [loading, setLoading] = useState(true);
  const [allCruises, setAllCruises] = useState<Cruise[]>([]);
  const [filteredCruises, setFilteredCruises] = useState<Cruise[]>([]);

  const [cruiseData, setCruiseData] = useState<Cruise>();

  console.log("category:", category);

  // Add state for managing selected package
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [availablePackages, setAvailablePackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchCruiseData = async () => {
      try {
        const data = await getCruises(departureLocationCity || "");
        const cruiseInfo = data.find(
          (c: { title: string }) => c.title === cruise
        );
        if (cruiseInfo) {
          setCruiseData(cruiseInfo);
        } else {
          console.error("Cruise not found with the provided parameters.");
        }
      } catch (error) {
        console.error("Error fetching cruise data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCruiseData();
  }, [
    departureLocationCity,
    departureLocationCountry,
    arrivalLocationCity,
    arrivalLocationCountry,
    cruise,
    category,
  ]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllCruises();
        console.log("Fetched Cruises:", data);
        setAllCruises(data);
        if (data.length > 0) {
          const filteredTours = getCruisesByCategory(data, `${category}`);
          setFilteredCruises(filteredTours);
        }
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [category]);

  // Effect to load available packages based on cruise category
  useEffect(() => {
    if (cruiseData?.category) {
      const packageIds = cruiseCategoryPackages[cruiseData.category] || [];
      const packages = packageIds
        .map((id) => cruisePackages.find((pkg) => pkg.id === id))
        .filter(Boolean) as Package[];
      setAvailablePackages(packages);
    }
  }, [cruiseData]);

  console.log("Cruise:", cruise);
  console.log("Category:", category);
  console.log("All Cruises:", allCruises);
  console.log("Filtered Cruises:", filteredCruises);
  console.log("Cruise Data:", cruiseData);
  console.log("Available Packages:", availablePackages);

  console.log("Filtered Cruises:", filteredCruises);

  if (loading) {
    return <Loading />;
  }

  if (!cruiseData) {
    return (
      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        <header>
          <h1>Cruise Not Found</h1>
          <h5> Sorry, we couldn't find the information you're looking for.</h5>
          <p>
            The requested cruise information could not be found. Please check
            the details and try again.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>{cruiseData.title}</h1>
        <h5>{displayRatingStars(cruiseData.rating)}</h5>
        <p>{cruiseData.description}</p>
      </header>

      <section className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section>
            <h3>Departure Location</h3>
            <p>
              {cruiseData.departureLocation.city},{" "}
              {cruiseData.departureLocation.country}
            </p>
            <h3>Arrival Location</h3>
            <p>
              {cruiseData.arrivalLocation.city},{" "}
              {cruiseData.arrivalLocation.country}
            </p>
          </section>
          <section>
            <h2>Itinerary</h2>
            <p>{cruiseData.itinerary.description}</p>
            <Table>
              <TableCaption>
                Total Duration: {cruiseData.itinerary.totalDuration} | Total
                Distance: {cruiseData.itinerary.distance}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cruiseData.itinerary.route.map((location, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {location.city}, {location.country}
                    </TableCell>
                    <TableCell>
                      {index < cruiseData.itinerary.timeAtSea.length && (
                        <>
                          {new Date(
                            cruiseData.itinerary.timeAtSea[index].start
                          ).toLocaleDateString()}{" "}
                          -{" "}
                          {new Date(
                            cruiseData.itinerary.timeAtSea[index].end
                          ).toLocaleDateString()}
                        </>
                      )}
                      {index < cruiseData.itinerary.timeOnLand.length && (
                        <>
                          {new Date(
                            cruiseData.itinerary.timeOnLand[index].start
                          ).toLocaleDateString()}{" "}
                          -{" "}
                          {new Date(
                            cruiseData.itinerary.timeOnLand[index].end
                          ).toLocaleDateString()}
                        </>
                      )}
                    </TableCell>
                    <TableCell>
                      {index < cruiseData.itinerary.timeAtSea.length &&
                        cruiseData.itinerary.timeAtSea[index].duration}
                      {index < cruiseData.itinerary.timeOnLand.length &&
                        cruiseData.itinerary.timeOnLand[index].duration}
                    </TableCell>
                    <TableCell>
                      {index < cruiseData.itinerary.timeAtSea.length &&
                        "At Sea"}
                      {index < cruiseData.itinerary.timeOnLand.length &&
                        "On Land"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </div>
        <div className="lg:col-span-1">
          <section>
            <h3>Base Price</h3>
            <p>{formatNumberToCurrency(cruiseData.basePrice)} USD</p>
          </section>

          {/* Required Documents Section */}
          {cruiseData.requiredDocuments &&
            cruiseData.requiredDocuments.length > 0 && (
              <section>
                <h3>Required Documents</h3>
                <ul className="pl-5 list-disc">
                  {cruiseData.requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </section>
            )}

          {/* Requirements Section */}
          {cruiseData.requirements && cruiseData.requirements.length > 0 && (
            <section>
              <h3>Requirements</h3>
              <ul className="pl-5 list-disc">
                {cruiseData.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Cruise Features Section */}
          <section>
            <h3>Cruise Features</h3>
            {/* Add Package Selection Dialog */}
            <div className="mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Available Packages</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      Available Packages for {cruiseData.title}
                    </DialogTitle>
                    <DialogDescription>
                      Select a package to enhance your cruise experience
                    </DialogDescription>
                  </DialogHeader>

                  <div className="gap-6 grid grid-cols-1 mt-4">
                    {availablePackages.length > 0 ? (
                      availablePackages.map((pkg) => (
                        <div
                          key={pkg.id}
                          className="hover:shadow-md p-4 border rounded-lg transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3>{pkg.title}</h3>
                              <p>{pkg.description}</p>
                            </div>
                            <div className="font-bold text-xl">
                              ${pkg.price}
                            </div>
                          </div>

                          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
                            <div>
                              <h4>Includes:</h4>
                              <ul className="pl-5 list-disc">
                                {pkg.includes.map((item, i) => (
                                  <li key={i} className="text-sm">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {pkg.excludes && (
                              <div>
                                <h4>Excludes:</h4>
                                <ul className="pl-5 list-disc">
                                  {pkg.excludes.map((item, i) => (
                                    <li key={i} className="text-sm">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="flex justify-end mt-4">
                            <Button onClick={() => setSelectedPackage(pkg)}>
                              Select Package
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No packages available for this cruise category.</p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {selectedPackage && (
                <div className="mt-2">
                  <Badge variant="secondary">
                    Selected: {selectedPackage.title} - ${selectedPackage.price}
                  </Badge>
                </div>
              )}
            </div>
          </section>

          {/* Cruise Category Features */}
          <section>
            <h3>Cruise Type</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {cruiseData.isWeekendCruise && (
                <Badge variant="outline">Weekend Cruise</Badge>
              )}
              {cruiseData.isFjordsTour && (
                <Badge variant="outline">Fjords Tour</Badge>
              )}
              {cruiseData.isRepositioningCruise && (
                <Badge variant="outline">Repositioning Cruise</Badge>
              )}
              {cruiseData.isAnniversaryCruise && (
                <Badge variant="outline">Anniversary Cruise</Badge>
              )}
              {cruiseData.isGlacierCruise && (
                <Badge variant="outline">Glacier Cruise</Badge>
              )}
              {cruiseData.isTropicalCruise && (
                <Badge variant="outline">Tropical Cruise</Badge>
              )}
              {cruiseData.isLuxuryCruise && (
                <Badge variant="outline">Luxury Cruise</Badge>
              )}
              {cruiseData.isVIPCruise && (
                <Badge variant="outline">VIP Cruise</Badge>
              )}
              {cruiseData.isThemeCruise && (
                <Badge variant="outline">Theme Cruise</Badge>
              )}
              {cruiseData.isHolidayCruise && (
                <Badge variant="outline">Holiday Cruise</Badge>
              )}
              {cruiseData.isFallFoliageCruise && (
                <Badge variant="outline">Fall Foliage Cruise</Badge>
              )}
            </div>

            <h3>Cruise Key Features</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {cruiseData.isPopular && <Badge variant="outline">Popular</Badge>}
              {cruiseData.hasPopularDestination && (
                <Badge variant="outline">Popular Destination</Badge>
              )}
              {cruiseData.isFamilyFriendly && (
                <Badge variant="outline">Family Friendly</Badge>
              )}
              {cruiseData.isPetFriendly && (
                <Badge variant="outline">Pet Friendly</Badge>
              )}
              {cruiseData.isCulturalExperience && (
                <Badge variant="outline">Cultural Experience</Badge>
              )}
            </div>
          </section>

          <section>
            <h3>Contact Information</h3>
            <div>
              {cruiseData.contactPersonnel &&
                (cruiseData.contactPersonnel.length > 0 ? (
                  <ul className="pl-5 list-disc">
                    {cruiseData.contactPersonnel.map((person, index) => (
                      <li key={index}>
                        {person.name} -{" "}
                        {person.contact.contactEmail && (
                          <a
                            href={`mailto:${person.contact.contactEmail}`}
                            className="text-blue-500 hover:underline"
                          >
                            {person.contact.contactEmail}
                          </a>
                        )}
                        {person.contact.contactNumber && (
                          <a
                            href={`tel:${person.contact.contactNumber}`}
                            className="text-blue-500 hover:underline"
                          >
                            {person.contact.contactNumber}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No contact personnel available for this cruise.</p>
                ))}
            </div>
          </section>

          <section>
            <h3>Category</h3>
            <p>{capitalize(cruiseData.category)}</p>
          </section>

          <section className="flex flex-wrap gap-2 mt-2">
            {cruiseData.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {capitalize(tag)}
              </Badge>
            ))}
          </section>

          {/* Cancellation Policy Section */}
          {cruiseData.cancellationPolicy && (
            <section>
              <h3>Cancellation Policy</h3>
              <p>{cruiseData.cancellationPolicy}</p>
            </section>
          )}
        </div>
      </section>

      <section>
        {/* FAQs */}
        {cruiseData.faqs && cruiseData.faqs.length > 0 && (
          <div className="mb-8 max-h-[50rem]">
            <h2>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {cruiseData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <h3>{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>

      {cruiseData && filteredCruises.length > 0 && (
        <section>
          <h2>Similar Cruises</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto w-full">
            {groupAndSortByProperties(filteredCruises, "basePrice")
              .slice(0, 2)
              .map((tour, index) => {
                return (
                  <CruiseInfo
                    cruise={tour}
                    key={index}
                    city={cruiseData.departureLocation.city || "Not specified"}
                    country={
                      cruiseData.departureLocation.country || "Not specified"
                    }
                  />
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
}
