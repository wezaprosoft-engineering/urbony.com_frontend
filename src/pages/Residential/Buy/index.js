import React, {useState} from "react";
import { Content, Head, Home, Line, Title, Wrapper } from "../../../components/Popular/Popular.styles";
import { CardText, AppartmentCard } from "./Buy.styles";
import HouseBuy1 from '../../../assets/images/housebuy1.png'
import HouseBuy2 from '../../../assets/images/housebuy2.png'
import HouseBuy3 from '../../../assets/images/housebuy3.png'
import LastSales from "../../../components/LastSales";
import PropertyForSell from "../../../components/PropertyForSell";
import Popular from "../../../components/Popular";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Buy = () =>{
    const {t} = useTranslation();
    const [liveIn, setLiveIn] = useState(true)
    const [invest, setInvest] = useState(false)
    const navigate = useNavigate()

    
    const options = "SELL"

    const LiveIn = () =>{
        setInvest(false)
        setLiveIn(true)
    }
    const Invest = () =>{
        setInvest(true)
        setLiveIn(false)
    }
    const searchUrl = 'https://urbony.onrender.com/api/property/search'
    const searchAppartment = async () => {
        const propertyTypesId = 3
        const body = JSON.stringify({propertyTypesId, options});
        
        try {
           fetch(searchUrl, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
                navigate('/search', {state:json})
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    const searchAccomodation = async () => {
        const propertyTypesId = 2
        const body = JSON.stringify({propertyTypesId, options});
        
        try {
           fetch(searchUrl, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
               navigate('/search', {state:json})
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    const year = new Date().getFullYear()
    const contructionYear = year.toString()
    const brandNew = async () => {
        
        const body = JSON.stringify({contructionYear, options});
        
        try {
           fetch(searchUrl, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
                navigate('/search', {state:json})
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <>
        
        <Wrapper>
            
            <Content>
            
                <Title>
                    <Head>
                        <Line/>
                        <h3>{t('buy.title')}</h3>
                    </Head>
                </Title>
                
                <h2>{t('buy.text')}</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 230,
                    color: 'rgba(46,15,89,1)'
                }}> {liveIn?
                <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 4px'
                }}>{t('buy.liveIn')}</h4>: <h4 style={{
                    cursor: 'pointer'
                }} onClick={LiveIn}>{t('buy.liveIn')}</h4>}
                    
                    {invest ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 4px'
                }}>{t('buy.invest')}</h4>:<h4 style={{
                    cursor: 'pointer'
                }} onClick={Invest}>{t('buy.invest')}</h4>}
                    
                </div>

                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                    
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy1})`,
                        cursor: 'pointer'
                        
                    }} onClick={searchAppartment}>
                        <CardText>
                            <h2>{t('buy.apartments')}</h2>
                        </CardText>
                    </AppartmentCard >
                    <AppartmentCard  style={{
                        backgroundImage: `url(${HouseBuy2})`,
                        cursor: 'pointer'
                        
                    }} onClick={searchAccomodation}>
                        <CardText>
                            <h2>{t('buy.house')}</h2>
                        </CardText>
                    </AppartmentCard >
                    <AppartmentCard  style={{
                        backgroundImage: `url(${HouseBuy3})`,
                        cursor: 'pointer'
                        
                    }} onClick={brandNew}>
                        <CardText>
                            <h2>{t('buy.brandNewProperty')}</h2>
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