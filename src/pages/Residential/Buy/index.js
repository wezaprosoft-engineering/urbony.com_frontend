import React, {useState} from "react";
import { Content, Head, Home, Line, Title, Wrapper } from "../../../components/Popular/Popular.styles";
import { CardText, AppartmentCard } from "./Buy.styles";
import HouseBuy1 from '../../../assets/images/housebuy1.png'
import HouseBuy2 from '../../../assets/images/housebuy2.png'
import HouseBuy3 from '../../../assets/images/housebuy3.png'
import LastSales from "../../../components/LastSales";
import PropertyForSell from "../../../components/PropertyForSell";
import Popular from "../../../components/Popular";


const Buy = () =>{
    const [liveIn, setLiveIn] = useState(true)
    const [invest, setInvest] = useState(false)

    const LiveIn = () =>{
        setInvest(false)
        setLiveIn(true)
    }
    const Invest = () =>{
        setInvest(true)
        setLiveIn(false)
    }
    return(
        <>
        
        <Wrapper>
            
            <Content>
            
                <Title>
                    <Head>
                        <Line/>
                        <h3>Buying to live or invest?</h3>
                    </Head>
                </Title>
                
                <h2>Do you want to buy :</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 230,
                    color: 'rgba(46,15,89,1)'
                }}> {liveIn?
                <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 4px'
                }}>To Live in</h4>: <h4 style={{
                    cursor: 'pointer'
                }} onClick={LiveIn}>To Live in</h4>}
                    
                    {invest ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 4px'
                }}>To Invest</h4>:<h4 style={{
                    cursor: 'pointer'
                }} onClick={Invest}>To Invest</h4>}
                    
                </div>

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
                    </AppartmentCard >
                    <AppartmentCard  style={{
                        backgroundImage: `url(${HouseBuy2})`,
                        
                    }}>
                        <CardText>
                            <h2>House</h2>
                        </CardText>
                    </AppartmentCard >
                    <AppartmentCard  style={{
                        backgroundImage: `url(${HouseBuy3})`,
                        
                    }}>
                        <CardText>
                            <h2>Brand New Property</h2>
                        </CardText>
                    </AppartmentCard >
                </Home>
            </Content>
        </Wrapper>
        
        <PropertyForSell/>
        
        <Popular/>
        <LastSales/>
        </>
    )
}

export default Buy;