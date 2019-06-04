import React from "react";

const Icon = props => (
  <icon className={props.className}>
    <svg
      width={props.width || 32}
      height={props.height || 32}
      viewBox={props.viewBox || "0 0 24 24"}
    >
      <path d={props.icon} />
    </svg>
  </icon>
);

export default Icon;
