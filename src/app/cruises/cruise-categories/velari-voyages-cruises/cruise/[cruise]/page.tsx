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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
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

  useEffect(() => {
    const fetchCruiseData = async () => {
      try {
        const data = await getCruises(departureLocationCity || "");
        const cruiseInfo = data.find(
          (c: {
            title: string | null;
            departureLocation: { city: string | null; country: string | null };
            arrivalLocation: { city: string | null; country: string | null };
            category: string | null;
          }) =>
            c.title === cruise &&
            c.departureLocation.city === departureLocationCity &&
            c.departureLocation.country === departureLocationCountry &&
            c.arrivalLocation.city === arrivalLocationCity &&
            c.arrivalLocation.country === arrivalLocationCountry &&
            c.category === category
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
            <p>${cruiseData.basePrice}</p>
          </section>
          <section>
            <h3>Contact Information</h3>
            <p>
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
            </p>
          </section>
          <section>
            <h3>Category</h3>
            <p>{cruiseData.category}</p>
          </section>
          <section className="flex flex-wrap gap-2 mt-2">
            {cruiseData.tags?.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </section>
        </div>
      </section>

      <section>
        <h3>Frequently Asked Questions</h3>
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

      <section>
        <h2>Similar Cruises</h2>
        {cruiseData && (
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
        )}
      </section>
    </div>
  );
}
