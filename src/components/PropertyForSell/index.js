import React, {useState, useEffect} from "react";
import { Head, Title, Wrapper, Home } from "../Popular/Popular.styles";
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import HomeCard from "../HomeCards";
import { Input } from "../WelcomeSection/Welcome.styles";
import { Button } from "../Header/Header.styles";
import { Content } from "./PropertyForSell.styles";
import {useLocation} from 'react-router-dom'
import { useGlobalState, setGlobalState } from "../../store/state";
import { useTranslation } from "react-i18next";
const PropertyForSell = props =>{
    const {t} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const location = useLocation()
    const [card1] = useGlobalState("forsellcard1")
    const [card2] = useGlobalState("forsellcard2")
    const Card1 = () =>{
        setGlobalState("forsellcard1", true)
        setGlobalState("forsellcard2", false)
        setGlobalState("forsellcard3", false)
    }
    const Card2 = () =>{
        setGlobalState("forsellcard1", false)
        setGlobalState("forsellcard2", true)
        setGlobalState("forsellcard3", false)
    }
    const Card3 = () =>{
        setGlobalState("forsellcard1", false)
        setGlobalState("forsellcard2", false)
        setGlobalState("forsellcard3", true)
    }
    return(
        
        <Wrapper style={{
            
        }}>
            <Content style={{
                margin: props.margin
            }}>
            <Head>
            <Title>
                {
                    location.pathname==='/rent'? <h2 style={{
                        fontWeight: 500,
                        color: 'rgba(46,15,89,1)'
                    }}>{t('rent.text2')}</h2>:
                    <h2 style={{
                        fontWeight: 500,
                        color: 'rgba(46,15,89,1)'
                    }}>{t('propertyForSell.title')}</h2>
                }
                
            </Title>
            {screen? null: <Title>
                    <h2 style={{
                            fontWeight: 500
                        }}>{t('propertyForSell.filterBy')}</h2>
                        <Input placeholder={t('propertyForSell.price')} type='number' style={{
                            backgroundColor: 'rgba(46,15,89,1)',
                            textAlign: 'center',
                            width: 255,
                            height: 45,
                            borderRadius: 5,
                            color: 'white',
                            fontWeight: 500,
                            marginTop: 10,
                            marginLeft: 20,
                            borderColor: 'transparent'
                        }}/>
                    </Title>}
            
           </Head>
           <Home> {screen? <>
                        {card1 ?
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>: 
           <>
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"}housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} />
                    <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} />
           </>}
         
           </Home>
           {screen ? null:<>{location.pathname==='/buy' || location.pathname==='/rent'? null: <>
           <Button style={{
            width: 467,
            height: 54,
            borderRadius: '5px',
            backgroundColor: 'rgba(255,0,0,1)',
            fontWeight: 700,
            fontSize: 25,
            marginTop: 100
           }}>{t('propertyForSell.view')}</Button></>}</> }
           
            </Content>
        </Wrapper>
    )
}

export default PropertyForSell;