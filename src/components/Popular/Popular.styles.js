import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 712px;
    flex-grow: 999;
    @media screen and (max-width: 414px){
        min-height: 530px;
    }
`;

export const Content = styled.div`
    margin: 60px;
    @media screen and (max-width: 414px){
       margin: 10px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    
    
`;

export const Line = styled.hr`
    width: 147.3px;
    border: 5px solid;
    color: rgba(46, 15, 89, 1);
    margin: 24px 12px 0px 0px;
    @media screen and (max-width: 414px){
        display: none;
    }
`;

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 0px;
    margin-bottom: 72px;
    @media screen and (max-width: 414px){
        
    }
`;
export const Arrow = styled.img`
width: 30px;
height: 10px;
margin-top: 25px;
margin-left: 5px;
color: black;
`;

export const Home = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

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
    background-color: rgba(217, 11, 66 ,1);
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
export const CorporateContent = styled.div`
display: flex;
justify-content: space-between;
width: 400px;
`;