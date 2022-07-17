import React from "react";
import { Wrapper } from "../WelcomeSection/Welcome.styles";
import SellBackground from "../../images/sell.png"
const Sell = ()=>{
    return(
        <Wrapper style={{
            backgroundImage: `url(${SellBackground})`,
            backgroundSize: 'cover'
        }}>
            
        </Wrapper>
    )
}

export default Sell;