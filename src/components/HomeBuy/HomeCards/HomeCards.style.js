import styled from "styled-components";

export const HomeCards = styled.div`
    min-width: 405px;
    min-height: 529px;
    background: rgba(217, 217, 217, 1);
    margin-bottom: 30px;
    margin-top: 30px;
    margin-right: 50px;
    border-radius: 5px 5px 5px 5px;
`;
export const CardsContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
align-items: center;


`;

export const CardButton = styled.button`
    width: 130px;
    height: 41px;
    font-weight: 700;
    color: white;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
`;

export const CardImage = styled.img`
    width: 406px;
    height: 334px;
`;
export const Locationrow = styled.div`
margin-left: 12px;
display: flex;
`;

export const DetailsRow = styled.div`
    display: flex;
    margin: 12;
`;