import React, { useState } from 'react';
import styled from "styled-components";
import AvatarInfo from './components/AvatarBlock';
import AccInfo from './components/AccInfo';


const AccountWrapper = styled.div `
width: 80%;
height: 1100px;
margin:0 auto;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-row: 1fr 3fr 1fr;
background: #fff;
`


const Account = () =>{
    return(
    <AccountWrapper>
        <AccInfo/>
        <AvatarInfo/>
    </AccountWrapper>
    )
}

export default Account;