import React, { Component } from "react";
import classes from "./NavMenu.module.scss";
import hutLogo from "../../../assets/hut.jpg";
import Icon from "../../helpers/Icon";
import { ICONS } from "../../../global/contants";

class NavMenu extends Component {
  state = {
    menuOpened: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return { menuOpened: !prevState.menuOpened };
    });
  };

  render() {
    const menuStyle = this.state.menuOpened
      ? {}
      : {
          transform: "translateY(-100%)",
          opacity: 0
        };

    return (
      <div className={classes.NavMenu}>
        <nav>
          <img src={hutLogo} onClick={this.toggleMenu} />
          <ul style={menuStyle}>
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
            <li>Option4</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
