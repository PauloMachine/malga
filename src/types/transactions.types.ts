import type { ICheckout } from "./checkout.types";

export interface ITransaction extends ICheckout {
  id: string | number;
  createdAt: string;
  status: "authorized" | "failed";
}

export type TTransaction = {
  transactions: ITransaction[];
};
