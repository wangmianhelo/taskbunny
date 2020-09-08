import React, { Component } from 'react';
import { TaskerWrapper, TaskerName, TaskerDesc, TaskerSkill,} from './style'
class TaskerBlock extends Component {

    render(){
        return(
            <TaskerWrapper>
                <img className="avatar" src = "https://eu7cmie.cloudimg.io/s/crop/64x64/https://airtasker-page-assets.s3.amazonaws.com/runner/images/person-1.png"/>
                <TaskerName>Jack Wang</TaskerName>
                <TaskerDesc><span className="iconfont">&#xe605;</span><bold>Review:</bold> This is the description</TaskerDesc>
                <TaskerSkill><span className="iconfont">&#xe6c3;</span><bold>Specialities:</bold> Home cleaning</TaskerSkill>
               
            </TaskerWrapper>
        )
    }
} 

export default TaskerBlock;