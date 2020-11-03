import React from "react";
import PopularProjects from "./components/PopularProjects";
import TaskerArea from "./components/TaskerArea";
import Others from "./components/Others";
import Info from "./components/Info";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularProjects />
      <Others />
      <Info />
      <TaskerArea />
      <Footer />
    </div>
  );
};

export default Home;
