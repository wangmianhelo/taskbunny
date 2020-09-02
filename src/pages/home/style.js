import styled from 'styled-components';
import leftarrow from '../../statics/left.svg';
import rightarrow from '../../statics/right.svg';

export const HomeWrapper = styled.div `
    width:1000px;
    margin: 0 auto;
    height: 300px;
    .heading {
        width: 100%;
        height:400px;
    }
    `;
export const SwipeGallery = styled.div`
    position: relative;
    width:1000px;
    margin: 0 auto;
    `;

export const SwipeButtom = styled.button `
    position: absolute;
    width: 45px;
    height: 45px;
    background-image:url(${rightarrow});
    background-size: contain;
    top:40%;
    right: 25%;
    &.left{
    position: absolute;
    right: 75%;
    top: 40%;
    background:url(${leftarrow});
    background-size: contain;
    }   
  
    }
    `



export const Introduction = styled.div `
    overflow: hidden;
    width: 1000x;
    margin-top: 30px;
    margin-bottom: 50px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    cursor:pointer;
    `;

export const IntroInfo = styled.div `
    float:left;
    width: 450px;
    height:300px;
    `;

export const IntroPic = styled.div `
    overflow: hidden;
    float: right;
    width: 450px;
    height:300px;
    .introImg {
        
        transition:
        width:450px;
        height:300px;
        transition: .5s;
        &:hover{
            transform: scale(1.2);
        }
    }
    ;
    `;

export const IntroTitle = styled.div `
        margin: 30px 50px;
        font-size: 30px;
        font-weight: bold;
        line-height: 44px;
        color: #333;
    ;
    `;

export const IntroText = styled.div `
        margin: 30px 50px;
        line-height: 20px;
        font-size: 13px;
    `;
 
export const ProjectTitile = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    text-align:center;
    `;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    height: 400px;
    align-content: flex-start
    `;
