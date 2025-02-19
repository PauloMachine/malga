import { Card } from "@/components/ui";
import { Skeleton } from "@mui/material";

const TransactionSkeleton = () => {
  return (
    <Card title="Detalhes da transação">
      <Skeleton variant="rectangular" height={20} width={250} />
      <Skeleton variant="rectangular" height={20} width={250} />
      <Skeleton variant="rectangular" height={20} />
      {Array.from({ length: 8 }).map((arr, index) => (
        <Skeleton
          key={`customer-skeleton-${index}`}
          variant="rectangular"
          height={20}
          width={250}
        />
      ))}
      <Skeleton variant="rectangular" height={20} />
      {Array.from({ length: 4 }).map((arr, index) => (
        <Skeleton
          key={`payment-method-skeleton-${index}`}
          variant="rectangular"
          height={20}
          width={250}
        />
      ))}
      <Skeleton variant="rectangular" height={20} />
      {Array.from({ length: 2 }).map((arr, index) => (
        <Skeleton
          key={`items-skeleton-${index}`}
          variant="rectangular"
          height={20}
          width={250}
        />
      ))}
    </Card>
  );
};

export default TransactionSkeleton;
