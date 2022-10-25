import React, {useState, useEffect} from "react";
import { Head, Title, Wrapper, Home } from "../Popular/Popular.styles";
import { Input } from "../WelcomeSection/Welcome.styles";
import { Button } from "../Header/Header.styles";
import { Content } from "./PropertyForSell.styles";
import {useLocation, useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import Location from '../../assets/images/location.svg'
import { ArrowCircle, ArrowContainer, DetailsContainer, Container } from "../HomeCards/HomeCards.style";
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_rigt.svg'
import LocationMin from '../../assets/images/location_min.svg'
import BedMin from '../../assets/images/bed_min.svg'

import HouseMin from '../../assets/images/house_min.svg'

import StatisticMin from '../../assets/images/statistic_min.svg'
const PropertyForSell = (props, children) =>{
    const {t} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const navigate = useNavigate()
    const location = useLocation()
   
    const url = 'https://urbony.onrender.com/api/property/all/sell'
    const rentUrl= 'https://urbony.onrender.com/api/property/all/rent'
    const [propertyForSell, setPropertyForSell] = useState('')
    const [propertyForRent, setPropertyForRent] = useState('')
    const [activeIndex, setActiveIndex] = useState(1)
    const [activeIndexRent, setActiveIndexRent] = useState(1)

    const next = () =>{
        if(activeIndex === propertyForSell.length){
            setActiveIndex(1)
        }else{
            setActiveIndex(activeIndex + 1)
        }
    }

    const prev = () =>{
        if(activeIndex === 1){
            setActiveIndex(propertyForSell.length)
        }else{
            setActiveIndex(activeIndex - 1)
        }
    }

    const nextRent = () =>{
        if(activeIndexRent === propertyForRent.length){
            setActiveIndexRent(1)
        }else{
            setActiveIndexRent(activeIndexRent + 1)
        }
    }

    const prevRent = () =>{
        if(activeIndexRent === 1){
            setActiveIndexRent(propertyForRent.length)
        }else{
            setActiveIndexRent(activeIndexRent - 1)
        }
    }

  

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
    const [searchValue, setSearchValue] = useState('')
  
    const search = ()=>{
        
        
        const result = propertyForSell?.filter(house => house.price <= searchValue

    )
    
    console.log([...result])
    
    setPropertyForSell(result)
    
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
                        }}
                        value={searchValue}
                        onChange={(e)=>{
                            setSearchValue(e.target.value)
                            
                            
                            search()
                        }}/>
                    </Title>}
            
           </Head>
           <Home>
           {propertyForSell.length > 0 && location.pathname!=='/rent'? <>
                        <>
                        {propertyForSell.slice(0,9).map(
                            house =>(
                                <HomeCards key={house.id}>
        <img alt="house" src={house.coverImage} style={{
            width: 436,
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
            width: 436,
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
                    {propertyForSell.length > 0 && location.pathname!=='/rent'? <>
                    
                        {propertyForSell.slice(activeIndex -1, activeIndex).map(house =>(
                            <Container style={{
                                backgroundImage: `url(${house.coverImage})`,
                                backgroundSize: 'cover'
                            }} key={house.id}>
                                <ArrowContainer>
                                    <ArrowCircle onClick={prev}>
                                        <img src={ArrowLeft} alt="arrow-left" style={{
                                            marginLeft: 17,
                                            
                                            marginTop: 16,
                                            width: 17,
                                            height: 30
                        
                                        }}/>
                                    </ArrowCircle>
                                    <ArrowCircle onClick={next}>
                                    <img src={ArrowRight} alt="arrow-right" style={{
                                            marginLeft: 22,
                                            
                                            marginTop: 17,
                                            width: 17,
                                            height: 30
                        
                                        }}/>
                                    </ArrowCircle>
                                </ArrowContainer>
                                <DetailsContainer>
                                <div style={{
                                    display: 'flex',
                                   
                                    marginLeft: 12,
                                    color: 'white',
                                    height: 20,
                                    marginBottom: 15
                                    
                                }}><img alt="location-icon" src={LocationMin} style={{
                                    marginRight: 10,
                                    width: 15,
                                    height: 20,
                                    marginTop: 20
                                    
                                    
                                }}/> <h4 style={{
                                    size: 20,
                                    fontWeight: 700,
                                    
                                    
                                }}>{house.location}</h4></div>
                                <CardsContainer>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    marginLeft: 12,
                                    color:'white',
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                }}>
                                <img alt="bed-icon" src={BedMin} style={{
                                    marginRight: 10,
                                    width: 15,
                                    height: 60
                                }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    color:'white',
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                    
                                }}>
                                <img alt="house-icon" src={HouseMin} style={{
                                    marginRight: 10,
                                    width: 15,
                                    height: 55
                                }}/>  <h5>{house.livingArea} m</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    
                                    marginLeft: 12,
                                    color:'white',
                                    marginRight: 30,
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                }}>
                                <img alt="size-icon" src={StatisticMin} style={{
                                    marginRight: 10,
                                    marginTop: 0,
                                    width: 15,
                                    height: 55
                                }}/>
                                    <h5>{house.distanceToRoad}m</h5>
                                </div>
                                </CardsContainer>
                                <CardsContainer style={{
                                    marginTop: 0
                                    
                                }}>
                                    <CardButton style={{
                                        backgroundColor: "rgba(255, 0, 0 ,1)",
                                        marginLeft: 10
                                    }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.buy')}</CardButton>
                                    <div style={{
                                        color: 'white',
                                        display: "flex",
                                        
                                    }}>
                                        <div style={{
                                            marginRight: 7,
                                            
                                        }}><h3>BIF</h3></div>
                                        <h3>{(house.price).toLocaleString()}</h3></div>
                                    
                                </CardsContainer>
                                        </DetailsContainer>
                            </Container>
                        )
                    )}

                    </>:null}
                    {propertyForRent.length > 0 && location.pathname==='/rent'? <>
                    
                    {propertyForRent.slice(activeIndexRent - 1, activeIndexRent).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevRent}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16,
                                        width: 17,
                                            height: 30
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextRent}>
                                <img src={ArrowRight} alt="arrow-right" style={{
                                        marginLeft: 22,
                                        
                                        marginTop: 17,
                                        width: 17,
                                            height: 30
                    
                                    }}/>
                                </ArrowCircle>
                            </ArrowContainer>
                            <DetailsContainer>
                            <div style={{
                                display: 'flex',
                               
                                marginLeft: 12,
                                color: 'white',
                                height: 20,
                                marginBottom: 15
                                
                            }}><img alt="location-icon" src={LocationMin} style={{
                                marginRight: 10,
                                width: 15,
                                height: 20,
                                marginTop: 20
                                
                                
                            }}/> <h4 style={{
                                size: 20,
                                fontWeight: 700,
                                
                                
                            }}>{house.location}</h4></div>
                           <CardsContainer>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    marginLeft: 12,
                                    color:'white',
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                }}>
                                <img alt="bed-icon" src={BedMin} style={{
                                    marginRight: 10,
                                    width: 15,
                                    height: 60
                                }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    color:'white',
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                    
                                }}>
                                <img alt="house-icon" src={HouseMin} style={{
                                    marginRight: 10,
                                    width: 15,
                                    height: 55
                                }}/>  <h5>{house.livingArea} m</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    
                                    marginLeft: 12,
                                    color:'white',
                                    marginRight: 30,
                                    alignItems: 'center',
                                    alignContent: 'center' 
                                }}>
                                <img alt="size-icon" src={StatisticMin} style={{
                                    marginRight: 10,
                                    marginTop: 0,
                                    width: 15,
                                    height: 55
                                }}/>
                                    <h5>{house.distanceToRoad}m</h5>
                                </div>
                                </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(46,15,89,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.sold')}</CardButton>
                                <div style={{
                                    color: 'white',
                                    display: "flex",
                                    
                                }}>
                                    <div style={{
                                        marginRight: 7,
                                        
                                    }}><h3>BIF</h3></div>
                                    <h3>{(house.price).toLocaleString()}</h3></div>
                                
                            </CardsContainer>
                                    </DetailsContainer>
                        </Container>
                    )
                )}

                </>:null}
                    
            
             
         
           </Home>
           {screen ? null:<>{location.pathname==='/buy' || location.pathname==='/rent' || location.pathname==='/search'? null: <>
           <Button style={{
            width: 467,
            height: 54,
            borderRadius: '5px',
            backgroundColor: 'rgba(255,0,0,1)',
            fontWeight: 700,
            fontSize: 25,
            marginTop: 100
           }} onClick={()=>navigate('/search', {state:propertyForSell})}>{t('propertyForSell.view')}</Button></>}</> }
           
            </Content>
        </Wrapper>
    )
}

export default PropertyForSell;