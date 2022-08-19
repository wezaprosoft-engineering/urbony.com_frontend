import React, { useState } from "react";
import { ContactContent, Content, MenuContent, Wrapper, Logo, LogoWhatsapp, TextMenu, Button, TextMenuHeader, MenuButton, TextMenu1, TextMenuHeader1 } from "./Header.styles";
import urbonyLogo from '../../assets/images/logo.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import Menu from '../../assets/images/menu.svg'
import Closing from '../../assets/images/menuclose.svg'
import { setGlobalState, useGlobalState } from "../../store/state";
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Header = () => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    function handleClick(){
        if(i18n.language==='fr'){
            i18n.changeLanguage('en')
        }
        else{
            i18n.changeLanguage('fr')
        }
       // i18n.changeLanguage(lang)
        
    }
    const handleCorporate = () =>{
        setGlobalState("corporate", true);
        setGlobalState("sell", false);
        setGlobalState("buy", false);
        setGlobalState("rent", false);
        setGlobalState("realEstate", false);
        setGlobalState("management", false);
        setGlobalState("aboutUs", false);
        setGlobalState("getIntouch", false);
        setGlobalState("offices", false);
        setGlobalState("commercialSpace", false);
        setGlobalState("industrialSpace", false);
        navigate('')
        
    }
    const handleResidential = () =>{
        setGlobalState("corporate", false);
        setGlobalState("sell", false);
        setGlobalState("buy", false);
        setGlobalState("rent", false);
        setGlobalState("realEstate", false);
        setGlobalState("management", false);
        setGlobalState("aboutUs", false);
        setGlobalState("getIntouch", false);
        setGlobalState("offices", false);
        setGlobalState("commercialSpace", false);
        setGlobalState("industrialSpace", false);
        navigate('')
        
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
        navigate('/get-in-touch')
    }
    const Open =() =>{
        setGlobalState("mobileMenu", true)
    }
    const Close = () =>{
        setGlobalState("mobileMenu", false)
    }
    const [Corporate] = useGlobalState("corporate");
    const [mobileMenu] = useGlobalState("mobileMenu");
    return(
    <Wrapper>
        <Content>
            <MenuContent>
                <Logo alt="logo" src={urbonyLogo}/>
                {mobileMenu ? <MenuButton alt="close" src={Closing} onClick={Close}/>:<MenuButton alt="menu" src={Menu} onClick={Open}/>}
                
                {!Corporate ? <TextMenuHeader onClick={handleResidential}>{t('Header.residential')}</TextMenuHeader>: <TextMenu onClick={handleResidential}>{t('Header.residential')}</TextMenu>}
                {Corporate ? <TextMenuHeader onClick={handleCorporate}>{t('Header.corporate')}</TextMenuHeader>: <TextMenu onClick={handleCorporate}>{t('Header.corporate')}</TextMenu>}
                
            </MenuContent>

            <ContactContent>
                <TextMenu onClick={()=> handleClick()}>{t('Header.en')}</TextMenu>
                <Button><TextMenu style={{
                    color: 'white',
                    fontWeight: 700
                }} onClick={getIntouch}>{t('Header.GetInTouch')}</TextMenu></Button>
                <TextMenu style={{
                    fontWeight: 400
                }}>{t('Header.Or')}</TextMenu>
                <LogoWhatsapp src={whatsapp}/>
            </ContactContent>
        </Content>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: 220,
            margin: 'auto auto auto auto'
            
        }}>
            {!Corporate ? <TextMenuHeader1 onClick={handleResidential}>{t('Header.residential')}</TextMenuHeader1>: <TextMenu1 onClick={handleResidential}>{t('Header.residential')}</TextMenu1>}
        {Corporate ? <TextMenuHeader1 onClick={handleCorporate}>{t('Header.corporate')}</TextMenuHeader1>: <TextMenu1 onClick={handleCorporate}>{t('Header.corporate')}</TextMenu1>}
        </div>
        
    </Wrapper>)
    
}

export default Header;