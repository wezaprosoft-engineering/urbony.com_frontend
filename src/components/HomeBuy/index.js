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
import Corporates from "./Offices";

function HomeBuy(){

    const [corporate] = useGlobalState("corporate")
    const [getIntouch] = useGlobalState("getIntouch")
    const [sell] = useGlobalState("sell")
    const [buy] = useGlobalState("buy")
    const [rent] = useGlobalState("rent")
    const [realEstate] = useGlobalState("realEstate")
    const [management] = useGlobalState("management")
    const [aboutUs]  =useGlobalState("aboutUs")
    const [offices] = useGlobalState("offices")
    const [commercial] = useGlobalState("commercialSpace")
    const [industrial] = useGlobalState("industrialSpace")
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
            {offices ? <Corporates title="A SERVICE ATTENTIVE TO YOUR NEEDS IN OFFICIAL REAL ESTATE FOR YOUR BUSINESS IN BURUNDI"
            tenant="OFFICE SPACE TENANT" buyer="OFFICE SPACE BUYER" owner="OFFICE SPACE OWNER"
            tenant1="You are a contractor and you would like to rent an office space" 
            buyer1="You are a contractor and you would like to buy an office space"
            owner1="You are an owner and you would like to sell or rent an office space"
            tenant2="BROWSE OUR OFFICES FOR RENT"
            buyer2="BROWSE OUR OFFICES FOR BUY"
            owner2="SELL OR RENT YOUR OFFICE SPACE"
            />: <>
            {commercial ? <Corporates title="A SERVICE ATTENTIVE TO YOUR COMMERCIAL REAL ESTATE NEEDS FOR YOUR ACTIVITY IN BURUNDI"
            tenant="STORE SPACE TENANT" buyer="STORE SPACE BUYER" owner="STORE SPACE OWNER"
            tenant1="You are a contractor and you would like to rent a commercial space" 
            buyer1="You are a contractor and you would like to buy commercial spaces"
            owner1="You are an owner and you would like to sell or rent a commercial space"
            tenant2="BROWSE OUR STORE FOR RENT"
            buyer2="BROWSE OUR STORE FOR BUY"
            owner2="SELL OR RENT YOUR STORE"/> : <>
            {industrial ? <Corporates  title="A SERVICE ATTENTIVE TO YOUR NEEDS IN WAREHOUSES, DEPOTS, OR HANGARS IN BURUNDI"
            tenant="INDUSTRIAL SPACE TENANT" buyer="INDUSTRIAL SPACE BUYER" owner="INDUSTRIAL SPACE OWNER"
            tenant1="You are a contractor and you would like to rent industrial spaces" 
            buyer1="You are a contractor and you would like to buy industrial spaces"
            owner1="Are you an owner? Would you like to rent or sell your industrial spaces"
            tenant2="BROWSE OUR INDUSTRIAL SPACES FOR RENT"
            buyer2="BROWSE OUR INDUSTRIAL SPACE FOR BUY"
            owner2="SELL OR RENT YOUR INDUSTRIAL SPACES"/> : 
            <>
            <Welcome/>
           {corporate ? null:<PropertyForSell/>} 
        <Popular underline="underline" Offices="Offices" Stores="Stores" Industrial="Industrial"/>
        {corporate ? <SellProperty title="Property management" title1="Urbony Management: A Professional and transparent rental management" step="No matter the situation of your property, we take full control management. Trevi Management is a team dedicated to the daily management of your real estate properties, and it helps you with all important steps of the relationship with your tenants. In addition to the collection of your rents, we become the single point of contact with your tenant and you no longer have to worry about the administrative and technical management of your property (works, maintenance, claims)."/>: <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>}
        <LastSales/>
        <SellerRequestForm text="You too can sell better, faster and easier with Urbony!"/>
            </>
            }
            </>}
             </>
            
            }
            
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