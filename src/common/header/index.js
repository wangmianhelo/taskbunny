import React, { Component } from 'react'

import {
    HeaderWrapper,
    Logo,
    NavList,
    NavItem,
    SearchWrapper,
    NavSearch
   
} from './style'

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <NavList>
                    <NavItem className ='left'><span className="iconfont">&#xe61f;</span>Post a task</NavItem>
                    <NavItem className ='left'><span className="iconfont">&#xe605;</span>Become a tasker</NavItem>
                    <SearchWrapper>
                    <NavSearch 
                    className = {this.state.focused ? 'focused': ''}
                    onClick = {this.handleInputFocus}
                    onBlur = {this.handleInputBlur}
                    ></NavSearch>
                    <span className = {this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe62d;</span>
                    </SearchWrapper>
                    <NavItem className ='right'>Sign up</NavItem>
                    <NavItem className= 'right'>Login in</NavItem>
                </NavList>
                
                
            </HeaderWrapper>
        )
    }
    handleInputFocus(){
        this.setState({
            focused: true
        })
    }
    handleInputBlur(){
        this.setState({
            focused: false
        })
    }
}

export default Header;