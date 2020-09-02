import React, { Component } from 'react';
import { HomeWrapper ,SwipeGallery, SwipeButtom, Introduction, IntroInfo, IntroPic, IntroTitle, IntroText, ProjectTitile} from './style';
import Project from './components/project';
import Tasker from './components/tasker';
import hdimg from '../../statics/hdimg.jpeg';
import cleaner from '../../statics/cleaner.jpg';
import SwipeableViews from 'react-swipeable-views';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.state = {
            picAmount:1,
            picIndex:0
        }
    }
    render(){
        return (
        <HomeWrapper >
            <SwipeGallery>
             <SwipeableViews enableMouseEvents index={this.state.picIndex} onChangeIndex={this.handleChangeIndex}>
            <img className='heading' src={cleaner}/>
            <img className='heading' src={hdimg}/>
        </SwipeableViews>
           
            <SwipeButtom className='left'   onClick ={this.handleClickLeft}/>  
            <SwipeButtom ckassName='2'  onClick ={this.handleClickRight}/>
            </SwipeGallery>
            <ProjectTitile>See what you can do</ProjectTitile>
            <Project/>
            <Introduction>
                <IntroInfo>
                    <IntroTitle>About/Introduction</IntroTitle>
                    <IntroText >Want your home cleaned or furniture put together? Just tell us about the task you’d like done, suggest a fair budget for a job well done and you’ll start to receive offers from available Taskers.</IntroText>
                </IntroInfo>
                <IntroPic>
                    <img className='introImg' src={cleaner}/>
                </IntroPic>
            </Introduction>
            <ProjectTitile>Meet awesome Taskers</ProjectTitile>
            <Tasker/>
        </HomeWrapper>)
    }
    handleClickLeft(){
        if(this.state.picIndex ===1){
            let counter = this.state.picIndex -1;
            this.setState({
                picIndex: counter
            })
        }else{
            this.setState({
                picIndex: 1
            })
        }
    }
    handleClickRight(){
        if(this.state.picIndex<this.state.picAmount){
            let counter = this.state.picIndex +1;
            this.setState({
                picIndex: counter
            })
        }else{
            this.setState({
                picIndex: 0
            })
        }
    }

}

export default Home;