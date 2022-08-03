import styled from "styled-components";

export const H2 = styled.h2`
color: red;
text-decoration: 3px underline;
@media screen and (max-width:414px){
    font-size: 20px;
}
`;

export const NOFocus = styled.h2`
cursor: pointer;
@media screen and (max-width:414px){
    font-size: 20px;
}
`;
export const Step = styled.div`
display: flex;
h3{
    font-weight: 400;
}
`;

export const StepDetail = styled.div`
margin-left: 20px;
`;

export const CorporateText = styled.div`
   width: 500px;
   
   padding-top: 350px;
   margin-left: 80px;
   color: white;
   @media screen and (max-width: 414px){
       margin-left: 0px;
       padding-left: 0px;
        width: 370px;
        justify-content: left;
        margin-left: 10px;
        margin-top: 80px;
        padding-top: 0px;
    }
`;

export const CorporateContentUpper = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
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