import React, { Component } from 'react';
import { HomeWrapper ,SwipeGallery, SwipeButtom, Introduction, IntroInfo, IntroPic, IntroTitle, IntroText, ProjectTitile} from './style';
import Project from './components/project';
import Tasker from './components/tasker';
import hdimg from '../../statics/hdimg.jpeg';
import cleaner from '../../statics/cleaner.jpg';
import ReactSwipe from 'react-swipe';

const swipeOptions = {
    auto: 2000,
    speed: 1000,
    disableScroll: true,
    continuous: true,
}

class Home extends Component {
   
    render(){
        let reactSwipeEl;
        return (
        <HomeWrapper >
            <SwipeGallery>
            <ReactSwipe
        className="carousel"
        swipeOptions={swipeOptions}
        ref={el => (reactSwipeEl = el)}
      > 
            <img className='heading' src={cleaner}/>
            <img className='heading' src={hdimg}/>
            <img className='heading' src={cleaner}/>
            <img className='heading' src={hdimg}/>
        </ReactSwipe>
           
            <SwipeButtom className='left'   onClick={() => reactSwipeEl.next()}/>  
            <SwipeButtom ckassName='2'  onClick={() => reactSwipeEl.prev()}/>
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

}

export default Home;