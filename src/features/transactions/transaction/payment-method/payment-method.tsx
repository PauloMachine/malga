import { LabelValue } from "@/components/ui";
import type { TPaymentMethod } from "./payment-method.types";
import { formatTransactionPaymentMethodType } from "../../transactions.format";

const PaymentMethod = ({ paymentMethod }: TPaymentMethod) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-gray-400">Método de pagamento</span>
        <div className="h-0.5 w-full bg-gray-100" />
      </div>
      <LabelValue
        label="Tipo"
        value={formatTransactionPaymentMethodType(paymentMethod.type)}
      />
      <LabelValue label="Parcelas" value={paymentMethod.card.installments} />
      <LabelValue label="Nome" value={paymentMethod.card.holderName} />
      <LabelValue label="Número do cartão" value={paymentMethod.card.number} />
    </div>
  );
};

export default PaymentMethod;
