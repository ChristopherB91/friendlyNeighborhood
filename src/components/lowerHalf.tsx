import "../App.css";
import { useState } from "react";
import { Activity } from "./activities";
import { Crime } from "./crimes";
import Selection from "./taskbar";

export default function TaskList() {
  const [activity, setActivity] = useState(true);

  const swipeA = () => {
    setActivity(true);
  };

  const swipeC = () => {
    setActivity(false);
  };

  return (
    <div className="lowp">
      <Selection swipeA={swipeA} swipeC={swipeC} />
      <div className="low">{activity ? <Activity /> : <Crime />}</div>
      <span></span>
      <div className="outer"></div>
    </div>
  );
}
