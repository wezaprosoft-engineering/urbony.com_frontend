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
    @media screen and (max-width: 414px){
    margin-left: 5%;
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
width: 100%;
height:40px;
border-radius: 5px;
font-weight: 600;
font-size: 14px;
@media screen and (max-width: 600px){
    width: 90%;
    font-size: 12px;
    height: 45px;
}
`;
export const Select = styled.select`
width: 100%;
height: 45px;
border-radius: 5px;
font-weight: 600;
font-size: 15px;
@media screen and (max-width: 600px){
    width: 90%;
    font-size: 17px;
    height: 45px;
}
`;

export const Button = styled.button`
border-radius: 5px;
border-color: transparent;
margin: auto;
background: #FF0000;
font-weight: 700;
font-size: 25px;
color: white;
cursor: pointer;
padding: 10px;
width: 40%;
@media screen and (max-width: 600px){
    width: 80%;
   
}
`;