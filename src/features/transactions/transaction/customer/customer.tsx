import { LabelValue } from "@/components/ui";
import type { TCustomer } from "./customer.types";

const Customer = ({ customer }: TCustomer) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-gray-400">Dados pessoais</span>
        <div className="h-0.5 w-full bg-gray-100" />
      </div>
      <LabelValue
        label="Nome"
        value={`${customer.firstName} ${customer.lastName}`}
      />
      <LabelValue
        label={customer.document.type}
        value={customer.document.number}
      />
      <LabelValue label="Cidade" value={customer.address.city} />
      <LabelValue label="Estado" value={customer.address.state} />
      <LabelValue label="País" value={customer.address.country} />
      <LabelValue label="Rua" value={customer.address.street} />
      <LabelValue label="Número" value={customer.address.number} />
      <LabelValue label="Bairro" value={customer.address.neighborhood} />
    </div>
  );
};

export default Customer;
