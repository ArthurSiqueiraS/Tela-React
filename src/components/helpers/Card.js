import React from "react";

const card = props => {
  return (
    <div card="true" className={props.className}>
      {props.children}
    </div>
  );
};

export default card;
