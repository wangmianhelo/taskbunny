import React, { Component } from 'react';
import styled from "styled-components";
import noticeAvator from './images/logo.png';
import api from '../../api';
import withAuth from '../../components/Auth/withAuth'

const NotificationWrap = styled.div `
    margin-left:100px;
    margin-right:100px;
    height:200px;
    background-color:#fff;
`;
const NotificationHead = styled.h2 `
    padding-left:20px;
    font-size:18px;
    height:40px;
    line-height:40px;
    border-bottom:1px solid #ddd;
`
const NotificationList = styled.ul `
    width:100%;
    margin-left:20px;
`
const NotificationItem = styled.li `
    display:flex;
    flex-direction:row;
    align-items: center;
    width:100%;
    height:30px;
`
const NoticeImg = styled.img `
    width:20px;
    height:20px;
    border-radius:50%;
`
const NoticeText = styled.span `
    margin-left:10px;
`
const NoticeTask = styled.a `
    color:#5096f5;
    cursor:pointer;
`

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            'questionList' : []
        };
    }
    componentDidUpdate(){
        let user = this.props.value;
        api.post('/notification/all',{
            'email' : user.user_email
        }).then(res=>{
            if(res.data.desc == 'succ'){
                let quesList = res.data.data;
                if(this.state.questionList.length == 0){
                    this.setState({
                        questionList : quesList
                    });
                }
            }
        });
    }
    render(){


        const { questionList} = this.state;
        return (
            <NotificationWrap>
                <NotificationHead>Notification</NotificationHead>
                <NotificationList>
                    {questionList.map((item, index) => {
                        return <NotificationItem key={index}>
                                <NoticeImg src={item.avatar}></NoticeImg>
                                <NoticeText>{item.content}</NoticeText>
                            </NotificationItem>
                        })
                    }
                </NotificationList>
            </NotificationWrap>
        )
    }
}

export default withAuth(Notification);
