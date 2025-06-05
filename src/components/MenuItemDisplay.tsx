import { formatNumberToCurrency } from "@/lib/utils/format.ts";

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
        <h4 className="w-10/12 no-underline">{item.name}</h4>
        <p>{formatNumberToCurrency(item.price, 2, 2)}</p>
      </div>
      <div>{item.description && <p>{" - " + item.description}</p>}</div>
    </div>
  );
}
