import malga from "./malga.service";
import type { ITransaction } from "@/types/transactions.types";
import type { ICheckout } from "@/types/checkout.types";

export const getTransactions = async (): Promise<ITransaction[]> => {
  try {
    const response = await malga.get("/api/transactions");
    return response.data || [];
  } catch (error) {
    console.error("Error get transactions:", error);
    throw error;
  }
};

export const getTransaction = async (
  transactionId?: string,
): Promise<ITransaction> => {
  try {
    const response = await malga.get(`/api/transactions/${transactionId}`);
    return response.data || [];
  } catch (error) {
    console.error("Error get transaction:", error);
    throw error;
  }
};

export const postTransaction = async (
  data: ICheckout,
): Promise<ITransaction> => {
  const response = await malga.post("/api/transactions", data);
  return response.data;
};
