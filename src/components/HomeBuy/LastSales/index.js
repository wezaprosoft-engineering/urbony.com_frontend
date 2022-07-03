import React from "react";
import { Content, Head, Line, Title, Wrapper, Arrow, Home, HomeCards, CardImage, DetailsRow, CardsContainer, Locationrow, CardButton } from "../Popular/Popular.styles";
import arrow from '../../images/arrow.svg'
import House1 from '../../images/house1.png'
import Location from '../../images/location.svg'
import Bed from '../../images/bed.svg'
import House from '../../images/house.svg'
import Statistic from '../../images/statistic.svg'

const LastSales = () =>{
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>Our last sales</h3>
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>Explore All</h3>
                        <Arrow src={arrow}/>
                        
                    </Head>


    
                </Title>

                <Home>
                    <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
                            <div><h3>BIF</h3></div>
                            <div style={{
                                color: 'rgba(46,15,89,1)'
                            }}><h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                        
                    </HomeCards>
                    <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
                            <div><h3>BIF</h3></div>
                            <div style={{
                                color: 'rgba(46,15,89,1)'
                            }}><h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                        
                    </HomeCards>
                    <HomeCards>
                        <CardImage src={House1}/>
                        <Locationrow><img src={Location} style={{
                            marginRight: 10
                        }}/> <h4>Boulevard de l'Uprona</h4></Locationrow>
                        <CardsContainer>
                        <DetailsRow>
                            <img src={Bed} style={{
                            marginRight: 10
                        }}/>
                            <h5>4 Bed</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={House} style={{
                            marginRight: 10
                        }}/>
                            <h5>10 x 10 m</h5>
                        </DetailsRow>
                        <DetailsRow>
                            <img src={Statistic} style={{
                            marginRight: 10
                        }}/>
                            <h5>1600m</h5>
                        </DetailsRow>
                        </CardsContainer>

                        <CardsContainer>
                            <CardButton style={{
                                backgroundColor: 'rgba(46,15,89,1)'
                            }}>SOLD</CardButton>
                            <div><h3>BIF</h3></div>
                            <div style={{
                                color: 'rgba(46,15,89,1)'
                            }}><h3>100,000,000</h3></div>
                            
                        </CardsContainer>
                        
                    </HomeCards>
                </Home>
            </Content>
        </Wrapper>
    )
}

export default LastSales;