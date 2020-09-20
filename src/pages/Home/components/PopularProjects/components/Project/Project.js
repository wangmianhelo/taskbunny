import React from "react";
import styled from "styled-components";
import projectImg from "./pic/pic1.png";
import taskImg from "./pic/task.svg";
import starImg from "./pic/star.svg";


const ProjectCard = styled.div`
  margin: 0 0.5rem 1rem;
  width: calc(50% - 1rem);
  float: left;
  @media(min-width: 768px) {
    width: 25%;
  }
`

const ProjectImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 5.625rem;
  width: 100%;
  @media(min-width: 768px) {
    height: 11.25rem;
  }
`

const ProjectLink = styled.div`
  display: block;

  border: 2px solid #E5E5E5;
  border-radius: 15px;
  @media(min-width: 768px) {
    margin: 0 1rem 3rem;
  }

  & a {
    text-decoration: none;
  }
  & a:visited {
    color: inherit;
  }
`
const ProjectText = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.875rem;
  margin: 0.75rem 0 0.75rem 0.875rem;
  @media(min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.3125rem;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
    margin-bottom: 0.875rem;
  }

  & span {
    color: #5EDEFC;
    &:first-child {
      display: inline-block;
      background: #000000;
      border-radius: 50%;
      font-size: 0.75rem;
      width: 0.875rem;
      height: 0.875rem;
      line-height: 0.875rem;
      margin-right: 0.5rem;
      text-align: center;
    }
  }
    img {
    background: #5EDEFC;
    border-radius: 50%;
    width: 0.875rem;
    height: 0.875rem;
    padding-bottom: 1px;
    line-height: 0.875rem;
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
`

const Project = () => {
  return(
    <ProjectCard>
      <ProjectLink>
        <a href="">
          <ProjectImg src={projectImg}></ProjectImg>

          <ProjectText>
            <h3><img src={taskImg} alt="task"/>House Cleaning</h3>
            <span><img src={starImg} alt="star"/>Starting at $22/hr</span>
          </ProjectText>
        </a>
      </ProjectLink>
    </ProjectCard>
  );
};

export default Project;