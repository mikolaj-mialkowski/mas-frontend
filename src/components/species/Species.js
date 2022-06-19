import Card from "../UI/Card";
import "./Species.css"

const Species = (props) => {
  return (
    <Card className="species">
      <div className="species__box">
        <div className="species-def">{props.latinName}</div>
        <div className="species-special">{props.lifeCycle === "ONE_YEAR" ? "annual species" : "perennial species"}</div>
      </div>
    </Card>
  );
};

export default Species;
