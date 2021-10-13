import React from "react";
import "./OtherCards.scss";
import { Card, List } from "../index";
import PropTypes from "prop-types";

function OtherCards({ className }) {
  return (
    <div className={"other-cards " + (className && className)}>
      <Card
        className="other-card__card"
        color="red"
        title="Практические модули"
      >
        <p className="other-cards__desc">
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </p>
      </Card>
      <Card
        className="other-card__card"
        color="dark"
        title="Итоговая аттестация"
      >
        <List
          
          items={[
            "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
            "Защита итоговой аттестационной работы",
          ]}
        >
          {" "}
        </List>
      </Card>
    </div>
  );
}

OtherCards.propTypes = {
  className: PropTypes.string,
};

export default OtherCards;
