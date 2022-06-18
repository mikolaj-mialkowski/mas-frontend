import "./NewSpeciesForm.css";
import React, { useState } from "react";

const NewSpeciesForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredLatinName: "",
    enteredlifeCycle: ""
  });

  const latinNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredLatinName: event.target.value };
    });
  };

  const lifeCycleChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredlifeCycle: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let expenseData = {
      latinname: userInput.latinName,
      lifeCycle: userInput.lifeCycle
    };

    props.onAddNewSpecies(expenseData);
    clearFormFields();
  };

  const hideFormHandler = (event) => {
    event.preventDefault(); // prevet default page reload by browser
    props.onHideForm(true);
    clearFormFields();
  };

  const clearFormFields = () =>
    setUserInput({ enteredLatinName: "", enteredlifeCycle: ""});

  return (
    <form onSubmit={submitHandler}>
      <div className="new-species-form__controls">
        <div className="new-species-form__control">
          <label>Latin name</label>
          <input
            type="text"
            onChange={latinNameChangeHandler}
            value={userInput.enteredLatinName}
          />
        </div>
        <div className="new-species-form__control">
          <label>Life cycle</label>
          <input
            type="radio"
            value={"annual species"}  // perennial species
            onChange={lifeCycleChangeHandler}
          />
        </div>
        <div className="new-species-form__control">
          <label>Life cycle</label>
          <input
            type="radio"
            value={"perennial species"}  // perennial species
            onChange={lifeCycleChangeHandler}
          />
        </div>
      </div>
      <div className="new-species-form__actions">
      <button onClick={hideFormHandler} >Canclel</button>
        <button type="submit">Add new species</button>
      </div>
    </form>
  );
};

export default NewSpeciesForm;
