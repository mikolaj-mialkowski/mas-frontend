import "./NewPlantForm.css";
import React, { useState, useEffect } from "react";

const NewPlantForm = (props) => {

  const fetchSpecies = async () => {
    const result = await fetch(
      "http://localhost:8080/api.mas.backend/species/all"
    );
    let res = await result.json();
    return res;
  };

  useEffect(() => {
    const getSpecies = async () => {
      const speciesFromBE = await fetchSpecies();
      setSpeciesList(speciesFromBE);
    };
    getSpecies();
  }, []);

  const [speciesList, setSpeciesList] = useState([]);

  const [userInput, setUserInput] = useState({
    enteredFertilizer: "",
    enteredSpeciesName: "",
  });

  const speciesChangeHandler = (event) => {
    setUserInput(() => {
      return { enteredspeciesName: event.target.value };
    });
  };

  const fertilizerChangeHandler = (event) => {
    setUserInput(() => {
      return { enteredFertilizer: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newSpecies = {
      latinName: userInput.enteredLatinName,
      lifeCycle: userInput.enteredlifeCycle,
      id: Math.random().toString(),
    };

    if (isValidSpecies(newSpecies)) {
      props.onAddNewSpecies(newSpecies);
      clearFormFields();
    }
  };

  const isValidSpecies = (species) => {
    if (
      species.latinName === "" ||
      species.lifeCycle === "" ||
      species.id === ""
    )
      return false;

    return true;
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    props.onHideForm(true);
    clearFormFields();
  };

  const clearFormFields = () =>
    setUserInput({ enteredLatinName: "", enteredlifeCycle: "" });

  return (
    <form onSubmit={submitHandler}>
      <div className="new-plant-form-filter__controls">
        <div className="new-plant-form-filter">
            <label>Filter by species</label>
            <select onChange={speciesChangeHandler}>
              {speciesList.map((species) => (
                <option key={species.latinName} value={species.latinName}>
                  {species.latinName}
                </option>
              ))}
            </select>
        </div>
        </div>
        <div className="new-plant-form__radio">
          <label>
            <input
              type="radio"
              value="annual species"
              onChange={fertilizerChangeHandler}
              checked={userInput.enteredlifeCycle === "annual species"}
            />
             requires fertilizer
          </label>
        </div>
        <div className="new-plant-form__radio">
          <label>
            <input
              type="radio"
              value="perennial species"
              onChange={fertilizerChangeHandler}
              checked={userInput.enteredlifeCycle === "perennial species"}
            />
             doesn't require fertilizer
          </label>
        </div>
      
      <div className="new-species-form__actions">
        <div className="species-form-button">
          <button onClick={hideFormHandler}>Canclel</button>
          <button type="submit">Add new plant</button>
        </div>
      </div>
    </form>
  );
};

export default NewPlantForm;
