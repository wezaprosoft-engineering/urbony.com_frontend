import styled from 'styled-components'


export const Wrapper = styled.div`
    
    padding: 0 20px;
   
    border-color: lightyellow;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 7px 0;
    margin: 0 auto;
`;

export const MenuContent = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    margin-left: 50px;
    
`;

export const ContactContent = styled.div`
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
`;
export const Logo = styled.img`
    width: 262px;
    height: 78px;
    margin-right: 60px;
`;
export const TextMenu = styled.h2`
font-weight: 500;
font-style: "Roboto";
size: 20px;
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;

`;
export const TextMenuHeader = styled.h2`
font-weight: 500;
font-style: "Roboto";
size: 20px;
line-height: 23.44px;
padding-left: 10px;
padding-right: 10px;
text-decoration: underline;
color: rgba(217,11,66,1);
cursor: pointer;

`;

export const LogoWhatsapp = styled.img`
    width: 30px;
    height: 30px;
`;

export const Button = styled.button`
width: 214px;
height: 55px;
background-color: rgba(217,11,66,1);
border-color: transparent;
color: white;
cursor: pointer;
border-radius: 10px;
font-weight: ;
`;

