import { Restaurant } from "@/lib/types/types";
import { formatTitleToKebabCase } from "@/lib/utils/format";
import Link from "next/link";
import { Card } from "../ui/card";

export default function RestaurantCard({
  restaurant,
  city,
}: {
  restaurant: Restaurant;
  city: string;
}) {
  const fileName = formatTitleToKebabCase(restaurant.name) + "Menu";

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-4">
        <h2 className="mb-2 font-bold text-xl">{restaurant.name}</h2>
        <p className="mb-1 text-gray-500 text-sm">
          Cuisine: {restaurant.cuisine}
        </p>
        <p className="mb-3 text-gray-500 text-sm">
          Price Range: {restaurant.priceRange}
        </p>
        <p className="mb-4 text-sm line-clamp-2">{restaurant.description}</p>

        <Link
          href={`/cruises/restaurants/${city}/${restaurant.name
            .toLowerCase()
            .replace(/\s+/g, "-")}?restaurant=${fileName}&city=${city}`}
          className="text-primary text-sm hover:underline"
        >
          View Menu & Details
        </Link>
      </div>
    </Card>
  );
}
