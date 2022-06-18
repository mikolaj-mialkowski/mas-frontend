import WorkerCategory from "./WorkerCategory";
import "./WorkerCategorySelector.css";
import Card from "../UI/Card";
import ExperiencedGardeners from "./ExperiencedGardeners";
import React, { useState } from "react";

const WorkerCategorySelector = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("main");

  const selectCategoryHandler = (name) => {
    console.log(name);
    setSelectedCategory(name);
  };

  const clearSelectedCategoryHandler = () => {
    setSelectedCategory("main");
  };

  const addSpeciesHandler = () => {
    setSelectedCategory("species");
    console.log("go species");
  };

  const addPlantHandler = () => {
    setSelectedCategory("plant")
    console.log("go plant");
};

  const buildHead = () => {
    return (
      <div className="worker-category-selector-head">
        <div className="worker-category-selector__title">
          <h2>Available workers categories</h2>
        </div>
      </div>
    );
  };

  if (selectedCategory === "Experienced Gardener") {
    return (
      <ExperiencedGardeners
        onClearCategory={clearSelectedCategoryHandler} onAddSpecies={addSpeciesHandler} onAddPlant={addPlantHandler}
      ></ExperiencedGardeners>
    );
  }

  return (
    <div>
      {buildHead()}
      <Card className="worker-category-selector__background">
        <ul className="worker-category-selector">
          {props.workersCategoryList.map((workerCategory) => (
            <WorkerCategory
              onSlectedCategory={selectCategoryHandler}
              key={workerCategory.id}
              name={workerCategory.name}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default WorkerCategorySelector;
