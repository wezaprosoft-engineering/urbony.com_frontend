import styled from "styled-components";

export const Overlay = styled.div`
width: 90%;
min-height: 319px;
background-color: white;
border-radius: 0 0 45px 45px;

margin-top: 100px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
@media screen and (max-width: 414px){
       display: none;
    }
`;
export const SubOverlay = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding-top: 50px
`;

export const OverlayContent = styled.div`
    margin: auto auto auto auto;
    color: rgba(46,15,89,1)
`; 
export const Input = styled.input`
width: 150px;
height: 60px;
font-weight: 500;
font-size: large;
color: rgba(0,0,0,1);
`;

export const Search = styled.button`
    width: 150px;
    height: 60px;
    margin-top: 70px;
    background-color: rgba(217, 11, 66,1);
    border-color: transparent;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
`;
export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 15px;
`;

export const More = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto 350px auto 62px;
    h3{
        color: rgba(46,15,89,1);
        font-weight: 700;
        size: 25px;
    };
`;

export const MoreContent = styled.div`
display: flex;
align-items: center;
h4{
    font-weight: 400;
    size: 15px;
};
`;
export const Check = styled.input`
margin-right: 10px;
`;