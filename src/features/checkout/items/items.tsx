import { useFormContext } from "react-hook-form";
import type { TItem } from "./items.types";
import type { ICheckout } from "../checkout.types";
import { useEffect } from "react";

const Items = () => {
  const { setValue } = useFormContext<ICheckout>();
  const items: TItem[] = [
    {
      name: "Camiseta T-Shirt Nike Preta",
      quantity: 1,
      amount: 132.45,
    },
    {
      name: "Calça Nike",
      quantity: 2,
      amount: 212.01,
    },
  ];

  const amount = items?.reduce((acc, item) => acc + item.amount, 0);

  const data = { items, amount };

  useEffect(() => {
    setValue("amount", data.amount);
    setValue("items", data.items);
  }, [data, setValue]);

  return (
    <div className="flex flex-col">
      {items?.map((item: TItem, index: number) => (
        <div
          key={`item-${index}`}
          className={`${
            index !== 0 && "border-t"
          } border-gray border-solid p-5 gap-2 flex flex-col md:flex-row md:justify-between`}
        >
          <div className="flex">
            <span className="text-black">{item.name}</span>
          </div>
          <div className="flex justify-between md:gap-5">
            <span className="text-black">x{item.quantity}</span>
            <span className="text-black flex-nowrap">R$ {item.amount}</span>
          </div>
        </div>
      ))}

      {amount && (
        <div className="bg-gray-100 rounded-md p-5 gap-10 mt-5 flex justify-between">
          <span className="text-black font-bold">Total</span>
          <span className="text-black font-bold">R$ {amount}</span>
        </div>
      )}
    </div>
  );
};

export default Items;
