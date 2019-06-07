import React, { Component } from "react";
import MenuCards from "../../components/MenuCards/MenuCards";
import classes from "./Campaigns.module.scss";
import { Icons, ICONS } from "../../global/constants";

class Campaigns extends Component {
  state = {
    cards: [
      {
        icon: ICONS.SEGMENTATION,
        text: "Segmentation",
        notification: false,
        viewBox: "0 0 20 20"
      },
      {
        icon: ICONS.TEMPLATE,
        text: "Templates",
        notification: false,
        viewBox: "0 0 20 20"
      },
      {
        icon: ICONS.LINK,
        text: "Choose Deep Link",
        notification: false,
        viewBox: "0 0 20 20"
      },
      {
        icon: ICONS.GOALS,
        text: "Scheduling & Goals",
        notification: true,
        viewBox: "0 0 20 20"
      }
    ]
  };

  render() {
    return (
      <div className={classes.Campaigns}>
        <MenuCards links={this.state.cards} />
      </div>
    );
  }
}

export default Campaigns;
