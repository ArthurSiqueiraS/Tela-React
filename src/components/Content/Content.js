import React, { Component } from "react";
import classes from "./Content.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import KeyMetrics from "../../containers/KeyMetrics/KeyMetrics";
import Segments from "../../containers/Segments/Segments";
import Campaigns from "../../containers/Campaigns/Campaigns";
import Settings from "../../containers/Settings/Settings";
import { ICONS } from "../../global/constants";

class Content extends Component {
  state = {
    pages: [
      {
        name: "Home",
        icon: null,
        component: <Campaigns />
      },
      {
        name: "Key Metrics ",
        icon: ICONS.KEY_METRICS,
        component: <KeyMetrics />
      },
      {
        name: "Segments",
        icon: ICONS.SEGMENTS,
        component: <Segments />
      },
      {
        name: "Campaigns",
        icon: ICONS.CAMPAIGNS,
        component: <Campaigns />
      },
      {
        name: "Settings",
        icon: ICONS.SETTINGS,
        component: <Settings />
      }
    ],
    currentPage: 0
  };

  changePage = i => {
    this.setState({ currentPage: i });
  };

  render() {
    const { pages, currentPage } = this.state;
    const content = pages[currentPage].component;

    return (
      <div className={classes.Content}>
        <Sidebar
          pages={pages.filter(page => page.icon)}
          currentPage={currentPage}
          selectLink={this.changePage}
        />
        <div className={classes.contentContainer}>{content}</div>
      </div>
    );
  }
}
export default Content;
