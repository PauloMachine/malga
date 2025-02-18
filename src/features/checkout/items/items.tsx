import { useGetItems } from "@/hooks/items.hook";
import type { TItem } from "./items.types";
import { formatCurrencyBRL } from "@/utils/currencyBRL";
import ItemsSkeleton from "./items.skeleton";

const Items = () => {
  const { data, isPending } = useGetItems();

  if (isPending) return <ItemsSkeleton />;

  return (
    <div className="flex flex-col">
      {data?.items?.map((item: TItem, index: number) => (
        <div
          key={`item-${index}`}
          className={`${
            index !== 0 && "border-t"
          } border-gray flex flex-col gap-2 border-solid p-5 md:flex-row md:justify-between`}
        >
          <span className="text-black">{item.name}</span>
          <div className="flex justify-between md:gap-5">
            <span className="text-black">x{item.quantity}</span>
            <span className="flex-nowrap text-black">
              {formatCurrencyBRL(item.amount)}
            </span>
          </div>
        </div>
      ))}

      {data?.amount && (
        <div className="mt-5 flex justify-between gap-10 rounded-md bg-gray-100 p-5">
          <span className="font-bold text-black">Total</span>
          <span className="font-bold text-black">
            {formatCurrencyBRL(data.amount)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Items;
