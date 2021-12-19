import React from "react";
import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Layout.module.scss";

const layout = () => {
  let user = {
    name: "John Doe"
  };

  return (
    <div className={classes.Layout}>
      <Navbar user={user} />
      <div className={classes.content}>
        <Content />
      </div>
    </div>
  );
};

export default layout;
