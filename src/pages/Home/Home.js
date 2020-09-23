import React from "react";
import PopularProjects from "./components/PopularProjects";
import TaskerArea from "./components/TaskerArea"
import Others from "./components/Others";

const Home = () => {
  return (
    <div>
      <PopularProjects />
      <Others />
      <TaskerArea/>
    </div>
  );
};

export default Home;
