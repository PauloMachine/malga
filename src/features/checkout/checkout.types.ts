import type { ICustomer } from "./customer/customer.types";
import type { TItem } from "./items/items.types";
import type { IPaymentMethod } from "./payment-method/payment-method.types";

export interface ICheckout {
  status?: "authorized" | "failed";
  amount: number;
  customer: ICustomer;
  items: TItem[];
  paymentMethod: IPaymentMethod;
}
