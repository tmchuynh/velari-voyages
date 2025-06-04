import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Restaurant } from "@/lib/types/types";
import { displayRatingStars } from "@/lib/utils/displayRatingStars";
import { formatTitleToKebabCase } from "@/lib/utils/format";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaChair,
  FaConciergeBell,
  FaGlassCheers,
  FaHeart,
  FaStarOfDavid,
} from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { GiMeat } from "react-icons/gi";
import { RiPlantFill, RiSeedlingFill } from "react-icons/ri";

export default function RestaurantDetailsCard({
  restaurant,
  city,
}: {
  restaurant: Restaurant;
  city: string;
}) {
  const fileName = formatTitleToKebabCase(restaurant.name) + "Menu";

  return (
    <Card className="relative flex flex-col justify-between p-5 h-full overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <h2 className="w-9/12">{restaurant.name}</h2>
        <Badge className="top-14 right-6 absolute" variant={"outline"}>
          {restaurant.cuisine}
        </Badge>
        <Badge className="top-6 right-6 absolute" variant={"outline"}>
          {restaurant.priceRange}
        </Badge>
        <p className="mb-4 text-sm">{restaurant.description}</p>
        <div className="flex">{displayRatingStars(restaurant.rating)}</div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-between mt-4 text-sm">
          <h5>Hours:</h5>
          <p>
            <strong>Monday: </strong>
            {restaurant.openingHours?.monday}
          </p>
          <p>
            <strong>Tuesday: </strong>
            {restaurant.openingHours?.tuesday}
          </p>
          <p>
            <strong>Wednesday: </strong>
            {restaurant.openingHours?.wednesday}
          </p>
          <p>
            <strong>Thursday: </strong>
            {restaurant.openingHours?.thursday}
          </p>
          <p>
            <strong>Friday: </strong>
            {restaurant.openingHours?.friday}
          </p>
          <p>
            <strong>Saturday: </strong>
            {restaurant.openingHours?.saturday}
          </p>
          <p>
            <strong>Sunday: </strong>
            {restaurant.openingHours?.sunday}
          </p>
        </div>
        <div className="gap-5 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 mt-8 h-fit">
          {restaurant.isReservationsAccepted && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaCalendarCheck />
              </TooltipTrigger>
              <TooltipContent>
                <p>Reservations Welcomed</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isAdultOnly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaGlassCheers />
              </TooltipTrigger>
              <TooltipContent>
                <p>Adults Only</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isIndoorSeating && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaChair />
              </TooltipTrigger>
              <TooltipContent>
                <p>Indoor Seating</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isRomantic && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaHeart />
              </TooltipTrigger>
              <TooltipContent>
                <p>Romantic</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isFineDining && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaConciergeBell />
              </TooltipTrigger>
              <TooltipContent>
                <p>Fine Dining</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isVegetarianFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <RiPlantFill />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vegetarian Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isVeganFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <RiSeedlingFill />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vegan Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isGlutenFreeFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaWheatAwn />
              </TooltipTrigger>
              <TooltipContent>
                <p>Gluten-Free Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isHalalFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <GiMeat />
              </TooltipTrigger>
              <TooltipContent>
                <p>Halal Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isKosherFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit">
                <FaStarOfDavid />
              </TooltipTrigger>
              <TooltipContent>
                <p>Kosher Options</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <Link
        href={`/cruises/restaurants/${city}/${restaurant.name
          .toLowerCase()
          .replace(/\s+/g, "-")}?restaurant=${fileName}&city=${city}`}
        className="text-primary text-sm hover:underline"
      >
        View Menu
      </Link>
    </Card>
  );
}
