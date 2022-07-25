import React from "react";
import SellerRequestForm from "../../components/forms/SellerRequestForm";
import LastSales from "../../components/LastSales";
import Popular from "../../components/Popular";
import PropertyForSell from "../../components/PropertyForSell";
import SellProperty from "../../components/SellProperty";
import Welcome from "../../components/WelcomeSection";
import { useGlobalState } from "../../store/state";

const Home = ()=>{

    const [corporate] = useGlobalState("corporate")
    return(
        <>
            <Welcome/>
           {corporate ? null:<PropertyForSell/>} 
        <Popular underline="underline" Offices="Offices" Stores="Stores" Industrial="Industrial"/>
        {corporate ? <SellProperty title="Property management" title1="Urbony Management: A Professional and transparent rental management" step="No matter the situation of your property, we take full control management. Trevi Management is a team dedicated to the daily management of your real estate properties, and it helps you with all important steps of the relationship with your tenants. In addition to the collection of your rents, we become the single point of contact with your tenant and you no longer have to worry about the administrative and technical management of your property (works, maintenance, claims)."/>: <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>}
        <LastSales/>
        <SellerRequestForm text="You too can sell better, faster and easier with Urbony!"/>
            </>
    )
}

export default Home;