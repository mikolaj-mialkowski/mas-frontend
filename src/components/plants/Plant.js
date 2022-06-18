import Card from "../UI/Card";
import "./Plant.css"

const Plant = (props) => {
  return (
    <Card className="plant">
      <div className="plant__box">
        <div className="plant-def">{props.id}</div>
        <div className="plant-def">{props.healthState}</div>
        <div className="plant-def">{props.fertilizer}</div>
        <div className="plant-salary">{props.speciesName}</div>
      </div>
    </Card>
  );
};

export default Plant;
