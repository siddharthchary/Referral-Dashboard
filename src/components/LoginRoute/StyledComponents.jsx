import styled from "styled-components" 

export const BgCont = styled.div`
height: 100vh;
width: 100vw; 
background-color: #f5daff;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;

`
export const LogCard = styled.div`
height: 50vh; 
width: 20%;
background-color: #ffffff;
display: flex;
flex-direction: column;
padding: 35px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
border-radius: 20px;
`
export const InputElement = styled.input`
width: 100%; 
height: 20px;
padding: 4px;
margin-bottom: 20px;

`
export const LogHeader = styled.h1`
color: #3127F5;
font-family: "Roboto";
margin-bottom: 0px;

`
export const Form = styled.form`
display: flex;
flex-direction: column;

`
export const LogDescription = styled.p`
color: #6A646D;
font-family: "Roboto";
margin-top: 3px;
margin-bottom: 20px;
font-size: 16px;`

export const Label = styled.label`
color: #000000;
font-size: 18px;`

export const LoginButton = styled.button`
    color: #ffffff;
    background-color: #3127F5;
    border: none;
    border-radius: 2px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    `
export const FailedMsg = styled.p`
color: #F72F07;
font-family: "Roboto";`