import "./NewPlantForm.css";
import React, { useState, useEffect } from "react";
import configData from "../../config/config.json"

const NewPlantForm = (props) => {

  const fetchSpecies = async () => {
    const result = await fetch(
      configData.localhost_url+configData.all_species
    );
    return await result.json();
  };

  const fetchGardeners = async () => {
    const result = await fetch(
      configData.localhost_url+configData.all_novice_gardeners
    );
    return await result.json();
  };

  useEffect(() => {
    const getGardeners = async () => {
      const gardenersFromBE = await fetchGardeners();
      setGardenersList(gardenersFromBE);
    };
    getGardeners();
  }, []);

  useEffect(() => {
    const getSpecies = async () => {
      const speciesFromBE = await fetchSpecies();
      setSpeciesList(speciesFromBE);
    };
    getSpecies();
  }, []);
  

  const [speciesList, setSpeciesList] = useState([]);
  const [gardenersList, setGardenersList] = useState([]);

  const [userInput, setUserInput] = useState({
    enteredFertilizer: false,
    enteredId: "",
    enteredGardenerId: ""
  });

  const speciesChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredId: event.target.value };
    });
  };

  const gardenerChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredGardenerId: event.target.value };
    });
  };

  const fertilizerChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredFertilizer: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newPlant = {
      speciesId: userInput.enteredId,
      fertilizer: userInput.enteredFertilizer,
      healthState: "HEALTHY_UNDEMANDING",
      gardenerId: userInput.enteredGardenerId
    };

    if (isValidSpecies(newPlant)) {
      props.onAddNewPlant(newPlant);
      props.onHideForm(true);
      clearFormFields();
    }
  };

  const isValidSpecies = (newPlant) => {
    if (
      newPlant.speciesId === "" ||
      newPlant.key === "" ||
      newPlant.fertilizer === ""  ||
      newPlant.gardenerId === "" 
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
    setUserInput({ enteredId: "", enteredFertilizer: "" , enteredGardenerId: ""});

  return (
    <form onSubmit={submitHandler}>
      <div className="new-plant-form-filter__controls">
        <div className="new-plant-form-filter">
          <label>Filter by species</label>
          <select onChange={speciesChangeHandler}>
            {speciesList.map((species) => (
              <option key={species.latinName} value={species.id}>
                {species.latinName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="new-plant-form-filter__controls">
        <div className="new-plant-form-filter">
          <label>Filter by gardener</label>
          <select onChange={gardenerChangeHandler}>
            {gardenersList.map((gardener) => (
              <option key={gardener.firstName +" "+ gardener.lastName} value={gardener.id}>
                {gardener.firstName + " " + gardener.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="new-plant-form__radio">
        <label>
          <input
            type="radio"
            value="true"
            onChange={fertilizerChangeHandler}
            checked={userInput.enteredFertilizer === "true"}
          />
          requires fertilizer
        </label>
      </div>
      <div className="new-plant-form__radio">
        <label>
          <input
            type="radio"
            value="false"
            onChange={fertilizerChangeHandler}
            checked={userInput.enteredFertilizer === "false"}
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
