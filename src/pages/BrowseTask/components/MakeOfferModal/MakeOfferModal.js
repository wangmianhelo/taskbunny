import api from "../../../../api";
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

const Offer = styled.div`
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

const OfferInput = styled.input`
  border: 1px solid #C4C4C4;
  line-height: 58px;
  text-align: center;
  width: 30%;
`;

const ServiceFee = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125rem;
  padding-bottom: 0.5rem;
  span {
    float: right;
  }
`;

const ReceiveFee = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.125rem;
  padding-bottom: 0.5rem;
  span {
    float: right;
  }
`;

const ServiceTier = styled.div`
  background: #F3D250;
  margin: 1.625rem -2.25rem;
  padding: 2.625rem 2.25rem 1rem;
  text-align: center;
  img {
    width: 3.75rem;
    padding: 1.125rem 0;
  }
`;

const ServiceTerms = styled.a`
  display: block;
  padding: 1rem 2.25rem;
  color: #FEFFFF;
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

const submitTask = async (task, price, onClose, handleRefresh) => {
  try {
    const response = await api.post(`/api/task/offers/${task._id}`, {email:task.email, budget:price});
    onClose();
    handleRefresh();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const MakeOfferModal = ({ task, onClose, handleRefresh }) => {
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const serviceFee = parseFloat(price)*0.22;

  const receiveFee = price - serviceFee;

  return (
    <Overlay onClick={ onClose }>
      <Modal onClick={ (event) => event.stopPropagation() }>
        <Header>
          <Title>Make an Offer</Title>
          <Close onClick={ onClose }>X</Close>
        </Header>
        <Body>
          <Offer>Your offer
            <div><span>$</span><OfferInput value={price} onChange={handleChange}/></div>
          </Offer>
          <ServiceFee>Bronze service fee<span>-$ {serviceFee}</span></ServiceFee>
          <ReceiveFee>You'll receive<span>$ {receiveFee}</span></ReceiveFee>
          <ServiceTier>
            <div>Great work - earn more and enjoy a lower service fee!</div>
            <img src={Bronze} alt="" />
            <div>Your last 30 day total: $0</div>
            <div>Your current tier: Bronze</div>
            <ServiceTerms href="">Find out how your service fee is calculated</ServiceTerms>
          </ServiceTier>
        </Body>
        <Footer>
          <SubmitButton onClick={ () => submitTask(task, price, onClose, handleRefresh) }>Submit</SubmitButton>
        </Footer>
      </Modal>
    </Overlay>
  )
};

export default MakeOfferModal;