import activitiesUnselected from "../assets/activitiesLogoUnselected.png";
import crimesUnselected from "../assets/crimeLogoUnselected.png";
import "../App.css";

interface ChildProps {
  swipeA: () => void;
  swipeC: () => void;
}

const Selection: React.FC<ChildProps> = (props) => {
  return (
    <div className="taskSelect">
      <button onClick={props.swipeA}>
        <img src={activitiesUnselected} alt="activity logo" />
        <h1>ACTIVITIES</h1>
      </button>
      <button onClick={props.swipeC}>
        <img src={crimesUnselected} alt="crimes logo" />
        <h1>CRIMES</h1>
      </button>
      <span></span>
    </div>
  );
};

export default Selection;
