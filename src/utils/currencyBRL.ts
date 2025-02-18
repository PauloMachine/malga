export const formatCurrencyBRL = (value: number | string): string => {
  const numericValue = Number(value);
  if (isNaN(numericValue)) return "R$ 0,00";

  return numericValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
