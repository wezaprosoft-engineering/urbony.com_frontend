import React, {useState, useEffect} from "react";
import { EstimationButton, EstmationContent, Estimator } from "../GetInTouch/GetInTouch.styles";
import {  Wrapper } from "../../components/WelcomeSection/Welcome.styles";
import { CardButton, Content, Head, Line, Title } from "../../components/Popular/Popular.styles";
import { Benefits, ManagementCard, ManagementContact, ManagementContent, ManagementText, ManagementContentUpper, ManagementOffer } from "./Management.styles";
import Nice from '../../assets/images/nice.svg'
import Bad from '../../assets/images/bad.svg'
import Estimation from '../../assets/images/estimation.svg'
import SellerRequestForm from "../../components/forms/SellerRequestForm";
import SellProperty from "../../components/SellProperty";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../store/state";

const Management = () => {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
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
    
    const Form =()=>{
        let offsetTop = document.getElementById('form').offsetTop;
        window.scrollTo({
            top: offsetTop-100,
            behavior: 'smooth'
        })
    }
    return(
        <>
        <Wrapper>
            <ManagementContentUpper>
            <ManagementText>
                    <h1>{t('management.first')}</h1>
                    <h1>{t('management.second')}</h1>
                    <h1 style={{
                        marginTop: 70
                    }}>{t('management.third')}</h1>
                </ManagementText>
            </ManagementContentUpper>
        </Wrapper>
        <Wrapper style={{
            backgroundImage: 'none'
        }}>
        <SellProperty title={t('sellProperty.corporateTitle')} title1={t('sellProperty.corporateTitle1')} step={t('sellProperty.corporateStep')}/>
        <Content>
            <ManagementContent>
        <Title>
            <Head>
                <Line style={{
                    marginTop: 35,
                    marginRight: 0
                }}/>
                <h1 style={{
                    color: 'rgba(46,15,89,1)'
                }}>{t('management.title')}</h1>
            </Head>
        </Title>
        <ManagementOffer>
            <ManagementContact>
                <h2 style={{
                    
                    color: 'rgba(46,15,89,1)'
                }}>{t('management.title1')}</h2>
                <p>{t('management.text1')}</p>
            </ManagementContact>
            <ManagementContact>
                <h2 style={{
                    color: 'rgba(46,15,89,1)'
                }}>{t('management.title2')}</h2>
                <p>{t('management.text2')}</p>
            </ManagementContact>
            <ManagementContact>
                <h2 style={{
                    color: 'rgba(46,15,89,1)'
                }}>{t('management.title3')}</h2>
                <p>{t('management.text3')}</p>
            </ManagementContact>
        </ManagementOffer>
        </ManagementContent>
        <ManagementContent>
        <Title style={{
            marginBottom: 200
        }}>
            <Head>
                <Line style={{
                    marginTop: 35,
                    marginRight: 0
                }}/>
                <h1 style={{
                    color: 'rgba(46,15,89,1)',
                }}>{t('management.cardTitle')}</h1>
            </Head>
        </Title>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {screen ? <ManagementCard style={{
                height: '20%'
            }}>
                <h2 style={{
                    marginTop: 52,
                    
                }}>{t('management.card1Content1')}</h2>
                <h3>{t('management.card1Content2')}</h3>
                <h2>{t('management.asFrom')}</h2>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>5,000 BIF </span>{t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.completeManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.periodicManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='bad' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='bad'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.rentInsurance')}</h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>{t('management.request')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }} onClick={Form}>{t('management.request')}</CardButton>}
            </ManagementCard>:<ManagementCard>
                <h2 style={{
                    marginTop: 52
                }}>{t('management.card1Content1')}</h2>
                <h3>{t('management.card1Content2')}</h3>
                <h2>{t('management.asFrom')}</h2>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>5,000 BIF </span>{t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.completeManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.periodicManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='bad' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='bad'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.rentInsurance')}</h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: 345,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={Form}>{t('management.request')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }} onClick={Form}>{t('management.request')}</CardButton>}
            </ManagementCard>}
            {screen ? <ManagementCard style={{
                background: '#2E0F59',
                color: 'white',
                height: '20%'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}>{t('management.card2Content1')}</div>}
               
            <h2>{t('management.card2Content2')}</h2>
                <h3>{t('management.card2Content3')}</h3>
                <h2>{t('management.asFrom')}</h2>
                <h2>10,000 BIF {t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.card2Content4')}</h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.completeManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.periodicManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.rentInsurance')}</h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={Form}>{t('management.request')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={Form}>{t('management.request')}</CardButton>}
                
            </ManagementCard>: <ManagementCard style={{
                background: '#2E0F59',
                color: 'white'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}>{t('management.card2Content1')}</div>}
               
            <h2>{t('management.card2Content2')}</h2>
                <h3>{t('management.card2Content3')}</h3>
                <h2>{t('management.asFrom')}</h2>
                <h2>10,000 BIF {t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.card2Content4')}</h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>{t('management.completeManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.periodicManagement')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('management.rentInsurance')}</h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                   
                }} onClick={Form}>{t('management.request')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={Form}>{t('management.request')}</CardButton>}
                
            </ManagementCard>}
            
            {screen ?  <EstimationButton onClick={Estimate} style={{
                marginLeft: '8%',
                width: 282
            }}>
                    <EstmationContent style={{
                        marginLeft: i18n.language==='fr'?10: 40
                    }}>
                        {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>:  <EstimationButton onClick={Estimate} style={{
                    borderRadius: 10
            }}>
                    <EstmationContent>
                    {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>}
           
        </div>
        
                   
        </ManagementContent>
        
        </Content>
        
        </Wrapper>
        <div id="form">
        <SellerRequestForm text={t('Welcome.text2')}/>
        </div>
        
        </>
    )
}

export default Management;