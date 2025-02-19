import { useRouter } from "next/router";
import { useGetTransaction } from "@/hooks/transactions.hook";
import { Card } from "@/components/ui";
import Customer from "./customer";
import PaymentMethod from "./payment-method";
import Items from "./items";
import Header from "./header/header";
import TransactionSkeleton from "./transaction.skeleton";

const Transaction = () => {
  const router = useRouter();
  const transactionId = router.query.transactionId as string;
  const { data: transaction, isPending } = useGetTransaction(transactionId);

  if (isPending) return <TransactionSkeleton />;

  if (!transaction) {
    return <span className="font-bold">Transação não encontrada</span>;
  }

  return (
    <Card title="Detalhes da transação" onBack={() => router.back()}>
      <div className="ml-5 flex flex-col gap-10 overflow-x-auto md:ml-12">
        <Header
          id={transactionId}
          amount={transaction.amount}
          status={transaction.status}
        />
        <Customer customer={transaction.customer} />
        <PaymentMethod paymentMethod={transaction.paymentMethod} />
        <Items items={transaction.items} />
      </div>
    </Card>
  );
};

export default Transaction;
