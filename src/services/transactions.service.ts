import malga from "./malga.service";
import type { ICheckout } from "@/features/checkout/checkout.types";

export const getTransactions = async (): Promise<ICheckout[]> => {
  try {
    const response = await malga.get("/api/transactions");
    const { data } = response.data;
    return data || [];
  } catch (error) {
    console.error("Error get transactions:", error);
    throw error;
  }
};

export const postTransaction = async (data: ICheckout): Promise<ICheckout> => {
  const response = await malga.post("/api/transactions", data);
  console.log(response);
  return response.data;
};
