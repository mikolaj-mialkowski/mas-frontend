import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
import Plant from "./Plant";
import "./PlantList.css";
import NewPlantForm from "./NewPlantForm";
import configData from "../../config/config.json"

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
      configData.heroku_url+configData.all_plants
    );
    return await result.json();
  };

  const addPlantToBE = async (plant) => {
    const result = await fetch(
      configData.heroku_url+configData.add_plant
      ,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fertilizer: plant.fertilizer,
          speciesEntity: { id: plant.speciesId },
          noviceGardenerEntity: {id: plant.gardenerId}
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
        speciesEntity: {
          latinName: data.speciesEntity.latinName,
          id: data.speciesEntity.id,
          lifeCycle: data.speciesEntity.lifeCycle,
        },
        noviceGardenerEntity:{
          firstName: data.noviceGardenerEntity.firstName,
          lastName: data.noviceGardenerEntity.lastName,
        }
      },
      ...previousState,
    ]);
    closeFormHandler(true);
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

  const deletePlantHandler = async (id) => {
    const result = await fetch(
      configData.heroku_url+configData.delete_plant + id,
      {
        method: "DELETE",
      }
    );

    setPlantList((previousState) =>
      previousState.filter((plant) => plant.id !== id)
    );
    closeFormHandler(true);
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
              onDeletePlant={deletePlantHandler}
              key={plant.id}
              id={plant.id}
              healthState={"HEALTHY_UNDEMANDING"}
              fertilizer={plant.fertilizer}
              species={plant.speciesEntity}
              gardener={plant.noviceGardenerEntity}
            />
          ))}
        </ul>
      </Card>
      {buildFoot()}
    </div>
  );
};

export default PlantList;
