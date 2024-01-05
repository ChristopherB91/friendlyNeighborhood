import Activities from "../assets/ActivitiesLogo.png";
import Crimes from "../assets/crimeLogo.png";
import "../App.css";

interface ChildProps {
  swipeA: () => void;
  swipeC: () => void;
}

const Selection: React.FC<ChildProps> = (props) => {
  return (
    <div className="taskSelect">
      <button onClick={props.swipeA}>
        <img src={Activities} alt="activity logo" />
        <h1>ACTIVITIES</h1>
      </button>
      <button onClick={props.swipeC}>
        <img src={Crimes} alt="crimes logo" />
        <h1>CRIMES</h1>
      </button>
    </div>
  );
};

export default Selection;
