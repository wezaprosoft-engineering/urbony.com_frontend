import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Home } from "../../../components/Popular/Popular.styles";
import Step from '../../../assets/images/step.svg'
import { CardText, AppartmentCard } from "../Buy/Buy.styles";
import { Button } from "../../../components/Header/Header.styles";
import HouseBuy1 from '../../../assets/images/housebuy1.png'
import HouseBuy2 from '../../../assets/images/housebuy2.png'
import HouseBuy3 from '../../../assets/images/housebuy3.png'
import Estimation from '../../../assets/images/estimation.svg'
import LastSales from "../../../components/LastSales";
import { EstimationButton, EstmationContent, Estimator } from "../../GetInTouch/GetInTouch.styles";
import Popular from "../../../components/Popular";
import PropertyForSell from "../../../components/PropertyForSell";

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
                    whiteSpace: 'nowrap',
                    overflow: 'auto',
                    
                    color: 'rgba(46,15,89,1)'
                }}> 
                {liveIn ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px',
                    marginRight: screen ? 10 : 0
                }}>Rent Property to Live in</h4>:<h4 style={{
                    cursor: 'pointer',
                    marginRight: screen ? 10 : 0
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
                    width: screen ? '95%': 741,
                    height: screen? 30:70,
                    borderRadius: 5,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: screen? 15:'35px',
                    marginBottom: 100,
                }}>Our Management Offer</Button>

                <Popular margin='0px'/>
                <EstimationButton>
                    <EstmationContent>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>
                

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
                <PropertyForSell margin='0px'/>
                <Popular margin='0px'/>
                <LastSales margin='0px'/>

                </>}
                
            </Content>
        </Wrapper>
        
        </>
    )
}

export default Rent;