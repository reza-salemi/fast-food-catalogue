import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

type UseAxiosResponse<T> = [T | null, boolean, AxiosError | string];

const useAxios = <T>(axiosParams: AxiosRequestConfig): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError | string>("");

  const fetchData = async () => {
    try {
      const result: AxiosResponse<T> = await instance.request(axiosParams);
      setData(result.data);
    } catch (error) {
      const message = (error as Error).message || "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url, axiosParams.method]);
  return [data, isLoading, error];
};

export default useAxios;
