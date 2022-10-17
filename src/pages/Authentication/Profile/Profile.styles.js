import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
    margin: 60px;
    font-family: "Roboto";

    @media screen and (max-width: 414px){
        margin: 10px
    }
`;

export const InformationContent = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5px;
margin-bottom: 5px;
width: 50%;

@media screen and (max-width: 414px){
        width: 95%;
    }
`;