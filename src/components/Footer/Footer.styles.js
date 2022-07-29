import styled from "styled-components";

export const Wrapper = styled.div`
    height: 444px;
    background-color: rgba(33, 11, 64,1);
    @media screen and (max-width: 414px){
       height: auto
    }
`;
export const FooterContent = styled.div`
display: flex;
justify-content: space-between;
padding: 50px;

color: white;
    @media screen and (max-width: 414px){
        display: block;
        padding: 20px;
        
    }
`;

export const FooterTitle = styled.h2`
font-weight: 700;
font-size: 30px;
font-style: normal;
margin-bottom: 40px;
`;

export const Footerservices = styled.div`
   
    width: 30%;
    margin: 10px;
    @media screen and (max-width: 414px){
        width: 70%;
        
    }
`;

export const SocialMedia = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 70%;


`
export const Button = styled.button`
    width: 80px;
    height: 65px;
    background-color: #FF0000;
    border-radius: 100% 100% 100% 100%;
    border-color: transparent;
    margin-top: 250px;
    cursor: pointer;
    @media screen and (max-width: 414px){
        width: 70px;
        margin-top: 0px;
        position: absolute;
        top: 5240px;
        right: 10px;
        
    }
`;