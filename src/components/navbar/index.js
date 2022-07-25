import React ,{useEffect} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Content, Wrapper, TextMenu2 } from "./Navbar.styles";
import { useGlobalState, setGlobalState } from "../../store/state";
import {useNavigate, useLocation} from 'react-router-dom'

const NavBar = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [corporate] = useGlobalState("corporate")
    const [sell] = useGlobalState("sell")
    const [buy] = useGlobalState("buy")
    const [rent] = useGlobalState("rent")
    const [realEstate] = useGlobalState("realEstate")
    const [management] = useGlobalState("management")
    const [aboutUs] = useGlobalState("aboutUs")
    const [offices] = useGlobalState("offices")
    const [commercialSpace] = useGlobalState("commercialSpace")
    const [industrialSpace] = useGlobalState("industrialSpace")
    const [getIntouch] = useGlobalState("getIntouch")

    const makeSell = ()=>{
        setGlobalState("sell", true)
        setGlobalState("buy", false)
        setGlobalState("rent", false)
        setGlobalState("realEstate", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false);
        setGlobalState("getIntouch", false);
        navigate('/sell')
        
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
        
    }
    const makeOffices = () =>{
        setGlobalState("offices", true)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/offices')
        
    }
    const makeCommercialSpace = () =>{
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", true)
        setGlobalState("industrialSpace", false)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/commercial-space')
    
    }
    const makeIndustrialSpace = () =>{
        setGlobalState("offices", false)
        setGlobalState("commercialSpace", false)
        setGlobalState("industrialSpace", true)
        setGlobalState("management", false)
        setGlobalState("aboutUs", false)
        navigate('/industrial-space')
    
    } 
    useEffect(()=>{
        if (location.pathname==='/sell'){
            setGlobalState("residential", true)
            setGlobalState("sell", true)
        } else if(location.pathname==='/buy'){
            setGlobalState("residential", true)
            setGlobalState("buy", true)
        } else if(location.pathname==='/rent'){
            setGlobalState("residential", true)
            setGlobalState("rent", true)
        } else if(location.pathname==='/real-estate-project'){
            setGlobalState("residential", true)
            setGlobalState("realEstate", true)
        } else if(location.pathname==='/management'){
            setGlobalState("management", true)
        } else if(location.pathname==='/about-us'){
            setGlobalState("aboutUs", true)
        } else if(location.pathname==='/offices'){
            setGlobalState("corporate", true)
            setGlobalState("offices", true)
        } else if(location.pathname==='/commercial-space'){
            setGlobalState("corporate", true)
            setGlobalState("commercialSpace", true)
        } else if(location.pathname==='/industrial-space'){
            setGlobalState("corporate", true)
            setGlobalState("industrialSpace", true)
        } 
    })
    return(
        <Wrapper>{corporate ? <Content>
            {offices && !getIntouch ? <TextMenu2>OFFICES</TextMenu2>:<TextMenu onClick={makeOffices}>OFFICES</TextMenu>}
            {commercialSpace && !getIntouch ? <TextMenu2>COMMERCIAL SPACE</TextMenu2>: <TextMenu onClick={makeCommercialSpace}>COMMERCIAL SPACE</TextMenu>}
            {industrialSpace ? <TextMenu2>INDUSTRIAL SPACE</TextMenu2>: <TextMenu onClick={makeIndustrialSpace}>INDUSTRIAL SPACE</TextMenu>}
            {management && !getIntouch  ? <TextMenu2>MANAGEMENT</TextMenu2>: <TextMenu onClick={makeManagement}>MANAGEMENT</TextMenu>}
            {aboutUs && !getIntouch  ? <TextMenu2>ABOUT US</TextMenu2>: <TextMenu onClick={makeAboutUs}>ABOUT US</TextMenu>}
            </Content> : <Content>
            {sell && !getIntouch ? <TextMenu2>SELL</TextMenu2>: <TextMenu onClick={makeSell}>SELL</TextMenu>}
            {buy && !getIntouch ? <TextMenu2>BUY</TextMenu2>: <TextMenu onClick={makeBuy}>BUY</TextMenu>}
            {rent && !getIntouch ? <TextMenu2>RENT</TextMenu2>: <TextMenu onClick={makeRent}>RENT</TextMenu>}
            {realEstate && !getIntouch ? <TextMenu2>REAL ESTATE PROJECTS</TextMenu2>: <TextMenu onClick={makeRealEstate}>REAL ESTATE PROJECTS</TextMenu>}
            {management && !getIntouch ? <TextMenu2>MANAGEMENT</TextMenu2>: <TextMenu onClick={makeManagement}>MANAGEMENT</TextMenu>}
            {aboutUs && !getIntouch ? <TextMenu2>ABOUT US</TextMenu2>: <TextMenu onClick={makeAboutUs}>ABOUT US</TextMenu>}
            </Content>}
            
        </Wrapper>
    )
}

export default NavBar;