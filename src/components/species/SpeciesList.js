import Card from "../UI/Card";
import React, { useState } from "react";
import Species from "./Species";
import "./SpeciesList.css";
import NewSpeciesForm from "./NewSpeciesForm";

const SpeciesList = (props) => {
  const DUMMY_SPECIES = [
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

  const [openForm, setOpenForm] = useState(false);

  const clearSelectedCategoryHandler = () => {
    props.onClearCategory("Experienced Gardener");
  };

  const showFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  const saveNewSpeciesHandler = (newSpecies) => {
    console.log(newSpecies);
  };

  const buildHead = () => {
    if (openForm) {
      return (
        <div>
          <div className="species-list-head">
            <div className="species-list__title">
              <h2>Manage species</h2>
            </div>
          </div>
          <div className="species-list__title">
            <NewSpeciesForm
              onAddNewSpecies={saveNewSpeciesHandler}
              onHideForm={closeFormHandler}
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="species-list-head">
          <div className="species-list__title">
            <h2>Manage species</h2>
          </div>
        </div>
        <div className="species-list-head">
          <div className="species-list-button">
            <button onClick={showFormHandler}>Add new species</button>
          </div>
        </div>
      </div>
    );
  };

  const buildFoot = () => {
    return (
      <div className="species-list-foot">
        <div className="species-list-button">
          <button onClick={clearSelectedCategoryHandler}>Back</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {buildHead()}
      <Card className="species-list__background">
        <ul className="species-list">
          {DUMMY_SPECIES.map((species) => (
            <Species
              key={species.id}
              id={species.id}
              latinName={species.latinName}
              lifeCycle={species.lifeCycle}
            />
          ))}
        </ul>
      </Card>
      {buildFoot()}
    </div>
  );
};

export default SpeciesList;