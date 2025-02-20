import type { TTransaction } from "@/types/transactions.types";

describe("Customer Form", () => {
  beforeEach(() => {
    cy.visit("/checkout");
    cy.contains("button", "Continuar").should("not.be.disabled").click();
  });

  it("should fill the form and submit successfully", () => {
    cy.fixture("transactions.db.json").then((data: TTransaction) => {
      const customer = data.transactions[0].customer;
      cy.fillCustomer(customer);
      cy.contains("button", "Continuar").should("not.be.disabled").click();
      cy.get(".text-red-500").should("not.exist");
    });
  });

  it("should show validation errors when required fields are empty", () => {
    cy.contains("button", "Continuar").should("not.be.disabled").click();
    cy.contains("* O primeiro nome é obrigatório");
    cy.contains("* O sobrenome é obrigatório");
    cy.contains("* O número de documento é obrigatório");
    cy.contains("* A cidade é obrigatória");
    cy.contains("* O estado é obrigatório");
    cy.contains("* O país é obrigatório");
    cy.contains("* A rua é obrigatória");
    cy.contains("* O número é obrigatório");
    cy.contains("* O bairro é obrigatório");
  });

  it("should show error for invalid CPF", () => {
    cy.get("#customer-document-type").select("CPF");
    cy.get("#customer-document-number").type("123").should("have.value", "123");
    cy.contains("button", "Continuar").should("not.be.disabled").click();
    cy.contains("* O número do documento é inválido");
  });

  it("should show error for invalid CNPJ", () => {
    cy.get("#customer-document-type").select("CNPJ");
    cy.get("#customer-document-number").type("12").should("have.value", "12");
    cy.contains("button", "Continuar").should("not.be.disabled").click();
    cy.contains("* O número do documento é inválido");
  });
});
