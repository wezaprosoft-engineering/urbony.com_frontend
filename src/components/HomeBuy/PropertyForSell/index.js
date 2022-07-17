import React from "react";
import { Content, Head, Title, Wrapper, Home } from "../Popular/Popular.styles";
import House1 from '../../images/house1.png'
import HomeCard from "../HomeCards";
import { Input } from "../WelcomeSection/Welcome.styles";
import { Button } from "../Header/Header.styles";
const PropertyForSell = props =>{
    return(
        <Wrapper>
            <Content style={{
                textAlign: 'center'
            }}>
            <Head>
            <Title>
                <h2 style={{
                    fontWeight: 500,
                    color: 'rgba(46,15,89,1)'
                }}>Our property for sell</h2>
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
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Rent" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
           </Home>
           <Button style={{
            width: 467,
            height: 54,
            borderRadius: '5px',
            backgroundColor: 'rgba(255,0,0,1)',
            fontWeight: 700,
            fontSize: 25,
            marginTop: 100
           }}>View All</Button>
            </Content>
        </Wrapper>
    )
}

export default PropertyForSell;