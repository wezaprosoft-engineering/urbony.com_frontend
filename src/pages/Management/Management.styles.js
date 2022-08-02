import styled from "styled-components";

export const ManagementContact = styled.div`
width: 30%;
@media screen and (max-width: 414px){
    width: 80%;
    margin-top: 60px;

}
`;

export const ManagementContent = styled.div`
margin-top: 50px;
margin-bottom: 50px;
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

@media screen and (max-width: 414px) {
    width: 383px;
    height: 625px;
}
`;

export const Benefits = styled.div`
display: flex;
margin-left: 60px;
@media screen and (max-width:414px) {
    margin-left: 10px;
}
`;

export const ManagementText = styled.div`
   width: 500px;
   
   padding-top: 33px;
   margin-left: 80px;
   color: white;
   @media screen and (max-width: 414px){
       margin-left: 0px;
       padding-left: 0px;
        width: 370px;
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