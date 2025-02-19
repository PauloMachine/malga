import { useRouter } from "next/router";
import { Card, Table, Tag } from "@/components/ui";
import { formatDateTime } from "@/utils/date";
import { useGetTransactions } from "@/hooks/transactions.hook";
import type { ITransaction } from "../../types/transactions.types";
import {
  formatTransactionPaymentMethodType,
  formatTransactionStatus,
} from "./transactions.format";

const Transactions = () => {
  const router = useRouter();
  const { data: transactions, isPending } = useGetTransactions();

  const columns = [
    {
      key: "transaction.createdAt",
      label: "Data de criação",
      render: (transaction: ITransaction) =>
        formatDateTime(transaction.createdAt),
    },
    {
      key: "transaction.id",
      label: "ID do pedido",
      render: (transaction: ITransaction) => transaction.id,
    },
    {
      key: "transaction.amount",
      label: "Método de pagamento",
      render: (transaction: ITransaction) =>
        formatTransactionPaymentMethodType(transaction.paymentMethod.type),
    },
    {
      key: "transaction.status",
      label: "Status",
      render: (transaction: ITransaction) => (
        <Tag
          type={transaction.status === "authorized" ? "success" : "failed"}
          text={formatTransactionStatus(transaction.status)}
        />
      ),
    },
  ];

  const handleTransactionDetails = (transaction: ITransaction) => {
    router.push(`/transactions/${transaction.id}`);
  };

  return (
    <Card title="Transações">
      <Table
        columns={columns}
        data={transactions ?? []}
        isLoading={isPending}
        onRowClick={handleTransactionDetails}
      />
    </Card>
  );
};

export default Transactions;
