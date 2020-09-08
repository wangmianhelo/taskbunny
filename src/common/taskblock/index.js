import React, { Component } from 'react';
import { BlockWrapper, TaskName, PriceInfo, LocationInfo, DateInfo, StatusBlock} from './style'

class TaskBlock extends Component {
    render(){
        return (
        <BlockWrapper>
                <img className="avatar" src = "https://eu7cmie.cloudimg.io/s/crop/64x64/https://airtasker-page-assets.s3.amazonaws.com/runner/images/person-1.png"/>
                <TaskName>This is a task1</TaskName>
                <PriceInfo>$70</PriceInfo>
                <LocationInfo><span className="iconfont">&#xe684;</span>Melbourne, VIC</LocationInfo>
                <DateInfo><span className="iconfont">&#xe6a8;</span>Tue, 15 Sep</DateInfo>
                <StatusBlock><p>Open • 3 offers</p></StatusBlock>
        </BlockWrapper>
        )
    }

}

export default TaskBlock;