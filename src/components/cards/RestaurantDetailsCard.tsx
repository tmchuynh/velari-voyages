"use client";

import RestaurantHours from "@/components/RestaurantHours";
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
import { useTheme } from "next-themes";
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
  const { theme } = useTheme();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Card className="relative flex flex-col justify-between p-5 h-full overflow-hidden">
      <div className="flex flex-col justify-between pt-3 h-full">
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
        <RestaurantHours openingHours={restaurant.openingHours} />
        <div className="gap-5 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 mt-8 h-fit">
          {restaurant.isReservationsAccepted && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaCalendarCheck />
              </TooltipTrigger>
              <TooltipContent>
                <p>Reservations Welcomed</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isAdultOnly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaGlassCheers />
              </TooltipTrigger>
              <TooltipContent>
                <p>Adults Only</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isIndoorSeating && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaChair />
              </TooltipTrigger>
              <TooltipContent>
                <p>Indoor Seating</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isRomantic && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaHeart />
              </TooltipTrigger>
              <TooltipContent>
                <p>Romantic</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isFineDining && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaConciergeBell />
              </TooltipTrigger>
              <TooltipContent>
                <p>Fine Dining</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isVegetarianFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <RiPlantFill />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vegetarian Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isVeganFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <RiSeedlingFill />
              </TooltipTrigger>
              <TooltipContent>
                <p>Vegan Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isGlutenFreeFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <FaWheatAwn />
              </TooltipTrigger>
              <TooltipContent>
                <p>Gluten-Free Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isHalalFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
                <GiMeat />
              </TooltipTrigger>
              <TooltipContent>
                <p>Halal Options</p>
              </TooltipContent>
            </Tooltip>
          )}
          {restaurant.isKosherFriendly && (
            <Tooltip>
              <TooltipTrigger className="p-0.5 w-fit h-fit text-muted-foreground">
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
