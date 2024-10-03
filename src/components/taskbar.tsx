import activitiesUnselected from "../assets/activitiesLogoUnselected.png";
import crimesUnselected from "../assets/crimeLogoUnselected.png";
import "../App.css";
import { useState } from "react";

interface ChildProps {
  swipeA: () => void;
  swipeC: () => void;
}

const Selection: React.FC<ChildProps> = (props) => {
  const [track, setTrack] = useState(false);
  const moveRight = () => {
    const butn = document.querySelector("#slide") as HTMLElement | null;
    if (butn != null) {
      if (!track) {
        butn.style.left = "270px";
        setTrack(true);
        console.log("270px");
        props.swipeC();
      }
    } else {
      console.error("error");
    }
  };

  const moveLeft = () => {
    const butn = document.querySelector("#slide") as HTMLElement | null;
    if (butn) {
      if (track) {
        butn.style.left = "87px";
        setTrack(false);
        props.swipeA();
        console.log("87px");
      }
    }
  };

  return (
    <div className="taskSelect">
      <button onClick={moveLeft}>
        <img src={activitiesUnselected} alt="activity logo" />
        <h1>ACTIVITIES</h1>
      </button>
      <button onClick={moveRight}>
        <img src={crimesUnselected} alt="crimes logo" />
        <h1>CRIMES</h1>
      </button>
      <span id="slide"></span>
    </div>
  );
};

export default Selection;
