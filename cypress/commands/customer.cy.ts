import type { ICustomer } from "@/types/customer.types";

Cypress.Commands.add("fillCustomer", (customer: ICustomer) => {
  cy.get("#customer-firstName")
    .type(customer.firstName)
    .should("have.value", customer.firstName);

  cy.get("#customer-lastName")
    .type(customer.lastName)
    .should("have.value", customer.lastName);

  cy.get("#customer-document-type")
    .select(customer.document.type)
    .should("have.value", customer.document.type);

  cy.get("#customer-document-number")
    .type(customer.document.number)
    .should("have.value", customer.document.number);

  cy.get("#customer-address-city")
    .type(customer.address.city)
    .should("have.value", customer.address.city);

  cy.get("#customer-address-state")
    .type(customer.address.state)
    .should("have.value", customer.address.state);

  cy.get("#customer-address-country")
    .type(customer.address.country)
    .should("have.value", customer.address.country);

  cy.get("#customer-address-street")
    .type(customer.address.street)
    .should("have.value", customer.address.street);

  cy.get("#customer-address-number")
    .type(customer.address.number)
    .should("have.value", customer.address.number);

  cy.get("#customer-address-neighborhood")
    .type(customer.address.neighborhood)
    .should("have.value", customer.address.neighborhood);
});
