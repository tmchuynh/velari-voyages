"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cruise } from "@/lib/interfaces/services/cruises";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import {
  capitalize,
  formatNumberToCurrency,
  formatToSlug,
} from "@/lib/utils/format.ts";
import { useRouter } from "next/navigation";
import { IoMdInformationCircle } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CruiseInfo({
  cruise,
  city,
  country,
}: {
  cruise: Cruise;
  city: string;
  country: string;
}) {
  const router = useRouter();
  return (
    <div className="bg-card shadow-lg hover:shadow-xl border border-border rounded-lg h-full transition-shadow overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <div className="relative h-full">
          <Badge
            variant={"outline"}
            className="top-4 right-4 absolute uppercase"
          >
            {cruise.tourCategoryId}
          </Badge>
          <div className="relative flex flex-col justify-between px-6 pt-12 h-full">
            <div>
              <h2>{cruise.title}</h2>
              <p>{cruise.description}</p>
            </div>
            {cruise.rating && (
              <div className="flex">{displayRatingStars(cruise.rating)}</div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={"icon"}
                  size={"icon"}
                  onClick={() => console.log("Open cruise details")}
                  className="top-3 left-5 absolute size-5"
                >
                  <IoMdInformationCircle />
                </Button>
              </SheetTrigger>
              <SheetContent className="min-w-5/12">
                <SheetHeader className="mt-8">
                  <SheetTitle>{cruise.title}</SheetTitle>
                  <SheetDescription>{cruise.description}</SheetDescription>
                </SheetHeader>
                <div className="mx-auto w-13/14">
                  <section>
                    <h3>Tour Details</h3>
                    {cruise.itinerary && (
                      <div>
                        <section className="space-y-2">
                          <p>{cruise.itinerary.description}</p>
                          <div className="gap-2 grid grid-cols-2">
                            <p>
                              <strong>Distance:</strong>{" "}
                              {cruise.itinerary.distance}
                            </p>
                            <p>
                              <strong>Duration:</strong>{" "}
                              {cruise.itinerary.totalDuration}
                            </p>
                          </div>
                        </section>
                        <section>
                          <h5>Route:</h5>
                          <ul className="pl-5 text-sm list-disc">
                            {cruise.itinerary.route.map((location, i) => (
                              <li key={i}>
                                {location.city}, {location.country}
                              </li>
                            ))}
                          </ul>
                        </section>
                        {cruise.itinerary.timeAtSea?.length > 0 && (
                          <section>
                            <h5>Time at Sea:</h5>
                            <ul className="pl-5 text-sm list-disc">
                              {cruise.itinerary.timeAtSea.map((period, i) => (
                                <li key={i}>
                                  {period.description}: {period.duration}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}
                        {cruise.itinerary.timeOnLand?.length > 0 && (
                          <section>
                            <h5>Time on Land:</h5>
                            <ul className="pl-5 text-sm list-disc">
                              {cruise.itinerary.timeOnLand.map((period, i) => (
                                <li key={i}>
                                  {period.description}: {period.duration}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}
                      </div>
                    )}
                  </section>
                  <section>
                    {cruise.requiredDocuments && (
                      <div>
                        <h3>Required Documents:</h3>
                        <ul className="pl-5 text-sm list-disc">
                          {cruise.requiredDocuments.map((doc, i) => (
                            <li key={i}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {cruise.requirements && (
                      <div>
                        <h3>Requirements:</h3>
                        <ul className="pl-5 text-sm list-disc">
                          {cruise.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>

                  {cruise.tags?.length && (
                    <section className="flex flex-wrap gap-2 mt-2">
                      {cruise.tags.map((tag, i) => (
                        <Badge variant={"secondary"} size={"lg"} key={i}>
                          {capitalize(tag)}
                        </Badge>
                      ))}
                    </section>
                  )}

                  {cruise.cancellationPolicy && (
                    <section>
                      <h5>Cancellation Policy:</h5>
                      <p>{cruise.cancellationPolicy}</p>
                    </section>
                  )}

                  <section>
                    <h3>Contact Personnel</h3>
                    <div className="flex flex-col gap-2 mt-2">
                      {cruise.contactPersonnel.map((person, i) => (
                        <div key={i} className="flex flex-col">
                          <h4>{person.name}</h4>
                          {person.bio && <p>{person.bio}</p>}
                          <div className="mt-3">
                            <p>
                              <strong>Languages: </strong>{" "}
                              {person.languages.map((language, index) => (
                                <span key={index} className="mr-1">
                                  {String(language)}{" "}
                                  {index < person.languages.length - 1
                                    ? ","
                                    : ""}
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <Button
                  onClick={() =>
                    router.push(
                      "/book-your-trip-today?cruise=" +
                        formatToSlug(cruise.title)
                    )
                  }
                  className="mx-auto mt-4 w-13/14"
                >
                  Add to Cart
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-col justify-between mb-7 px-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {cruise.tags?.map((tag, i) => (
              <Badge variant={"secondary"} key={i} className="capitalize">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center my-4">
            <h2>{formatNumberToCurrency(cruise.basePrice)}</h2>
          </div>
          <Button
            onClick={() => {
              const queryParams = new URLSearchParams({
                cruiseId: cruise.id,
                cruise: formatToSlug(cruise.title),
                category: cruise.category,
              });

              router.push(
                `/cruises/cruise-categories/velari-voyages-cruises/cruise/${formatToSlug(
                  cruise.title
                )}?${queryParams.toString()}`
              );
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
