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

interface DataContextType {
  data: FNSMRequest[];
  loading: boolean;
  error: string | null;
  baseUrl: string;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<FNSMRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
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
    <DataContext.Provider value={{ data, error, loading, baseUrl }}>
      {children}
    </DataContext.Provider>
  );
};
