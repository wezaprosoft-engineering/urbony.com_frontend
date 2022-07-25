import React from "react";
import { HomeCards, CardButton, CardsContainer} from "../HomeCards/HomeCards.style";
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import Location from '../../assets/images/location.svg'
const CorporateCards = props =>{
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
        <div style={{
            width: 90
        }}></div>
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
    )
}

export default CorporateCards;