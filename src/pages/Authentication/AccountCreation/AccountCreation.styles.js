import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
 margin-top: 50px;
    margin-left: 89px;
    font-family: "Robotto";
    @media screen and (max-width: 414px){
        margin-left: 5%;
    }
`;

export const Forms = styled.div`
margin-top: 70px;
margin-bottom: 150px;
`;

export const Input = styled.input`
width: 50%;
height: 55px;
border-radius: 5px;
border: 1px solid #000000;
font-family: "Roboto";
font-weight: 700;
color: rgba(46,15,89,0.6);
font-size: 25px;
@media screen and (max-width: 414px){
    width: 90%;
    font-size: 17px;
    height: 45px;
}
`;

export const Payment = styled.div`
    margin-top: 100px;
`;
export const PaymentMode = styled.div`
display: flex;
`;
export const PaymentForm = styled.div`
    margin-top: 50px;
`;
export const Button = styled.button`
width: 83%;
height: 70px;
background-color: #FF0000;
border-radius: 5px;
font-size: 35px;
border-color: transparent;
color: white;
font-weight: 700;
cursor: pointer;
@media screen and (max-width: 414px){
    width: 90%;
    font-size: 20px;
    height: 45px;
}
`;