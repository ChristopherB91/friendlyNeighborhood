import Miles from "../assets/MM-SM.jpg";
import Peter from "../assets/PP-SM.jpg";
import signal from "../assets/signal16px.png";
import battery from "../assets/75-percent-16.png";
import { useState } from "react";
import "../App.css";

function Header() {
  const [display, setDisplay] = useState("active");
  const [hidden, setHidden] = useState("inactive");

  const switcher = () => {
    setDisplay(hidden);
    setHidden(display);
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
      <img className={display} src={Miles} alt="MilesSM image" />
      <img className={hidden} src={Peter} alt="PeterSM image" />
      <div className="seperator"></div>
    </>
  );
}

export default Header;
