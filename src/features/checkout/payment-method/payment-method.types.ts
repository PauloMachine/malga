export type TCard = {
  number: string;
  holderName: string;
  cvv: string;
  expirationDate: string;
  installments: number;
};

export interface IPaymentMethod {
  type: "card";
  card: TCard;
}
