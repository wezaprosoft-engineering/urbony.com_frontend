import React ,{useEffect, useState} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Content, Wrapper, TextMenu2, LoginContent, LoginLogo, ContentText, Container, Menu } from "./Navbar.styles";
import { useGlobalState, setGlobalState } from "../../store/state";
import {useNavigate, useLocation} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Login from '../../assets/images/login.svg'
import LoggedIn from '../../assets/images/loggedin.svg'

const NavBar = () =>{
    const {t} = useTranslation();
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
    const [loggedIn] = useGlobalState("loggedIn")

   
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
        navigate('/login')
        
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
    const [open, setOpen] = useState(false)
    const full = localStorage.getItem('name')
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        window.location.reload(false)
    }

    function DropdownMenu(){
        function DropdownItem(props){
            return(
                <Menu onClick={props.onClick}>
                    <h3>{props.children}</h3>
                </Menu>
                
            )

        }
        return(
            <div style={{backgroundColor: 'lightgray',
                zIndex:9999,
                position: "absolute",
                top: 190,
                width: 170,
                textAlign: 'center',
                right: 45
            }}>
                <DropdownItem >Profile</DropdownItem>
                <DropdownItem onClick={()=>navigate('/add-property')}>Add Property</DropdownItem>
                <DropdownItem onClick={logout}>Logout</DropdownItem>
               
            </div>
        )
    }
    
    return(
        <Wrapper>{corporate ? <Content>
            <ContentText>
                <Container>
            {offices && !getIntouch ? <TextMenu2>{t('NavBar.offices')}</TextMenu2>:<TextMenu onClick={makeOffices}>{t('NavBar.offices')}</TextMenu>}
            {commercialSpace && !getIntouch ? <TextMenu2>{t('NavBar.commercialSpace')}</TextMenu2>: <TextMenu onClick={makeCommercialSpace}>{t('NavBar.commercialSpace')}</TextMenu>}
            {industrialSpace ? <TextMenu2>{t('NavBar.industrialSpace')}</TextMenu2>: <TextMenu onClick={makeIndustrialSpace}>{t('NavBar.industrialSpace')}</TextMenu>}
            {management && !getIntouch  ? <TextMenu2>{t('NavBar.management')}</TextMenu2>: <TextMenu onClick={makeManagement}>{t('NavBar.management')}</TextMenu>}
            {aboutUs && !getIntouch  ? <TextMenu2>{t('NavBar.aboutUs')}</TextMenu2>: <TextMenu onClick={makeAboutUs}>{t('NavBar.aboutUs')}</TextMenu>}
            </Container>
            {loggedIn ? <LoginContent style={{backgroundColor: 'rgba(46,15,89,1)'}} onClick={() => navigate('myproperties')}>
                <LoginLogo src={LoggedIn}/>
                <TextMenu style={{
                    fontWeight: 700,
                    color: 'white'
                }} >{full}</TextMenu>
                {open ?<DropdownMenu/>: null}
            </LoginContent>: <LoginContent onClick={LoginPage}>
                <LoginLogo src={Login}/>
                <TextMenu style={{
                    fontWeight: 700
                }} >{t('NavBar.login')}</TextMenu>
            </LoginContent>}
            </ContentText>
            </Content> : <Content>
                <ContentText>
                    <Container>
            {sell && !getIntouch ? <TextMenu2>{t('NavBar.sell')}</TextMenu2>: <TextMenu onClick={makeSell}>{t('NavBar.sell')}</TextMenu>}
            {buy && !getIntouch ? <TextMenu2>{t('NavBar.buy')}</TextMenu2>: <TextMenu onClick={makeBuy}>{t('NavBar.buy')}</TextMenu>}
            {rent && !getIntouch ? <TextMenu2>{t('NavBar.rent')}</TextMenu2>: <TextMenu onClick={makeRent}>{t('NavBar.rent')}</TextMenu>}
            {realEstate && !getIntouch ? <TextMenu2>{t('NavBar.realEstate')}</TextMenu2>: <TextMenu onClick={makeRealEstate}>{t('NavBar.realEstate')}</TextMenu>}
            {management && !getIntouch ? <TextMenu2>{t('NavBar.management')}</TextMenu2>: <TextMenu onClick={makeManagement}>{t('NavBar.management')}</TextMenu>}
            {aboutUs && !getIntouch ? <TextMenu2>{t('NavBar.aboutUs')}</TextMenu2>: <TextMenu onClick={makeAboutUs}>{t('NavBar.aboutUs')}</TextMenu>}
            </Container>
            {loggedIn ? <LoginContent style={{backgroundColor: 'rgba(46,15,89,1)', paddingLeft: 5}} onClick={() => {open ? setOpen(false): setOpen(true)}}>
                <LoginLogo src={LoggedIn}/>
                <TextMenu style={{
                    fontWeight: 700,
                    color: 'white'
                }} >{full}</TextMenu>
                {open ?<DropdownMenu/>: null}
            </LoginContent>: <LoginContent onClick={LoginPage}>
                <LoginLogo src={Login}/>
                <TextMenu style={{
                    fontWeight: 700
                }} >{t('NavBar.login')}</TextMenu>
            </LoginContent>}
            
            </ContentText>
            </Content>}
            
        </Wrapper>
    )
}

export default NavBar;