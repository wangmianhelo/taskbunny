import React, {Component } from 'react'
import styled from 'styled-components' 


const PopUpDiv = styled.div `
  display: grid;
  grid-template-rows: 1fr 2fr 2fr ;
  grid-template-columns: 1fr 1fr;
  width:300px;
  height:200px;

`
const PopUpTitle = styled.div `
  grid-row:1/2;
  grid-column:1/3;
  
  
`
const PopUpTitleText = styled.h2 `
  display:block;
  text-align: center;
`

const PopUpAvatar = styled.img `
  display: block;
  width:128px;
  height:128px;
  border: 1px solid #bbc2dc;
  border-radius: 50%;
  background-size: contain;
  background: url(${props => props.src});
  `


  const PopUpBudget = styled.div `
  overflow:hidden;
  grid-row:2/2;
  grid-column:2/3;
  `

  const PopUpBudgetText = styled.p `
  font-size: 20px;
  display:block;
  text-align: center;
  line-height: 20px;
`
const PirceText = styled(PopUpBudgetText) `
  font-size: 40px;

  `

class PopUpTask extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      return(
            <PopUpDiv>
            <PopUpTitle>
              <PopUpTitleText>
              {this.props.title}
              </PopUpTitleText>
            </PopUpTitle>
            <PopUpAvatar src ={this.props.avaUrl}/>
            <PopUpBudget>
              <PopUpBudgetText>
                Earn:<br/>
                <PirceText>
              ${this.props.budget}
              </PirceText>
              </PopUpBudgetText>
            </PopUpBudget>
          </PopUpDiv>
          


      )
    }


}
export default PopUpTask