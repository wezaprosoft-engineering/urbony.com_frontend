import React from "react";
import { Wrapper } from "../../../components/WelcomeSection/Welcome.styles";
import SellBackground from "../../../assets/images/sell.png"
import SellProperty from "../../../components/SellProperty";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
const Sell = ()=>{
    return(
        <>
        <Wrapper style={{
            backgroundImage: `url(${SellBackground})`,
            backgroundSize: 'cover'
        }}>
            
        </Wrapper>
        <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>
        <LastSales/>
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>
    )
}

export default Sell;