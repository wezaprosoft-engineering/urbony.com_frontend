import styled from "styled-components";

export const AppartmentCard = styled.div`
width: 406px;
height: 433px;
border-radius: 5px 5px 5px 5px;
background-size: cover;
margin: 10px;
margin-bottom: 120px;
@media screen and (max-width: 414px) {
    width: 340px;
    height: 133px;
    margin-top: 0px;
    margin: 10px;
}
`;
export const CardText = styled.div`
    background-color: rgba(46,15,89,0.6);
    height: 99px;
    margin: 335px auto auto auto;
    text-align: center;
    color: white;
    border-radius: 0px 0px 5px 5px;

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