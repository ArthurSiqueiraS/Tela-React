import React from "react";
import classes from "./MenuCards.module.scss";
import MenuCard from "./MenuCard";

const menuCards = props => {
  return (
    <div className={classes.MenuCards}>
      {props.links.map((card, i) => (
        <MenuCard
          icon={card.icon}
          text={card.text}
          viewBox={card.viewBox}
          notification={card.notification}
          key={i}
        />
      ))}
    </div>
  );
};

export default menuCards;
