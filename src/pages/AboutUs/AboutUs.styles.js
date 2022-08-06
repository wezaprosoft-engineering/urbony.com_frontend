import styled from "styled-components";

export const AboutContent = styled.div`
display: flex;
justify-content: space-evenly;
justify-items: center;
color: rgba(46,15,89,1);
text-align: center;
align-items: center;
margin-top: 30px;
margin-bottom: 30px;

@media screen and (max-width:414px) {
    
   
}
`;

export const AboutText = styled.div`
color: rgba(46,15,89,1);
@media screen and (max-width: 414px) {
    width: 93%;
    h4{
        font-size: 15px;
        
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px;
            
}
`;
