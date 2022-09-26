import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuNav from "../components/MenuNav";
import NavBar from "../components/navbar";
import AboutUs from "../pages/AboutUs";
import AddProperty from "../pages/addProperty";
import AccountCreation from "../pages/Authentication/AccountCreation";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import CommercialSpace from "../pages/Corporate/CommercialSpace";
import IndustrialSpace from "../pages/Corporate/IndustrialSpace";
import Offices from "../pages/Corporate/Offices";
import EditProperty from "../pages/EditProperty";
import FreeEstimation from "../pages/FreeEstimation";
import GetInTouch from "../pages/GetInTouch";
import Home from "../pages/Home";
import Management from "../pages/Management";
import MyProperties from "../pages/MyProperties";
import Buy from "../pages/Residential/Buy";
import RealEstate from "../pages/Residential/RealEstate";
import Rent from "../pages/Residential/Rent";
import Sell from "../pages/Residential/Sell";
import Searches from "../pages/Search";
import SingleProject from "../pages/SingleProject";
import SingleProperty from "../pages/SingleProperty";
import { setGlobalState, useGlobalState } from "../store/state";

const Routing = () =>{
    const [mobileMenu] = useGlobalState("mobileMenu")
    const [loggedIn] = useGlobalState("loggedIn")
    const token = localStorage.getItem('token')
    if (!token){
        setGlobalState('loggedIn', false)
    }else{
        setGlobalState('loggedIn', true)
    }
    return(
        <Router>
            <Header/>
            <NavBar/>
            {mobileMenu ? <MenuNav/>: null}
            <Routes>

                {loggedIn ? <>
                <Route path="*" element={<Navigate to="/" />}/>
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
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/account-creation" element={<AccountCreation/>}/>
                <Route path="/myproperties" element={<MyProperties/>}/>
                <Route path="/add-property" element={<AddProperty/>}/>
                <Route path="/free-estimation" element={<FreeEstimation/>}/>
                <Route path="/search" element={<Searches/>}/>
                <Route path="/property/:id" element={<SingleProperty/>}/>
                <Route path="/edit-property/:id" element={<EditProperty/>}/>
                <Route path="/single-project/:id" element={<SingleProject/>}/>
                
                </>:<>
                <Route path="*" element={<Navigate to="/" />}/>
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
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/account-creation" element={<AccountCreation/>}/>
                <Route path="/free-estimation" element={<FreeEstimation/>}/>
                <Route path="/search" element={<Searches/>}/>
                <Route path="/property/:id" element={<SingleProperty/>}/>
                <Route path="/single-project/:id" element={<SingleProject/>}/>
                
                </>}
                
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;