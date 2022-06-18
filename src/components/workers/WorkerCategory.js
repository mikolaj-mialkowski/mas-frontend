import "./WorkerCategory.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const WorkerCategory = (props) => {

const selectCategoryHandler = (event) => {
  event.preventDefault();
  props.onSlectedCategory(props.name);
};

  return (
    <Card className="worker-category">
      <div className="worker-category__box">
        <div className="new-expense__actions">
          <button onClick={selectCategoryHandler} >{props.name}</button>
        </div>
      </div>
    </Card>
  );
};

export default WorkerCategory;
