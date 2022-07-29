import React from "react";
import { Menu, MenuButton, MenuContent, MenuHeader } from "./MenuNav.style";
import WhatsAppLogo from '../../assets/images/whatsapp_mobile.svg'
import { useGlobalState, setGlobalState } from "../../store/state";
import {useNavigate} from 'react-router-dom'

const MenuNav = props =>{
    const [corporate] = useGlobalState("corporate")
    const navigate = useNavigate()
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
    }
    return(
        <MenuContent>
            <MenuHeader>
                <h3>FR</h3>
                <MenuButton onClick={getIntouch}>Get In touch</MenuButton>
                <img src={WhatsAppLogo} alt='whatsapp-logo'/>
            </MenuHeader>
            {corporate? <Menu>
            <h3>OFFICE</h3>
            <h3>COMMERCIAL SPACE</h3>
            <h3>INDUSTRIAL SPACE</h3>
            <h3>MANAGEMENT</h3>
            <h3>ABOUT US</h3>
        </Menu>:

            <Menu>
            <h3>SELL</h3>
            <h3>BUY</h3>
            <h3>RENT</h3>
            <h3>REAL ESTATE PROJECTS</h3>
            <h3>MANAGEMENT</h3>
            <h3>ABOUT US</h3>
        </Menu>}
            
        </MenuContent>
    )
}

export default MenuNav;