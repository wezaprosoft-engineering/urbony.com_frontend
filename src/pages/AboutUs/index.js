import React, {useState, useEffect} from "react";
import { Content, Wrapper } from "../../components/Popular/Popular.styles";
import { Content as Content1, Wrapper as Wrapper1 } from "../../components/WelcomeSection/Welcome.styles";
import { AboutContent, AboutText } from "./AboutUs.styles";
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
                    <AboutContent style={{
                        width: '40%'
                    }}>
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

            </Content>
        </Wrapper>
        </>


    )
}
export default AboutUs;