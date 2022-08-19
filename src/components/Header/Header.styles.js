import styled from 'styled-components'


export const Wrapper = styled.div`
    
    padding: 0 20px;
   
    border-color: lightyellow;
    @media screen and (max-width: 414px){
        width: 100%;
        padding: 0px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 7px 0;
    margin: 0 auto;
    @media screen and (max-width: 414px){
        width: 100%;
        
    }
`;

export const MenuContent = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    margin-left: 50px;
    @media screen and (max-width: 414px){
        margin-left: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        
    }
   
`;

export const ContactContent = styled.div`
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    @media screen and (max-width: 414px){
        display: none;
    }
`;
export const Logo = styled.img`
    width: 262px;
    height: 78px;
    margin-right: 60px;
    cursor: pointer;
    @media screen and (max-width: 414px){
        width: 200px;
        height: 70px;
        margin-right: 10px;
        padding-right: 15%;
    }
    @media screen and (max-width: 320px){
        width: 180px;
        height: 70px;
        margin-right: 0px;
        padding-right: 15%;
    }
`;
export const MenuButton = styled.img`
@media screen and (min-width: 415px){
    display: none
}
@media screen and (max-width: 414px){
        
        margin-left: 70px;
        
    }
    @media screen and (max-width: 360px){
        
        margin-left: 35px;
        
    }
`;
export const TextMenu = styled.h2`
font-weight: 500;
font-style: "Roboto";
size: 20px;
font-family: "Roboto";
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;
@media screen and (max-width: 414px){
        display: none;
    }

`;
export const TextMenuHeader = styled.h2`
font-weight: 500;
font-style: "Roboto";
size: 20px;
font-family: "Roboto";
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
text-decoration: underline;
color: rgba(217,11,66,1);
cursor: pointer;
@media screen and (max-width: 414px){
        display: none;
    }
`;
export const TextMenu1 = styled.h4`
font-weight: 500;
font-style: "Roboto";
size: 20px;
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;
@media screen and (min-width: 415px){
        display: none;
    }
    @media screen and (max-width: 414px){
        font-weight: 500;
        font-style: "Roboto";
        size: 15px;
        line-height: 17.58px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
    }

`;
export const TextMenuHeader1 = styled.h4`

@media screen and (min-width: 415px){
        display: none;
    }
@media screen and (max-width: 414px){
    font-weight: 500;
    font-style: "Roboto";
    size: 15px;
    line-height: 17.58px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: underline;
    color: rgba(217,11,66,1);
    cursor: pointer;
}
`;

export const LogoWhatsapp = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

export const Button = styled.button`
width: 214px;
height: 55px;
background-color: rgba(217,11,66,1);
border-color: transparent;
color: white;
cursor: pointer;
border-radius: 10px;
//font-weight: ;
`;

