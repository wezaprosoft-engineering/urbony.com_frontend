import React, { useState, useEffect } from "react";
import { Arrow, Content, Head, Home, Line, Title, Wrapper } from "../Popular/Popular.styles";
import Bed from '../../assets/images/bed.svg'
import House from '../../assets/images/house.svg'
import Statistic from '../../assets/images/statistic.svg'
import { HomeCards, CardButton, CardsContainer } from "../HomeCards/HomeCards.style";
import Location from '../../assets/images/location.svg'
import arrow from '../../assets/images/arrow.svg'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setGlobalState } from "../../store/state";
const Properties = props =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    
    const [properties, setProperties] = useState('')
    const [sellProperties, setSellProperties] = useState('')
    
    
   

    useEffect(() =>{
        const userId = localStorage.getItem('id')
    const token = localStorage.getItem('token')
        const url = `https://urbony.onrender.com/api/myproperty/${userId}`
    let rent;
    let sell;
    
        try {
            fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               // setProperties(json)
               console.log(json)
               
               rent = json.filter((house) =>
                                                house.property.options === "RENT"
                                            )
                
                sell = json.filter((house) =>
                                                house.property.options === "SELL"
                                            )
                console.log(rent)
                setProperties(rent)
                setSellProperties(sell)
               
            }).catch(error =>{
                console.log(error)
                alert('Kindly login again, your access has expired')
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                localStorage.removeItem('id')
                setGlobalState("loggedIn", false)
                
                
            });
        } catch (error) {
            console.log(error)
        }
    
    }, []);

    const title = props.lineTitle

    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>{title}</h3>
                    </Head>
                    <Head style={{
                        color: "rgba(217,11,66,1)",
                        cursor: "pointer"
                        }} onClick={() => navigate('/add-property')}>
                        <h3>{t('myProperties.add')}</h3>
                        <Arrow src={arrow}/>
                    </Head>
                </Title>
                <Home>
                    {title === t('myProperties.sell') ? <>
                    {sellProperties.length > 0 ? <>
                        {sellProperties.map(
                            house =>(
                                <HomeCards key={house.property.id}>
        <img alt="house" src={house.property.coverImage} style={{
            width: 406,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.property.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.property.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.property.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46,15,89,1)"
            }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.property.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                    </>: <h2>Loading</h2>}
                    </>:<>
                    {properties.length > 0 ? <>
                        {properties.map(
                            house =>(
                                <HomeCards key={house.property.id}>
        <img alt="house" src={house.property.coverImage} style={{
            width: 406,
            height: 334
        }}/>
        <div style={{
            display: 'flex',
            
            marginLeft: 12
        }}><img alt="location-icon" src={Location} style={{
            marginRight: 10
        }}/> <h4>{house.property.location}</h4></div>
        <CardsContainer>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="bed-icon" src={Bed} style={{
            marginRight: 10
        }}/><h5>{house.property.bedrooms} {t('Card.bed')}</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="house-icon" src={House} style={{
            marginRight: 10
        }}/>  <h5>{house.property.livingArea} m2</h5>
        </div>
        <div style={{
            display: 'flex',
            
            margin: 12
        }}>
        <img alt="size-icon" src={Statistic} style={{
            marginRight: 10
        }}/>
            <h5>{house.property.distanceToRoad}m</h5>
        </div>
        </CardsContainer>
        <CardsContainer style={{
            
            
        }}>
            <CardButton style={{
                backgroundColor: "rgba(46,15,89,1)"
            }} onClick={()=> navigate(`/edit-property/${house.property.id}`)}>{t('myProperties.edit')}</CardButton>
            <div style={{
                color: `rgba(46,15,89,1)`,
                display: "flex",
                marginRight: 50
            }}>
                <div style={{
                    marginRight: 7,
                    color: 'black'
                }}><h3>BIF</h3></div>
                <h3>{(house.property.price)?.toLocaleString()}</h3></div>
            
        </CardsContainer>
    </HomeCards>
                            )
                        )}
                    </>: <h2>Loading</h2>}
                    </>}
                    
                    
                </Home>
            </Content>
        </Wrapper>
    )
}

export default Properties;