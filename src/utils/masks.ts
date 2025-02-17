export const maskOnlyLetters = (value: string) => {
  return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚãõâêîôûàèìòùçÇ\s]/g, "");
};

export const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, "");
};
