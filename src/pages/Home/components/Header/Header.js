import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Authentication from "./components/Authentication";

const StyledHeader = styled.div`
  border-bottom: 1px solid #dadada;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: white;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  letter-spacing: 0.25px;
`;

const Layout = styled.div`
  display: flex;
`;

const Left = styled.div``;
const Right = styled.div`
  margin-left: auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Layout>
          <Left>
            <Navigation />
          </Left>
          <Right>
            <Authentication />
          </Right>
        </Layout>
      </Container>
    </StyledHeader>
  );
};

export default Header;
