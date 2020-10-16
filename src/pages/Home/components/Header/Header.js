import React from "react";
import styled from "styled-components";
import RabbitImg from "./elements/logo.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
`;

const RabbitLogo = styled.div`
  width: 85.84px;
  height: 72.66px;
  background: url(${RabbitImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 70px;
  margin-right: 20px;
  margin-top: 15px;
`;

const ButtonLeft = styled.span`
  margin-right: 15px;
  cursor: pointer;
  margin-top: 10px;
`;
const ButtonYellow = styled.span`
  margin-right: 15px;
  cursor: pointer;
  background: #f3d250;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 90px;
  padding: 10px;
  margin-top: 10px;
`;

const ButtonRight = styled.span`
  margin-left: 15px;
  cursor: pointer;
  margin-top: 10px;
`;
const ButtonWhite = styled.span`
  margin-left: 15px;
  cursor: pointer;
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 90px;
  padding: 10px;
  margin-top: 10px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <RabbitLogo></RabbitLogo>
        <ButtonYellow>Post a task</ButtonYellow>
        <ButtonLeft>Categories</ButtonLeft>
        <ButtonLeft>Browse tasks</ButtonLeft>
        <ButtonLeft>How it works</ButtonLeft>
      </HeaderLeft>
      <HeaderRight>
        <ButtonRight>Sign up</ButtonRight>
        <ButtonRight>Log in</ButtonRight>
        <ButtonWhite>Become a tasker</ButtonWhite>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;
