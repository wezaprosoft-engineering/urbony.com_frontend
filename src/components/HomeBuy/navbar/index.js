import React from "react";
import { TextMenu } from "../Header/Header.styles";
import { Content, Wrapper } from "./Navbar.styles";
import { setGlobalState, useGlobalState } from "../../state";

const NavBar = () =>{
    const [corporate] = useGlobalState("corporate")
    return(
        <Wrapper>{corporate ? <Content>
            <TextMenu>OFFICES</TextMenu>
            <TextMenu>COMMERCIAL SPACE</TextMenu>
            <TextMenu>INDUSTRIAL SPACE</TextMenu>
            <TextMenu>MANAGEMENT</TextMenu>
            <TextMenu>ABOUT US</TextMenu>
            </Content> : <Content>
            <TextMenu>SELL</TextMenu>
            <TextMenu>BUY</TextMenu>
            <TextMenu>RENT</TextMenu>
            <TextMenu>REAL ESTATE PROJECTS</TextMenu>
            <TextMenu>MANAGEMENT</TextMenu>
            <TextMenu>ABOUT US</TextMenu>
            </Content>}
            
        </Wrapper>
    )
}

export default NavBar;