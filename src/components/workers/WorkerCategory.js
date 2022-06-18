import "./WorkerCategory.css";
import Card from "../UI/Card";

const WorkerCategory = (props) => {

const selectCategoryHandler = (event) => {
  event.preventDefault();
  props.onSlectedCategory(props.name);
};

  return (
    <Card className="worker-category">
      <div className="worker-category__box">
          <button onClick={selectCategoryHandler} >{props.name}</button>
      </div>
    </Card>
  );
};

export default WorkerCategory;
