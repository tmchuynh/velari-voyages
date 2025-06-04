import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface RestaurantIconKeyProps {
  className?: string;
  compact?: boolean;
}

export default function RestaurantIconKey({
  className = "",
  compact = false,
}: RestaurantIconKeyProps) {
  const iconDefinitions = [
    { icon: <FaCalendarCheck />, label: "Reservations Welcomed" },
    { icon: <FaGlassCheers />, label: "Adults Only" },
    { icon: <FaChair />, label: "Indoor Seating" },
    { icon: <FaHeart />, label: "Romantic" },
    { icon: <FaConciergeBell />, label: "Fine Dining" },
    { icon: <RiPlantFill />, label: "Vegetarian Options" },
    { icon: <RiSeedlingFill />, label: "Vegan Options" },
    { icon: <FaWheatAwn />, label: "Gluten-Free Options" },
    { icon: <GiMeat />, label: "Halal Options" },
    { icon: <FaStarOfDavid />, label: "Kosher Options" },
  ];

  const renderIconItems = () => (
    <div
      className={`grid ${
        compact
          ? "grid-cols-2 md:grid-cols-3 gap-2"
          : "grid-cols-1 md:grid-cols-2 gap-4"
      }`}
    >
      {iconDefinitions.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`${
              compact ? "text-lg" : "text-xl"
            } flex items-center justify-center min-w-6`}
          >
            {item.icon}
          </div>
          <span className={compact ? "text-sm" : "text-base"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  // Simple version without Card wrapper
  if (compact) {
    return (
      <div className={`p-2 ${className}`}>
        <h4 className="mb-2 font-medium text-sm">Restaurant Features</h4>
        {renderIconItems()}
      </div>
    );
  }

  // Full version with Card wrapper
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Restaurant Icon Key</CardTitle>
      </CardHeader>
      <CardContent>{renderIconItems()}</CardContent>
    </Card>
  );
}
