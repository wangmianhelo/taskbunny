import React from "react";
import styled from "styled-components";
import rabbit from "./elements/logo.svg";
import taskman from "./elements/taskman.jpeg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
  padding-bottom: 10px;
  @media (max-width: 768px) {
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 85.84px;
  height: 72.66px;
  margin: 15px 20px 20px 70px;
  object-fit: fill;
`;

const ButtonLeft = styled.span`
  margin-right: 15px;
  cursor: pointer;
  margin-top: 10px;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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

const AvatarContainer = styled.div`
  margin-top: 20px;
  margin-right: 60px;
  & > img {
    object-fit: fill;
    width: 65.33px;
    height: 60.33px;
    border-radius: 50%;
  }
`;

const HiddenButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 60px;
    top: 55px;
    cursor: pointer;
    & > div {
      width: 28px;
      height: 3px;
      margin: 0 0 5px 0;
      background: black;
      transition: all 0.5s east-out;
    }
    & .close {
      transform: rotate(180deg);
      & > div {
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  setLoggedIn(loggedIn) {
    this.setState({
      loggedIn: loggedIn,
    });
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <LogoContainer>
            <img src={rabbit} alt="taskbunny" />
          </LogoContainer>
          <ButtonYellow>Post a task</ButtonYellow>
          <ButtonLeft>Categories</ButtonLeft>
          <ButtonLeft>Browse tasks</ButtonLeft>
          <ButtonLeft>How it works</ButtonLeft>
        </HeaderLeft>
        <HiddenButton>
          <div></div>
          <div></div>
          <div></div>
        </HiddenButton>
        <HeaderRight>
          {loggedIn ? (
            <AvatarContainer
              onClick={() => {
                this.setLoggedIn(false);
              }}
            >
              <img src={taskman} alt="avatar" />
            </AvatarContainer>
          ) : (
            <React.Fragment>
              <ButtonRight>Sign up</ButtonRight>
              <ButtonRight
                onClick={() => {
                  this.setLoggedIn(true);
                }}
              >
                Log in
              </ButtonRight>
              <ButtonWhite>Become a tasker</ButtonWhite>
            </React.Fragment>
          )}
          {/* {loggedIn && <div>avatar</div>}
          {!loggedIn && (
            <React.Fragment>
              <ButtonRight>Sign up</ButtonRight>
              <ButtonRight
                onClick={() => {
                  this.setLoggedIn(true);
                }}
              >
                Log in
              </ButtonRight>
              <ButtonWhite>Become a tasker</ButtonWhite>
            </React.Fragment>
          )} */}
        </HeaderRight>
      </HeaderWrapper>
    );
  }
}

export default Header;
