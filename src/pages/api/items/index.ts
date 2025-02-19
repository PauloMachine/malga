import { NextApiRequest, NextApiResponse } from "next";
import type { IItem, TItem } from "@/types/items.types";
import { readAsyncDatabase } from "../utils/async-database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const db: IItem = await readAsyncDatabase(
        "src/pages/api/db/items.db.json",
      );

      const amount = db.items.reduce(
        (acc: number, item: TItem) => acc + item.amount,
        0,
      );

      return res.status(200).json({
        items: db.items,
        amount,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error loading data" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
