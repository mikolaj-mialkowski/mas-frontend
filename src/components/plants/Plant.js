import Card from "../UI/Card";
import "./Plant.css"

const Plant = (props) => {

console.log(props)

  return (
    <Card className="plant">
      <div className="plant__box">
        <div className="plant-def">{props.id}</div>
        <div className="plant-def">{props.healthState === "HEALTHY_UNDEMANDING" ? "healthy" : "sick"}</div>
        <div className="plant-def">{props.fertilizer ? "fertilized" : "not fertilized"}</div>
        <div className="plant-salary">{props.species.latinName}</div>
      </div>
    </Card>
  );
};

export default Plant;
