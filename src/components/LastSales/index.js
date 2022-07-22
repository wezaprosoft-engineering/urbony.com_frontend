import React from "react";
import { Content, Head, Line, Title, Wrapper, Arrow, Home } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import HomeCard from "../HomeCards";


const LastSales = props =>{
    
    return(
        <Wrapper>
             <Content style={{
                margin: `${props.margin}`
            }}>
                <Title>
                    <Head>
                        <Line style={{
                            border: '3px solid rgba(46,15,89,1)'
                        }}/>
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
                    <HomeCard buttonText="SOLD" buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/>
                    <HomeCard buttonText="SOLD" buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/>
                    <HomeCard buttonText="SOLD" buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/>
                </Home>
            </Content>
            
        </Wrapper>
    )
}

export default LastSales;