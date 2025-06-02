"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cruise } from "@/lib/interfaces/services/tours";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatToSlug } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import { IoMdInformationCircle } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
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
        <div>
          <div className="relative h-64">
            <Badge
              variant={"outline"}
              className="top-4 right-4 absolute uppercase"
            >
              {cruise.tourCategoryId}
            </Badge>
          </div>
          <div className="relative px-6 pt-5">
            <div className="flex flex-col justify-between items-start mb-2">
              <h2>{cruise.title}</h2>
              {displayRatingStars(cruise.rating)}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={"icon"}
                  size={"icon"}
                  onClick={() => console.log("Open cruise details")}
                  className="top-10 right-5 absolute size-5"
                >
                  <IoMdInformationCircle />
                </Button>
              </SheetTrigger>
              <SheetContent className="mx-auto w-11/12">
                <SheetHeader className="mt-8">
                  <SheetTitle>{cruise.title}</SheetTitle>
                  <SheetDescription>{cruise.description}</SheetDescription>
                  {cruise.tags?.length && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cruise.tags.map((tag, i) => (
                        <Badge variant={"secondary"} key={i}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </SheetHeader>
                <div className="flex flex-col gap-4 mx-auto w-12/14">
                  <section>
                    <h3>Tour Details</h3>
                    <h5>Itinerary:</h5>
                    {cruise.itinerary && (
                      <div className="space-y-2 mt-2">
                        <p className="text-sm">
                          {cruise.itinerary.description}
                        </p>
                        <div className="gap-2 grid grid-cols-2 text-sm">
                          <div>
                            <span className="font-semibold">Distance:</span>{" "}
                            {cruise.itinerary.distance}
                          </div>
                          <div>
                            <span className="font-semibold">Duration:</span>{" "}
                            {cruise.itinerary.totalDuration}
                          </div>
                        </div>
                        <div>
                          <span className="block font-semibold">Route:</span>
                          <ul className="pl-5 text-sm list-disc">
                            {cruise.itinerary.route.map((location, i) => (
                              <li key={i}>
                                {location.city}, {location.country}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {cruise.itinerary.timeAtSea?.length > 0 && (
                          <div>
                            <span className="block font-semibold">
                              Time at Sea:
                            </span>
                            <ul className="pl-5 text-sm list-disc">
                              {cruise.itinerary.timeAtSea.map((period, i) => (
                                <li key={i}>
                                  {period.description}: {period.duration}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {cruise.itinerary.timeOnLand?.length > 0 && (
                          <div>
                            <span className="block font-semibold">
                              Time on Land:
                            </span>
                            <ul className="pl-5 text-sm list-disc">
                              {cruise.itinerary.timeOnLand.map((period, i) => (
                                <li key={i}>
                                  {period.description}: {period.duration}
                                </li>
                              ))}
                            </ul>
                          </div>
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

                  {cruise.cancellationPolicy && (
                    <section>
                      <h5>Cancellation Policy:</h5>
                      <p>{cruise.cancellationPolicy}</p>
                    </section>
                  )}
                </div>
                <Button
                  onClick={() =>
                    router.push(
                      "/book-your-trip-today?cruise=" +
                        formatToSlug(cruise.title)
                    )
                  }
                  className="mx-auto mt-4 w-12/14"
                >
                  Add to Cart
                </Button>
                <SheetFooter>
                  <h3>Contact Personnel</h3>
                  <div className="flex flex-col gap-2 mt-2">
                    {cruise.contactPersonnel.map((person, i) => (
                      <div key={i} className="flex flex-col">
                        <h5 className="font-semibold">{person.name}</h5>
                        {person.bio && <p className="text-sm">{person.bio}</p>}
                        <div>
                          <p>
                            <strong>Languages: </strong>{" "}
                            {person.languages.map((language, index) => (
                              <span key={index} className="mr-1">
                                {language}{" "}
                                {index < person.languages.length - 1 ? "," : ""}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-col justify-between mb-7 px-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {cruise.tags?.map((tag, i) => (
              <Badge variant={"secondary"} key={i}>
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center my-4">
            <h2>{cruise.basePrice}</h2>
          </div>
          <Button
            onClick={() => {
              const queryParams = new URLSearchParams({
                city: city,
                country: country,
                cruise: cruise.title,
                tourCategoryId: cruise.tourCategoryId,
              });

              router.push(
                `/luxurious-destinations/${country}/${city}/tours/${formatToSlug(
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
