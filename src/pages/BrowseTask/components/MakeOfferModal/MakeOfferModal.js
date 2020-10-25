import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import Bronze from "./pic/bronze.png";

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
`;

const Modal = styled.div`
  width: 400px;
  background: white;
`;

const Header = styled.div`
  padding: 1.625rem 2.25rem;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
`;

const Close = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
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

const Offer = styled.div`
  padding-top: 2.25rem;
  padding-bottom: 1.125rem;
  font-size: 1.5rem;
  font-weight: 700;

`;


const ServiceFee = styled.div`
  padding: 1rem 2.25rem;
`;

const ReceiveFee = styled.div`
  padding: 1rem 2.25rem;
`;

const ServiceTier = styled.div`
  padding: 1rem 2.25rem;
`;

const ServiceTerms = styled.div`
  padding: 1rem 2.25rem;
`;

const Footer = styled.div`
  padding: 1rem 2.25rem;
`;

const SubmitButton = styled.button`
  outline: 0;
  border: 3px solid #000000;
  border-radius: 90px;
  background: #F3D250;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
`;

const submitTask = (task) => {
  // TODO
}

const MakeOfferModal = ({ task, onClose }) => {
  return (
    <Overlay onClick={ onClose }>
      <Modal onClick={ (event) => event.stopPropagation() }>
        <Header>
          <Title>Make an Offer</Title>
          <Close onClick={ onClose }>X</Close>
        </Header>
        <Body>
          <Offer>Your offer
            <div><span>$</span><input></input></div>
          </Offer>
          <ServiceFee>Bronze service fee</ServiceFee>
          <ReceiveFee>You'll receive</ReceiveFee>
          <ServiceTier>
            <div>Great work - earn more and enjoy a lower service fee!</div>
            <img src="{Bronze}" alt="" />
            <div>Your last 30 day total: $0</div>
            <div>Your current tier: Bronze</div>
            <ServiceTerms>Find out how your service fee is calculated</ServiceTerms>
          </ServiceTier>
        </Body>
        <Footer>
          <SubmitButton onClick={ () => submitTask(task) }>Submit</SubmitButton>
        </Footer>
      </Modal>
    </Overlay>
  )
};

export default MakeOfferModal;