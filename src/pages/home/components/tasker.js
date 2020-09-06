import React, { Component } from 'react';
import TaskBlock from '../../../common/taskblock/index'
import { TaskertWrapper } from '../style';
import TaskerBlock from '../../../common/taskerblock';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
class Tasker extends Component {
    render(){
        return (
            <TaskertWrapper>
                 <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
                <SwiperSlide><TaskerBlock/></SwiperSlide>
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                <SwiperSlide><TaskerBlock/></SwiperSlide> 
                </Swiper>
            </TaskertWrapper>
        )
    }

}

export default Tasker;