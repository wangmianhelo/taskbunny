import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ReactComponent as TaskSign } from "./task.svg";

const Layout = styled.div``;

const Header = styled.div``;

const Avatar = styled.div``;

const Logo = styled.div`
  height: 100px;
  width: 100px;
`;

const HeaderRight = styled.div``;

const Title = styled.div``;

const PostTask = () => {
  return (
    <Layout>
      <Header>
        <Avatar>
          <img src="./example.jpeg" alt="" />
        </Avatar>
        <Logo>
          <TaskSign />
        </Logo>
        <HeaderRight>
          <Button>search</Button>
          <Button>post a task</Button>
        </HeaderRight>
      </Header>
      <Title>Post a Task</Title>
    </Layout>
  );
};

export default PostTask;
