import React from "react";
import Icon from "./Icon";

const iconLink = props => {
  return (
    <div iconlink="true" className={props.className}>
      <Icon icon={props.icon} viewBox={props.viewBox} />
      <span>{props.text}</span>
    </div>
  );
};

export default iconLink;
