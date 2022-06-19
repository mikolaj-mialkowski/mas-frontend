import Card from "../UI/Card";
import ExperiencedGardener from "./ExperiencedGardener";
import React, { useState, useEffect } from "react";
import "./ExperiencedGardeners.css";

const WorkerCategorySelector = (props) => {

  const [gardenersList, setGardenersList] = useState([]);
  const [selectedGardener, setSelectedGardener] = useState(null);

  useEffect(() => {
    const getExperiencedGardeners = async () => {
      const gardenersFromBE = await fetchGardeners();
      setGardenersList(gardenersFromBE);
    };
    getExperiencedGardeners();
  }, []);

  const fetchGardeners = async () => {
    const result = await fetch(
      "https://api-mas-backend.herokuapp.com/api.mas.backend/experiencedGardener/all"
    );
    return await result.json();
  };

  const selectGardenerHandler = (id) => {
    setSelectedGardener(
        gardenersList.find((gardener) => gardener.id === id)
    );
  };

  const clearSelectedCategoryHandler = () => {
    props.onClearCategory();
  };

  const manageSpeciesHandler = () => {
    props.onManageSpecies();
  };

  const managePlantHandler = () => {
    props.onManagePlant();
  };

  const buildHead = () => {
    return (
      <div className="experienced-gardeners-head">
        <div className="experienced-gardeners__title">
          <h2>Available experienced gardeners</h2>
        </div>
      </div>
    );
  };

  const buildFoot = () => {
    if (selectedGardener != null) {
      return (
        <div className="experienced-gardeners-foot">
          <div className="experienced-gardeners-button">
            <button onClick={manageSpeciesHandler}>Manage species</button>
            <button onClick={managePlantHandler}>Manage plants</button>
            <button onClick={clearSelectedCategoryHandler}>Back</button>
          </div>
        </div>
      );
    }

    return (
      <div className="experienced-gardeners-foot">
        <div className="experienced-gardeners-button">
          <button onClick={clearSelectedCategoryHandler}>Back</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {buildHead()}
      <Card className="experienced-gardeners__background">
        <ul className="experienced-gardeners">
          {gardenersList.map((experiencedGardener) => (
            <ExperiencedGardener
              onSelectedGardener={selectGardenerHandler}
              key={experiencedGardener.id}
              id={experiencedGardener.id}
              firstName={experiencedGardener.firstName}
              lastName={experiencedGardener.lastName}
              salary={experiencedGardener.salary}
              salaryBonus={experiencedGardener.salaryBonus}
              employmentDate={experiencedGardener.employmentDate}
              contactInfo={experiencedGardener.contactInfo}
            />
          ))}
        </ul>
      </Card>
      {buildFoot()}
    </div>
  );
};

export default WorkerCategorySelector;