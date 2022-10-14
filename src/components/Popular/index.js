import React ,{useState, useEffect} from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper,  CorporateContent } from "./Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import {  useGlobalState } from "../../store/state";
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
const Popular = props => {
    const {t} = useTranslation();
    const location = useLocation()
    const navigate = useNavigate()
    const [Corporate] = useGlobalState("corporate")
    const [offices, setOffices] = useState(true)
    const [stores, setStores] = useState(false)
    const [industrial, setIndustrial] = useState(false)
  
 
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

   
    const url = 'https://urbony.onrender.com/api/property/all/homes'
    const rentUrl = 'https://urbony.onrender.com/api/property/all/rent'
    const officeUrl = 'https://urbony.onrender.com/api/property/all/offices'
    const commercialUrl = 'https://urbony.onrender.com/api/property/all/stores'
    const IndustrialUrl = 'https://urbony.onrender.com/api/property/all/industrial'
    const [officers, setOfficers] = useState('')
    const [commercial, setCommercial] = useState('')
    const [industrials, setIndustrials] = useState('')
    const [popularHomes, setPopularHomes] = useState('')
    const [popularRent, setPopularRent] = useState('')

    const [activeIndexOfficers, setActiveIndexOfficers] = useState(1)
    const [activeIndexCommercial, setActiveIndexCommercial] = useState(1)
    const [activeIndexIndustrials, setActiveIndexIndustrials] = useState(1)
    const [activeIndexPopularHomes, setActiveIndexPopularHomes] = useState(1)
    const [activeIndexPopularRent, setActiveIndexPopularRent] = useState(1)

    


    const nextPopularRent = () =>{
        if(activeIndexPopularRent === popularRent.length){
            setActiveIndexPopularRent(1)
        }else{
            setActiveIndexPopularRent(activeIndexPopularRent + 1)
        }
    }

    const prevPopularRent = () =>{
        if(activeIndexPopularRent === 1){
            setActiveIndexPopularRent(popularRent.length)
        }else{
            setActiveIndexPopularRent(activeIndexPopularRent - 1)
        }
    }

    const nextPopularHomes = () =>{
        if(activeIndexPopularHomes === popularHomes.length){
            setActiveIndexPopularHomes(1)
        }else{
            setActiveIndexPopularHomes(activeIndexPopularHomes + 1)
        }
    }

    const prevPopularHomes = () =>{
        if(activeIndexPopularHomes === 1){
            setActiveIndexPopularHomes(popularHomes.length)
        }else{
            setActiveIndexPopularHomes(activeIndexPopularHomes - 1)
        }
    }
    const nextIndustrial = () =>{
        if(activeIndexIndustrials === industrials.length){
            setActiveIndexIndustrials(1)
        }else{
            setActiveIndexIndustrials(activeIndexIndustrials + 1)
        }
    }

    const prevIndustrial = () =>{
        if(activeIndexIndustrials === 1){
            setActiveIndexIndustrials(industrials.length)
        }else{
            setActiveIndexIndustrials(activeIndexIndustrials - 1)
        }
    }
    const nextOfficers = () =>{
        if(activeIndexOfficers === officers.length){
            setActiveIndexOfficers(1)
        }else{
            setActiveIndexOfficers(activeIndexOfficers + 1)
        }
    }

    const prevOfficers = () =>{
        if(activeIndexOfficers === 1){
            setActiveIndexOfficers(officers.length)
        }else{
            setActiveIndexOfficers(activeIndexOfficers - 1)
        }
    }
    const nextCommercial = () =>{
        if(activeIndexCommercial === commercial.length){
            setActiveIndexCommercial(1)
        }else{
            setActiveIndexCommercial(activeIndexCommercial + 1)
        }
    }

    const prevCommercial = () =>{
        if(activeIndexCommercial === 1){
            setActiveIndexCommercial(commercial.length)
        }else{
            setActiveIndexCommercial(activeIndexCommercial - 1)
        }
    }
    const popular = () => {
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
               setPopularHomes(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        popular();
    }, []);
    const rent = () => {
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
               setPopularRent(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        rent();
    }, []);
    const office = () => {
        try {
            fetch(officeUrl,{
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
               setOfficers(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        office();
    }, []);

    const commercialHouse = () => {
        try {
            fetch(commercialUrl,{
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
               setCommercial(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        commercialHouse();
    }, []);
    const industrialHouse = () => {
        try {
            fetch(IndustrialUrl,{
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
               setIndustrials(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        industrialHouse();
    }, []);
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
                
                {Industrial || Commercial || Offices ? <>:<Home>
                        {officers.length > 0 && location.pathname==='/offices'? <>
                            {officers.map(
                                (house =>(
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                                ))
                            )}
                            {officers.length > 0 && location.pathname==='/offices'? <>
                    
                    {officers.slice(activeIndexOfficers - 1, activeIndexOfficers).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevOfficers}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextOfficers}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217,11,66,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        </>:<>
                        {commercial.length > 0 && location.pathname==='/commercial-space' ? <>
                            {commercial.map(
                                house => (
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                            {commercial.length > 0 && location.pathname==='/commercial-space'? <>
                    
                    {commercial.slice(activeIndexCommercial - 1, activeIndexCommercial).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevCommercial}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextCommercial}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217, 11, 66 ,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        </>:<>
                        {industrials.length > 0 && location.pathname==='/industrial-space' ? <>
                            {industrials.map(
                                house => (
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                            {industrials.length > 0 && location.pathname==='/industrial-space'? <>
                    
                    {industrials.slice(activeIndexIndustrials - 1, activeIndexIndustrials).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevIndustrial}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextIndustrial}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217, 11, 66 ,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        </>:<h2>Loading</h2>}
                        </>}
                        </>}
                    
                </Home>
                </>: <Home>{Corporate && offices ? <>
                {officers.length > 0 ? <>
                    {officers.map(
                                (house =>(
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                                ))
                            )}
                </>:<h2>No properties</h2>}
                    
                            {officers.length > 0 ? <>
                    
                    {officers.slice(activeIndexOfficers - 1, activeIndexOfficers).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevOfficers}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextOfficers}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217,11,66,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                </>:<>
                {Corporate && stores ? <>
                    {commercial.map(
                                house => (
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                            {commercial.length > 0 ? <>
                    
                    {commercial.slice(activeIndexCommercial - 1, activeIndexCommercial).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevCommercial}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextCommercial}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217, 11, 66 ,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                </>:<>
                { industrial? <>
                    {industrials.length > 0 ? <>
                            {industrials.map(
                                house => (
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
        <div style={{
            width: 90
        }}></div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: `rgba(217, 11, 66 ,1)`
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                            {industrials.length > 0 ? <>
                    
                    {industrials.slice(activeIndexIndustrials - 1, activeIndexIndustrials).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevIndustrial}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextIndustrial}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217, 11, 66 ,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        </>:<h2>Loading</h2>}
                </>:<>
                
                {popularHomes.length > 0 && location.pathname!=='/rent'? <>
                        <>
                        {popularHomes.map(
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
                backgroundColor: "rgba(217, 11, 66 ,1)" 
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        {popularHomes.length > 0 && location.pathname!=='/rent'? <>
                    
                    {popularHomes.slice(activeIndexPopularHomes - 1, activeIndexPopularHomes).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevPopularHomes}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextPopularHomes}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "rgba(217, 11, 66,1)",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.book')}</CardButton>
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
                        </>
                        
                    </>: <>
                        {popularRent.length > 0 && location.pathname==='/rent' ? <>
                        {popularRent.map(
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
            }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.rent')}</CardButton>
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
                        {popularRent.length > 0 && location.pathname==='/rent'? <>
                    
                    {popularRent.slice(activeIndexPopularRent - 1, activeIndexPopularRent).map(house =>(
                        <Container style={{
                            backgroundImage: `url(${house.coverImage})`,
                            backgroundSize: 'cover'
                        }} key={house.id}>
                            <ArrowContainer>
                                <ArrowCircle onClick={prevPopularRent}>
                                    <img src={ArrowLeft} alt="arrow-left" style={{
                                        marginLeft: 17,
                                        
                                        marginTop: 16
                    
                                    }}/>
                                </ArrowCircle>
                                <ArrowCircle onClick={nextPopularRent}>
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
                                
                                
                            }}>{house.location}</h4></div>
                            <CardsContainer>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                marginLeft: 12,
                                color:'white' 
                            }}>
                            <img alt="bed-icon" src={BedMin} style={{
                                marginRight: 10
                            }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
                            </div>
                            <div style={{
                                display: 'flex',
                                marginTop: 0,
                                color:'white'
                                
                            }}>
                            <img alt="house-icon" src={HouseMin} style={{
                                marginRight: 10
                            }}/>  <h5>{house.livingArea} m</h5>
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
                                <h5>{house.distanceToRoad}m</h5>
                            </div>
                            </CardsContainer>
                            <CardsContainer style={{
                                marginTop: 0
                                
                            }}>
                                <CardButton style={{
                                    backgroundColor: "red",
                                    marginLeft: 10
                                }} onClick={()=> navigate(`/property/${house.id}`)}>{t('Card.rent')}</CardButton>
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
                        </>: <h2>Loading</h2>}
                    </>}
                </>}
                </>}
                </>}
                    
                    
                    
                </Home>}

                
                
            </Content>
        </Wrapper>
    )
}

export default Popular;