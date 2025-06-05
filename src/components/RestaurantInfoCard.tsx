import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Restaurant } from "@/lib/types/types";
import {
  FaBreadSlice,
  FaCalendarCheck,
  FaChair,
  FaEnvelope,
  FaHeart,
  FaLeaf,
  FaMoon,
  FaPhone,
  FaSeedling,
  FaStar,
  FaStarOfDavid,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";

interface RestaurantInfoCardProps {
  restaurantInfo: Restaurant;
}

export default function RestaurantInfoCard({
  restaurantInfo,
}: RestaurantInfoCardProps) {
  return (
    <Card className="flex flex-col space-y-4 p-6 h-full">
      <div>
        <h2 className="mb-3 font-semibold text-xl">Contact Information</h2>

        <div className="flex flex-col space-y-2">
          {restaurantInfo.contactInfo?.contactNumber && (
            <div className="flex items-center space-x-2">
              <FaPhone className="text-muted-foreground" />
              <p>{restaurantInfo.contactInfo.contactNumber}</p>
            </div>
          )}

          {restaurantInfo.contactInfo?.contactEmail && (
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-muted-foreground" />
              <p>{restaurantInfo.contactInfo.contactEmail}</p>
            </div>
          )}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="mb-3 font-semibold text-xl">Restaurant Features</h2>

        <div className="gap-2 grid grid-cols-2">
          {restaurantInfo.isReservationsAccepted && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaCalendarCheck className="text-primary" />
              <span>Reservations</span>
            </Badge>
          )}

          {restaurantInfo.isAdultOnly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaUserTie className="text-primary" />
              <span>Adults Only</span>
            </Badge>
          )}

          {restaurantInfo.isIndoorSeating && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaChair className="text-primary" />
              <span>Indoor Seating</span>
            </Badge>
          )}

          {restaurantInfo.isRomantic && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaHeart className="text-primary" />
              <span>Romantic</span>
            </Badge>
          )}

          {restaurantInfo.isFineDining && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaUtensils className="text-primary" />
              <span>Fine Dining</span>
            </Badge>
          )}

          {restaurantInfo.isPopular && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaStar className="text-primary" />
              <span>Popular</span>
            </Badge>
          )}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="mb-3 font-semibold text-xl">Dietary Options</h2>

        <div className="gap-2 grid grid-cols-2">
          {restaurantInfo.isVegetarianFriendly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaLeaf className="text-green-600" />
              <span>Vegetarian</span>
            </Badge>
          )}

          {restaurantInfo.isVeganFriendly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaSeedling className="text-green-600" />
              <span>Vegan</span>
            </Badge>
          )}

          {restaurantInfo.isGlutenFreeFriendly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaBreadSlice className="text-amber-600" />
              <span>Gluten-Free</span>
            </Badge>
          )}

          {restaurantInfo.isHalalFriendly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaMoon className="text-blue-600" />
              <span>Halal</span>
            </Badge>
          )}

          {restaurantInfo.isKosherFriendly && (
            <Badge
              variant="outline"
              className="flex justify-start items-center gap-1"
            >
              <FaStarOfDavid className="text-blue-600" />
              <span>Kosher</span>
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
