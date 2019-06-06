import React from "react";

const Icon = props => {
  return (
    <div icon="true" className={props.className}>
      <svg width={props.width || 32} viewBox={props.viewBox || "0 0 24 24"}>
        <path d={props.icon} />
      </svg>
    </div>
  );
};

export default Icon;
