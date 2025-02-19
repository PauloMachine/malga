import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { IItem } from "@/types/items.types";
import { getItems } from "@/services/items.service";

export const useGetItems = () => {
  return useQuery<IItem, Error>({
    queryKey: ["items"],
    queryFn: () => getItems(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get items");
    },
  } as UseQueryOptions<IItem, Error, IItem>);
};
