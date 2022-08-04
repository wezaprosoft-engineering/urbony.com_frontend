import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 1500px;
    @media screen and(max-width: 414px){
        min-height: 900px;
    }
`;

export const Content = styled.div`
    
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 549px;
    @media screen and (max-width: 414px) {
        height: 150px;
    }
`;

export const GetInTouchForm = styled.div`
    color: rgba(46,15,89,1);
    width: 90%;
    margin: auto auto auto auto;
    

    @media screen and (max-width: 414px){
        margin: auto auto auto auto;
    }
    
`;
export const GetInTouchInput = styled.input`
width: 893px;
height: 55px;
margin-bottom: 10px;
margin-right: 500px;
border-radius: 5px;
font-size: 20px;
color: rgba(46,15,89,1);

@media screen and (max-width: 414px){
    width: 360px;
    height: 40px;
}
`;

export const Message = styled.input`
width: 893px;
height: 118.29px;
font-size: 20px;
color: rgba(46,15,89,1);
margin-right: 50000px;
@media screen and (max-width: 414px){
    width: 360px;
    height: 97px;
    margin-right: 0px;
}
`;

export const Submit = styled.button`
width: 403px;
height: 55px;
background-color: red;
font-weight: 700;
font-size: 30px;

margin-top: 10px;
margin-bottom: 10px;
border-color: transparent;
color: white;
cursor: pointer;
@media screen and (max-width: 414px) {
    width: 360px;
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

    @media screen and (max-width: 414px){
        width: 360px;
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
    width: 450px;
    margin: auto auto auto auto;
    

    @media screen and (max-width: 414px){
        width: 260px;
        margin: auto auto auto 90px;
        align-items: center;
    }
`;