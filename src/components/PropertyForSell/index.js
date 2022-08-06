import React, {useState, useEffect} from "react";
import { Head, Title, Wrapper, Home } from "../Popular/Popular.styles";
import House1 from '../../assets/images/house1.png'
import House2 from '../../assets/images/house2.png'
import House3 from '../../assets/images/house3.png'
import HomeCard from "../HomeCards";
import { Input } from "../WelcomeSection/Welcome.styles";
import { Button } from "../Header/Header.styles";
import { Content } from "./PropertyForSell.styles";
import {useLocation} from 'react-router-dom'
import { useGlobalState, setGlobalState } from "../../store/state";
const PropertyForSell = props =>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const location = useLocation()
    const [card1] = useGlobalState("forsellcard1")
    const [card2] = useGlobalState("forsellcard2")
    const Card1 = () =>{
        setGlobalState("forsellcard1", true)
        setGlobalState("forsellcard2", false)
        setGlobalState("forsellcard3", false)
    }
    const Card2 = () =>{
        setGlobalState("forsellcard1", false)
        setGlobalState("forsellcard2", true)
        setGlobalState("forsellcard3", false)
    }
    const Card3 = () =>{
        setGlobalState("forsellcard1", false)
        setGlobalState("forsellcard2", false)
        setGlobalState("forsellcard3", true)
    }
    return(
        
        <Wrapper style={{
            
        }}>
            <Content style={{
                
            }}>
            <Head>
            <Title>
                <h2 style={{
                    fontWeight: 500,
                    color: 'rgba(46,15,89,1)'
                }}>Our property for sell</h2>
            </Title>
            {screen? null: <Title>
                    <h2 style={{
                            fontWeight: 500
                        }}>Sort By: </h2>
                        <Input placeholder='Price' type='number' style={{
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
           <Home> {screen? <>
                        {card1 ?
                            <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0, 1)" housePicture={House1} next={Card2}/>:<>
                            {card2 ? <HomeCard buttonText="Book Now" buttonColor="rgba(255, 0, 0, 1)" housePicture={House2} next={Card3} prev={Card1}/>: 
                            
                            <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0, 1)" housePicture={House3} prev={Card2}/>}
                            </>
                        }
                        </>: 
           <>
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
                    <HomeCard buttonText="Buy" buttonColor="rgba(255, 0, 0 ,1)" housePicture={House1} />
           </>}
         
           </Home>
           {screen ? null:<>{location.pathname==='/buy' ? null: <Button style={{
            width: 467,
            height: 54,
            borderRadius: '5px',
            backgroundColor: 'rgba(255,0,0,1)',
            fontWeight: 700,
            fontSize: 25,
            marginTop: 100
           }}>View All</Button>}</> }
           
            </Content>
        </Wrapper>
    )
}

export default PropertyForSell;