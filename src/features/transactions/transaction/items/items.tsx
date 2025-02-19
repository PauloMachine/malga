import { LabelValue } from "@/components/ui";
import type { TItem } from "@/types/items.types";
import { formatCurrencyBRL } from "@/utils/currencyBRL";
import type { TItems } from "./items.types";

const Items = ({ items }: TItems) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-gray-400">Itens</span>
        <div className="h-0.5 w-full bg-gray-100" />
      </div>
      <div className="flex flex-col gap-10">
        {items?.map((item: TItem, index: number) => (
          <div key={`${item.name}-${index}`} className="flex flex-row gap-2">
            <div className="ml-5 flex flex-col">
              <span className="text-gray-400">{index + 1}</span>
            </div>
            <div className="ml-5 flex flex-col gap-4">
              <LabelValue label="Nome" value={item.name} />
              <LabelValue label="Quantidade" value={item.quantity} />
              <LabelValue
                label="Valor"
                value={formatCurrencyBRL(item.amount)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
