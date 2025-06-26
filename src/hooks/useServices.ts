import { useGetServicesQuery } from "@/queries/services.query";
import { ServicesQueryParams } from "@/types";

export const useServices = (params: ServicesQueryParams = {}) => {
  const { data, isLoading, isError } = useGetServicesQuery(params);
  return {
    data,
    isLoading,
    isError,
  };
};
