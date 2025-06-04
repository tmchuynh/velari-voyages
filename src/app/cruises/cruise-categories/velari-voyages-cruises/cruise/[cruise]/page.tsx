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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
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
import { formatNumberToCurrency } from "@/lib/utils/format.ts";
import {
  getAllCruises,
  getCruises,
  getCruisesByCategory,
} from "@/lib/utils/get.ts";
import { groupAndSortByProperties, sortByProperty } from "@/lib/utils/sort";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CruiseInformationPage() {
  const searchParams = useSearchParams();
  const departureLocationCity = searchParams.get("departureLocationCity");
  const departureLocationCountry = searchParams.get("departureLocationCountry");
  const arrivalLocationCity = searchParams.get("arrivalLocationCity");
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
        if (!departureLocationCity) {
          console.error("No departure city provided");
          setLoading(false);
          return;
        }

        // Get cruise data using the city name
        const data = await getCruises(departureLocationCity);
        console.log("Fetched cruises for city:", departureLocationCity, data);

        // Find the specific cruise by title
        const cruiseInfo = data.find(
          (c: { title: string }) => c.title === cruise
        );

        if (cruiseInfo) {
          setCruiseData(cruiseInfo);
        } else {
          // If not found by title, try to find by additional criteria
          console.log("Cruise not found by title, trying additional criteria");

          // Try to find by departure and arrival locations
          const alternativeCruiseInfo = data.find(
            (c: any) =>
              c.departureLocation?.city === departureLocationCity &&
              c.arrivalLocation?.city === arrivalLocationCity
          );

          if (alternativeCruiseInfo) {
            setCruiseData(alternativeCruiseInfo);
          } else {
            console.error("Cruise not found with the provided parameters.");
          }
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
          <section className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h5>Departure Location</h5>
              <p>
                {cruiseData.departureLocation.city},{" "}
                {cruiseData.departureLocation.country}
              </p>
            </div>
            <div>
              <h5>Arrival Location</h5>
              <p>
                {cruiseData.arrivalLocation.city},{" "}
                {cruiseData.arrivalLocation.country}
              </p>
            </div>
          </section>
          <section>
            <p>
              <strong>Total Duration:</strong>{" "}
              {cruiseData.itinerary.totalDuration}
            </p>
            <p>
              <strong>Total Distance:</strong> {cruiseData.itinerary.distance}
            </p>
            <section className="flex flex-wrap gap-2 mt-2">
              {cruiseData.tags?.map((tag, index) => (
                <Badge key={index} variant="secondary" className="uppercase">
                  {tag}
                </Badge>
              ))}
            </section>
          </section>
          <section>
            <h2>Itinerary</h2>
            <p>{cruiseData.itinerary.description}</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>On Land</TableHead>
                  <TableHead>At Sea</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cruiseData.itinerary.route.map((location, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-1/4 font-medium">
                      {location.city}
                    </TableCell>
                    <TableCell>
                      {index < cruiseData.itinerary.timeOnLand.length && (
                        <span className="space-x-3">
                          <span>
                            {cruiseData.itinerary.timeOnLand[index].start}
                            {cruiseData.itinerary.timeOnLand[index].start !==
                              cruiseData.itinerary.timeOnLand[index].end && (
                              <>
                                {" "}
                                - {cruiseData.itinerary.timeOnLand[index].end}
                              </>
                            )}
                          </span>
                          <span>
                            {index < cruiseData.itinerary.timeOnLand.length &&
                              cruiseData.itinerary.timeOnLand[index]
                                .duration !== "1 days" && (
                                <>
                                  (
                                  {
                                    cruiseData.itinerary.timeOnLand[index]
                                      .duration
                                  }
                                  )
                                </>
                              )}
                          </span>
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {index < cruiseData.itinerary.timeAtSea.length && (
                        <span className="space-x-3">
                          <span>
                            {cruiseData.itinerary.timeAtSea[index].start}
                            {cruiseData.itinerary.timeAtSea[index].start !==
                              cruiseData.itinerary.timeAtSea[index].end && (
                              <>
                                {" "}
                                - {cruiseData.itinerary.timeAtSea[index].end}
                              </>
                            )}
                          </span>
                          <span>
                            {index < cruiseData.itinerary.timeAtSea.length &&
                              cruiseData.itinerary.timeAtSea[index].duration !==
                                "1 days" && (
                                <>
                                  (
                                  {
                                    cruiseData.itinerary.timeAtSea[index]
                                      .duration
                                  }
                                  )
                                </>
                              )}
                          </span>
                        </span>
                      )}{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </div>
        <div className="lg:col-span-1">
          <section>
            <h5>Base Price</h5>
            <div className="inline-flex items-end gap-2">
              <h1>{formatNumberToCurrency(cruiseData.basePrice)} </h1>
              <h5 className="mb-2.5">USD</h5>
            </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View Available Packages</Button>
              </DialogTrigger>
              <DialogContent className="min-w-11/12 max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="sr-only">
                    Available Packages for {cruiseData.title}
                  </DialogTitle>
                  <h1>Available Packages for {cruiseData.title}</h1>
                </DialogHeader>

                <div className="gap-6 grid grid-cols-1 mt-4">
                  {availablePackages.length > 0 ? (
                    sortByProperty(availablePackages, "price", false).map(
                      (pkg) => (
                        <div
                          key={pkg.id}
                          className="hover:shadow-md p-6 border rounded-lg transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h2>{pkg.title}</h2>
                              <p>{pkg.description}</p>
                            </div>
                            <div className="inline-flex items-end gap-2">
                              <h1>{formatNumberToCurrency(pkg.price)} </h1>
                              <h5 className="mb-2.5">USD</h5>
                            </div>
                          </div>

                          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mt-4">
                            <div>
                              <h4>Includes:</h4>
                              <ul className="gap-3 grid xl:grid-cols-2 mt-2 pl-5 list-disc">
                                {pkg.includes.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            {pkg.excludes && (
                              <div>
                                <h4>Excludes:</h4>
                                <ul className="gap-3 grid xl:grid-cols-2 mt-2 pl-5 list-disc">
                                  {pkg.excludes.map((item, i) => (
                                    <li key={i}>{item}</li>
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
                      )
                    )
                  ) : (
                    <p>No packages available for this cruise category.</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {selectedPackage && (
              <div className="mt-2">
                <Badge variant="secondary" size={"2xl"}>
                  Selected: {selectedPackage.title} - ${selectedPackage.price}
                </Badge>
              </div>
            )}
          </section>

          <section>
            <h2>Contact Information</h2>
            <div>
              {cruiseData.contactPersonnel &&
                (cruiseData.contactPersonnel.length > 0 ? (
                  <ul className="mt-7 pl-5 list-disc">
                    {cruiseData.contactPersonnel.map((person, index) => (
                      <li key={person.name}>
                        <div className="flex gap-x-6">
                          <Image
                            alt=""
                            src={person.profileImage}
                            className="rounded-full size-16"
                            width={64}
                            height={64}
                          />
                          <div>
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                            <div className="space-x-2 mt-3">
                              {" "}
                              <div className="inline-flex items-center gap-3">
                                <h5>Phone:</h5>
                                <p className="mb-1">
                                  {person.contact.contactNumber}
                                </p>
                              </div>
                              <div className="inline-flex items-center gap-3">
                                <h5>Email:</h5>
                                <p className="mb-1">
                                  {person.contact.contactEmail}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No contact personnel available for this cruise.</p>
                ))}
            </div>
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
