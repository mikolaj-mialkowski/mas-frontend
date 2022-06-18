import "./WorkerCategory.css";
import Card from "../UI/Card";

const ExperiencedGardener = (props) => {
    
  const selectWorkerHandler = (event) => {
    event.preventDefault();
    props.onSlectedWorker(props.key);
  };

  return (
    <Card className="worker-category">
      <div className="worker-category__box">
        <div className="new-expense__actions">
          <button onClick={selectWorkerHandler}>
            {props.firstName} 
            {props.lastName} 
            {props.salary} 
            {props.salaryBonus} 
            {props.employmentDate.toString()} 
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ExperiencedGardener;
