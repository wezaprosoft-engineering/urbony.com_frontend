import styled from "styled-components";

export const RealEstateCard = styled.div`
display: flex;
width: 100%;
height: 534px;
background: #FFFFFF;
border: 1px solid rgba(46, 15, 89, 0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
box-sizing: border-box;
margin-top: 200px;
font-family: "Roboto";



@media screen and (max-width: 414px) {
    width: 95%;
    height: 748.5px;
    display: inline;
    border-radius: 0px;
    margin-top: 20px;
    margin-right: auto;
    margin-bottom:40px
}

//@media screen and (max-width: 1040px){
//    height: 550px;
//}
//@media screen and (max-width: 1005px){
//    height: 580px;
//}
//@media screen and (max-width: 953px){
  //  height: 607px;
//}

`;

export const CardContent = styled.div`
height: 99.99%;
background-size: cover;
width: 50%;
font-family: "Roboto";
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;

@media screen and (max-width: 414px){
    width: 99.99%;
    height: 170px;
    background-size: cover;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

`;
export const TextContent= styled.div`
width: 60%;
font-family: "Roboto";
@media screen and (max-width: 414px) {
    width: 100%;
    height: 482px;
}
`;

export const Description = styled.div`
margin: 30px;
.second{
    margin-top: 90px;
}
@media screen and (max-width: 414px) {
    margin: 10px;
    h2{
        margin-top: 0px;
    }
    .second{
    margin-top: 30px;
    font-size: 15px;
}
}

`;
export const WrapperDescription2 = styled.div`
    margin-top: 45px;

    h2{
        margin-left: 30px;
        margin-top: -20px;
        font-family: "Roboto";
    }
    
    @media screen and (max-width: 414px) {
        margin-top: 10px;
        h2{
            margin-top: 0px;
        }
        .price{
        
        margin-left: 9px;
        margin-bottom: -20px;
    }
    }
`;
export const Description2 = styled.div`
margin-left: 30px;
display: flex;
justify-content: space-between;
margin-top: -25px;

@media screen and (max-width: 414px) {
    display: inline;
    
    
}
`;

export const Description2Content = styled.div`
display: flex;

`;
export const Description2Text = styled.div`
    margin-top: 50px;
    margin-left: -40px;
    @media screen and (max-width: 414px){
        margin-top: 12px;
    }
`;
export const CardButtons = styled.button`
    width: 295px;
    height: 89px;
    font-weight: 700;
    color: white;
    background-color: red;
    border-color: transparent;
    border-radius: 20px 0px 10px 0px;
    font-size: 40px;
    cursor: pointer;
    margin-top: 30px;
    font-family: "Roboto";

    @media screen and (max-width: 414px){
        margin-top: 0px;
        height: 65px;
        width: 100%;
        border-radius: 0px 0px 0px 0px;
    }
`;

export const LineEstate = styled.hr`
    width: 0px;
    border-left: 7px solid red;
    color: red;
    margin: 24px 12px 0px 0px;
    height: 102px;
    margin-top: 5px;
    @media screen and (max-width: 414px){
        margin-left: 10px;
        margin-bottom: 15px;
       
    }
    
    
`;