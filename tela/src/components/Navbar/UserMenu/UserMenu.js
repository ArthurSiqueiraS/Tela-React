import React, { Component } from "react";
import classes from "./UserMenu.module.scss";
import UserNav from "./UserNav";
import Icon from "../../helpers/Icon";
import { ICONS } from "../../../global/constants";
import PropTypes from "prop-types";

class UserMenu extends Component {
  state = {
    nav: false
  };

  navOpen = () => {
    this.setState({ nav: true });
  };

  navClose = () => {
    this.setState({ nav: false });
  };

  render() {
    const user = this.props.user;

    return (
      <div className={classes.UserMenu}>
        <div trigger="true" onClick={this.navOpen}>
          {user.name}
          <Icon icon={ICONS.ARROW_DOWN} width={20} />
        </div>
        <UserNav user={user} open={this.state.nav} closeNav={this.navClose} />
      </div>
    );
  }
}

UserMenu.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserMenu;
