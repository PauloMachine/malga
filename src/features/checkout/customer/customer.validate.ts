export const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .slice(0, 14);
};

export const maskCNPJ = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
};

export const validateDocumentNumber = (value: string, documentType: string) => {
  const isCPF =
    documentType === "CPF" && /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);
  const isCNPJ =
    documentType === "CNPJ" && /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value);

  if (!isCPF && !isCNPJ) return "* O número do documento é inválido";
  return true;
};
