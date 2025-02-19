export type TDocument = {
  type: "CPF" | "CNPJ";
  number: string;
};

export type TAddress = {
  city: string;
  street: string;
  number: string;
  country: string;
  state: string;
  neighborhood: string;
};

export interface ICustomer {
  firstName: string;
  lastName: string;
  document: TDocument;
  address: TAddress;
}
