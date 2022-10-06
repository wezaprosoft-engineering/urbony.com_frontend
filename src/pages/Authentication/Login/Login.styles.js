import styled from "styled-components";

export const Wrapper = styled.div`
background: #FFFFFF;
min-height: 70vh;
`;

export const Content = styled.div`
    margin-top: 50px;
    margin-left: 89px;
    font-family: "Robotto";
    @media screen and (max-width: 414px){
        margin-left: 5%;
    }

`;
export const Form = styled.div`
margin-top: 70px;
margin-bottom: 100px;
h4{
    font-size: 25px;
}
`;
export const Input = styled.input`
    width: 80%;
    height: 55px;
    border-radius: 5px;
    color: rgba(46,15,89,1);
    font-weight: 700;
    font-size: 15px;
    font-style: "Roboto";

    @media screen and (max-width: 414px) {
        height: 45px;
        width: 90%;
    }
`;
export const Iconcontainer = styled.div`
    width: 5%;
    height: 60px;
    
    color: rgba(46,15,89,1);
    font-weight: 700;
    font-size: 15px;
    font-style: "Roboto";
    border-color: rgba(46,15,89,1);
    border-radius: 5px;
    cursor: pointer;
    margin-left: -60px;
    
    

    @media screen and (max-width: 414px) {
        height: 45px;
        width: 5%;
        
    }
`;

export const Button = styled.button`
    width: 80%;
    height: 70px;
    border-radius: 5px;
    background-color: #FF0000;
    color: white;
    font-size: 35px;
    font-weight: 700;
    border-color: transparent;
    margin-top: 50px;
    cursor: pointer;
    @media screen and (max-width: 414px) {
        height: 45px;
        width: 93%;
        font-size: 20px;
    }
`;