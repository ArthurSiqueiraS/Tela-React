import React from "react";
import classes from "./Sidebar.module.scss";
import IconLink from "../helpers/IconLink";

const Sidebar = props => {
  const { pages, currentPage, selectLink } = props;
  const links = pages.map((link, i) => {
    let className = classes.link;
    if (currentPage === i + 1) {
      className = [className, classes.selected].join(" ");
    }

    return (
      <div className={className} onClick={selectLink.bind(this, i + 1)} key={i}>
        <IconLink icon={link.icon} text={link.name} viewBox={"0 0 20 20"} />
      </div>
    );
  });

  return <div className={classes.Sidebar}>{links}</div>;
};

export default Sidebar;
