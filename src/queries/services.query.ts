import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "@/api/services.api";
import { ServicesResponse } from "@/types";

export const useGetServicesQuery = () => {
  return useQuery<ServicesResponse>({
    queryKey: ["services"],
    queryFn: getAllServices,
    staleTime: 1000 * 10,
    refetchInterval: 1000 * 60 * 1,
  });
};
