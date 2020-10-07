import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 14px 16px;
`;

const Logo = styled.span`
  color: #008fb4;
`;

const Text = styled.span`
  color: #545a77;
  font-size: 14px;
`;

const Button = styled.span`
  background: #e0446d;
  border-radius: 200px;
  font-size: 12px;
  padding: 6px 18px;
  color: #f6f8fd;
  &:hover {
    color: white;
  }
`;

const Navigation = () => {
  return (
    <Layout>
      <Link href="/">
        <Logo>Logo</Logo>
      </Link>
      <Divider />
      <Link href="/post-a-task">
        <Button>Post a task</Button>
      </Link>
      <Link href="/categories">
        <Text>Categories</Text>
      </Link>
      <Link href="/browse-tasks">
        <Text>Browse tasks</Text>
      </Link>
      <Link href="/how-it-works">
        <Text>How it works</Text>
      </Link>
    </Layout>
  );
};

export default Navigation;
