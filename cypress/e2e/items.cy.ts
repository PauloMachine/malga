import type { TTransaction } from "@/types/transactions.types";

describe("Customer Form", () => {
  beforeEach(() => {
    cy.visit("/checkout");
  });

  it("should fill the form and submit successfully", () => {
    cy.fixture("transactions.db.json").then((data: TTransaction) => {
      const items = data.transactions[0].items;
      const amount = data.transactions[0].amount;
      cy.validItems(items, amount);
      cy.contains("button", "Continuar").should("not.be.disabled").click();
    });
  });
});
