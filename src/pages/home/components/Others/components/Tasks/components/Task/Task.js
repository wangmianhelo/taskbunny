import React from "react";
import TaskCard from "./elements/TaskCard";
import CardContent from "./elements/CardContent";
import CardTop from "./elements/CardTop";
import CardMid from "./elements/CardMid";
import TaskDesc from "./elements/TaskDesc";
import Price from "./elements/Price";
import CardBottom from "./elements/CardBottom";

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
          <span>5 stars</span>
        </CardBottom>
      </CardContent>
    </TaskCard>
  );
};

export default Task;
