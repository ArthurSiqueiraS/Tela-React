import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Icon from "../helpers/Icon";
import { ICONS } from "../../global/constants";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.Sidebar}>
        <SidebarLink icon={ICONS.STAR} />
        <SidebarLink icon={ICONS.STAR} />
        <SidebarLink icon={ICONS.STAR} />
        <SidebarLink icon={ICONS.STAR} />
      </div>
    );
  }
}

const SidebarLink = props => {
  return (
    <div className={classes.SidebarLink}>
      <Icon icon={props.icon} />
      <span>Key Metrics</span>
    </div>
  );
};

export default Sidebar;
