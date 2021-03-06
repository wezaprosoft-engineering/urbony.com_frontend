import React, {useState, useEffect} from "react";
import { Content, GetInTouchForm, GetInTouchInput, ImageBackground, Message, Submit, Wrapper, EstimationButton, Estimator, EstmationContent } from "./GetInTouch.styles";
import Background from '../../assets/images/Getintouch.png'
import Estimation from '../../assets/images/estimation.svg'
import Location from '../../assets/images/getintouchlocation.svg'
import Call from '../../assets/images/getintouchcall.svg'
import WhatsApp from '../../assets/images/getintouchwhatsapp.svg'
import LocationBlack from '../../assets/images/location_black.svg'
import WhatsAppBlack from '../../assets/images/whatsapp_black.svg'
import CallBlack from '../../assets/images/call_black.svg'

const GetInTouch = () => {
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <Wrapper>
            <Content>
                <ImageBackground src={Background} alt="image-background"/>
                <GetInTouchForm>
                    <h2 style={{
                        marginBottom: 40
                    }}>Get In Touch</h2>
                    <h3>Do you have any questions for us?</h3>
                    <h3 style={{
                        marginBottom: 70
                    }}>Just send us a message</h3>
                    
                    <GetInTouchInput placeholder="Enter your name"/>
                    
                    <GetInTouchInput placeholder="Enter your email address"/>
                    
                    <Message placeholder="Enter your message"/>
                   <Submit>SUBMIT</Submit>
                   <EstimationButton>
                    <EstmationContent>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>
                   
                    <h2 style={{
                        marginBottom: 40
                    }}>You can also reach us through</h2>
                    <div style={{
                    width: 355,
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}>{screen ? <img src={LocationBlack} alt="location" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>: <img src={Location} alt="location" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>}<h4> Boulevard de l???Uprona N??91, 3??me ??tage, Bujumbura, Burundi</h4></div>
                <div style={{
                    color: 'black',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150
                }}>{screen ? <img src={CallBlack} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>: <img src={Call} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>} <h4>+257 61 100 800</h4></div>
                <div style={{
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: "flex",
                    width: 150
                }}>{screen ? <img src={WhatsAppBlack} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>:<img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>}<h4> +257 75 78 89</h4></div>
                </GetInTouchForm>
            </Content>
            
        </Wrapper>
    )
}

export default GetInTouch;