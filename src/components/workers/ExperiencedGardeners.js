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
      contactInfo: "+48 516-825-724",
    },
    {
      id: 11,
      firstName: "Aleksander",
      lastName: "Bziuk",
      salary: "6000",
      salaryBonus: "1500",
      employmentDate: new Date(),
      contactInfo: "+48 625-264-112",
    },
    {
      id: 12,
      firstName: "Jakub",
      lastName: "Zasztowt",
      salary: "7000",
      salaryBonus: "500",
      employmentDate: new Date(),
      contactInfo: "+48 452-421-940",
    },
    {
      id: 13,
      firstName: "Michał",
      lastName: "Okręglicki",
      salary: "7300",
      salaryBonus: "200",
      employmentDate: new Date(),
      contactInfo: "+48 394-432-843",
    },
  ];

  const [selectedGardener, setSelectedGardener] = useState(null);

  const selectGardenerHandler = (id) => {
    setSelectedGardener(
      DUMMY_EXPERIENCED_GARDENERS.find((gardener) => gardener.id === id)
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
          {DUMMY_EXPERIENCED_GARDENERS.map((experiencedGardener) => (
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
