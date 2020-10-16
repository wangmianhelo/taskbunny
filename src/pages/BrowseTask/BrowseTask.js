import React from "react";
import styled from "styled-components";
import Task from "./components/Task";
import avatarTrader from "./components/Task/pic/avatar-trader.png";

const TaskContainer = styled.div`
  border: 1px solid red;
  position: absolute;
  left: 5.625rem;
  top: 15rem;
`;


const tasks = [
    {
      budget: 120,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 20 Sep",
      status: "Open",
    },
    {
      budget: 121,
      avatar: avatarTrader,
      detail: "Pipe cleanning, 20 sq metre 2 bedroom",
      location: "Newcastle, NSW",
      date: "Mon, 21 Sep",
      status: "Assigned",
    },
    {
      budget: 122,
      avatar: avatarTrader,
      detail: "Oven cleanning",
      location: "Melbourne, VIC",
      date: "Mon, 22 Sep",
      status: "Completed",
    },
    {
      budget: 123,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
    },
    {
      budget: 120,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
    },
    {
      budget: 120,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
    },
    {
      budget: 120,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
    },
    {
      budget: 120,
      avatar: avatarTrader,
      detail: "Carpet cleanning, 20 sq metre 2 bedroom",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
    },
  ]

const BrowseTask = () => {
    return (
    <TaskContainer>
        {tasks.map(task => (
          <Task {...task} />
        ))}
    </TaskContainer>
    );
};


export default BrowseTask;