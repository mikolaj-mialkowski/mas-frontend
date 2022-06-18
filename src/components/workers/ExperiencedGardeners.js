import Card from "../UI/Card";
import ExperiencedGardener from "./ExperiencedGardener";
import React, { useState } from "react";
import "./ExperiencedGardeners.css";

const WorkerCategorySelector = (props) => {
  const DUMMY_EXPERIENCED_GARDENERS = [
    {
      id: 10,
      firstName: "Adam",
      lastName: "Małysz",
      salary: "7000",
      salaryBonus: "2000",
      employmentDate: new Date(),
    },
    {
      id: 11,
      firstName: "Aleksander",
      lastName: "Bziuk",
      salary: "6000",
      salaryBonus: "1500",
      employmentDate: new Date(),
    },
    {
      id: 12,
      firstName: "Jakub",
      lastName: "Zasztowt",
      salary: "7000",
      salaryBonus: "500",
      employmentDate: new Date(),
    },
    {
      id: 13,
      firstName: "Michał",
      lastName: "Okręglicki",
      salary: "7300",
      salaryBonus: "200",
      employmentDate: new Date(),
    },
  ];

  const selectCategoryHandler = (name) => {
    console.log(name);
  };

  const clearSelectedCategoryHandler = () => {
    props.onClearCategory();
  };

  return (
    <div>
      <div className="experienced-gardeners-head">
        <div className="experienced-gardeners__title">
          <h2>Available experienced gardeners</h2>
        </div>
      </div>

      <Card className="experienced-gardeners__background">
        <ul className="experienced-gardeners">
          {DUMMY_EXPERIENCED_GARDENERS.map((experiencedGardener) => (
            <ExperiencedGardener
              key={experiencedGardener.id}
              firstName={experiencedGardener.firstName}
              lastName={experiencedGardener.lastName}
              salary={experiencedGardener.salary}
              salaryBonus={experiencedGardener.salaryBonus}
              employmentDate={experiencedGardener.employmentDate}
            />
          ))}
        </ul>
      </Card>

      <div className="experienced-gardeners-foot">
        <div className="experienced-gardeners-button">
          <button onClick={clearSelectedCategoryHandler}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCategorySelector;
