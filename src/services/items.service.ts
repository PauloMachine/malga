import malga from "./malga.service";
import type { IItem } from "@/types/items.types";

export const getItems = async (): Promise<IItem> => {
  try {
    const response = await malga.get("/api/items");
    return response.data || [];
  } catch (error) {
    console.error("Error get items:", error);
    throw error;
  }
};
