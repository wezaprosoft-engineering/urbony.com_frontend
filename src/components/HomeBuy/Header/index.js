import React from "react";
import { ContactContent, Content, MenuContent, Wrapper, Logo, LogoWhatsapp, TextMenu, Button, TextMenuHeader } from "./Header.styles";
import urbonyLogo from '../../images/logo.svg'
import whatsapp from '../../images/whatsapp.svg'
import { setGlobalState, useGlobalState } from "../../state";

const Header = () => {

    const handleCorporate = () =>{
        setGlobalState("corporate", true)
        
    }
    const handleResidential = () =>{
        setGlobalState("corporate", false)
        
    }
    const [Corporate] = useGlobalState("corporate");
    return(
    <Wrapper>
        <Content>
            <MenuContent>
                <Logo src={urbonyLogo}/>
                
                {!Corporate ? <TextMenuHeader onClick={handleResidential}>RESIDENTIAL</TextMenuHeader>: <TextMenu onClick={handleResidential}>RESIDENTIAL</TextMenu>}
                {Corporate ? <TextMenuHeader onClick={handleCorporate}>CORPORATE</TextMenuHeader>: <TextMenu onClick={handleCorporate}>CORPORATE</TextMenu>}
                
            </MenuContent>

            <ContactContent>
                <TextMenu>Fr</TextMenu>
                <Button><TextMenu style={{
                    color: 'white'
                }}>Get In Touch</TextMenu></Button>
                <TextMenu style={{
                    fontWeight: 400
                }}>or</TextMenu>
                <LogoWhatsapp src={whatsapp}/>
            </ContactContent>
        </Content>
    </Wrapper>)
    
}

export default Header;