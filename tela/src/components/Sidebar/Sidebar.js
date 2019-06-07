import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import Icon from "../helpers/Icon";

class Content extends Component {
  render() {
    const { pages, currentPage, selectLink } = this.props;

    return (
      <div className={classes.Sidebar}>
        {pages.map((link, i) => {
          return (
            <SidebarLink
              icon={link.icon}
              name={link.name}
              selected={currentPage === i + 1}
              onClick={selectLink.bind(this, i + 1)}
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
      <Icon icon={props.icon} viewBox={"0 0 20 20"} />
      <span>{props.name}</span>
    </div>
  );
};

export default Content;
