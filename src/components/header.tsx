import Miles from "../assets/MM-SM.jpg";
import Peter from "../assets/PP-SM.jpg";
import signal from "../assets/signal16px.png";
import battery from "../assets/75-percent-16.png";
import { useState } from "react";
import "../App.css";

function Header() {
  const [miles, setMiles] = useState("active");
  const [peter, setPeter] = useState("inactive");

  const switcher = () => {
    setPeter(miles);
    setMiles(peter);
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
      <img className={miles} src={Miles} alt="MilesSM image" />
      <img className={peter} src={Peter} alt="PeterSM image" />
      <div className="seperator"></div>
    </>
  );
}

export default Header;
