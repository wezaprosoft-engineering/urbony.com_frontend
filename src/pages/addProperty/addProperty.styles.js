import styled from "styled-components";

export const Wrapper = styled.div`
margin-bottom: 100px;
`;

export const Content = styled.div`
    margin-top: 50px;
    margin-left: 89px;
    font-family: "Robotto";
    h2{
        color: rgba(46,15,89,1);
    }
    h3{
        color: rgba(46,15,89,1); 
    }
`;

export const BackgroundImage = styled.div`
    width: 90%;
    height: 510px;
    text-align: center;
    background: rgba(0,0,0,0.25);
    margin-bottom: 50px;
    color: red;
`;

export const Input = styled.input`
width: 50%;
height: 45px;
background: #D9D9D9;
border-radius: 5px;
font-weight: 600;
font-size: 15px;
`;
export const Select = styled.select`
width: 50%;
height: 45px;
background: #D9D9D9;
border-radius: 5px;
font-weight: 600;
font-size: 15px;
`;

export const Button = styled.button`
width: 65%;
height: 45px;
border-radius: 5px;
border-color: transparent;
margin-top: 50px;
background: #FF0000;
font-weight: 700;
font-size: 25px;
color: white;
margin-bottom: 100px;
cursor: pointer;
`;