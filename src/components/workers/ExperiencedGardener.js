import "./WorkerCategory.css";
import Card from "../UI/Card";
import EmploymentDate from "./EmploymentDate";

const ExperiencedGardener = (props) => {
  const selectWorkerHandler = (event) => {
    event.preventDefault();
    props.onSlectedWorker(props.key);
  };

  return (
    <Card className="worker-category">
      <div className="worker-category__box">
        <EmploymentDate date={props.employmentDate} />
        <button onClick={selectWorkerHandler}>
          {props.firstName + "\t" + props.lastName}    
        </button>
        <div className="expense-item__price"> {props.salary} PLN</div>
        <div className="expense-item__price"> {props.salaryBonus} PLN</div>
      </div>
    </Card>
  );
};

export default ExperiencedGardener;
