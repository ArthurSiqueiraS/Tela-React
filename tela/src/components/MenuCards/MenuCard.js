import React from "react";
import Card from "../helpers/Card";
import IconLink from "../helpers/IconLink";
import classes from "./MenuCard.module.scss";

const menuCard = props => {
  const { icon, text, notification, viewBox } = props;

  let className = classes.MenuCard;
  if (notification) {
    className = [className, classes.notification].join(" ");
  }

  return (
    <Card className={className}>
      <IconLink icon={icon} text={text} viewBox={viewBox} />
    </Card>
  );
};

export default menuCard;
