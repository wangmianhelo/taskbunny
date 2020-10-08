import React from "react";
import TaskCard from "./elements/TaskCard";
import CardContent from "./elements/CardContent";
import CardTop from "./elements/CardTop";
import CardMid from "./elements/CardMid";
import TaskDesc from "./elements/TaskDesc";
import Price from "./elements/Price";
import CardBottom from "./elements/CardBottom";
import styled from "styled-components";
import { ReactComponent as Star } from "./elements/star.svg";

const TaskStar = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  margin-right: 7px;
`;

const Text = styled.span``;

const Task = () => {
  return (
    <TaskCard>
      <CardContent>
        <CardTop>HANDYMAN / TRADIES</CardTop>
        <CardMid>
          <div className="profilepic"></div>
          <TaskDesc>Assemble an Ikea Hemnes open wardrobe</TaskDesc>
          <Price>$100</Price>
        </CardMid>
        <CardBottom>
          <TaskStar>
            <Star />
          </TaskStar>
          <Text>5 Stars</Text>
        </CardBottom>
      </CardContent>
    </TaskCard>
  );
};

export default Task;
