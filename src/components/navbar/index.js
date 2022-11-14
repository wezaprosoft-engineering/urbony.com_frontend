import React ,{ useState} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Content, Wrapper, TextMenu2, LoginContent, LoginLogo, ContentText, Container, Menu } from "./Navbar.styles";
import { useGlobalState } from "../../store/state";
import {useNavigate, useLocation} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Login from '../../assets/images/login.svg'
import LoggedIn from '../../assets/images/loggedin.svg'

const NavBar = () =>{
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [corporate] = useGlobalState("corporate")
    const [loggedIn] = useGlobalState("loggedIn")

   
    const makeSell = ()=>{
        
        navigate('/sell')
        
    }
    const makeBuy = ()=>{
        
        navigate('/buy')
        
    }
    const makeRent = ()=>{
        
        navigate('/rent')
        
    }
    const makeRealEstate = ()=>{
        
        navigate('/real-estate-project')
        
    }
    const makeManagement = ()=>{
       
        navigate('/management')
        
    }
    const makeAboutUs = ()=>{
    
        navigate('/about-us')
        
    }
    const LoginPage = ()=>{
        
        navigate('/login')
        
    }
    const makeOffices = () =>{
        
        navigate('/offices')
        
    }
    const makeCommercialSpace = () =>{
        
        navigate('/commercial-space')
    
    }
    const makeIndustrialSpace = () =>{
        
        navigate('/industrial-space')
    
    } 
    
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
                <DropdownItem onClick={()=>navigate('/profile')}>Profile</DropdownItem>
                <DropdownItem onClick={()=>navigate('/myproperties')}>My Properties</DropdownItem>
                <DropdownItem onClick={logout}>Logout</DropdownItem>
               
            </div>
        )
    }
    
    return(
        <Wrapper>{corporate ? <Content>
            <ContentText>
                <Container>
            {location.pathname==='/offices'? <TextMenu2>{t('NavBar.offices')}</TextMenu2>:<TextMenu onClick={makeOffices}>{t('NavBar.offices')}</TextMenu>}
            {location.pathname==='/commercial-space' ?<TextMenu2>{t('NavBar.commercialSpace')}</TextMenu2>: <TextMenu onClick={makeCommercialSpace}>{t('NavBar.commercialSpace')}</TextMenu>}
            {location.pathname==='/industrial-space' ? <TextMenu2>{t('NavBar.industrialSpace')}</TextMenu2>: <TextMenu onClick={makeIndustrialSpace}>{t('NavBar.industrialSpace')}</TextMenu>}
            {location.pathname==='/management'  ? <TextMenu2>{t('NavBar.management')}</TextMenu2>: <TextMenu onClick={makeManagement}>{t('NavBar.management')}</TextMenu>}
            {location.pathname==='/about-us'  ? <TextMenu2>{t('NavBar.aboutUs')}</TextMenu2>: <TextMenu onClick={makeAboutUs}>{t('NavBar.aboutUs')}</TextMenu>}
            </Container>
            {loggedIn ? <LoginContent style={{backgroundColor: 'rgba(46,15,89,1)'}} onClick={() => {open ? setOpen(false): setOpen(true)}}>
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
            {location.pathname==='/sell'? <TextMenu2>{t('NavBar.sell')}</TextMenu2>: <TextMenu onClick={makeSell}>{t('NavBar.sell')}</TextMenu>}
            {location.pathname==='/buy' ? <TextMenu2>{t('NavBar.buy')}</TextMenu2>: <TextMenu onClick={makeBuy}>{t('NavBar.buy')}</TextMenu>}
            {location.pathname==='/rent' ? <TextMenu2>{t('NavBar.rent')}</TextMenu2>: <TextMenu onClick={makeRent}>{t('NavBar.rent')}</TextMenu>}
            {location.pathname==='/real-estate-project' ? <TextMenu2>{t('NavBar.realEstate')}</TextMenu2>: <TextMenu onClick={makeRealEstate}>{t('NavBar.realEstate')}</TextMenu>}
            {location.pathname==='/management' ? <TextMenu2>{t('NavBar.management')}</TextMenu2>: <TextMenu onClick={makeManagement}>{t('NavBar.management')}</TextMenu>}
            {location.pathname==='/about' ? <TextMenu2>{t('NavBar.aboutUs')}</TextMenu2>: <TextMenu onClick={makeAboutUs}>{t('NavBar.aboutUs')}</TextMenu>}
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