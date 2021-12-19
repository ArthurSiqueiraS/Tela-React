import React, { Component } from "react";
import classes from "./UserNav.module.scss";
import Icon from "../../helpers/Icon";
import { ICONS } from "../../../global/constants";

class UserNav extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeNav();
    }
  }

  render() {
    let className = classes.UserNav;
    if (!this.props.open) {
      className = [className, classes.hidden].join(" ");
    }
    const user = this.props.user;
    const avatar = require("../../../assets/users/1/avatar.jpg");

    return (
      <div className={className} ref={this.setWrapperRef}>
        <div className={classes.info}>
          <div>
            <img src={avatar} alt="Avatar" />
          </div>
          <div>{user.name}</div>
          <div className={classes.extraInfo}>
            <MenuItem icon={ICONS.PERSON} text={user.role} />
            <MenuItem icon={ICONS.STAR} text={user.stars} />
          </div>
        </div>
        <div className={["separator", classes.separator].join(" ")} />
        <div className={classes.menu}>
          <MenuItem text="Perfil" icon={ICONS.PROFILE} />
          <MenuItem text="Projetos" icon={ICONS.BRIEFCASE} />
          <MenuItem text="Configurações" icon={ICONS.COGWHEEL} />
          <MenuItem text="Sair" icon={ICONS.QUIT} />
        </div>
      </div>
    );
  }
}

const MenuItem = props => {
  return (
    <div className={classes.menuItem}>
      <Icon icon={props.icon} />
      {props.text}
    </div>
  );
};

export default UserNav;
