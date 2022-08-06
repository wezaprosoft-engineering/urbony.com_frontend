import React from "react";
import Location from '../../assets/images/location.svg'
import LocationMin from '../../assets/images/location_min.svg'
import BedMin from '../../assets/images/bed_min.svg'
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import HouseMin from '../../assets/images/house_min.svg'
import Statistic from '../../assets/images/statistic.svg'
import StatisticMin from '../../assets/images/statistic_min.svg'
import { ArrowCircle, ArrowContainer, CardButton, CardsContainer, Container, DetailsContainer, HomeCards } from "./HomeCards.style";
import ArrowLeft from '../../assets/images/arrow_left.svg'
import ArrowRight from '../../assets/images/arrow_rigt.svg'
const HomeCard = props =>{
    return(
        <>
        <HomeCards>
        <img alt="house" src={props.housePicture} style={{
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
            <CardButton style={{
                backgroundColor: `${props.buttonColor}`
            }}>{props.buttonText}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>100,000,000</h3></div>
            
        </CardsContainer>
    </HomeCards>
    <Container style={{
        backgroundImage: `url(${props.housePicture})`,
        backgroundSize: 'cover'
    }}>
        <ArrowContainer>
            <ArrowCircle onClick={props.prev}>
                <img src={ArrowLeft} alt="arrow-left" style={{
                    marginLeft: 17,
                    
                    marginTop: 16

                }}/>
            </ArrowCircle>
            <ArrowCircle onClick={props.next}>
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
            
            
        }}>Boulevard de l'Uprona</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            marginTop: 0,
            marginLeft: 12,
            color:'white' 
        }}>
        <img alt="bed-icon" src={BedMin} style={{
            marginRight: 10
        }}/><h5>4 Bed</h5>
        </div>
        <div style={{
            display: 'flex',
            marginTop: 0,
            color:'white'
            
        }}>
        <img alt="house-icon" src={HouseMin} style={{
            marginRight: 10
        }}/>  <h5>10 x 10 m</h5>
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
            <h5>1600m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            marginTop: 0
            
        }}>
            <CardButton style={{
                backgroundColor: `${props.buttonColor}`,
                marginLeft: 10
            }}>{props.buttonText}</CardButton>
            <div style={{
                color: 'white',
                display: "flex",
                
            }}>
                <div style={{
                    marginRight: 7,
                    
                }}><h3>BIF</h3></div>
                <h3>100,000,000</h3></div>
            
        </CardsContainer>
                </DetailsContainer>
    </Container>
    </>
    );
}

export default HomeCard;