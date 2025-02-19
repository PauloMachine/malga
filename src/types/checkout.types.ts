import type { ICustomer } from "./customer.types";
import type { TItem } from "./items.types";
import type { IPaymentMethod } from "./payment-method.types";

export interface ICheckout {
  amount: number;
  customer: ICustomer;
  items: TItem[];
  paymentMethod: IPaymentMethod;
}
