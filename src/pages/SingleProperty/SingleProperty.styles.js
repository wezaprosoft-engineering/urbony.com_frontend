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
export const HouseImage = styled.div`
   width: 100%;
   background-size: cover;
   height: 80vh;
   display: flex;
   @media screen and (max-width: 414px){
   width: 90%;
}
   
`;

export const DetailedContent = styled.div`
   border: 1px solid lightgray;
   border-radius:10px;
   width:45%
`;
export const DetailedInside = styled.div`
display: flex;
text-align: center;
justify-content: space-around;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`;

export const FeatureContent = styled.div`
border: 1px solid lightgray;
width: 42%;
padding-left: 3%;
justify-content: space-around;
margin-top: 2%;
border-radius: 10px;
`;

export const PropertyForm = styled.div`
   width: 45%;
   border:1px solid lightgray;
   border-radius:10px
   
`;