import { useGetItems } from "@/hooks/items.hook";
import type { TItem } from "../../../types/items.types";
import { formatCurrencyBRL } from "@/utils/currencyBRL";
import ItemsSkeleton from "./items.skeleton";
import { useEffect } from "react";
import type { ICheckout } from "../../../types/checkout.types";
import { useFormContext } from "react-hook-form";

const Items = () => {
  const { setValue } = useFormContext<ICheckout>();
  const { data: checkoutItems, isPending } = useGetItems();

  useEffect(() => {
    setValue("items", checkoutItems?.items ?? []);
    setValue("amount", checkoutItems?.amount ?? 0);
  }, [checkoutItems, setValue]);

  if (isPending) return <ItemsSkeleton />;

  return (
    <div className="flex flex-col">
      {checkoutItems?.items?.map((item: TItem, index: number) => (
        <div
          key={`item-${index}`}
          className={`${
            index !== 0 && "border-t"
          } border-gray flex flex-col gap-5 border-solid p-3 md:flex-row md:justify-between`}
        >
          <div className="flex flex-col">
            <span className="text-black">{item.name}</span>
            <span className="text-xs text-gray-700">
              {item.quantity} x {formatCurrencyBRL(item.amount / item.quantity)}
            </span>
          </div>
          <span className="flex-nowrap text-black">
            {formatCurrencyBRL(item.amount)}
          </span>
        </div>
      ))}

      {checkoutItems?.amount && (
        <div className="mt-5 flex justify-between gap-10 rounded-md bg-gray-100 p-3">
          <span className="font-bold text-black">Total</span>
          <span className="font-bold text-black">
            {formatCurrencyBRL(checkoutItems.amount)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Items;
