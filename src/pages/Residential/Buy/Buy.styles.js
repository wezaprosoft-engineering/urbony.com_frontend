import styled from "styled-components";

export const AppartmentCard = styled.div`
width: 406px;
height: 433px;
border-radius: 5px 5px 5px 5px;
background-size: cover;
margin: 10px;
@media screen and (max-width: 414px) {
    width: 340px;
    height: 133px;
}
`;
export const CardText = styled.div`
    background-color: rgba(46,15,89,0.6);
    height: 99px;
    margin: 429px auto auto auto;
    text-align: center;
    color: white;

    h2{
        padding-top: 35px;
    }

    @media screen and (max-width: 414px){
        width: 340px;
        height: 40px;
        margin: 93px auto auto auto;
        h2{
            padding-top: 10px;
            font-size: 20px;
        }
    }
    
`;