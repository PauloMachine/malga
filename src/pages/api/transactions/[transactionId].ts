import { NextApiRequest, NextApiResponse } from "next";
import type { ITransaction, TTransaction } from "@/types/transactions.types";
import { readAsyncDatabase } from "../utils/async-database";
import { formatCardNumber } from "../utils/format-card-number";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const db: TTransaction = await readAsyncDatabase(
      "src/pages/api/db/transactions.db.json",
    );

    if (req.method === "GET") {
      const transactionId = Number(req.query.transactionId);

      if (transactionId) {
        const transaction = db.transactions.find((t) => t.id === transactionId);
        if (!transaction) {
          return res.status(404).json({ message: "Transaction not found" });
        }

        const formattedTransaction = {
          ...transaction,
          paymentMethod: {
            ...transaction.paymentMethod,
            card: {
              ...transaction.paymentMethod.card,
              number: formatCardNumber(transaction.paymentMethod.card.number),
              cvv: undefined,
              expirationDate: undefined,
            },
          },
        };

        return res.status(200).json(formattedTransaction);
      }

      const transactions = db.transactions.sort(
        (a: ITransaction, b: ITransaction) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      return res.status(200).json(transactions);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
