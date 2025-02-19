import { NextApiRequest, NextApiResponse } from "next";
import type { ITransaction, TTransaction } from "@/types/transactions.types";
import { readAsyncDatabase, writeAsyncDatabase } from "../utils/async-database";

const dbJson = "src/pages/api/db/transactions.db.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const db: TTransaction = await readAsyncDatabase(dbJson);

    if (req.method === "GET") {
      const transactions = db.transactions.sort(
        (a: ITransaction, b: ITransaction) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      return res.status(200).json(transactions);
    }

    if (req.method === "POST") {
      const newTransaction = req.body;

      newTransaction.id = Date.now();
      newTransaction.status = Math.random() > 0.5 ? "authorized" : "failed";
      newTransaction.createdAt = new Date().toISOString();

      db.transactions.unshift(newTransaction);
      await writeAsyncDatabase(db, dbJson);

      return res.status(201).json(newTransaction);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
