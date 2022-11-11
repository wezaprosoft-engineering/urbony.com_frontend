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
export const PencilLogo = styled.img`
margin-top: auto;
margin-bottom: auto;
width: 20px;
height: 20px;
cursor: pointer;

`;

export const Button = styled.button`
width: 20%;
height: 50px;
background-color: rgba(46,15,89,1);
cursor: pointer;
color: white;
border-color: transparent;
font-size: 16px;
font-weight: 600;
border-radius: 5px;
`

export const Delete = styled.button`
width: 200px;
height: 50px;
background-color: red;
border-color: transparent;
color: white;
font-size: 16px;
font-weight: 600;
border-radius: 5px;
margin-top: 20px;
cursor: pointer;
`;