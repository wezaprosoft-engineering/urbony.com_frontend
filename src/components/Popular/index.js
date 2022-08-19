import React ,{useState, useEffect} from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper,  CorporateContent } from "./Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import { setGlobalState, useGlobalState } from "../../store/state";
import HomeCard from '../HomeCards/index';
import CorporateCards from "../CorporateCards";
import CoworkingDesk from '../../assets/images/Coworkingdesk.png'
import EnterpriseOffice from '../../assets/images/EnterpriseOffice.png'
import Servicedoffices from '../../assets/images/Servicedoffices.png'
import PrivateOffices from '../../assets/images/PrivateOffices.png'
import Warehouses from '../../assets/images/Warehouses.png'
import Depots from '../../assets/images/Depots.png'
import {useLocation} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Popular = props => {
    const {t, i18n} = useTranslation();
    const location = useLocation()
    const [Corporate] = useGlobalState("corporate")
    const [offices, setOffices] = useState(true)
    const [stores, setStores] = useState(false)
    const [industrial, setIndustrial] = useState(false)
    const [card1] = useGlobalState("popularcard1")
    const [card2] = useGlobalState("popularcard2")
 
    const [Industrial] = useGlobalState("industrialSpace")
    const [Offices] = useGlobalState("offices")
    const [Commercial] = useGlobalState("commercialSpace")
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    

    const handleOffice = () =>{
        setOffices(true)
        setStores(false)
        setIndustrial(false)
    }
    const handleStores = () =>{
        setOffices(false)
        setStores(true)
        setIndustrial(false)
    }
    const handleIndustrial = () =>{
        setOffices(false)
        setStores(false)
        setIndustrial(true)
    }

    const Card1 = () =>{
        setGlobalState("popularcard1", true)
        setGlobalState("popularcard2", false)
        setGlobalState("popularcard3", false)
    }
    const Card2 = () =>{
        setGlobalState("popularcard1", false)
        setGlobalState("popularcard2", true)
        setGlobalState("popularcard3", false)
    }
    const Card3 = () =>{
        setGlobalState("popularcard1", false)
        setGlobalState("popularcard2", false)
        setGlobalState("popularcard3", true)
    }

    const [corporatecard1] = useGlobalState("corporatecard1")
    const [corporatecard2] = useGlobalState("corporatecard2")
    const CorporateCard1 = () =>{
        setGlobalState("corporatecard1", true)
        setGlobalState("corporatecard2", false)
        setGlobalState("forsellcard3", false)
    }
    const CorporateCard2 = () =>{
        setGlobalState("corporatecard1", false)
        setGlobalState("corporatecard2", true)
        setGlobalState("corporatecard3", false)
    }
    const CorporateCard3 = () =>{
        setGlobalState("corporatecard1", false)
        setGlobalState("corporatecard2", false)
        setGlobalState("corporatecard3", true)
    }
    
    return(
        <Wrapper>
            <Content style={{
                margin:`${props.margin}`
            }}>
                {screen? null: 
                <Title>
                    <Head>
                        
                    <Line/>
                    {Corporate ? <h3>{t('popular.corporateTitle')}</h3>:<h3>{t('popular.title')}</h3>}
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>{t('popular.explore')}</h3>
                        <Arrow src={arrow}/>
                        
                        
                        
                        
                    </Head>
                   
                </Title>}
                {Corporate ? 
                <>
                <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700
                }}>{t('popular.corporateTitle')}</h2>
                <CorporateContent>
                    
                    {offices ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }} >{props.Offices}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleOffice}>{props.Offices}</h2>}
                    
                {stores ? <h2 style={{
                    
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }}>{props.Stores}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleStores}>{props.Stores}</h2>}
                
                {industrial
                 ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: `${props.underline}`,
                    color: 'red'
                }}>{props.Industrial}</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                }} onClick={handleIndustrial}>{props.Industrial}</h2>}
                

                </CorporateContent></>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700
                }}>{t('popular.popularHomes')}</h2>}
                
                {Industrial || Commercial || Offices ? <>{
                    screen ? <>
                        { <>
                            {
                                location.pathname==='/offices'? <>
                                {corporatecard1 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={CoworkingDesk} next={CorporateCard2}/>:
                            <>
                            {corporatecard2 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={EnterpriseOffice} prev={CorporateCard1} next={CorporateCard3}/>:
                            
                            <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={PrivateOffices} prev={CorporateCard2}/>}
                            </>
                              }  </>: <>{
                                    location.pathname==='/commercial-space'?
                                    <>{corporatecard1 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={EnterpriseOffice} next={CorporateCard2}/>:
                                    <>
                                    {corporatecard2 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={PrivateOffices} prev={CorporateCard1} next={CorporateCard3}/>:
                                    
                                    <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={CoworkingDesk} prev={CorporateCard2}/>}
                                    </>}</>: <>
                                    {corporatecard1 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={Warehouses} next={CorporateCard2}/>:
                            <>
                            {corporatecard2 ? <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={Depots} prev={CorporateCard1} next={CorporateCard3}/>:
                            
                            <CorporateCards buttonText={t('Card.book')}buttonColor="rgba(217, 11, 66 ,1)" housePicture={Servicedoffices} prev={CorporateCard2}/>}
                            </>
                                }</>
                                }</>
                            }
                        </>
                            
                        }
                    </>:<Home>
                    <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                    <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                    <CorporateCards buttonText={t('Card.book')} buttonColor="rgba(217, 11, 66 ,1)" housePicture={House1}/>
                </Home>
                }</>: <Home>
                    {screen ?
                        <>
                        {card1 ?
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'): t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'): t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'): t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>
                        
                        
                        
                    : <>
                    
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'):  t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'): t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House2} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.rent'): t('Card.book')} buttonColor={location.pathname==='/rent' ? 'red': "rgba(217, 11, 66 ,1)"} housePicture={House3} /></>}
                    
                </Home>}

                
                
            </Content>
        </Wrapper>
    )
}

export default Popular;