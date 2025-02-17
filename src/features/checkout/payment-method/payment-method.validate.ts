import cardValidator from "card-validator";

export const validateHolderName = (value: string): string | true => {
  const result = cardValidator.cardholderName(String(value));
  return result.isValid ? true : "* O nome do titular é inválido";
};

export const validateCardNumber = (value: string): string | true => {
  const result = cardValidator.number(String(value));
  return result.isValid ? true : "* O número de cartão é inválido";
};

export const validateExpirationDate = (value: string): string | true => {
  const result = cardValidator.expirationDate(String(value));
  return result.isValid ? true : "* A data de validade é inválida";
};

export const validateCvv = (value: string): string | true => {
  const result = cardValidator.cvv(String(value));
  return result.isValid ? true : "* O Código CVV é inválido";
};

export const maskCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .slice(0, 19);
};

export const maskExpiryDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .slice(0, 7);
};
