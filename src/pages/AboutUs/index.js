import React, {useState, useEffect} from "react";
import { Content, Wrapper } from "../../components/Popular/Popular.styles";
import LocationBlack from '../../assets/images/location_black.svg'
import WhatsAppBlack from '../../assets/images/whatsapp_black.svg'
import CallBlack from '../../assets/images/call_black.svg'
import { Content as Content1, Wrapper as Wrapper1 } from "../../components/WelcomeSection/Welcome.styles";
import { AboutContent, AboutText } from "./AboutUs.styles";
import Location from '../../assets/images/getintouchlocation.svg'
import Call from '../../assets/images/getintouchcall.svg'
import WhatsApp from '../../assets/images/getintouchwhatsapp.svg'
import { ManagementContentUpper, ManagementText } from "../Management/Management.styles";
import { useTranslation } from "react-i18next";
const AboutUs =() =>{
    const {t} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        
            {screen ? <Wrapper1><ManagementContentUpper style={{
                height: 259
            }}>
            <ManagementText>
                <h2>{t('aboutUs.welcome')}</h2>
                </ManagementText>
                
            </ManagementContentUpper></Wrapper1>: <Wrapper1><Content1 style={{
                minHeight: 300
            }}>
            <ManagementText>
                <h1>{t('aboutUs.welcome')}</h1>
                </ManagementText>
                
            </Content1></Wrapper1>}
            
            
        
        <Wrapper>
            <Content style={{
                margin: screen ? 0 : 60
            }}>
                {screen ? <h3  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    margin: 10
                }}>
                    {t('aboutUs.title')}
                </h3>: <h2 style={{
                    fontWeight: 500,
                    fontSize: 30
                }}>{t('aboutUs.title')}</h2>}
                

                    {screen ? <AboutText>
                        
                        
                            <h4>{t('aboutUs.content1')}</h4>
                            <h4>{t('aboutUs.content2')}</h4>
                            <h4>{t('aboutUs.content3')}</h4>
                            <h4>{t('aboutUs.content4')}</h4>
                            <h4>{t('aboutUs.content5')}</h4>
                            <h4>{t('aboutUs.content6')}</h4>
                        
                        </AboutText>: 
                        <div>
                        
                    <AboutContent>
                        <h3>{t('aboutUs.content1')}</h3>
                        <h3>{t('aboutUs.content2')}</h3>
                        <h3>{t('aboutUs.content3')}</h3>
                    </AboutContent>
                    <AboutContent>
                        <h3>{t('aboutUs.content4')}</h3>
                        <h3>{t('aboutUs.content5')}</h3>
                    </AboutContent>
                    <AboutContent>
                        <h3>{t('aboutUs.content6')}</h3>
                    </AboutContent>
                    </div>}
                    
                    
                {screen ? <><p style={{
                    fontSize: 18,
                    margin: 10
                }}>{t('aboutUs.p1')}</p>
                <p style={{
                    fontSize: 18,
                    margin: 10
                }}>{t('aboutUs.p2')}</p></> : <><p style={{
                    fontSize: 18
                }}>{t('aboutUs.p1')}</p>
                <p style={{
                    fontSize: 18
                }}>{t('aboutUs.p2')}</p></>}

                

                    <h2 style={{
                        marginBottom: 40,
                        marginTop: 200,
                        color: 'rgba(46,15,89,1)',
                        margin: screen ? 10: 0
                    }}>{t('aboutUs.contact')}</h2>
                    <div style={{
                    width: screen ? 300:500,
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: screen ? 5: 0
                    
                }}>{screen ? <img src={LocationBlack} alt="location" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>: <img src={Location} alt="location" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>}<h4> Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</h4></div>
                <div style={{
                    color: 'black',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 155,
                    margin: screen ? 5: 0
                }}> {screen ? <img src={CallBlack} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>: <img src={Call} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>} <h4>+257 75 78 89 74</h4></div>
                <div style={{
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: "flex",
                    width: 170,
                    margin: screen ? 5: 0
                }}>{screen ? <img src={WhatsAppBlack} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>: <img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>}<h4> +41 76 679 74 63 </h4></div>
            </Content>
        </Wrapper>
        </>


    )
}
export default AboutUs;