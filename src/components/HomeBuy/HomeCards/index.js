import React from "react";
import Location from '../../images/location.svg'
import Bed from '../../images/bed.svg'
import House from '../../images/house.svg'
import Statistic from '../../images/statistic.svg'
import { CardButton, CardsContainer, HomeCards } from "./HomeCards.style";

const HomeCard = props =>{
    return(
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
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>100,000,000</h3></div>
            
        </CardsContainer>
    </HomeCards>
    );
}

export default HomeCard;