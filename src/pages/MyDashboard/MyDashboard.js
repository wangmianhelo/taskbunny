import React, { Component } from 'react';
import styled from "styled-components";
import avatorImg from "./images/avator.png";
import ventorImg from "./images/ventor.png";
import InfoBlock from './components/InfoBlock';
import moneyIcon from './components/InfoBlock/images/money.png';
import easyIcon from './components/InfoBlock/images/easy.png';
import thumbsIcon from './components/InfoBlock/images/thums_up.png';

const DashboardBlockWrapper = styled.div `
    display : flex;
    margin-left : 73px;
    margin-right : 73px;
    background : #fff;
`
const LeftPartBox = styled.section `
    width: 235px;
    border-right:1px solid rgba(0, 0, 0, 0.2);
    text-align:center;
`
const Avator = styled.img `
    width:170px;
    height:170px;
    border-radius:50%;
    margin-top:40px;
`
const RightPartBox = styled.section `
    flex : 1;
`
const AdvertisementWrapper = styled.div `
    margin:42px auto 62px auto;
    width:940px;
    height:380px;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    text-align:center;
`
const Ventor = styled.img `
    margin-top:30px;
    width:50px;
    height:81px;
`
const HeadTitle = styled.h2 `
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin-bottom:20px;
`
const SubTitle = styled.p `
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #000000;
`
const InfoWrapper = styled.section `
    display:flex;
    flex-direction : row;
    justify-content : center;
    margin-top:44px;
`

class MyDashboard extends Component {

    render(){
        return (
            <DashboardBlockWrapper>
               <LeftPartBox>
                   <Avator src={avatorImg}></Avator>
               </LeftPartBox>
               <RightPartBox>
                    <AdvertisementWrapper>
                        <Ventor src={ventorImg}></Ventor>
                        <HeadTitle>Meet Instant Book</HeadTitle>
                        <SubTitle>Book a top-rated Tasker in just a few clicks</SubTitle>
                        <InfoWrapper>
                            <InfoBlock boxWidth="125px" width="50px" height="50px" top="3px" left="3px" imgSrc={moneyIcon} infoText="Upfront pricing" bold="true"></InfoBlock>
                            <InfoBlock boxWidth="125px" width="50px" height="50px" top="4px" left="9px" imgSrc={easyIcon} infoText="Quick & easy" bold="true"></InfoBlock>
                            <InfoBlock boxWidth="140px" width="50px" height="50px" top="0px" left="6px" imgSrc={thumbsIcon} infoText="Skilled & reviewed" bold="true"></InfoBlock>
                        </InfoWrapper>
                    </AdvertisementWrapper>
                    
                    




               </RightPartBox>
            </DashboardBlockWrapper>
        )
    }
}

export default MyDashboard;
