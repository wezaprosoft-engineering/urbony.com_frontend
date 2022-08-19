import styled from "styled-components";

export const H2 = styled.h2`
color: red;
text-decoration: 3px underline;
font-family: "Robotto";
@media screen and (max-width:414px){
    font-size: 15px;
    margin-right: 13px;
    margin-left: 5px;
}
`;

export const NOFocus = styled.h2`
cursor: pointer;
font-family: "Robotto";
@media screen and (max-width:414px){
    font-size: 15px;
    margin-right: 13px;
    margin-left: 5px;
}
`;
export const Step = styled.div`
display: flex;
h3{
    font-weight: 400;
    font-family: "Robotto";
}
`;

export const StepDetail = styled.div`
margin-left: 20px;
font-family: "Robotto";
`;

export const CorporateText = styled.div`
   width: 500px;
   font-family: "Robotto";
   padding-top: 350px;
   margin-left: 80px;
   color: white;
   @media screen and (max-width: 414px){
       margin-left: 0px;
       padding-left: 0px;
        width: 95%;
        justify-content: left;
        margin-left: 10px;
        margin-top: 80px;
        padding-top: 0px;
        margin-right: 10px;
    }
`;

export const CorporateContentUpper = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
    font-family: "Robotto";
    min-height: 787px;
    background-color: rgba(46, 15, 89,0.6);
    @media screen and (max-width: 414px){
        min-height: 490px;
        
    }

`;

export const CorporateCardContent = styled.div`
display: flex;
flex-wrap: wrap;

margin-bottom: 150px;

`;