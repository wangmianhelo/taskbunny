import React from "react";
import styled from "styled-components";
import Tasks from "./components/Tasks";
import Tabs from "./components/Tabs";
import TabDescription from "./components/TabDescription";

const Button = styled.button`
  display: block;
  cursor: pointer;
  color: rgb(255, 255, 255);
  letter-spacing: 0.15px;
  background-color: rgb(224, 68, 109);
  border-radius: 160px;
  padding: 14px 26px;
  margin: 20px auto;
  width: 240px;
  font-size: 18px;
`;

const SectionTitle = styled.h3`
  color: rgb(41, 43, 50);
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin: 0px;
  padding: 80px 100px 0;
`;

const Wrapper = styled.section`
  background-color: #f6f8fd;
  padding: 24px 0;
`;

class Others extends React.Component {
  render() {
    return (
      <Wrapper>
        <SectionTitle>See what others are getting done</SectionTitle>
        <Tabs />
        <TabDescription />
        <Tasks />
        <Button>Get Started Now</Button>
      </Wrapper>
    );
  }
}

export default Others;
