import styled from "styled-components";
export const Content = styled.div`
    margin: 60px;
    text-align: center;
    font-family: "Roboto";
    @media screen and (max-width: 414px){
       margin: 10px;
       text-align: initial;
    }
`;

export const Filter = styled.button`
    background-color: rgba(46,15,89,1);
    width: 255px;
    height: 45px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 20px;
    border-color: transparent;
    font-weight: 500;
    text-align: center;
    font-size: large;
    cursor: pointer;



`;