import Miles from "../assets/MM-SM.jpg";
import Peter from "../assets/PP-SM.jpg";
import signal from "../assets/signal16px.png";
import battery from "../assets/75-percent-16.png";
import Form from "./form";
import { useContext, useState } from "react";
import "../App.css";
import { DataContext } from "../context/fetch";

function Header() {
  const [display, setDisplay] = useState("active");
  const [hidden, setHidden] = useState("inactive");
  const [form, setForm] = useState(false);

  const { data } = useContext(DataContext);

  const switcher = () => {
    setHidden(display);
    setDisplay(hidden);
  };

  const formTest = () => {
    if (!form) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  return (
    <>
      <div className="phoneStatus">
        <img src={signal} alt="signal img" />
        <button onClick={switcher}>SWITCH</button>
        <div className="batteryLevel">
          <p>83 %</p>
          <img src={battery} alt="battery img" />
        </div>
      </div>
      <div className="parent">
        <img className={display} src={Miles} alt="MilesSM image" />
        <img className={hidden} src={Peter} alt="PeterSM image" />
        {form ? (
          <>
            <button onClick={formTest}>-</button>
            <Form />
          </>
        ) : (
          <button onClick={formTest}>+</button>
        )}
      </div>
      <div className="seperator">{data.report}</div>
    </>
  );
}

export default Header;
