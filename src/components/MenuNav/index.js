import React from "react";
import { Menu, MenuButton, MenuContent, MenuHeader } from "./MenuNav.style";
import WhatsAppLogo from '../../assets/images/whatsapp_mobile.svg'
import { useGlobalState, setGlobalState } from "../../store/state";
import {useNavigate} from 'react-router-dom'

const MenuNav = props =>{
    const [corporate] = useGlobalState("corporate")
    const navigate = useNavigate()
    

    const makeSell = ()=>{
        setGlobalState("sell", true)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false);
        setGlobalState("getIntouch", false);
        navigate('/sell')
        setGlobalState('mobileMenu', false)
        
    }
    const makeBuy = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", true)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false);
        setGlobalState("getIntouch", false);
        navigate('/buy')
        setGlobalState('mobileMenu', false)
        
    }
    const makeRent = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", false)
        setGlobalState("rent", true)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        setGlobalState("getIntouch", false);
        navigate('/rent')
        setGlobalState('mobileMenu', false)
        
    }
    const makeRealEstate = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", true)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        setGlobalState("getIntouch", false);
        navigate('/real-estate-project')
        setGlobalState('mobileMenu', false)
        
    }
    const makeManagement = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", true)
        setGlobalState("aboutUs", false)
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", false)
        setGlobalState("getIntouch", false);
        navigate('/management')
        setGlobalState('mobileMenu', false)
        
    }
    const makeAboutUs = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", true)
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", false)
        setGlobalState("getIntouch", false);
        navigate('/about-us')
        setGlobalState('mobileMenu', false)
        
    }
    const makeOffices = () =>{
        setGlobalState("offices", true)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/offices')
        setGlobalState('mobileMenu', false)
        
    }
    const makeCommercialSpace = () =>{
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", true)
        setGlobalState("industrialSpace", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/commercial-space')
        setGlobalState('mobileMenu', false)
    
    }
    const makeIndustrialSpace = () =>{
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", true)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/industrial-space')
        setGlobalState('mobileMenu', false)
    
    } 
    const getIntouch = () =>{
        setGlobalState("sell", false);
        setGlobalState("buy", false);
        setGlobalState("rent", false);
        setGlobalState("realEstate", false);
        setGlobalState("management", false);
        setGlobalState("aboutUs", false);
        setGlobalState("offices", false);
        setGlobalState("commercialSpace", false);
        setGlobalState("industrialSpace", false);
        setGlobalState("mobileMenu", false);
        navigate('/get-in-touch')
        setGlobalState('mobileMenu', false)
    }
    return(
        <MenuContent>
            <MenuHeader>
                <h3>FR</h3>
                <MenuButton onClick={getIntouch}>Get In touch</MenuButton>
                <img src={WhatsAppLogo} alt='whatsapp-logo'/>
            </MenuHeader>
            {corporate? <Menu>
            <h3 onClick={makeOffices}>OFFICE</h3>
            <h3 onClick={makeCommercialSpace}>COMMERCIAL SPACE</h3>
            <h3 onClick={makeIndustrialSpace}>INDUSTRIAL SPACE</h3>
            <h3 onClick={makeManagement}>MANAGEMENT</h3>
            <h3 onClick={makeAboutUs}>ABOUT US</h3>
        </Menu>:

            <Menu>
            <h3 onClick={makeSell}>SELL</h3>
            <h3 onClick={makeBuy}>BUY</h3>
            <h3 onClick={makeRent}>RENT</h3>
            <h3 onClick={makeRealEstate}>REAL ESTATE PROJECTS</h3>
            <h3 onClick={makeManagement}>MANAGEMENT</h3>
            <h3 onClick={makeAboutUs}>ABOUT US</h3>
        </Menu>}
            
        </MenuContent>
    )
}

export default MenuNav;