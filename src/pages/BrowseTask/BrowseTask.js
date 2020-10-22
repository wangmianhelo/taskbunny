import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Home/components/Header";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";
import avatarTrader from "./components/Task/pic/avatar-trader.png";
import detailImg1 from "./components/TaskDetail/pic/detailImg1.png";
import detailImg2 from "./components/TaskDetail/pic/detailImg2.png";
import detailImg3 from "./components/TaskDetail/pic/detailImg3.png";

const tasks = [
    {
      budget: 120,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Kevin Lee",
      location: "Sydney, NSW",
      date: "Mon, 20 Sep",
      status: "Open",
      details: "0Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 121,
      avatar: avatarTrader,
      title: "Pipe cleanning, 20 sq metre 2 bedroom",
      name: "Bin Lee",
      location: "Newcastle, NSW",
      date: "Mon, 21 Sep",
      status: "Assigned",
      details: "1Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg2, detailImg3, detailImg1 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 122,
      avatar: avatarTrader,
      title: "Oven cleanning",
      name: "Jason Lee",
      location: "Melbourne, VIC",
      date: "Mon, 22 Sep",
      status: "Completed",
      details: "2Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 123,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Tommy Lee",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
      details: "3Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 120,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Kevin Lee",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
      details: "Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 120,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Kevin Lee",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
      details: "Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 120,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Kevin Lee",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
      details: "Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
    {
      budget: 120,
      avatar: avatarTrader,
      title: "Carpet cleanning, 20 sq metre 2 bedroom",
      name: "Kevin Lee",
      location: "Sydney, NSW",
      date: "Mon, 21 Sep",
      status: "Open",
      details: "Iaculis mattis cras tempus consectetur cum scelerisque tristique consectetur. Risus urna duis vitae varius vitae ipsum. Ipsum risus morbi enim massa nec cras. Pretium malesuada enim egestas id id sit sit dignissim.",
      images: [ detailImg1, detailImg2, detailImg3 ],
      questions: [
        {
          avatar: avatarTrader,
          name: "Oscar",
          content: "Happy to help you.",
        },
      ]
    },
  ]

const BrowseTaskContainer = styled.div`
  margin: 3rem auto 2rem;
  width: 84rem;
  display: flex;
  flex-direction: row;
`;

const TaskContainer = styled.div`
  width: 23rem;
  height: calc(100vh + 144px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #FFFFFF;
  }
  &::-webkit-scrollbar-thumb {
    background: #5EDEFC;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5EDEFC;
  }
`;

const TaskDetailContainer = styled.div`
  padding: 1.375rem 2rem;
  width: 58rem;
`;

const BrowseTask = () => {
  const selectTask = (task) => setCurrentTask(task);
  const [ currentTask, setCurrentTask ] = useState(tasks[0]);
  // console.log(currentTask);
  return (
    <div>
      <Header />
      <BrowseTaskContainer>
        <TaskContainer>
            {tasks.map(task => (
              <Task {...task} onClick={() => selectTask(task)} />
            ))}
        </TaskContainer>
        <TaskDetailContainer>
          <TaskDetail {...currentTask} />
        </TaskDetailContainer>
      </BrowseTaskContainer>
    </div>
  );
};


export default BrowseTask;