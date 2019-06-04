import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const layout = () => {
  let user = {
    name: "John Doe"
  };

  return <Navbar user={user} />;
};

export default layout;
