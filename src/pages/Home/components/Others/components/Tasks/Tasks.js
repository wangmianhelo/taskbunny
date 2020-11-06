import React from "react";
import styled from "styled-components";
import Task from "./components/Task";

const CardLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1440px;

`;

const TasksWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
`;

const Tasks = () => {
  return (
    <TasksWrapper>
      <CardLayout>
        <Task title="Home" price="$120" description="Carpet cleaning" />
        <Task
          title="Home"
          price="$70"
          description="Bed frame and mattress clean"
        />
        <Task title="Home" price="$50" description="Oven clean" />
        <Task title="Home" price="$61" description="Window clean" />
        <Task
          title="Home"
          price="$250"
          description="Bond cleaning(2B 1B apartment)"
        />
      </CardLayout>
      <CardLayout>
        <Task title="Home" price="$246" description="House clean" />
        <Task title="Home" price="$60" description="Bathroom clean" />
        <Task title="Home" price="50" description="Wood Floor clean" />
        <Task title="Home" price="105" description="Kitchen clean" />
        <Task title="Home" price="150" description="Studio Apartment clean" />
      </CardLayout>
    </TasksWrapper>
  );
};

export default Tasks;
