import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useGenres = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      isLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          isLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          isLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, loading };
};
export default useGenres;
