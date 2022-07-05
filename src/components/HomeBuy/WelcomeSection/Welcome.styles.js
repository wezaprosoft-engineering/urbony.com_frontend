import styled from "styled-components";
import background from '../../images/background-image.png'

export const Wrapper = styled.div`
   background-image: url(${background});
   backdrop-filter: blur(7px);
    min-height: 787px;
    
    
    
`;

export const Content = styled.div`
    width: 100%;
    min-height: 787px;
    background-color: rgba(46, 15, 89,0.6);
    
    
`;

export const WelcomeText = styled.div`
   width: 500px;
   
   padding-top: 33px;
   margin-left: 80px;
   color: white;
`;

export const Toggle = styled.div`
    width: 405px;
    height: 50px;
    background-color: rgba(242, 242, 242, 1);
    border-radius: 20px;
    justify-self: center;
    align-self: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    margin: 100px auto auto auto;
    
    
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: rgba(46,15,89,1);
    border-radius: 20px;
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    transition: all 2s;
    
`;
export const Button2 = styled.button`
    width: 200px;
    height: 50px;
    border-color: transparent;
    cursor: pointer;
    color: rgba(46, 15, 89, 1);
    
`;

export const TextButton = styled.h3`
    
    
    font-weight: 700;
    size: 25px;
    font-style: "Roboto";
`;
export const TextButton2 = styled.h3`
    
    
    font-weight: 700;
    size: 25px;
    font-style: "Roboto";
`;

export const Overlay = styled.div`
width: 90%;
height: 319px;
margin: 100px auto auto auto;
background-color: white;
border-radius: 0 0 45px 45px;
display: flex;
justify-content: space-between;

`;

export const OverlayContent = styled.div`
    margin: auto auto auto auto;
`; 
export const Input = styled.input`
width: 150px;
height: 60px;
font-weight: 500;
font-size: large;
color: rgba(0,0,0,1);
`;

export const Search = styled.button`
    width: 150px;
    height: 60px;
    margin-top: 70px;
    background-color: rgba(217, 11, 66,1);
    border-color: transparent;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
`;
export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 15px;
`;