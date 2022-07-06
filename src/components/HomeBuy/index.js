import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LastSales from "./LastSales";
import NavBar from "./navbar";
import Popular from "./Popular";
import PropertyManagement from "./PropertyManagement";
import SellerRequestForm from "./SellerRequestForm";
import SellProperty from "./SellProperty";
import Welcome from "./WelcomeSection";
import {setGlobalState, useGlobalState} from '../state'

function Home_buy(){

    const [corporate] = useGlobalState("corporate")
    return (
        <>
        <Header />
        <NavBar/>
        <Welcome/>
        <Popular/>
        {corporate ? <PropertyManagement/>: <SellProperty/>}
        <LastSales/>
        <SellerRequestForm/>
        <Footer/>
        
        </>
        
    )
}


export default Home_buy;