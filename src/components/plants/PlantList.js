import Card from "../UI/Card";
import React, { useState } from "react";
import Plant from "./Plant";
import "./PlantList.css";
import NewPlantForm from "./NewPlantForm";

const PlantList = (props) => {

  const DUMMY_plant = [
    {
      id: 100,
      latinName: "Cactus pospolitus",
      lifeCycle: "ONE_YEAR",
    },
    {
      id: 101,
      latinName: "Jarzebina polska",
      lifeCycle: "ONE_YEAR",
    },
    {
      id: 102,
      latinName: "Random latin name",
      lifeCycle: "MULTI_YEARS",
    },
  ];

  const [plantList, setplantList] = useState(DUMMY_plant);

  const [openForm, setOpenForm] = useState(false);

  const clearSelectedCategoryHandler = () => {
    props.onClearCategory("Experienced Gardener");
  };

  const addNewplantHandler = (newplant) => {
      console.log(newplant)
    setplantList((previousState) => {
      return [newplant, ...previousState];
    });
    closeFormHandler();
  };

  const showFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  const buildHead = () => {
    if (openForm) {
      return (
        <div>
          <div className="plant-list-head">
            <div className="plant-list__title">
              <h2>Manage plants</h2>
            </div>
          </div>
          <div className="plant-list-head">
            <div className="plant-list__title">
              <NewPlantForm
                onAddNewplant={addNewplantHandler}
                onHideForm={closeFormHandler}
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="plant-list-head">
          <div className="plant-list__title">
            <h2>Manage plants</h2>
          </div>
        </div>
        <div className="plant-list-head">
          <div className="plant-list-button">
            <button onClick={showFormHandler}>Add new plant</button>
          </div>
        </div>
      </div>
    );
  };

  const buildFoot = () => {
    return (
      <div className="plant-list-foot">
        <div className="plant-list-button">
          <button onClick={clearSelectedCategoryHandler}>Back</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {buildHead()}
      <Card className="plant-list__background">
        <ul className="plant-list">
          {plantList.map((plant) => (
            <Plant
              key={plant.id}
              id={plant.id}
              latinName={plant.latinName}
              lifeCycle={plant.lifeCycle}
            />
          ))}
        </ul>
      </Card>
      {buildFoot()}
    </div>
  );
};

export default PlantList;
