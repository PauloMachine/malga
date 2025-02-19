export const formatTransactionStatus = (status: string): string => {
  if (status === "authorized") return "Aprovado";
  else if (status === "failed") return "Recusado";
  return "Pendente";
};

export const formatTransactionPaymentMethodType = (status: string): string => {
  if (status === "card") return "Cartão";
  return "Não identificado";
};
