import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import KeyMetrics from "../KeyMetrics/KeyMetrics";
import Segments from "../Segments/Segments";
import Campaigns from "../Campaigns/Campaigns";
import Settings from "../Settings/Settings";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Layout.module.scss";

const layout = () => {
  let user = {
    name: "John Doe"
  };

  return (
    <div className={classes.Layout}>
      <Navbar user={user} />
      <div className={classes.content}>
        <Sidebar />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/keymetrics" exact component={KeyMetrics} />
          <Route path="/segments" exact component={Segments} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/settings" exact component={Settings} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default layout;
