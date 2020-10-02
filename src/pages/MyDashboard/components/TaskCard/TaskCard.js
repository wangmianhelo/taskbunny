import React,{ Component } from "react";
import styled from "styled-components";

const CardItem = styled.li `
    width:300px;
    height:300px;
    border: 3px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 15px;
    margin-right:30px;
`

class TaskCard extends Component{
    render(){
        
        return(
            <CardItem>

            </CardItem>
        );
    }
}

export default TaskCard;