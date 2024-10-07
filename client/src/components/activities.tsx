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
    throw new Error("null");
  }

  const { data, loading, error, baseUrl, setUpdate, setNum } = context;
  const remove = async (id: number) => {
    try {
      const response = await axios.delete(`${baseUrl}/delRequest/${id}`);
      window.alert(response.data);
      window.location.reload();
    } catch (error) {
      window.alert(error);
      window.location.reload();
    }
  };

  const updFunc = (id: number) => {
    setUpdate(true);
    setNum(id);
  };

  if (loading) return <p className="lne">loading...</p>;
  if (error) return <p className="lne">error</p>;
  return (
    <>
      {data.map((request: FNSMRequest) => {
        return (
          <>
            <ul className="activities" key={request.id}>
              <li className="aDesc">{request.title}</li>
              <li className="aDistance"> | {request.distance} M</li>
            </ul>
            <div className="dNu">
              <button onClick={() => remove(request.id)}>DELETE</button>
              <button onClick={() => updFunc(request.id)}>UPDATE</button>
            </div>
          </>
        );
      })}
    </>
  );
};
