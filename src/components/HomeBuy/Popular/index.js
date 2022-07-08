import React ,{useState} from "react";
import { Arrow, Content, Head, Home, HomeCards, Line, Title, Wrapper, CardsContainer, CardButton, CorporateContent } from "./Popular.styles";
import arrow from '../../images/arrow.svg'
import Location from '../../images/location.svg'
import Bed from '../../images/bed.svg'
import House from '../../images/house.svg'
import Statistic from '../../images/statistic.svg'
import House1 from '../../images/house1.png'
import House2 from '../../images/house2.png'
import House3 from '../../images/house3.png'
import { useGlobalState } from "../../state";


const Popular = () => {
    const [Corporate] = useGlobalState("corporate")
    const [offices, setOffices] = useState(true)
    const [stores, setStores] = useState(false)
    const [industrial, setIndustrial] = useState(false)

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
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        
                    <Line/>
                    <h3>Popular</h3>
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                        
                        
                        
                        
                    </Head>
                   
                </Title>
                {Corporate ? <CorporateContent>
                    {offices ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'red'
                }} >Offices</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleOffice}>Offices</h2>}
                    
                {stores ? <h2 style={{
                    
                    size: 35,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'red'
                }}>Stores</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                    
                }} onClick={handleStores}>Stores</h2>}
                
                {industrial
                 ? <h2 style={{
                    size: 35,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'red'
                }}>Industrial</h2>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700,
                    cursor: "pointer"
                }} onClick={handleIndustrial}>Industrial</h2>}
                

                </CorporateContent>: <h2 style={{
                    color: "rgba(46,15,89,1)",
                    size: 35,
                    fontWeight: 700
                }}>Our Popular Homes</h2>}
                
                

                <Home>
                    <HomeCards>
                        <img alt="house" src={House1} style={{
                            width: 406,
                            height: 334
                        }}/>
                        <div style={{
                            display: 'flex',
                            
                            marginLeft: 12
                        }}><img alt="location-icon" src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></div>
                        <CardsContainer>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="bed-icon" src={Bed} style={{
                            marginRight: 10
                        }}/><h5>4 Bed</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="house-icon" src={House} style={{
                            marginRight: 10
                        }}/>  <h5>10 x 10 m</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="size-icon" src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </div>
                        </CardsContainer>
                        <CardsContainer style={{
                            
                            
                        }}>
                            <CardButton>Book Now</CardButton>
                            <div style={{
                                color: 'rgba(46,15,89,1)',
                                display: "flex",
                            }}>
                                <div style={{
                                    marginRight: 7,
                                    color: 'black'
                                }}><h3>BIF</h3></div>
                                <h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                    </HomeCards>
                    <HomeCards>
                        <img alt="house" src={House2} style={{
                            width: 406,
                            height: 334
                        }}/>
                        <div style={{
                            display: 'flex',
                            
                            marginLeft: 12
                        }}><img alt="location-icon" src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></div>
                        <CardsContainer>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="bed-icon" src={Bed} style={{
                            marginRight: 10
                        }}/><h5>4 Bed</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="house-icon" src={House} style={{
                            marginRight: 10
                        }}/>  <h5>10 x 10 m</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="size-icon" src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </div>
                        </CardsContainer>
                        <CardsContainer style={{
                            
                            
                        }}>
                            <CardButton>Book Now</CardButton>
                            <div style={{
                                color: 'rgba(46,15,89,1)',
                                display: "flex",
                            }}>
                                <div style={{
                                    marginRight: 7,
                                    color: 'black'
                                }}><h3>BIF</h3></div>
                                <h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                    </HomeCards>
                    <HomeCards>
                        <img alt="house" src={House3} style={{
                            width: 406,
                            height: 334
                        }}/>
                        <div style={{
                            display: 'flex',
                            
                            marginLeft: 12
                        }}><img alt="location-icon" src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></div>
                        <CardsContainer>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="bed-icon" src={Bed} style={{
                            marginRight: 10
                        }}/><h5>4 Bed</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="house-icon" src={House} style={{
                            marginRight: 10
                        }}/>  <h5>10 x 10 m</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            
                            margin: 12
                        }}>
                        <img alt="size-icon" src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </div>
                        </CardsContainer>
                        <CardsContainer style={{
                            
                            
                        }}>
                            <CardButton>Book Now</CardButton>
                            <div style={{
                                color: 'rgba(46,15,89,1)',
                                display: "flex",
                            }}>
                                <div style={{
                                    marginRight: 7,
                                    color: 'black'
                                }}><h3>BIF</h3></div>
                                <h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                    </HomeCards>
                </Home>
                
            </Content>
        </Wrapper>
    )
}

export default Popular;