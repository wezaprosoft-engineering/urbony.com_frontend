import React, { useState, useEffect } from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper } from "../Popular/Popular.styles";
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import Location from '../../assets/images/location.svg'
import arrow from '../../assets/images/arrow.svg'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setGlobalState } from "../../store/state";
import { ArrowCircle, ArrowContainer, DetailsContainer, Container } from "../HomeCards/HomeCards.style";
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_rigt.svg'
import LocationMin from '../../assets/images/location_min.svg'
import BedMin from '../../assets/images/bed_min.svg'

import HouseMin from '../../assets/images/house_min.svg'

import StatisticMin from '../../assets/images/statistic_min.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Spinner";


const Properties = props =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    
    const [properties, setProperties] = useState('')
    const [sellProperties, setSellProperties] = useState('')
    const [loading, setLoading] = useState(false)
    
   

    useEffect(() =>{
        const userId = localStorage.getItem('id')
    const token = localStorage.getItem('token')
        const url = `https://urbony.onrender.com/api/myproperty/${userId}`
    let rent;
    let sell;
    
        try {
            setLoading(true)
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               // setProperties(json)
               console.log(json)
               
               rent = json.filter((house) =>
                                                house.property.options === "RENT"
                                            )
                
                sell = json.filter((house) =>
                                                house.property.options === "SELL"
                                            )
                console.log(rent)
                setLoading(false)
                setProperties(rent)
                setSellProperties(sell)
               
            }).catch(error =>{
                console.log(error)
                setLoading(false)
                toast('Kindly login again, your access has expired', 
                    {position: toast.POSITION.TOP_RIGHT})
                    setGlobalState("loggedIn", false)
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                localStorage.removeItem('id')
                
                
                
            });
        } catch (error) {
            console.log(error)
        }
    
    }, []);

    const title = props.lineTitle

    const [activeIndexRent, setActiveIndexRent] = useState(1)
    const [activeIndexSell, setActiveIndexSell] = useState(1)

    const nextRent = () =>{
        if(activeIndexRent === properties.length){
            setActiveIndexRent(1)
        }else{
            setActiveIndexRent(activeIndexRent + 1)
        }
    }

    const prevRent = () =>{
        if(activeIndexSell === 1){
            setActiveIndexSell(properties.length)
        }else{
            setActiveIndexSell(activeIndexSell - 1)
        }
    }

    const nextSell = () =>{
        if(activeIndexSell === sellProperties.length){
            setActiveIndexSell(1)
        }else{
            setActiveIndexSell(activeIndexSell + 1)
        }
    }

    const prevSell = () =>{
        if(activeIndexSell === 1){
            setActiveIndexSell(sellProperties.length)
        }else{
            setActiveIndexSell(activeIndexSell - 1)
        }
    }

    return(
        <Wrapper>
            {loading ? (<Loading/>):(
                <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>{title}</h3>
                    </Head>
                    <Head style={{
                        color: "rgba(217,11,66,1)",
                        cursor: "pointer"
                        }} onClick={() => navigate('/add-property')}>
                        <h3>{t('myProperties.add')}</h3>
                        <Arrow src={arrow}/>
                    </Head>
                </Title>
                <Home>
                    {title === t('myProperties.sell') ? <>
                    {sellProperties.length > 0 ? <>
                        {sellProperties.map(
                            house =>(
                                <HomeCards key={house.property.id}>
        <img alt="house" src={house.property.coverImage} style={{
            width: 436,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.property.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.property.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.property.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46,15,89,1)"
            }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.property.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                        {sellProperties.slice(activeIndexSell - 1, activeIndexSell).map(house =>(
                            <Container style={{
                                backgroundImage: `url(${house.property.coverImage})`,
                                backgroundSize: 'cover'
                            }} key={house.id}>
                                <ArrowContainer>
                                    <ArrowCircle onClick={prevSell}>
                                        <img src={ArrowLeft} alt="arrow-left" style={{
                                            marginLeft: 17,
                                            
                                            marginTop: 16
                        
                                        }}/>
                                    </ArrowCircle>
                                    <ArrowCircle onClick={nextSell}>
                                    <img src={ArrowRight} alt="arrow-right" style={{
                                            marginLeft: 22,
                                            
                                            marginTop: 17
                        
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
                                    
                                    
                                }}>{house.property.location}</h4></div>
                                <CardsContainer>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    marginLeft: 12,
                                    color:'white' 
                                }}>
                                <img alt="bed-icon" src={BedMin} style={{
                                    marginRight: 10
                                }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    color:'white'
                                    
                                }}>
                                <img alt="house-icon" src={HouseMin} style={{
                                    marginRight: 10
                                }}/>  <h5>{house.property.livingArea} m</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    
                                    marginLeft: 12,
                                    color:'white',
                                    marginRight: 30,
                                }}>
                                <img alt="size-icon" src={StatisticMin} style={{
                                    marginRight: 10,
                                    marginTop: 0
                                }}/>
                                    <h5>{house.property.distanceToRoad}m</h5>
                                </div>
                                </CardsContainer>
                                <CardsContainer style={{
                                    marginTop: 0
                                    
                                }}>
                                    <CardButton style={{
                                        backgroundColor: "rgba(46,15,89,1)",
                                        marginLeft: 10
                                    }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
                                    <div style={{
                                        color: 'white',
                                        display: "flex",
                                        
                                    }}>
                                        <div style={{
                                            marginRight: 7,
                                            
                                        }}><h3>BIF</h3></div>
                                        <h3>{(house.property.price)?.toLocaleString()}</h3></div>
                                    
                                </CardsContainer>
                                        </DetailsContainer>
                            </Container>
                        )
                    )}

                    </>: <h2>No properties to display</h2>}
                    </>:<>
                    {properties.length > 0 ? <>
                        {properties.map(
                            house =>(
                                <HomeCards key={house.property.id}>
        <img alt="house" src={house.property.coverImage} style={{
            width: 436,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.property.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.property.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.property.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46,15,89,1)"
            }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.property.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                        {properties.slice(activeIndexRent - 1, activeIndexRent).map(house =>(
                            <Container style={{
                                backgroundImage: `url(${house.property.coverImage})`,
                                backgroundSize: 'cover'
                            }} key={house.id}>
                                <ArrowContainer>
                                    <ArrowCircle onClick={prevRent}>
                                        <img src={ArrowLeft} alt="arrow-left" style={{
                                            marginLeft: 17,
                                            
                                            marginTop: 16
                        
                                        }}/>
                                    </ArrowCircle>
                                    <ArrowCircle onClick={nextRent}>
                                    <img src={ArrowRight} alt="arrow-right" style={{
                                            marginLeft: 22,
                                            
                                            marginTop: 17
                        
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
                                    
                                    
                                }}>{house.property.location}</h4></div>
                                <CardsContainer>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    marginLeft: 12,
                                    color:'white' 
                                }}>
                                <img alt="bed-icon" src={BedMin} style={{
                                    marginRight: 10
                                }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    marginTop: 0,
                                    color:'white'
                                    
                                }}>
                                <img alt="house-icon" src={HouseMin} style={{
                                    marginRight: 10
                                }}/>  <h5>{house.property.livingArea} m</h5>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    
                                    marginLeft: 12,
                                    color:'white',
                                    marginRight: 30,
                                }}>
                                <img alt="size-icon" src={StatisticMin} style={{
                                    marginRight: 10,
                                    marginTop: 0
                                }}/>
                                    <h5>{house.property.distanceToRoad}m</h5>
                                </div>
                                </CardsContainer>
                                <CardsContainer style={{
                                    marginTop: 0
                                    
                                }}>
                                    <CardButton style={{
                                        backgroundColor: "rgba(46,15,89,1)",
                                        marginLeft: 10
                                    }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
                                    <div style={{
                                        color: 'white',
                                        display: "flex",
                                        
                                    }}>
                                        <div style={{
                                            marginRight: 7,
                                            
                                        }}><h3>BIF</h3></div>
                                        <h3>{(house.property.price)?.toLocaleString()}</h3></div>
                                    
                                </CardsContainer>
                                        </DetailsContainer>
                            </Container>
                        )
                    )}
                    </>: <h2>No properties to display</h2>}
                    </>}
                    
                    
                </Home>
                <ToastContainer progressClassName="toastProgress"/>
            </Content>
            )}
        </Wrapper>
    )
}

export default Properties;