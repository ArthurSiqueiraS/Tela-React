import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../components/Home/Home";
import KeyMetrics from "./KeyMetrics/KeyMetrics";
import Segments from "./Segments/Segments";
import Campaigns from "./Campaigns/Campaigns";
import Settings from "./Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route path="/" exact component={Home} />
      <Route path="/keymetrics" exact component={KeyMetrics} />
      <Route path="/segments" exact component={Segments} />
      <Route path="/campaigns" exact component={Campaigns} />
      <Route path="/settings" exact component={Settings} />
    </BrowserRouter>
  );
}

export default App;
