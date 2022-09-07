import styled from "styled-components";
export const MenuContent = styled.div`
 @media screen and (min-width: 415px){
        display: none;
    };

    @media screen and (max-width: 414px){
        width: 100%;
        height: 650px;
        background-color: rgba(46,15,89,1);
        z-index: 999;
        font-family: "Roboto";
        position: absolute;
        
        
        
    }
`;

export const MenuHeader = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 30px;
margin-right: 30px;
margin-top: 20px;
h3{
    color: white;
    font-weight: 700;
    font-size: 20px;
    font-family: "Roboto";
}
`;
export const MenuButton = styled.button`
width: 200px;
height: 41px;
background-color: rgba(217,11,66,1);
border-radius: 20px;
font-weight: 700;
font-size: 20px;
color: white;
font-family: "Roboto";
border-color: transparent;
margin-top: 13px;
`;

export const Menu = styled.div`
color: white;
font-weight: 700;
font-size: 20px;
margin-left: 60px;
margin-top: 100px;
`;

export const Button = styled.button`
    width: 90%;
    height: 48px;
    background-color: #FFFFFF;
    border-color: transparent;
    color: #2E0F59;
    font-family: "Roboto";
    font-weight: 700;
    margin: 30px auto auto 5%;
    font-size: 20px;
`;