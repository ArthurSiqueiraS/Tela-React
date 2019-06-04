import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import UserMenu from "./UserMenu/UserMenu";
import classes from "./Navbar.module.scss";

const navbar = props => {
  return (
    <div className={classes.Navbar}>
      <NavMenu />
    </div>
  );
};

export default navbar;
