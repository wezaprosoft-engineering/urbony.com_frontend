import React, {useState, useEffect} from "react";
import { Content, Wrapper } from "./SignUp.styles";
import { useTranslation } from "react-i18next";
import { ManagementCard, Benefits } from "../../Management/Management.styles";
import { CardButton } from "../../../components/Popular/Popular.styles";
import Nice from '../../../assets/images/nice.svg'
import Bad from '../../../assets/images/bad.svg'
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../../store/state";

const SignUp = () =>{
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const base = () =>{
        setGlobalState('free', true);
        //setGlobalState('charge', 0);
        navigate('/account-creation')
    }

    const pro = () =>{
        setGlobalState('free', false);
        //setGlobalState('charge', 150000);
        navigate('/account-creation')
    }
    const premium = () =>{
        setGlobalState('free', false);
        //setGlobalState('charge', 450000);
        navigate('/account-creation')
    }
   
    return(
        <Wrapper>
            <Content>
                <h2>{t('basic.first')}</h2>
                <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {screen ? <ManagementCard style={{
                height: '20%',
                textAlign: 'center'
            }}>
                <h2 style={{
                    marginTop: 55
                }}>{t('basic.title')}</h2>
                <h3 style={{marginTop: -20 , fontWeight: "normal"}}>{t('basic.title2')}</h3>
                <h2 style={{marginTop: 38}}>{t('basic.title3')}</h2>
                <h3 style={{marginTop: -20 , fontWeight: "normal"}}>{t('basic.title4')}</h3>
                
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                       
                    }}>
                    <h4>{t('basic.1')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={base}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }} onClick={base}>GET STARTED</CardButton>}
            </ManagementCard>:<ManagementCard style={{
                margin: 10,
                width: '30%',
                height: 'fit-content',
                textAlign: 'center'
            }}>
                <h2 style={{
                    marginTop: 55
                }}>{t('basic.title')}</h2>
                <h3 style={{marginTop: -20 , fontWeight: "normal"}}>{t('basic.title2')}</h3>
                <h2 style={{marginTop: 38}}>{t('basic.title3')}</h2>
                <h3 style={{marginTop: -20 , fontWeight: "normal"}}>{t('basic.title4')}</h3>
                
                <Benefits style={{marginTop:10}}>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                       
                    }}>
                    <h4>{t('basic.1')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('basic.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: 345,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={base}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: i18n.language==='fr' ? 48 : 12,
                    marginBottom: 20
                }} onClick={base}>{t('basic.started')}</CardButton>}
            </ManagementCard>}
            {screen ? <ManagementCard style={{
                background: '#2E0F59',
                color: 'white',
                height: '20%',
                textAlign: 'center'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}>{t('management.card2Content1')}</div>}
               
               <h2>{t('Pro.title')}</h2>
                <h3 style={{marginTop: -20, fontWeight: 'normal'}}>{t('Pro.subtitle')}</h3>
                <h4 style={{fontWeight: 'normal', marginTop: 40, marginBottom: -20}}>{t('management.asFrom')}</h4>
                <h2>150,000 BIF {t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.1')}</h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={pro}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={pro}>{t('management.request')}</CardButton>}
                
            </ManagementCard>: <ManagementCard style={{
                background: '#2E0F59',
                color: 'white',
                margin: 10,
                width: '30%',
                height: 'fit-content',
                textAlign: 'center'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}></div>}
               
            <h2>{t('Pro.title')}</h2>
                <h3 style={{marginTop: -20, fontWeight: 'normal'}}>{t('Pro.subtitle')}</h3>
                <h4 style={{fontWeight: 'normal', marginTop: 40, marginBottom: -20}}>{t('management.asFrom')}</h4>
                <h2>150,000 BIF {t('management.excl')}</h2>
                <Benefits style={{marginTop: 15}}>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.1')}</h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Pro.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                   
                }} onClick={pro}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: i18n.language==='fr' ? 50 : 13,
                    marginBottom: 20
                
                }} onClick={pro}>{t('basic.started')}</CardButton>}
                
            </ManagementCard>}
            {screen ? <ManagementCard style={{
                height: '20%',
                textAlign: 'center'
            }}>
                <h2 style={{
                    marginTop: 57
                }}>{t('Expert.Title')}</h2>
                <h3 style={{marginTop: -20, fontWeight: 'normal'}}>{t('Expert.subtitle')}</h3>
                <h4 style={{fontWeight: 'normal', marginTop: 40, marginBottom: -20}}>{t('management.asFrom')}</h4>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>450,000 BIF </span>{t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.1')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={premium}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }}onClick={premium}>{t('basic.started')}</CardButton>}
            </ManagementCard>:<ManagementCard style={{
                margin: 10,
                width: '30%',
                height: '50%',
                textAlign: 'center'
            }}>
                <h2 style={{
                    marginTop: 57
                }}>{t('Expert.Title')}</h2>
                <h3 style={{marginTop: -20, fontWeight: 'normal'}}>{t('Expert.subtitle')}</h3>
                <h4 style={{fontWeight: 'normal', marginTop: 40, marginBottom: -20}}>{t('management.asFrom')}</h4>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>450,000 BIF </span>{t('management.excl')}</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.1')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.2')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.3')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.4')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.5')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.6')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.7')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.8')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.9')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.10')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.11')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.12')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.13')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.14')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.15')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.16')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.17')}</h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>{t('Expert.18')}</h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: 345,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }} onClick={premium}>{t('basic.started')}</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: i18n.language==='fr' ? 47 : 10,
                    marginBottom: 20
                }} onClick={premium}>{t('basic.started')}</CardButton>}
            </ManagementCard>}
            
           
        </div>
            </Content>
        </Wrapper>
    )
}

export default SignUp;