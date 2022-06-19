import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import "./PlantList.css";
import NewPlantForm from "./NewPlantForm";

const PlantList = (props) => {
  const [plantList, setPlantList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const getPlants = async () => {
      const plantsFromBE = await fetchPlants();
      setPlantList(plantsFromBE);
    };
    getPlants();
  }, []);

  const fetchPlants = async () => {
    const result = await fetch(
      "http://localhost:8080/api.mas.backend/undemandingPlant/all"
    );
    return await result.json();
  };

  const addPlantToBE = async (plant) => {
    console.log(plant);

    const result = await fetch(
      "http://localhost:8080/api.mas.backend/undemandingPlant/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fertilizer: plant.fertilizer,
          speciesEntity: { id: plant.speciesId },
        }),
      }
    );

    const data = await result.json();

    setPlantList((previousState) => [
      {
        id: data.id,
        key: data.id,
        healthState: "HEALTHY_UNDEMANDING",
        fertilizer: data.fertilizer,
        species: data.speciesEntity,
      },
      ...previousState,
    ]);
  };

  const clearSelectedCategoryHandler = () => {
    props.onClearCategory("Experienced Gardener");
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
                onAddNewPlant={addPlantToBE}
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
            <button onClick={showFormHandler}>Add new undemanding plant</button>
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
              healthState={"HEALTHY_UNDEMANDING"}
              fertilizer={plant.fertilizer}
              species={plant.speciesEntity}
            />
          ))}
        </ul>
      </Card>
      {buildFoot()}
    </div>
  );
};

export default PlantList;
