import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface FNSMRequest {
  id: number;
  title?: string;
  report: string;
  name?: string;
  distance: number;
  spider: string;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<FNSMRequest[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const baseUrl: string = "http://localhost:8080/fnsm";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrl + "/allRequests");
        setData(res.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
        console.log(data);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataContext.Provider
      value={{ data, setData, error, setError, loading, setLoading }}
    >
      {children}
    </DataContext.Provider>
  );
};
