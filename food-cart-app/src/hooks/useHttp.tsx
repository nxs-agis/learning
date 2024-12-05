import { useState, useCallback, useEffect } from "react";

async function sendHttpRequest(url: string, config: RequestInit) {
  const respone = await fetch(url, config);

  const resData = await respone.json();

  if (!respone.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request."
    );
  }

  return resData;
}

export default function useHttp(
  url: string,
  config: RequestInit,
  initialData: any[]
) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const checkConfig = config.method === "GET" || !config.method;

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data?: any) {
      setIsLoading((prev) => !prev);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error: any) {
        setError(error.message || "Something went wrong!");
      }

      setIsLoading((prev) => !prev);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && checkConfig) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
