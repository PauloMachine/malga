import type { ICustomer } from "@/types/customer.types";
import type { TItem } from "@/types/items.types";

declare global {
  namespace Cypress {
    interface Chainable {
      fillCustomer(customer: ICustomer): Chainable<void>;
      validItems(items: TItem[], amount: numbar): Chainable<void>;
    }
  }
}
