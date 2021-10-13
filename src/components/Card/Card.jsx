import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";

function Card({ color, title, children, className }) {
  return (
    <div className={"card " + (color && color)}>
      <h5 className="card__title">{title}</h5>
      <div className="card__content">{children}</div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
