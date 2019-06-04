import React, { Component } from "react";
import classes from "./NavMenu.module.scss";
import hutLogo from "../../../assets/hut.jpg";
import Icon from "../../helpers/Icon";
import { ICONS } from "../../../global/constants";

class NavMenu extends Component {
  state = {
    menuOpened: false
  };

  openMenu = () => {
    this.setState({ menuOpened: true });
  };

  closeMenu = e => {
    this.setState({ menuOpened: false });
  };

  render() {
    const menuOpened = this.state.menuOpened;

    return (
      <div className={classes.NavMenu}>
        <nav>
          <img
            src={hutLogo}
            onMouseEnter={this.openMenu}
            onMouseLeave={this.closeMenu}
          />
          <Icon
            icon={ICONS.ARROW_RIGHT}
            className={menuOpened ? classes.hidden : ""}
          />
          <ul
            className={menuOpened ? "" : classes.hidden}
            onMouseEnter={this.openMenu}
            onMouseLeave={this.closeMenu}
          >
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
