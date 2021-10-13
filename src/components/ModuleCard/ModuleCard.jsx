import React, { useState } from "react";
import "./ModuleCard.scss";
import PropTypes from "prop-types";
import { List } from "../.";

function ModuleCard({ title, specializedSubjects }) {
  const [openList, setOpenList] = useState(false);

  const openListHandle = () => {
    setOpenList((prev) => !prev);
  };
  return (
    <div className="module-card">
      <div className="module-card__content">
        <div
          className={"module-card__btn-open " + (openList ? "open" : "")}
          onClick={openListHandle}
        >
          <p className="module-card__btn-open__title">{title}</p>
        </div>
        <h5 className="module-card__title">{title}</h5>
        <List
          className={"module-card__list " + (openList ? "open" : "")}
          items={specializedSubjects}
        />
      </div>
    </div>
  );
}

ModuleCard.propTypes = {
  title: PropTypes.string,
  specializedSubjects: PropTypes.array,
};

export default ModuleCard;
