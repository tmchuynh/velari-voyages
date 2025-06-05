import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatNumberToCurrency } from "@/lib/utils/format.ts";
import { FaStarOfDavid } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { GiMeat } from "react-icons/gi";
import { RiPlantFill, RiSeedlingFill } from "react-icons/ri";

interface MenuItemDisplayProps {
  item: {
    name: string;
    price: number;
    description?: string;
    isVegetarian?: boolean;
    isVegan?: boolean;
    isGlutenFree?: boolean;
    isHalal?: boolean;
    isKosher?: boolean;
  };
  menuTitle: string;
  categoryName: string;
}

export default function MenuItemDisplay({
  item,
  menuTitle,
  categoryName,
}: MenuItemDisplayProps) {
  return (
    <div className="flex-col space-y-1">
      <div className="flex justify-between md:items-center">
        <div className="flex flex-col flex-wrap lg:flex-auto justify-center gap-2 w-full h-full">
          <h4 className="w-10/12 no-underline">{item.name}</h4>
          {menuTitle === "Main Course Menu" &&
            categoryName !== "Non-Alcoholic Beverages" && (
              <div>
                {item.isVegetarian && (
                  <Tooltip>
                    <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                      <RiPlantFill />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vegetarian Options</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {item.isVegan && (
                  <Tooltip>
                    <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                      <RiSeedlingFill />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Vegan Options</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {item.isGlutenFree && (
                  <Tooltip>
                    <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                      <FaWheatAwn />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Gluten-Free Options</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {item.isHalal && (
                  <Tooltip>
                    <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                      <GiMeat />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Halal Options</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {item.isKosher && (
                  <Tooltip>
                    <TooltipTrigger className="mt-1 p-0.5 text-muted-foreground">
                      <FaStarOfDavid />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Kosher Options</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            )}
        </div>
        <p>{formatNumberToCurrency(item.price, 2, 2)}</p>
      </div>
      <div>{item.description && <p>{" - " + item.description}</p>}</div>
    </div>
  );
}
