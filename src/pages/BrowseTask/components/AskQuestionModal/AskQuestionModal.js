import api from "../../../../api";
import React, { useState } from "react";
import styled from "styled-components";
import withAuth from "../../../../components/Auth/withAuth";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Modal = styled.div`
  width: 470px;
  background: white;
`;

const Header = styled.div`
  padding: 1.625rem 2.25rem;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.75rem;
`;

const Close = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  font-weight: 200;
  position: absolute;
  top: 0;
  right: 2.25rem;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 1rem 2.25rem;
`;

const Question = styled.div`
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  span {
    border: 1px solid #C4C4C4;
    border-right: 0;
    padding: 1rem;
  }
`;

const QuestionContent = styled.textarea`
  border: 1px solid #C4C4C4;
  line-height: 2rem;
  min-height: 20rem;
  text-align: left;
  width: 100%;
`;

const Footer = styled.div`
  padding: 1.625rem 2.25rem;
`;

const SubmitButton = styled.button`
  outline: 0;
  border: 3px solid #000000;
  border-radius: 90px;
  background: #F3D250;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 2.875rem;
`;

const submitQuestion = async (task, email, content, onClose, handleRefresh) => {
  try {
    const response = await api.post(`task/questions/${task._id}`, {email:email, content:content});
    onClose();
    handleRefresh();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const AskQuestionModal = ({ task, onClose, handleRefresh, value }) => {
  const [content, setContent] = useState();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Overlay onClick={ onClose }>
      <Modal onClick={ (event) => event.stopPropagation() }>
        <Header>
          <Title>Ask a Question</Title>
          <Close onClick={ onClose }>X</Close>
        </Header>
        <Body>
          <Question>
            <QuestionContent placeholder="Ask your question here..." value={content} onChange={handleChange}/>
          </Question>
        </Body>
        <Footer>
          <SubmitButton onClick={ () => submitQuestion(task, value && value.user_email, content, onClose, handleRefresh) }>Send</SubmitButton>
        </Footer>
      </Modal>
    </Overlay>
  )
};

export default withAuth(AskQuestionModal);