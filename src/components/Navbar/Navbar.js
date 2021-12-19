import React from "react";
import Card from "../helpers/Card";
import NavMenu from "./NavMenu/NavMenu";
import UserNav from "./UserMenu/UserMenu";
import classes from "./Navbar.module.scss";

const navbar = props => {
  const user = {
    id: "1",
    name: "John Doe",
    role: "Developer",
    stars: 332
  };

  return (
    <Card className={classes.Navbar}>
      <NavMenu />
      <UserNav user={user} />
    </Card>
  );
};

export default navbar;
