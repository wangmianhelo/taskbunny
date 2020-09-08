import styled from 'styled-components';

export const TaskerWrapper = styled.a `
    position: relative;
    display: block;
    margin: 10px 7px 10px 5px;
    flex:none;
    width: 300px;
    height: 250px;
    cursor:pointer;
    border: 1px solid #dcdcdc;
    box-shadow: 0 1px rgba(187,194,220,.6);
    transition: box-shadow .3s;
    &:hover{
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
    &:hover *{        
        color:#019fb6;
    }
    .avatar{
        position: absolute;
        left:20px;
        top:40px;
        width: 45px;
        height: 45px;
        border: 1px solid #bbc2dc;
        border-radius: 50%;
    }
    `;

export const TaskerName = styled.span `
    position: absolute;
    
    width:120px;
    height:50px;
    top: 40px;
    left: 80px;
    font-size: 23px;
    line-height: 40px;
    color: #545a77;
    `;

export const TaskerDesc = styled.span `
    position: absolute;
    
    width:200px;
    height:40px;
    top: 120px;
    left:10px;
    font-size: 12px;
    line-height: 14px;
    color: #545a77;
    `;

export const TaskerSkill = styled.span `
    position: absolute;
    
    width:200px;
    height:40px;
    top: 160px;
    left:10px;
    font-size: 12px;
    line-height: 14px;
    color: #545a77;
    `;
