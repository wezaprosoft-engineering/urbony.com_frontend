import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LastSales from "./LastSales";
import NavBar from "./navbar";
import Popular from "./Popular";
import SellerRequestForm from "./SellerRequestForm";
import SellProperty from "./SellProperty";
import Welcome from "./WelcomeSection";
import {useGlobalState} from '../state'
import GetInTouch from "./GetInTouch";
import Sell from "./Sell";
import Buy from "./Buy";
import Rent from "./Rent";
import RealEstate from "./RealEstate";
import Management from "./Management";
import AboutUs from "./AboutUs";
import PropertyForSell from "./PropertyForSell";

function HomeBuy(){

    const [corporate] = useGlobalState("corporate")
    const [getIntouch] = useGlobalState("getIntouch")
    const [sell] = useGlobalState("sell")
    const [buy] = useGlobalState("buy")
    const [rent] = useGlobalState("rent")
    const [realEstate] = useGlobalState("realEstate")
    const [management] = useGlobalState("management")
    const [aboutUs]  =useGlobalState("aboutUs")
    return (
        <>
        <Header />
        <NavBar/>
        {getIntouch ? <GetInTouch/> : <>
        {sell ? <>
        <Sell/>
        <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>
        <LastSales/>
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>: <>{buy?
        <>
        <Buy/>
        <LastSales/>
        </>:
        <>
        {rent ? <>
            <Rent/>
            <SellerRequestForm  text="Would you like your property Rented by us? Contact us for more information"/>
        </>: <>
            {realEstate ? <RealEstate/>:
            <>
            {management ? <>
            <Management/>
            </> :<>
            {aboutUs? <>
            <AboutUs/>
            </>: <>
            <Welcome/>
           {corporate ? null:<PropertyForSell/>} 
        <Popular/>
        {corporate ? <SellProperty title="Property management" title1="Urbony Management: A Professional and transparent rental management" step="No matter the situation of your property, we take full control management. Trevi Management is a team dedicated to the daily management of your real estate properties, and it helps you with all important steps of the relationship with your tenants. In addition to the collection of your rents, we become the single point of contact with your tenant and you no longer have to worry about the administrative and technical management of your property (works, maintenance, claims)."/>: <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>}
        <LastSales/>
        <SellerRequestForm text="You too can sell better, faster and easier with Urbony!"/>
            </>}
            
            </>}
            
            </>
            }
        
        </>}
        
        </>
    }
        </>}
        </>}
        <Footer/>
        
        </>
        
    )
}


export default HomeBuy;