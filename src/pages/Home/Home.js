import React from "react";
import PopularProjects from "./components/PopularProjects";
import TaskerArea from "./components/TaskerArea"
import Others from "./components/Others";
import Info from "./components/Info";

const Home = () => {
  return (
    <div>
      <PopularProjects />
      <Others />
      <Info />
      <TaskerArea/>
    </div>
  );
};

export default Home;
