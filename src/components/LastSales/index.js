import React, {useState, useEffect} from "react";
import { Content, Head, Line, Title, Wrapper, Arrow, Home } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import HomeCard from "../HomeCards";
import { useGlobalState, setGlobalState } from "../../store/state";
import { useTranslation } from "react-i18next";

const LastSales = props =>{
    const {t} = useTranslation();
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
                    {screen ?<>
                        {card1 ?
                            <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText={t('Card.sold')}buttonColor="rgba(46, 15, 89 ,1)" housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>
                    : <>
                    <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/>
                    <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/>
                    <HomeCard buttonText={t('Card.sold')} buttonColor="rgba(46, 15, 89 ,1)" housePicture={House1}/> </>}
                    
                </Home>
                
            </Content>
            
        </Wrapper>
    )
}

export default LastSales;