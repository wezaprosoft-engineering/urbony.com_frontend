import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: rgba(242, 242, 242, 1);
    max-height: 77px;
    
    @media screen and (max-width: 414px){
        display: none;
    }
`;

export const Content= styled.div`
    
    padding: 7px 0;
    
    margin: 0 auto;
    margin-left: 72px;
    transition: all 2s;
    color: rgba(46,15,89,1);
    @media screen and (max-width: 414px){
        width: 100%
    }
`;
export const TextMenu2 = styled.h2`
font-weight: 500;
font-style: "Roboto";
size: 20px;
font-family: "Roboto";
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;
background-color: red;
color: white;
height: 45px;
padding-top: 20px;
margin: 0;
@media screen and (max-width: 414px){
        display: none;
    }

`;
export const LoginContent = styled.div`
display: flex;
margin-right: 3%;
margin-left: 10px;
cursor: pointer;
height: 65px;

`;
export const LoginLogo = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 15px;
    
`;

export const ContentText = styled.div`
display: flex;
justify-content: space-between;
`;
export const Container = styled.div`
display: flex;
`;

export const Menu = styled.div`
    height: 40px;
    align-items: center;
    padding: 0.3rem;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    :hover{
        background-color: rgba(46,15,89,0.3);
    }
    font-family: "Robotto";
`;