import styled from 'styled-components';

export const BlockWrapper = styled.a `
    position: relative;
    display: block;
    margin: 10px 7px 10px 5px;
    width: 285px;
    height: 160px;
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
        top: 60px;
        width: 34px;
        height: 34px;
        border: 1px solid #bbc2dc;
        border-radius: 50%;
    }
    
    `;
export const TaskName = styled.span `
    position: absolute;
    display:block;
    font-size: 17px;
    left:20px;
    top:20px;
    line-height: 12px;
    line-weight: 500;
    color: #545a77;
    
    `;

export const PriceInfo = styled.span `
    position: absolute;
    width:42px;
    height:27px;
    top:15px;
    left:230px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 500;
    color: #292b32;
    `;

export const LocationInfo = styled.span `
    position: absolute;
    display:block;
    float:right;
    width:200px;
    height:20px;
    top: 70px;
    left: 80px;
    font-size: 12px;
    line-height: 14px;
    color: #545a77;
    `;

export const DateInfo = styled.span `
    position: absolute;
    
    width:200px;
    height:20px;
    top: 90px;
    left: 80px;
    font-size: 12px;
    line-height: 14px;
    color: #545a77;
    `;

export const StatusBlock = styled.div `
    position: absolute;
    width:100%;
    height:25px;
    bottom: 5px;
    font-size: 13px;
    line-height: 28px;
    border-top: 1px solid rgb(231, 235, 251);
    color: #545a77;`