import aUnselected from "../assets/activitiesLogoUnselected.png";
import cUnselected from "../assets/crimeLogoUnselected.png";
import aSelected from "../assets/activitiesLogoSelected.png";
import cSelected from "../assets/crimesLogoSelected.png";
import "../App.css";
import { useState } from "react";

interface ChildProps {
  swipeA: () => void;
  swipeC: () => void;
}

const Selection: React.FC<ChildProps> = (props) => {
  const [track, setTrack] = useState(false);
  const [activities, setActivities] = useState<string>(aSelected);
  const [crimes, setCrimes] = useState<string>(cUnselected);
  const butn = document.querySelector("#slide") as HTMLElement;
  const txt1 = document.querySelector("#txt1") as HTMLElement;
  const txt2 = document.querySelector("#txt2") as HTMLElement;
  const moveRight = () => {
    if (butn && txt1 != null) {
      if (!track) {
        butn.style.left = "270px";
        txt1.style.color = "#bfe3ff";
        txt2.style.color = "white";
        setTrack(true);
        setCrimes(cSelected);
        setActivities(aUnselected);
        props.swipeC();
      }
    } else {
      console.error("error");
    }
  };

  const moveLeft = () => {
    if (track) {
      butn.style.left = "87px";
      txt1.style.color = "white";
      txt2.style.color = "#bfe3ff";
      setTrack(false);
      setActivities(aSelected);
      setCrimes(cUnselected);
      props.swipeA();
    } else {
      console.error("error");
    }
  };

  return (
    <div className="taskSelect">
      <button onClick={moveLeft}>
        <img src={activities} alt="activity logo" />
        <h1 id="txt1">ACTIVITIES</h1>
      </button>
      <button onClick={moveRight}>
        <img src={crimes} alt="crimes logo" />
        <h1 id="txt2">CRIMES</h1>
      </button>
      <span id="slide"></span>
    </div>
  );
};

export default Selection;
