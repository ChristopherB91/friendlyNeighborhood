import { useContext } from "react";
import "../App.css";
import { DataContext } from "../context/fetch";
import axios from "axios";

interface FNSMRequest {
  id: number;
  title?: string;
  report: string;
  name?: string;
  distance: number;
  spider: string;
}

export const Activity = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Activity must be used within a DataProvider");
  }

  const { data, loading, error, baseUrl } = context;
  const remove = async (id: number) => {
    try {
      const response = await axios.delete(`${baseUrl}/delRequest/${id}`);
      window.alert(response.data);
    } catch (error) {
      window.alert(error);
      window.location.reload();
    }
  };
  if (loading) return <p className="lne">loading...</p>;
  if (error) return <p className="lne">error</p>;
  return (
    <>
      {data.map((request: FNSMRequest) => {
        return (
          <ul className="activities" key={request.id}>
            <li className="aDesc">{request.title}</li>
            <li className="aDistance"> | {request.distance} M</li>
            <div className="dNU">
              <button onClick={() => remove(request.id)}>DELETE</button>
              <button>UPDATE</button>
            </div>
          </ul>
        );
      })}
    </>
  );
};
