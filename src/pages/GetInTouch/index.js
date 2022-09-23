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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
    const navigate = useNavigate()
    const {t, i18n} = useTranslation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const url = 'https://urbony.onrender.com/api/intouch'

    const touch = () =>{
        const body = JSON.stringify({name, email, message})
        try {
            fetch(url, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                
                
                console.log(json.message)
                alert(json.message)
                setName('')
                setEmail('')
                setMessage('')
               
                
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Wrapper>
            <Content>
                <ImageBackground src={Background} alt="image-background"/>
                <GetInTouchForm>
                    <h2 style={{
                        marginBottom: 40
                    }}>{t('footer.getInTouch')}</h2>
                    <h3>Do you have any questions for us?</h3>
                    <h3 style={{
                        marginBottom: 70
                    }}>Just send us a message</h3>
                    
                    <GetInTouchInput placeholder={t('getInTouch.nameHolder')} value={name} onChange={(e) => {setName(e.target.value)}}/>
                    
                    <GetInTouchInput placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    
                    <Message placeholder={t('getInTouch.messageHolder')} value={message} onChange={(e) => {setMessage(e.target.value)}}/>
                   <Submit onClick={touch}>{t('getInTouch.submit')}</Submit>
                   
                   {screen ? <EstimationButton onClick={()=>navigate('/free-estimation')}>
                    <EstmationContent style={{
                        marginLeft: i18n.language==='fr'?10: 40
                    }}>
                        {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>:<EstimationButton onClick={()=>navigate('/free-estimation')}>
                    <EstmationContent>
                        {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>}
                   
                   
                    <h2 style={{
                        marginBottom: 40
                    }}>{t('getInTouch.reach')}</h2>
                    <div style={{
                    width: screen ? 300: 500,
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
                    
                }}/>}<h4> Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</h4></div>
                <div style={{
                    color: 'black',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: screen?160:160
                }}>{screen ? <img src={CallBlack} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>: <img src={Call} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/>} <h4>{t('contact.phoneNumber')}</h4></div>
                <div style={{
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: "flex",
                    width: screen ? 160:180
                }}>{screen ? <img src={WhatsAppBlack} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>:<img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>}<h4>{t('contact.whatsApp')}</h4></div>
                </GetInTouchForm>
            </Content>
            
        </Wrapper>
    )
}

export default GetInTouch;