import React, { Component } from 'react';
import TaskBlock from '../../../common/taskblock/index'
import { ProjectWrapper } from '../style';
import TaskerBlock from '../../../common/taskerblock';
class Tasker extends Component {
    render(){
        return (
            <ProjectWrapper>
                <TaskerBlock/>
                <TaskerBlock/>
                <TaskerBlock/>
                <TaskerBlock/> 
            </ProjectWrapper>
        )
    }

}

export default Tasker;