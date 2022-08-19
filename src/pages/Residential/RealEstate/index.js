import React ,{useState, useEffect} from "react";
import { CardButton, Content, Head, Line, Title, Wrapper } from "../../../components/Popular/Popular.styles";
import { Input } from "../../../components/WelcomeSection/Welcome.styles";
import { CardContent, Description, RealEstateCard, TextContent, Description2Text,WrapperDescription2,CardButtons, Description2, Description2Content, LineEstate } from "./RealEstate.styles";
import Estate from '../../../assets/images/realEstate.png'
import { useTranslation } from "react-i18next";

const RealEstate = () =>{
    const {t, i18n} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const RealEstateCards = ()=>{
        return(
            <RealEstateCard style={{}}>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                        }}>

                        </CardContent>
                        <TextContent>
                            <Description>
                            <h1>{t('realEstate.residential')}</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/{t('realEstate.ready')}</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>{t('realEstate.text')}
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            
                            }} className='second'>{t('realEstate.delivery')} 23 July 2023</h2>
                            
                            </Description>
                            <WrapperDescription2>
                            <h2 className="price">{t('realEstate.price')}</h2>
                            <Description2>
                                
                                <Description2Content>
                                
                                <LineEstate/>
                                <Description2Text>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>{t('realEstate.studio')}</h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </Description2Text>
                                
                                </Description2Content>
                                <CardButtons>{t('realEstate.button')}</CardButtons>
                                
                            </Description2>
                            </WrapperDescription2>
                            
                            
                        </TextContent>
           </RealEstateCard>
        )
    }
    return(
       <Wrapper>
        <Content style={{display: 'grid'}}>
           <Head>
            <Title>
                <Line style={{
                    border: '3px solid rgba(46,15,89,1)',
                    marginTop: 30,
                }}/>
                <h2 style={{
                    fontWeight: 500
                }}>{t('realEstate.title')}</h2>
            </Title>
            {screen ? null: <Title style={{
                marginTop: 55
            }}>
                    <h2 style={{
                            fontWeight: 500
                        }}>{t('propertyForSell.filterBy')}</h2>
                        <Input placeholder={t('propertyForSell.price')} type='number' style={{
                            backgroundColor: 'rgba(46,15,89,1)',
                            textAlign: 'center',
                            width: 255,
                            height: 45,
                            borderRadius: 5,
                            color: 'white',
                            fontWeight: 500,
                            marginTop: 10,
                            marginLeft: 20,
                            borderColor: 'transparent'
                        }}/>
                    </Title>}
            
           </Head>
           {screen? <Title style={{
                marginTop: 10,
                width: 270,
            }}>
                    <h2 style={{
                            fontWeight: 500
                        }}>{t('propertyForSell.filterBy')}</h2>
                        <Input placeholder={t('propertyForSell.price')} type='number' style={{
                            backgroundColor: 'rgba(46,15,89,1)',
                            textAlign: 'center',
                            width: 150,
                            height: 35,
                            borderRadius: 5,
                            color: 'white',
                            fontWeight: 500,
                            marginTop: 15,
                            marginLeft: 0,
                            borderColor: 'transparent'
                        }}/>
                    </Title>: null}
           <RealEstateCards />
           <RealEstateCards />
           <RealEstateCards />
           <RealEstateCards />
           <RealEstateCards />
           <RealEstateCards />
           {screen ? null: <CardButton style={{
            margin: 'auto',
            marginTop: 120,
            marginBottom: 240,
            width: 574,
            height: 69,
            borderRadius: 10,
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "robotto"
           }}>{t('realEstate.load')}</CardButton>}
           
        </Content>
       </Wrapper> 
    )
}

export default RealEstate