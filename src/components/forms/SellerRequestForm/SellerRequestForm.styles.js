import styled from "styled-components";

export const RequestForm = styled.div`
width: 1060px;
height: 650px;
display: flex;
flex-wrap: wrap;
@media screen and (max-width: 414px) {
    width: 100%;
}
`;

export const InputRequest = styled.input`
width: 513px;
height: 45px;
border:  1px solid #000000;
border-radius: 5px;
background: #FFFFFF;
box-sizing: border-box;
font-weight: 400;
font-size: 20px;
color: rgba(46 ,15, 89,1);

@media screen and (max-width: 414px) {
    width: 378px;
    height: 45px;
}
`;
export const Select = styled.select`
    width: 513px;
    height: 45px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px;
    color: rgba(46,15,89,1);

    @media screen and (max-width: 414px) {
    width: 378px;
    height: 45px;
}
`;
export const Star = styled.span`
color: rgba(217, 11, 66,1);

`;

export const Container = styled.div`
margin: 5px;
`;