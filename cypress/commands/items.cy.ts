import type { TItem } from "@/types/items.types";

Cypress.Commands.add("validItems", (items: TItem[], amount: number) => {
  items.forEach((item) => {
    cy.contains(item.name);
    cy.contains(item.quantity);
    cy.contains(String(item.amount).replace(".", ","));
    cy.contains(
      `${item.quantity} x R$ ${String(item.amount / item.quantity)}`.replace(
        ".",
        ",",
      ),
    );
  });

  cy.contains(String(amount).replace(".", ","));
});
