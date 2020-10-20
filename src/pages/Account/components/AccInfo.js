import React, {useState} from 'react';
import styled from "styled-components";


const AccInfoWrapper = styled.div `
    grid-row:1/3;
    grid-column:2/3;
    `

const AccHeader = styled.div `
    width: 100%;
    height: 80px;
    `

const HeaderTitle = styled.h4 `
    padding-left: 50px;
    padding-top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 42px;
    `

const UpdateButton = styled.button `
    width: 200px;
    height: 65px;
    margin-left: 50px;
    display:block;
    background: #5EDEFC;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 90px;
    font-size: 20px;
`
const InputBox = styled.div `
    margin-top: 20px;
    width: 100%;
    height: 700px;
    
`
const InputLabel = styled.label`
    display: block;
    margin-left: 20px;
    font-weight: 500;
    width: 400px;
    height: 65px;
    margin-bottom: 20px;
    color: #545a77;
    `

const InputForm = styled.input `
    display:block;
    width: 400px;
    height: 40px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #bbc2dc;
    &:focus {
        box-shadow: 0 0 3px 2px rgba(1,164,209,.29);
        border-color: rgba(1,164,209,.5);
    }
`
const SelectorLabel = styled.label`
    display: block;
    margin-left: 20px;
    font-weight: 500;
    width: 400px;
    height: 80px;
    margin-bottom: 20px;
    color: #545a77;
    `

const RadioItem = styled.input`

    `
const DeactivateBlock = styled.div `
    width: 100%;
    height:200px;
    margin-top: 30px;
    border-top: 1px solid #ccc;
    `
const DeactivateButton = styled.button `
    width: 250px;
    height: 65px;
    margin-left: 50px;
    display:block;
    background: #000000;
    color: #5EDEFC;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 90px;
    font-size: 20px;
    margin-top:80px;
`

const AccInfo = () =>{
    return(
        <AccInfoWrapper>
            <AccHeader>
                <HeaderTitle>Account</HeaderTitle>
            </AccHeader>
            <UpdateButton>Update{' '}Avatar</UpdateButton>
            <InputBox>
                <InputLabel >First{' '}Name<InputForm placeholder='Xiao'/></InputLabel>
                <InputLabel >Last{' '}Name<InputForm placeholder='Wang'/></InputLabel>
                <InputLabel >Mobile{' '}Number<InputForm placeholder='131301'/></InputLabel>
                <InputLabel >Email{' '}Address<InputForm placeholder='1213@163.com'/></InputLabel>
                <InputLabel >Location<InputForm placeholder='Melbourne,AUS'/></InputLabel>
                <SelectorLabel>On{' '}Taskburry{' '}I{' '} want{' '}to <br/><br/>
                    <RadioItem name='select' type='radio'/>Post{' '} tasks <br/>
                    <RadioItem name='select' type='radio'/>Earn{' '} money
                </SelectorLabel>
                <UpdateButton>Save{' '}Details</UpdateButton>
                <DeactivateBlock><DeactivateButton>Deactivate {' '}my{' '} account</DeactivateButton></DeactivateBlock>
               
                
            </InputBox>
        </AccInfoWrapper>
    )
}

export default AccInfo;