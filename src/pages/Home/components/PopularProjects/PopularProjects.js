import React from "react";
import Project from "./components/Project";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 88.533%;
  margin: auto;
  @media(min-width: 768px) {
    max-width: 1200px;
  }

  & > h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin: 0 auto 2rem;
    text-align: center;
    width: 15rem;
    @media(min-width: 768px) {
      font-size: 2.25rem;
      line-height: 3.625rem;
      margin: 3rem auto 2rem;
      width: auto;
    }
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

const PopularProjects = () => {
  return (
    <ProjectContainer>
      <h2>Popular projects in your area</h2>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectContainer>
  );
};

export default PopularProjects;
