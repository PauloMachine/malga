import type { TTransaction } from "@/types/transactions.types";

describe("Payment Method Form", () => {
  beforeEach(() => {
    cy.visit("/checkout");

    cy.contains("button", "Continuar").should("not.be.disabled").click();

    cy.fixture("transactions.db.json").then((data) => {
      const customer = data.transactions[0].customer;
      cy.fillCustomer(customer);
      cy.contains("button", "Continuar").should("not.be.disabled").click();
    });
  });

  it("should fill the form and submit successfully", () => {
    cy.fixture("transactions.db.json").then((data: TTransaction) => {
      const paymentMethod = data.transactions[0].paymentMethod;

      cy.get("#paymentMethod-card-holderName")
        .type(paymentMethod.card.holderName)
        .should("have.value", paymentMethod.card.holderName);

      cy.get("#paymentMethod-card-number")
        .type(paymentMethod.card.number)
        .should("have.value", paymentMethod.card.number);

      cy.get("#paymentMethod-card-expirationDate")
        .type(paymentMethod.card.expirationDate, { force: true })
        .should("have.value", paymentMethod.card.expirationDate);

      cy.get("#paymentMethod-card-cvv")
        .type(paymentMethod.card.cvv, { force: true })
        .should("have.value", paymentMethod.card.cvv);

      cy.get("#paymentMethod-card-installments")
        .select(paymentMethod.card.installments)
        .should("have.value", paymentMethod.card.installments);

      cy.contains("button", "Finalizar").should("not.be.disabled").click();
      cy.get(".text-red-500").should("not.exist");
    });
  });

  it("should show validation errors when required fields are empty", () => {
    cy.contains("button", "Finalizar").should("not.be.disabled").click();
    cy.contains("* O nome do titular é obrigatório");
    cy.contains("* O número do cartão é obrigatório");
    cy.contains("* A data de validade é obrigatória");
    cy.contains("* O código de verificação é obrigatório");
  });

  it("should show error for invalid card number", () => {
    cy.get("#paymentMethod-card-number")
      .type("123")
      .should("have.value", "123");

    cy.contains("* O número de cartão é inválido");
  });

  it("should show error for invalid expiration date", () => {
    cy.get("#paymentMethod-card-expirationDate")
      .type("1325", { force: true })
      .should("have.value", "13/25");

    cy.contains("* A data de validade é inválida");
  });

  it("should show error for invalid CVV", () => {
    cy.get("#paymentMethod-card-cvv")
      .type("12", { force: true })
      .should("have.value", "12");

    cy.contains("* O Código CVV é inválido");
  });
});
