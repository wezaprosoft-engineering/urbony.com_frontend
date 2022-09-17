import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Arrow, Home } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import HomeCard from "../HomeCards";
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import { useGlobalState, setGlobalState } from "../../store/state";
import { useTranslation } from "react-i18next";
import Location from '../../assets/images/location.svg'

const LastSales = props =>{
    const {t} = useTranslation();
    const url = 'https://urbony.onrender.com/api/property/all/sold'
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const [card1] = useGlobalState("lastsellcard1")
    const [card2] = useGlobalState("lastsellcard2")
    const Card1 = () =>{
        setGlobalState("lastsellcard1", true)
        setGlobalState("lastsellcard2", false)
        setGlobalState("lastsellcard3", false)
    }
    const Card2 = () =>{
        setGlobalState("lastsellcard1", false)
        setGlobalState("lastsellcard2", true)
        setGlobalState("lastsellcard3", false)
    }
    const Card3 = () =>{
        setGlobalState("lastsellcard1", false)
        setGlobalState("lastsellcard2", false)
        setGlobalState("lastsellcard3", true)
    }

    const [sales, setSales] = useState('')
    const lastSales = () => {
        try {
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjI5ODMzNjB9.ZrzVNZ5rBghUyHK82lx0uGwAPRIoCiETApac4io2Fk8`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               console.log(json)
               setSales(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        lastSales();
    }, []);
    
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
                        <h3>{t('lastSales.title')}</h3>
                    </Head>

                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                        <h3>{t('popular.explore')}</h3>
                        <Arrow src={arrow}/>
                        
                    </Head>


    
                </Title>
                <h3>{props.corporate}</h3>

                <Home>
                    {sales.length > 0 ? (
                        <>
                            {screen ?<>
                        {card1 ?
                            <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText={t('Card.sold')}buttonColor="rgba(46, 15, 89 ,1)" housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>
                    : <>
                    <>
                    {sales.map(
                        house=>(
                            <HomeCards key={house.id}>
        <img alt="house" src={house.coverImage} style={{
            width: 406,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46, 15, 89 ,1)"
            }}>{t('Card.sold')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{house.price}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                        )

                    )}
                    </>
                    </>}
                        </>
                    ): <h3>Loading</h3>}
                    
                    
                </Home>
                
            </Content>
            
        </Wrapper>
    )
}

export default LastSales;