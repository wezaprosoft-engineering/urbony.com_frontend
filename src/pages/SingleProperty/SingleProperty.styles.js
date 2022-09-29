import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
   font-family: "Roboto";
   margin: 60px;

   @media screen and (max-width: 414px){
      margin: 10px
   }
`;

export const Details = styled.div`
   
`;
export const DetailsContent = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
@media screen and (max-width: 414px){
   width: 90%;
}
`;
export const HouseImage = styled.img`
   width: 70vw;
   @media screen and (max-width: 414px){
   width: 90%;
}
   
`;