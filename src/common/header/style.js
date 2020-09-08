import styled from 'styled-components';
import logoImg from '../../statics/logo.png';


export const HeaderWrapper = styled.div `
    position: relative;
    height: 60px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
}) `
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    background: url(${logoImg});
    background-size: contain;
    `;

export const NavList = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    `;

export const NavItem = styled.a`
    line-height: 60px;
    color:#525c65;
    padding: 0 20px;
    cursor:pointer;
    &:after {
        display:block;
        content: '';
        border-bottom: solid 2px #019fb6;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
      }
      &:hover {
        &:after {
            transform: scaleX(1); 
        }
      }

    &:hover{
        
        color:#019fb6;
    }
    &.left{
        font-size: 12px;
        float: left;
    }
    &.right{
        font-size: 12px;
        float: right;
    }
   
    `;

export const SearchWrapper = styled.div `
    position: relative;
    float:right;
    left: 20px;
    .iconfont{
        position: absolute;
        right: 1px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 9px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }`


export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
}) `
    border: 1px solid #bbc2dc;
    float:right;
    width: 150px;
    height: 40px;
    padding: 0 10px;
    margin-top:10px;
    box-sizing: border-box;
    background: #fff;
    outline: none;
    border-radius: 12px;

    &:hover{
        box-shadow: inset 0 1px 2px 0 hsla(0,0%,75.3%,.5)
    }

    `;