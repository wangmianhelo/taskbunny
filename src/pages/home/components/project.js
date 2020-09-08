import React, { Component } from 'react';
import TaskBlock from '../../../common/taskblock/index'
import { ProjectWrapper } from '../style'
class Project extends Component {
    render(){
        return (
        <ProjectWrapper>
           <TaskBlock/>
           <TaskBlock/>
           <TaskBlock/>
           <TaskBlock/>
           <TaskBlock/>
           <TaskBlock/>
        </ProjectWrapper>
        )
    }

}

export default Project;