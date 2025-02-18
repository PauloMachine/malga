import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import {
  postTransaction,
  getTransactions,
} from "@/services/transactions.service";
import type { ICheckout } from "@/features/checkout/checkout.types";

export const useGetTransactions = () => {
  return useQuery<ICheckout[], Error>({
    queryKey: ["items"],
    queryFn: () => getTransactions(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get transactions");
    },
  } as UseQueryOptions<ICheckout[], Error, ICheckout[]>);
};

export const usePostTransaction = () => {
  return useMutation<ICheckout, Error, ICheckout>({
    mutationFn: (data: ICheckout) => postTransaction(data),
  });
};
