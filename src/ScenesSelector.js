import WorkerCategory from "./WorkerCategory";
import "./ScenesSelector.css";
import Card from "../UI/Card";
import ExperiencedGardeners from "./ExperiencedGardeners";
import React, { useState } from "react";
import SpeciesList from "../species/SpeciesList";

const ScenesSelector = (props) => {
    
  const [selectedScene, setSelectedScene] = useState("main");

  const selectSpecyficSceneHandler = (name) => {
    setSelectedScene(name);
  };

  const showMainSceneHandler = () => {
    setSelectedScene("main");
  };

  const showManageSpeciesHandler = () => {
    setSelectedScene("species");
  };

  const addPlantHandler = () => {
    setSelectedScene("plant")
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

  if (selectedScene === "Experienced Gardener") {
    return (
      <ExperiencedGardeners
        onClearCategory={showMainSceneHandler} onManageSpecies={showManageSpeciesHandler} onManagePlant={addPlantHandler}
      ></ExperiencedGardeners>
    );
  }

  if (selectedScene === "species") {
    return (
      <SpeciesList
        onClearCategory={selectSpecyficSceneHandler}
      ></SpeciesList>
    );
  }

  return (
    <div>
      {buildHead()}
      <Card className="worker-category-selector__background">
        <ul className="worker-category-selector">
          {props.workersCategoryList.map((workerCategory) => (
            <WorkerCategory
              onSlectedCategory={selectSpecyficSceneHandler}
              key={workerCategory.id}
              name={workerCategory.name}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ScenesSelector;
