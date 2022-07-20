import React from "react";
import { ContactContent, Content, MenuContent, Wrapper, Logo, LogoWhatsapp, TextMenu, Button, TextMenuHeader } from "./Header.styles";
import urbonyLogo from '../../images/logo.svg'
import whatsapp from '../../images/whatsapp.svg'
import { setGlobalState, useGlobalState } from "../../state";

const Header = () => {

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
        
    }
    const getIntouch = () =>{
        setGlobalState("getIntouch", true);
        setGlobalState("sell", false);
        setGlobalState("buy", false);
        setGlobalState("rent", false);
        setGlobalState("realEstate", false);
        setGlobalState("management", false);
        setGlobalState("aboutUs", false);
        setGlobalState("corporate", false);
        setGlobalState("residential", false);
        setGlobalState("offices", false);
        setGlobalState("commercialSpace", false);
        setGlobalState("industrialSpace", false);
    }

    const [Corporate] = useGlobalState("corporate");
    return(
    <Wrapper>
        <Content>
            <MenuContent>
                <Logo alt="logo" src={urbonyLogo}/>
                
                {!Corporate ? <TextMenuHeader onClick={handleResidential}>RESIDENTIAL</TextMenuHeader>: <TextMenu onClick={handleResidential}>RESIDENTIAL</TextMenu>}
                {Corporate ? <TextMenuHeader onClick={handleCorporate}>CORPORATE</TextMenuHeader>: <TextMenu onClick={handleCorporate}>CORPORATE</TextMenu>}
                
            </MenuContent>

            <ContactContent>
                <TextMenu>Fr</TextMenu>
                <Button><TextMenu style={{
                    color: 'white',
                    fontWeight: 700
                }} onClick={getIntouch}>Get In Touch</TextMenu></Button>
                <TextMenu style={{
                    fontWeight: 400
                }}>or</TextMenu>
                <LogoWhatsapp src={whatsapp}/>
            </ContactContent>
        </Content>
    </Wrapper>)
    
}

export default Header;