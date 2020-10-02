import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 14px 16px;
  cursor: pointer;
`;

const Text = styled.span`
  color: #545a77;
  font-size: 14px;
`;

const Button = styled.span`
  background-color: #f6f8fd;
  border-radius: 200px;
  font-size: 12px;
  padding: 6px 18px;
  color: #008fb4;
  border: 2px solid rgba(41, 43, 50, 0.1);
  &:hover {
    background-color: white;
  }
`;

const Authentication = () => {
  return (
    <Layout>
      <Link href="/sign-in">
        <Text>Sign up</Text>
      </Link>
      <Link href="/sign-up">
        <Text>Log in</Text>
      </Link>
      <Link href="/enroll">
        <Button>Become a Tasker</Button>
      </Link>
    </Layout>
  );
};

export default Authentication;
