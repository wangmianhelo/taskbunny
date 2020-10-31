import React, {Component} from 'react';
import styled from 'styled-components';
import Near from '../Near';


const DecimalWrapper = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #16113a;
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  grid-template-columns: 1fr 1fr 1.5fr ;
  border: 1px solid transparent;
`

const ProfileWrapper = styled.div `
  grid-row:1/2;
  grid-column:1/2;
  //background-color: black; 
  `



const TrendWrapper = styled.div `
grid-row:2/3;
grid-column:1/2;
//background-color: red; 
`


const StaWrapper = styled.div `
grid-row:1/2;
grid-column: 2/3;
//background-color: blue; `




const NotificationWrapper = styled.div `
grid-row:1/2;
grid-column: 3/4;
//background-color: green; `


const TaskssWrapper = styled.div `

grid-row: 2/3;
grid-column: 2/4;
//background-color: orange;
`


const ProfileBlock = styled.div `
  width: 530px;
  height: 320px;
  margin-top: 20px;
  margin-left:10px;
  color: white;
  background-color: #003152;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #bbc2dc;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after{
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover{
    -webkit-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }
`

const Title = styled.div `
  padding-left: 5px;  
  width:440px;
  height: 25px;
  font-size: 22px
  `


const AvatarBlock = styled.img`
  display: block;
  margin: 0  auto ;
  width: 150px;
  height: 150px;
  background: url(${props => props.src});
  border-radius: 50%;
  background-size: contain;
  border: 1px solid #bbc2dc;
  background-color:red;
`
  
const Name = styled.div `
  margin-top:10px;
  text-align: center;
  font-size: 22px;
`

const EditButtonLink = styled.a `
  width: 200px;
  height: 65px;
  margin-left: 170px;
  margin-top:5px;
  padding-top: 20px;
  display:block;
  background: #5EDEFC;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
  cursor:pointer
`;

const StaBlock = styled(ProfileBlock)`

`
const MoneySta = styled.div `
  width: 440px;
  height: 160px;    
  font-size: 20px;
  padding-top:20px;
  
 // background-color: yellow;
`
const MoneyAmount = styled.div `
  height: 80px;
  padding-left: px;
  font-size: 50px;
  text-align: center;
  
  `
const TaskPosted = styled.div`
  width: 440px;
  height: 154px;
 // background-color: red;
  `

const TaskInfo = styled.div `
  display:inline-block;
  width: 33.3%;
  height: 170px;
 // background-color: blue;
  `

const TaskAmount = styled.div `
  padding-top:20px;
  text-align: center;
  font-size: 30px;
  `;


const TaskStatus = styled(TaskAmount) `
  padding-top: 0px;
//  background-color: red;
`;



const NotificationBlock = styled(ProfileBlock) `
  width: 780px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #003152;
  }
  &::-webkit-scrollbar-thumb {
    background: #003152;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #003152;
  }
  `

const NotificationItem = styled.div `
  display: block;
  overflow: hidden;
  margin-top:10px;
  height: 80px;
  border: 1px solid  #bbc2dc;

  `

const NotiAvatar = styled.img `
  width: 78px;
  height: 78px;
  background: url(${props => props.src});
  border-radius: 50%;
  background-size: contain;
  border: 1px solid #bbc2dc;
  background-color: red;
  
  `
const NotificationText = styled.div`
  font-size: 20px;
  margin-left:20px;
  display: inline-block;
  vertical-align: middle;
  height: 90px;
 `
 
const RecommendBlock = styled(ProfileBlock)`
  height: 450px;
`
const ChartBlock = styled(RecommendBlock)`
  width: 1300px;`

const TasksDiv = styled.div `
  width: 100%;
  height: 250px;
  overflow: scroll;
  margin-top: 50px;
  background-color: #003152;
  display: flex;
  justify-content:flex-start;
  align-items: center;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #003152;
  }
  &::-webkit-scrollbar-thumb {
    background: #003152;
  }
  &::-webkit-scrollbar-corner{
    background: #003152;
  }
  `


const TaskItem = styled.div`
  flex-shrink: 0;
  width: 200px;
  height:200px;
  border: 1px solid white;
  margin-left: 30px;


  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &::after{
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover{
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }
  `
const ViewButtonLink = styled(EditButtonLink)`
margin-left: 600px;;


`


class DashBoard extends React.Component {
    



  render(){
    return (

      <DecimalWrapper>

        <ProfileWrapper>
          <ProfileBlock>
            <Title>
              User Profile
            </Title>
            <AvatarBlock/>
            <Name>
              Mian Wang
            </Name>
          <EditButtonLink>Edit{' '}Profile</EditButtonLink>
          </ProfileBlock>
        </ProfileWrapper>
        <TrendWrapper>
          <RecommendBlock>
            <Title>
              Reviews 
            </Title>
          </RecommendBlock>
        </TrendWrapper>
        <StaWrapper>
          <StaBlock>
            <Title>
              Task Info
            </Title>
            <MoneySta>
            <Title>
             You have earned:
            </Title>
              <MoneyAmount>$100</MoneyAmount>

    <TaskPosted>
      <Title>
        You have posted： 
      </Title>
      <TaskInfo>
        <TaskAmount>
          50
        </TaskAmount>
        <TaskStatus>
          open
        </TaskStatus>
      </TaskInfo>
      <TaskInfo>
      <TaskAmount>
          50
        </TaskAmount>
        <TaskStatus>
          assign
        </TaskStatus>

      </TaskInfo>
      <TaskInfo>
      <TaskAmount>
          50
        </TaskAmount>
        <TaskStatus>
          complete
        </TaskStatus>
      </TaskInfo>
      </TaskPosted> 
            </MoneySta>
          </StaBlock>
        </StaWrapper>
        
        <NotificationWrapper>
            <NotificationBlock>
                <Title>
                  Notification
                </Title>
                <NotificationItem>
                    <NotiAvatar/>
                    <NotificationText>
                      Someone commented on your task
                    </NotificationText>
                    
                </NotificationItem>
                <NotificationItem>
                    <NotiAvatar/>
                    <NotificationText>
                      Someone commented on your task
                    </NotificationText>
                </NotificationItem>
                <NotificationItem>
                    <NotiAvatar/>
                    <NotificationText>
                      Someone commented on your task
                    </NotificationText>
                </NotificationItem>
                <NotificationItem>
                    <NotiAvatar/>
                    <NotificationText>
                      Someone commented on your task
                    </NotificationText>
                </NotificationItem>
            </NotificationBlock>
        </NotificationWrapper>

        
        <TaskssWrapper>
          <ChartBlock>
              <Title>
                View Tasks
              </Title>
              <TasksDiv>
                  <TaskItem>
                      123
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>
                   <TaskItem>
                      12314112
                  </TaskItem>
                  <TaskItem>
                      12314112
                  </TaskItem>

                  




              </TasksDiv>
              <ViewButtonLink>
                View On Map
              </ViewButtonLink>
          </ChartBlock>
        </TaskssWrapper>

      </DecimalWrapper>

    )
  }


}

export default DashBoard