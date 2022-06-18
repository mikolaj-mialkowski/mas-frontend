import Card from "../UI/Card";
import "./Species"

const Species = (props) => {
  return (
    <Card className="species">
      <div className="species__box">
        <div className="species-salary">{props.latinName}</div>
        <div>{props.lifeCycle}</div>
      </div>
    </Card>
  );
};

export default Species;
