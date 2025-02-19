import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import {
  postTransaction,
  getTransactions,
  getTransaction,
} from "@/services/transactions.service";
import type { ICheckout } from "@/types/checkout.types";
import type { ITransaction } from "@/types/transactions.types";

export const useGetTransactions = () => {
  return useQuery<ITransaction[], Error>({
    queryKey: ["transactions"],
    queryFn: () => getTransactions(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get transactions");
    },
  } as UseQueryOptions<ITransaction[], Error, ITransaction[]>);
};

export const useGetTransaction = (transactionId?: string) => {
  return useQuery<ITransaction, Error>({
    queryKey: ["transaction", transactionId],
    queryFn: () => getTransaction(transactionId),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: !!transactionId,
    onError: () => {
      console.error("An error occurred during get transaction");
    },
  } as UseQueryOptions<ITransaction, Error, ITransaction>);
};

export const usePostTransaction = () => {
  return useMutation<ITransaction, Error, ICheckout>({
    mutationFn: (data: ICheckout) => postTransaction(data),
  });
};
