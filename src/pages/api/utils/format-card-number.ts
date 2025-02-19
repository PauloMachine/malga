export const formatCardNumber = (cardNumber: string): string => {
  const maskedNumber = cardNumber
    .replace(/\s+/g, "")
    .replace(/(\d{4})(\d{4,8})(\d{4})/, (_, start, middle, end) => {
      return `${start}${"*".repeat(middle.length)}${end}`;
    });
  return maskedNumber.match(/.{1,4}/g)?.join(" ") || maskedNumber;
};
