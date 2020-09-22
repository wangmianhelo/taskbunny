import React from "react";
import PopularProjects from "./components/PopularProjects";
import Others from "./components/Others";
import Info from "./components/Info";

const Home = () => {
  return (
    <div>
      <PopularProjects />
      <Others />
      <Info />
    </div>
  );
};

export default Home;
