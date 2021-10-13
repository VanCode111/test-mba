import React from "react";
import "./ProgrammCard.scss";
import PropTypes from "prop-types";
import { ModuleCard } from "../index";

function ProgrammCard({ title, specializedSubjects, className }) {
  const devidedModules = () => {
    const devidedModules = [];
    let index = 0;
    while (specializedSubjects.length - 1 > index) {
      devidedModules.push(specializedSubjects.slice(index, index + 5));
      index += 5;
    }
    return devidedModules;
  };
  return (
    <div className={"programm-card " + (className && className)}>
      <h2 className="programm-card__title">{title}</h2>
      <div className="programm-card__content">
        {devidedModules().map((module, index) => {
          return (
            <ModuleCard
              key={index}
              specializedSubjects={module}
              title={`${index + 1} модуль`}
            />
          );
        })}
      </div>
    </div>
  );
}

ProgrammCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ProgrammCard;
