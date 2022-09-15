import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Home } from "../../../components/Popular/Popular.styles";
import Step from '../../../assets/images/step.svg'
import { CardText, AppartmentCard } from "../Buy/Buy.styles";
import { Button } from "../../../components/Header/Header.styles";
import HouseBuy1 from '../../../assets/images/housebuy1.png'
import HouseBuy2 from '../../../assets/images/housebuy2.png'
import HouseBuy3 from '../../../assets/images/housebuy3.png'
import Estimation from '../../../assets/images/estimation.svg'
import LastSales from "../../../components/LastSales";
import { EstimationButton, EstmationContent, Estimator } from "../../GetInTouch/GetInTouch.styles";
import Popular from "../../../components/Popular";
import PropertyForSell from "../../../components/PropertyForSell";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../../store/state";

const Rent = () => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const [rentOut, setRentOut] = useState(false)
    const [liveIn, setLiveIn] = useState(true)

    const RentOut = () =>{
        setRentOut(true)
        setLiveIn(false)
    }
    const LiveIn = () =>{
        setRentOut(false)
        setLiveIn(true)
    }
    const Estimate = () =>{
        setGlobalState('buy', false)
        setGlobalState('rent', false)
        setGlobalState('sell', false)
        setGlobalState('offices', false)
        setGlobalState('industrialSpace', false)
        setGlobalState('commercialSpace', false)
        setGlobalState('management', false)
        setGlobalState('aboutUs', false)
        navigate('/free-estimation')
    }
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    
    return(
        <>
        
        <Wrapper>
            <Content>
                
                <Title>
                    <Head>
                        <Line/>
                        <h3>{t('rent.title')}</h3>
                        
                    </Head>
                </Title>

                <h2>{t('rent.text')}</h2>
                {screen ? <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    whiteSpace: 'nowrap',
                    overflow: 'auto',
                    
                    color: 'rgba(46,15,89,1)'
                }}> 
                {liveIn ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px',
                    marginRight: screen ? 10 : 0
                }}>{t('rent.liveIn')}</h4>:<h4 style={{
                    cursor: 'pointer',
                    marginRight: screen ? 10 : 0
                }} onClick={LiveIn}>{t('rent.liveIn')}</h4>}
                {rentOut?
                <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px'
                }}>{t('rent.invest')}</h4>: <h4 style={{
                    cursor: 'pointer'
                }} onClick={RentOut}>{t('rent.invest')}</h4>}
                    
                    
                    
                </div>: <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 450,
                    color: 'rgba(46,15,89,1)'
                }}> 
                {liveIn ? <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px'
                }}>{t('rent.liveIn')}</h4>:<h4 style={{
                    cursor: 'pointer'
                }} onClick={LiveIn}>{t('rent.liveIn')}</h4>}
                {rentOut?
                <h4 style={{
                    color: 'red',
                    textDecoration: 'underline 5px'
                }}>{t('rent.invest')}</h4>: <h4 style={{
                    cursor: 'pointer'
                }} onClick={RentOut}>{t('rent.invest')}</h4>}
                    
                    
                    
                </div>}
                
                {rentOut ? <>
                

                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy1})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.apartments')}</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy2})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.house')}</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy3})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.brandNewProperty')}</h2>
                        </CardText>
                    </AppartmentCard>
                </Home>

                <Head  style={{
                        marginBottom: 130
                    }}>
                    <Title>
                        <Line style={{
                            border: '2px solid black',
                            marginTop: 40
                        }}/>
                        <h1 style={{
                    color: "rgba(46,15,89,1)",
                    
                }}>{t('rent.stepTitle')}</h1>
                    </Title>
                </Head>
                    
                <h2 style={{
                    marginBottom: 20,
                }}>{t('rent.stepTitle2')}</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step1')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step2')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step3')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step4')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step5')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step6')}</h3></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'normal',
                    fontWeight: 400,
                    marginBottom: 120
                }}>  <img src={Step} alt="step"/> <h3 style={{
                    fontWeight: 400
                    }}>{t('rent.step7')}</h3></div>
                <h3 style={{
                fontWeight: 400,
                marginBottom: 100,
                }}>{t('rent.stepText')}
                </h3>
                <Button style={{
                    width: screen ? '95%': 741,
                    height: screen? 30:70,
                    borderRadius: 5,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: screen? 15:'35px',
                    marginBottom: 100,
                }}>{t('rent.button')}</Button>

                <Popular margin='0px'/>
                {screen ? <EstimationButton onClick={Estimate}>
                    <EstmationContent style={{
                        marginLeft: i18n.language==='fr'?10: 40
                    }}>
                    {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>:<EstimationButton onClick={Estimate}>
                    <EstmationContent>
                    {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>}
                
                

                </>: <>
                <Home style={{
                    marginTop: 30,
                    marginBottom: 130,
                }}>
                   <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy1})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.apartments')}</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy2})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.house')}</h2>
                        </CardText>
                    </AppartmentCard>
                    <AppartmentCard style={{
                        backgroundImage: `url(${HouseBuy3})`,
                    }}>
                        <CardText>
                            <h2>{t('buy.brandNewProperty')}</h2>
                        </CardText>
                    </AppartmentCard>
                </Home>
                <PropertyForSell margin='0px'/>
                <Popular margin='0px'/>
                <LastSales margin='0px'/>

                </>}
                
            </Content>
        </Wrapper>
        
        </>
    )
}

export default Rent;