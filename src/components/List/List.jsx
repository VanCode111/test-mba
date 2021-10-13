import React from "react";
import "./List.scss";
import PropTypes from "prop-types";

function List({ items, className }) {
  return (
    <ol className={"list " + (className && className)}>
      {items.map((item, index) => {
        return (
          <li className="list__item" key={index}>
            {item}
          </li>
        );
      })}
    </ol>
  );
}

List.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default List;
