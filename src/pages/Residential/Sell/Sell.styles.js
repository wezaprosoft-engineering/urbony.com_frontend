import styled from "styled-components";
import SellBackground from "../../../assets/images/sell.png"
export const SellWrapper = styled.div`
   background-image: url(${SellBackground});
   backdrop-filter: blur(7px);
   background-size: cover;
   width: 100%;
   height: 787px;
   @media screen and (max-width: 414px){
        width: 100%;
        background-size: cover;
        height: 470px;
        
        
    }
    
    
    
`;