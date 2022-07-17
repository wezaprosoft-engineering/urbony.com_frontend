import React, {useState} from "react";
import { Content, Head, Line, Title, Wrapper, Home, HomeCards, Arrow, CardImage, Locationrow, CardsContainer, DetailsRow, CardButton } from "../Popular/Popular.styles";
import Step from '../../images/step.svg'
import { CardText } from "../Buy/Buy.styles";
import { Button } from "../Header/Header.styles";
import HouseBuy1 from '../../images/housebuy1.png'
import HouseBuy2 from '../../images/housebuy2.png'
import HouseBuy3 from '../../images/housebuy3.png'
import arrow from '../../images/arrow.svg'
import Location from '../../images/location.svg'
import Bed from '../../images/bed.svg'
import House from '../../images/house.svg'
import Statistic from '../../images/statistic.svg'
import House1 from '../../images/house1.png'
import Estimation from '../../images/estimation.svg'
import { Input } from "../WelcomeSection/Welcome.styles";
import LastSales from "../LastSales";

const Rent = () => {
    const [rentOut, setRentOut] = useState(false)
    const [liveIn, setLiveIn] = useState(true)

    const RentOut = () =>{
        setRentOut(true)
        setLiveIn(false)
    }
    const LiveIn = () =>{
        setRentOut(false)
        setLiveIn(true)
    }
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>Renting to live or Renting out your Property?</h3>
                        
                    </Head>
                </Title>

                <h2>Do you want to: </h2>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 450,
                    color: 'rgba(46,15,89,1)'
                }}> 
                {liveIn ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px'
                }}>Rent Property to Live in</h4>:<h4 style={{
                    cursor: 'pointer'
                }} onClick={LiveIn}>Rent property to Live In</h4>}
                {rentOut?
                <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px'
                }}>Rent out my own Property</h4>: <h4 style={{
                    cursor: 'pointer'
                }} onClick={RentOut}>Rent out my own Property</h4>}
                    
                    
                    
                </div>
                {rentOut ? <>
                

                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy1})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>Apartments</h2>
                        </CardText>
                    </HomeCards>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy2})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>House</h2>
                        </CardText>
                    </HomeCards>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy3})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>Brand New Property</h2>
                        </CardText>
                    </HomeCards>
                </Home>

                <Head  style={{
                        marginBottom: 130
                    }}>
                    <Title>
                        <Line style={{
                            border: '2px solid black',
                            marginTop: 40
                        }}/>
                        <h1 style={{
                    color: "rgba(46,15,89,1)",
                    
                }}>Are you an owner?</h1>
                    </Title>
                </Head>
                    
                <h2 style={{
                    marginBottom: 20,
                }}>Would you like to rent your property out?</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Skills accumulated for more than 40 years</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Unrivaled advertising striking force</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Selection of potential tenants: check creditworthiness</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>One single point of contact for your file: a personalized relationship</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Advice on the rental value of your property</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Advice on the works to be carried out to upgrade your property</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400,
                    marginBottom: 120
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>Whatever the kind of your property: house, apartment, villa, duplex, triplex, penthouse, studio, loft, ground floor</h3></div>
                <h3 style={{
                fontWeight: 400,
                marginBottom: 100,
                }}>Discover our rental management offer: our team assists you to get relieved of the daily management of your real estate properties
                    and supervises the important stages of the relationship with your tenants.
                </h3>
                <Button style={{
                    width: 741,
                    height: 70,
                    borderRadius: 5,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '35px',
                    marginBottom: 100,
                }}>Our Management Offer</Button>

<Head  style={{
                        marginBottom: 150
                    }}>
                    <Title>
                        <Line style={{
                            border: '2px solid',
                            marginTop: 40
                        }}/>
                        <h1 style={{
                   
                    
                }}>Our Popular Homes</h1>
                    </Title>
                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                        
                        
                        
                        
                    </Head>
                </Head>

                <Home style={{
                    marginBottom: 175
                }}>
                    <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                <Button style={{
                    backgroundColor: 'red',
                    borderRadius: '10px',
                    height : '55px',
                    width: '95%',
                    fontWeight: 700,
                    fontSize: '35px',
                    marginTop: 200,
                    marginBottom: 200,
                    
                    
                   }}><div style={{
                    display: 'flex',
                    
                    width: 410,
                    margin: 'auto auto auto auto'
                    
                   }}>Get Free Estimation <img src={Estimation} alt='estimation' style={{
                    width: 30,
                    height: 40,
                    marginLeft: 13
                   }}/></div></Button>

                </>: <>
                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy1})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>Apartments</h2>
                        </CardText>
                    </HomeCards>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy2})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>House</h2>
                        </CardText>
                    </HomeCards>
                    <HomeCards style={{
                        backgroundImage: `url(${HouseBuy3})`,
                        backgroundSize: 'cover'
                    }}>
                        <CardText>
                            <h2 style={{
                                paddingTop: 35
                            }}>Brand New Property</h2>
                        </CardText>
                    </HomeCards>
                </Home>
                <Head style={{
                    marginBottom: 150
                }}>
                    <Title style={{
                        color: 'rgba(46,15,89,1)',
                        
                    }}>
                        <h2 style={{
                            fontWeight: 500
                        }}>Our properties for rent</h2>
                    </Title>
                    <Title>
                    <h2 style={{
                            fontWeight: 500
                        }}>Sort By: </h2>
                        <Input placeholder='Price' type='number' style={{
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
                    </Title>
                </Head>

                <Home>
                <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
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

                <Head  style={{
                        marginTop: 150,
                        marginBottom: 120,
                    }}>
                    <Title>
                        <Line style={{
                            border: '2px solid',
                            marginTop: 40
                        }}/>
                        <h1 style={{
                   
                    
                }}>Our Popular Homes</h1>
                    </Title>
                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                        
                        
                        
                        
                    </Head>
                </Head>

                <Home style={{
                    marginBottom: 175
                }}>
                    <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} alt="location-icon" style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} alt="bed" style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} alt="house-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} alt="size-icon" style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'red'
                            }}>Rent</CardButton>
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
                <LastSales margin='0px'/>

                </>}
                
            </Content>
        </Wrapper>
    )
}

export default Rent;