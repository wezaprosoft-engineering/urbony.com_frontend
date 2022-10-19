import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Arrow, Home } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import { useTranslation } from "react-i18next";
import Location from '../../assets/images/location.svg'
import { useNavigate } from "react-router-dom";
import { ArrowCircle, ArrowContainer, DetailsContainer, Container } from "../HomeCards/HomeCards.style";
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_rigt.svg'
import LocationMin from '../../assets/images/location_min.svg'
import BedMin from '../../assets/images/bed_min.svg'

import HouseMin from '../../assets/images/house_min.svg'

import StatisticMin from '../../assets/images/statistic_min.svg'

const LastSales = props =>{
    const {t} = useTranslation();
    const navigate = useNavigate()
    const url = 'https://urbony.onrender.com/api/property/all/sold'


    const [sales, setSales] = useState('')
    const [activeIndexSales, setActiveIndexSales] = useState(1)
    const next = () =>{
        if(activeIndexSales === sales.length){
            setActiveIndexSales(1)
        }else{
            setActiveIndexSales(activeIndexSales + 1)
        }
    }

    const prev = () =>{
        if(activeIndexSales === 1){
            setActiveIndexSales(sales.length)
        }else{
            setActiveIndexSales(activeIndexSales - 1)
        }
    }
    const lastSales = () => {
        try {
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjI5ODMzNjB9.ZrzVNZ5rBghUyHK82lx0uGwAPRIoCiETApac4io2Fk8`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               console.log(json)
               setSales(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        lastSales();
    }, []);
    
    return(
        <Wrapper>
             <Content style={{
                margin: `${props.margin}`
            }}>
                <Title>
                    <Head>
                        <Line style={{
                            border: '3px solid rgba(46,15,89,1)'
                        }}/>
                        <h3>{t('lastSales.title')}</h3>
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>{t('popular.explore')}</h3>
                        <Arrow src={arrow}/>
                        
                    </Head>


    
                </Title>
                <h3>{props.corporate}</h3>

                <Home>
                    {sales.length > 0 ? (
                        
                    
                    <>
                    {sales.map(
                        house=>(
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
                backgroundColor: "rgba(46, 15, 89 ,1)"
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
                    
                    
                    {sales.slice(activeIndexSales - 1, activeIndexSales).map(house =>(
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

               
                    
                    
                        </>
                    ): <h3>Loading</h3>}
                    
                    
                </Home>
                
            </Content>
            
        </Wrapper>
    )
}

export default LastSales;