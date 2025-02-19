import { LabelValue, Tag } from "@/components/ui";
import { formatCurrencyBRL } from "@/utils/currencyBRL";
import { formatTransactionStatus } from "../../transactions.format";
import type { IHeader } from "./header.types";

const Header = ({ id, amount, status }: IHeader) => {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      <div className="flex flex-col gap-4">
        <LabelValue label="ID" value={String(id)} />
        <LabelValue label="Valor total" value={formatCurrencyBRL(amount)} />
      </div>
      <Tag
        type={status === "authorized" ? "success" : "failed"}
        text={formatTransactionStatus(status)}
      />
    </div>
  );
};

export default Header;
