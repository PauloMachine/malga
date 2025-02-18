import malga from "./malga.service";
import type { IItem } from "@/features/checkout/items/items.types";

export const getItems = async (): Promise<IItem> => {
  try {
    const response = await malga.get("/api/items");
    const { data } = response.data;
    return data || [];
  } catch (error) {
    console.error("Error get items:", error);
    throw error;
  }
};
