import Card from "../UI/Card";
import React, { useState, useEffect } from "react";
import Species from "./Species";
import "./SpeciesList.css";
import NewSpeciesForm from "./NewSpeciesForm";

const SpeciesList = (props) => {
  useEffect(() => {
    const getSpecies = async () => {
      const speciesFromBE = await fetchSpecies();
      setSpeciesList(speciesFromBE);
    };
    getSpecies();
  }, []);

  const fetchSpecies = async () => {
    const result = await fetch(
      "http://localhost:8080/api.mas.backend/species/all"
    );
    return await result.json();
  };

  const addSpeciesToBE = async (species) => {
    const result = await fetch(
      "http://localhost:8080/api.mas.backend/species/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(species),
      }
    );

    const data = await result.json();

    setSpeciesList((previousState) => [
      {
        latinName: data.latinName,
        lifeCycle: data.lifeCycle,
        id: data.id,
        key: data.id,
      },
      ...previousState,
    ]);
  };

  const [speciesList, setSpeciesList] = useState([]);

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

  const buildHead = () => {
    if (openForm) {
      return (
        <div>
          <div className="species-list-head">
            <div className="species-list__title">
              <h2>Manage species</h2>
            </div>
          </div>
          <div className="species-list-head">
            <div className="species-list__title">
              <NewSpeciesForm
                onAddNewSpecies={addSpeciesToBE}
                onHideForm={closeFormHandler}
              />
            </div>
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
          {speciesList.map((species) => (
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
