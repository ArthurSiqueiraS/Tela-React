import React from "react";
import classes from "./Sidebar.module.scss";

const sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/keymetrics">KeyMetrics</a>
        </li>
        <li>
          <a href="/segments">Segments</a>
        </li>
        <li>
          <a href="/campaigns">Campaigns</a>
        </li>
        <li>
          <a href="/Settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default sidebar;
