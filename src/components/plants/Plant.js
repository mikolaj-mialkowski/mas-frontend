import Card from "../UI/Card";
import "./Plant.css";
import React, { useState } from "react";

const Plant = (props) => {

const[selectedText, setSelectedText] = useState(props.id);

const changeSelectedTextToDelHandler = () =>{
  setSelectedText("delete");
}

const changeSelectedTextToIdHandler = () =>{
  setSelectedText(props.id);
}

const deleteHandler = () =>{
  props.onDeletePlant(props.id);
}

  return (
    <Card className="plant">
      <div className="plant__box">
        <button onMouseEnter={changeSelectedTextToDelHandler} onMouseLeave={changeSelectedTextToIdHandler} onClick={deleteHandler} className="plant-def-del">{selectedText}</button>
        <div className="plant-def">
          {props.healthState === "HEALTHY_UNDEMANDING" ? "healthy" : "sick"}
        </div>
        <div className="plant-def">
          {props.fertilizer ? "fertilized" : "not fertilized"}
        </div>
        <div className="plant-salary">{props.species.latinName}</div>
      </div>
    </Card>
  );
};

export default Plant;
