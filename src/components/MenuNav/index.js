import React from "react";
import { Button, Menu, MenuButton, MenuContent, MenuHeader } from "./MenuNav.style";
import WhatsAppLogo from '../../assets/images/whatsapp_mobile.svg'
import { useGlobalState, setGlobalState } from "../../store/state";
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";
const MenuNav = props =>{
    const {t, i18n} = useTranslation();
    const [corporate] = useGlobalState("corporate")
    const navigate = useNavigate()
    function handleClick(){
        if(i18n.language==='fr'){
            i18n.changeLanguage('en')
            setGlobalState('mobileMenu', false)
        }
        else{
            i18n.changeLanguage('fr')
            setGlobalState('mobileMenu', false)
        }
       // i18n.changeLanguage(lang)
        
    }

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
    const LoginPage = ()=>{
        setGlobalState("sell", false)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", false)
        setGlobalState("getIntouch", false);
        setGlobalState('mobileMenu', false);
        navigate('/login')
        
    }
    return(
        <MenuContent>
            <MenuHeader>
                <h3 onClick={handleClick}>{t('Header.en')}</h3>
                <MenuButton onClick={getIntouch}>{t('Header.GetInTouch')}</MenuButton>
                <img src={WhatsAppLogo} alt='whatsapp-logo' onClick={() => window.location.href='whatsapp://send?phone=+41766797463&text=Hello%20there'}/>
            </MenuHeader>
            {corporate? <Menu>
            <h3 onClick={makeOffices}>{t('NavBar.offices')}</h3>
            <h3 onClick={makeCommercialSpace}>{t('NavBar.commercialSpace')}</h3>
            <h3 onClick={makeIndustrialSpace}>{t('NavBar.industrialSpace')}</h3>
            <h3 onClick={makeManagement}>{t('NavBar.management')}</h3>
            <h3 onClick={makeAboutUs}>{t('NavBar.aboutUs')}</h3>
        </Menu>:

            <Menu>
            <h3 onClick={makeSell}>{t('NavBar.sell')}</h3>
            <h3 onClick={makeBuy}>{t('NavBar.buy')}</h3>
            <h3 onClick={makeRent}>{t('NavBar.rent')}</h3>
            <h3 onClick={makeRealEstate}>{t('NavBar.realEstate')}</h3>
            <h3 onClick={makeManagement}>{t('NavBar.management')}</h3>
            <h3 onClick={makeAboutUs}>{t('NavBar.aboutUs')}</h3>
        </Menu>}
            <Button onClick={LoginPage}>{t('NavBar.login')}</Button>
        </MenuContent>
    )
}

export default MenuNav;