import "./ExperiencedGardener.css";
import Card from "../UI/Card";
import EmploymentDate from "./EmploymentDate";

const ExperiencedGardener = (props) => {
  const selectWorkerHandler = (event) => {
    event.preventDefault();
    props.onSlectedWorker(props.key);
  };

  return (
    <Card className="experienced-gardener">
      <div className="experienced-gardener__box">
        <EmploymentDate date={props.employmentDate} />
        <button onClick={selectWorkerHandler}>
          {props.firstName + "\t" + props.lastName}    
        </button>
        <div className="experienced-gardener-contact-info"> {props.contactInfo}</div>
      </div>
      <div className="experienced-gardener-salary"> {Number(props.salary) + Number(props.salaryBonus)} PLN</div>
    </Card>
  );
};

export default ExperiencedGardener;
