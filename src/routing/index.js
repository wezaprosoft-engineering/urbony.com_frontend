import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuNav from "../components/MenuNav";
import NavBar from "../components/navbar";
import AboutUs from "../pages/AboutUs";
import CommercialSpace from "../pages/Corporate/CommercialSpace";
import IndustrialSpace from "../pages/Corporate/IndustrialSpace";
import Offices from "../pages/Corporate/Offices";
import GetInTouch from "../pages/GetInTouch";
import Home from "../pages/Home";
import Management from "../pages/Management";
import Buy from "../pages/Residential/Buy";
import RealEstate from "../pages/Residential/RealEstate";
import Rent from "../pages/Residential/Rent";
import Sell from "../pages/Residential/Sell";
import { useGlobalState } from "../store/state";

const Routing = () =>{
    const [mobileMenu] = useGlobalState("mobileMenu")
    return(
        <Router basename='/index.html'>
            <Header/>
            <NavBar/>
            {mobileMenu ? <MenuNav/>: null}
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/sell" element={<Sell/>}/>
                <Route path="/buy" element={<Buy/>}/>
                <Route path="/rent" element={<Rent/>}/>
                <Route path="/real-estate-project" element={<RealEstate/>}/>
                <Route path="/offices" element={<Offices/>}/>
                <Route path="/industrial-space" element={<IndustrialSpace/>}/>
                <Route path="/commercial-space" element={<CommercialSpace/>}/>
                <Route path="/management" element={<Management/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/get-in-touch" element={<GetInTouch/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;