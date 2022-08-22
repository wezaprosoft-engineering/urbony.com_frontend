import styled from "styled-components";

export const ManagementContact = styled.div`
width: 30%;
font-family: "Roboto";
margin-right: 70px;
@media screen and (max-width: 414px){
    width: 80%;
    margin-top: 60px;
    margin-right: 0px;

}
`;

export const ManagementContent = styled.div`
margin-top: 50px;
margin-bottom: 50px;
font-family: "Roboto";
`;

export const ManagementCard = styled.div`
width: 45%;
height: 627px;
border: 1px solid rgba(46,15,89,0.6);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
background: #FFFFFF;
margin: 20px;
text-align: center;
font-family: "Roboto";

@media screen and (max-width: 414px) {
    width: 100%;
    height: 625px;
}
`;

export const Benefits = styled.div`
display: flex;
margin-left: 60px;
font-family: "Roboto";
@media screen and (max-width:414px) {
    margin-left: 10px;
}
`;

export const ManagementText = styled.div`
   width: 60%;
   font-family: "Roboto";
   padding-top: 33px;
   margin-left: 80px;
   color: white;
   font-size: larger;
   @media screen and (max-width: 414px){
       margin-left: 0px;
       padding-left: 0px;
        width: 95%;
        justify-content: left;
        margin-left: 10px;
        margin-top: 80px;
        
    }
`;

export const ManagementContentUpper = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
    min-height: 787px;
    background-color: rgba(46, 15, 89,0.6);
    font-family: "Roboto";
    @media screen and (max-width: 414px){
        min-height: 490px;
        
        
    }

`;
export const ManagementOffer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:414px) {
        display: list-item;
        
    }
    
`;