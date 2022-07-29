import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Home, Arrow } from "../../../components/Popular/Popular.styles";
import Step from '../../../assets/images/step.svg'
import { CardText, AppartmentCard } from "../Buy/Buy.styles";
import { Button } from "../../../components/Header/Header.styles";
import HouseBuy1 from '../../../assets/images/housebuy1.png'
import HouseBuy2 from '../../../assets/images/housebuy2.png'
import HouseBuy3 from '../../../assets/images/housebuy3.png'
import arrow from '../../../assets/images/arrow.svg'
import House1 from '../../../assets/images/house1.png'
import Estimation from '../../../assets/images/estimation.svg'
import { Input } from "../../../components/WelcomeSection/Welcome.styles";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
import HomeCard from "../../../components/HomeCards";



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
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>Renting to live or Renting out your Property?</h3>
                        
                    </Head>
                </Title>

                <h2>Do you want to: </h2>
                {screen ? <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 390,
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
                    
                    
                    
                </div>: <div style={{
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
                    
                    
                    
                </div>}
                
                {rentOut ? <>
                

                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy1})`,
                    }}>
                        <CardText>
                            <h2>Apartments</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy2})`,
                    }}>
                        <CardText>
                            <h2>House</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy3})`,
                    }}>
                        <CardText>
                            <h2>Brand New Property</h2>
                        </CardText>
                    </AppartmentCard>
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
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
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
                   <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy1})`,
                    }}>
                        <CardText>
                            <h2>Apartments</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy2})`,
                    }}>
                        <CardText>
                            <h2>House</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy3})`,
                    }}>
                        <CardText>
                            <h2>Brand New Property</h2>
                        </CardText>
                    </AppartmentCard>
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
                    {screen ? null: 
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
                    </Title>}
                    
                </Head>

                <Home>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
                <HomeCard housePicture={House1} buttonColor='rgba(46,15,89,1)' buttonText='SOLD'/>
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
                    {screen? null:
                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                    </Head>
                    }
                    
                </Head>

                <Home style={{
                    marginBottom: 175
                }}>
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
                    <HomeCard housePicture={House1} buttonColor='red' buttonText='Rent'/>
                </Home>
                <LastSales margin='0px'/>

                </>}
                
            </Content>
        </Wrapper>
        <SellerRequestForm  text="Would you like your property Rented by us? Contact us for more information"/>
        </>
    )
}

export default Rent;