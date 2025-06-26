import { useGetServicesQuery } from "@/queries/services.query";

export const useServices = () => {
  const { data, isLoading, isError } = useGetServicesQuery();
  return {
    data,
    isLoading,
    isError,
  };
};
