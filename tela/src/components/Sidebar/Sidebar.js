import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Icon from "../helpers/Icon";
import { ICONS } from "../../global/constants";

class Sidebar extends Component {
  state = {
    links: [
      { icon: ICONS.BRIEFCASE, name: "Key Metrics" },
      { icon: ICONS.STAR, name: "Key Metric" },
      { icon: ICONS.STAR, name: "Key Metric" },
      { icon: ICONS.STAR, name: "Key Metric" }
    ],
    selected: false
  };

  selectLink = i => {
    this.setState({ selected: i });
  };

  render() {
    const { links, selected } = this.state;

    return (
      <div className={classes.Sidebar}>
        {links.map((link, i) => {
          return (
            <SidebarLink
              icon={link.icon}
              name={link.name}
              selected={selected === i}
              onClick={this.selectLink.bind(this, i)}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

const SidebarLink = props => {
  let className = classes.SidebarLink;
  if (props.selected) {
    className = [className, classes.selected].join(" ");
  }

  return (
    <div className={className} onClick={props.onClick}>
      <Icon icon={props.icon} />
      <span>Key Metrics</span>
    </div>
  );
};

export default Sidebar;
