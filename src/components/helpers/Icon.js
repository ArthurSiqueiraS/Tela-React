import React from "react";

const Icon = props => {
  return (
    <div icon="true" className={props.className}>
      <svg viewBox={props.viewBox || "0 0 24 24"}>
        <path d={props.icon} />
      </svg>
    </div>
  );
};

export default Icon;
