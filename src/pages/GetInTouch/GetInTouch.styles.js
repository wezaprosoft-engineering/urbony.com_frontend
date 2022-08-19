import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    font-family: "Roboto";
    @media screen and(max-width: 414px){
        margin: 0px; padding: 0ox
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 700px;
    font-family: "Roboto";
    @media screen and (max-width: 414px) {
        margin: 0px; 
        padding: 0px
    }
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 549px;
    @media screen and (max-width: 414px) {
        height: 150px;
        width: 100%;
        margin: 0px; 
        padding: 0px
    }
`;

export const GetInTouchForm = styled.div`
    color: rgba(46,15,89,1);
    width: 90%;
    margin: auto auto auto auto;
    font-family: "Roboto";

    @media screen and (max-width: 414px){
        margin: auto 10px 0px auto;
        padding: 0px;
    }
    
`;
export const GetInTouchInput = styled.input`
width: 893px;
height: 55px;
margin-bottom: 10px;
font-family: "Roboto";
border-radius: 5px;
font-size: 20px;
color: rgba(46,15,89,1);

@media screen and (max-width: 414px){
    width: 90%;
    height: 40px;
    
    
    
}
`;

export const Message = styled.input`
width: 893px;
height: 118.29px;
font-size: 20px;
color: rgba(46,15,89,1);
margin-right: 10%;
font-family: "Roboto";
@media screen and (max-width: 414px){
    width: 90%;
    height: 97px;
    margin-right: 0%;
}
@media screen and (max-width: 360px){
    width: 90%;
    height: 97px;
    margin-right: 0%;
}
`;

export const Submit = styled.button`
width: 403px;
height: 55px;
background-color: red;
font-weight: 700;
font-size: 30px;
font-family: "Roboto";
margin-top: 10px;
margin-bottom: 10px;
border-color: transparent;
color: white;
cursor: pointer;
@media screen and (max-width: 414px) {
    width: 90%;
    height: 42px;
    border-radius: 5px;
    font-size: 20px;
}
`;

export const EstimationButton = styled.button`
    background-color: red;
    width: 100%;
    height: 55px;
    font-weight: 700;
    font-size: 35px;
    margin-top: 200px;
    margin-bottom: 200px;
    color: white;
    border-color: transparent;
    cursor: pointer;
    font-family: "Roboto";
    @media screen and (max-width: 414px){
        width: 90%;
        height: 39px;
        border-radius: 10px;
        font-size: 15px;
        margin-top: 40px;
        margin-bottom: 40px;
        
    }
`;

export const Estimator = styled.img`
    margin-left: 10px;
    @media screen and (max-width: 414px) {
        width: 15px;
        height: 20px;
        margin-left: 5px;
    }
`;

export const EstmationContent = styled.div`

    display: flex;
    width: 650px;
    margin: auto auto auto auto;
    

    @media screen and (max-width: 414px){
        width: 270px;
        margin: auto auto auto 17%;
        align-items: center;
    }
`;