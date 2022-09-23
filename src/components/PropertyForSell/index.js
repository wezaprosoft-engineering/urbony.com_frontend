import React, {useState, useEffect} from "react";
import { Head, Title, Wrapper, Home } from "../Popular/Popular.styles";
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import HomeCard from "../HomeCards";
import { Input } from "../WelcomeSection/Welcome.styles";
import { Button } from "../Header/Header.styles";
import { Content } from "./PropertyForSell.styles";
import {useLocation, useNavigate} from 'react-router-dom'
import { useGlobalState, setGlobalState } from "../../store/state";
import { useTranslation } from "react-i18next";
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import Location from '../../assets/images/location.svg'
const PropertyForSell = props =>{
    const {t} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const navigate = useNavigate()
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
    const url = 'https://urbony.onrender.com/api/property/all/sell'
    const rentUrl= 'https://urbony.onrender.com/api/property/all/rent'
    const [propertyForSell, setPropertyForSell] = useState('')
    const [propertyForRent, setPropertyForRent] = useState('')
    const propertforsell = () => {
        try {
            
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               console.log(json)
               setPropertyForSell(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        
        propertforsell();
        
    }, []);
    const properforrent = () => {
        try {
            fetch(rentUrl,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               console.log(json)
               setPropertyForRent(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        properforrent();
    }, []);
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
           <Home>
           {propertyForSell.length > 0 && location.pathname!=='/rent'? <>
                        <>
                        {propertyForSell.map(
                            house =>(
                                <HomeCards key={house.id}>
        <img alt="house" src={house.coverImage} style={{
            width: 406,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "red" 
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.buy')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                        </>
                        
                    </>: <>
                        {propertyForRent.length > 0 && location.pathname==='/rent' ? <>
                        {propertyForRent.map(
                            house =>(
                                <HomeCards key={house.id}>
        <img alt="house" src={house.coverImage} style={{
            width: 406,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46,15,89,1)"
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.sold')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                        </>: <h2>Loading</h2>}
                    </>}
             {screen? <>
                        {card1 ?
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText={location.pathname==='/rent'? t('Card.sold'): t('Card.buy')} buttonColor={location.pathname==='/rent' ? "rgba(46,15,89,1)": "rgba(255, 0, 0 ,1)"} housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>: 
           <>
                    
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