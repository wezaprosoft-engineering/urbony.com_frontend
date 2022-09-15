import styled from "styled-components";

export const Wrapper = styled.div`

`;
export const Content = styled.div`
    margin: 50px;
    font-family: "Roboto";
`;

export const Forms = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    height: 45px;
    width: 513px;
    border-radius: 5px;
    background: #FFFFFF;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    color: rgba(46 ,15, 89,1);

    @media screen and (max-width: 414px) {
    width: 95%;
    height: 45px;
}
`;

export const Button = styled.button`
    height: 45px;
    background-color: red;
    width: 1045px;
    border-color: transparent;
    color: white;
    margin-bottom: 100px;
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Roboto";
    font-weight: 700;
    font-size: large;
    @media screen and (max-width: 414px) {
    width: 100%;
 
}
`;

export const Select = styled.select`
  height: 45px;
    width: 513px;
    border-radius: 5px;
    border: 1px solid #000000;
    font-weight: 400;
    font-size: 20px;
    color: rgba(46 ,15, 89,1);

    @media screen and (max-width: 414px) {
    width: 100%;
    height: 45px;
}
`;