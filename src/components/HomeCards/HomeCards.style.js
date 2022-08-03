import styled from "styled-components";

export const HomeCards = styled.div`
    min-width: 405px;
    min-height: 529px;
    background: rgba(217, 217, 217, 1);
    margin-bottom: 30px;
    margin-top: 30px;
    margin-right: 50px;
    border-radius: 5px 5px 5px 5px;
    
    @media screen and (max-width: 414px) {
        display: none;
    }
`;
export const Container = styled.div`
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    height: 352px;
    

@media screen and (min-width: 415px) {
    display: none;
}
`;
export const DetailsContainer = styled.div`
    background-color: rgba(46,15,89, 0.6);
    margin-top: 17px;
    height: 125px;
    @media screen and (max-width: 414px) {
        
}
    
`;
export const CardsContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px;
align-items: center;

@media screen and (max-width: 414px) {
   margin: 0px;
   
   height: 30px;
   margin-top: 25px;
   margin-bottom: 10px;
   margin-right: 90px;
}

`;

export const CardButton = styled.button`
    width: 130px;
    height: 41px;
    font-weight: 700;
    color: white;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        width: 100px;
        height: 35px;
}
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
    @media screen and (max-width: 414px) {
   margin: 0px;
}
`;

export const ArrowContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 150px;
margin-left: 3px;
margin-right: 3px;

`;

export const ArrowCircle = styled.div`
background-color: rgba(46,15,89,0.6);
width: 60px;
height: 60px;
border-radius: 100%;
cursor: pointer;
`;