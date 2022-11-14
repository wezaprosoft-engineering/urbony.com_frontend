import React, {useState, useEffect} from "react";
import { Button, FooterContent, Footerservices, FooterTitle, SocialMedia, Wrapper } from "./Footer.styles";
import Location from '../../assets/images/footerlocation.svg'
import Call from '../../assets/images/footercall.svg'
import WhatsApp from '../../assets/images/footerwhatsapp.svg'
import Facebook from '../../assets/images/facebook.svg'
import Instagram from '../../assets/images/instagram.svg'
import Twitter from '../../assets/images/twitter.svg'
import Youtube from '../../assets/images/youtube.svg'
import Arrow from '../../assets/images/arrow_up.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../store/state";


const Footer = () => {

    const navigate = useNavigate()
    const Top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const {t} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const sell = ()=>{
        setGlobalState('corporate', false)
        navigate('/sell')
    }
    const buy = ()=>{
        setGlobalState('corporate', false)
        navigate('/buy')
    }
    const rent = ()=>{
        setGlobalState('corporate', false)
        navigate('/rent')
    }
    const realEstate = ()=>{
        setGlobalState('corporate', false)
        navigate('/real-estate-project')
    }
    return(
        <Wrapper>
            <FooterContent>
                <Footerservices><FooterTitle>{t('footer.services')}</FooterTitle>
                <h3 onClick={()=>navigate('/management')} style={{cursor: 'pointer', textDecoration: 'underline'}}>{t('footer.rental')}</h3>
                <h3 onClick={()=>navigate('/management')} style={{cursor: 'pointer', textDecoration: 'underline'}}>{t('footer.property')}</h3>
                
                </Footerservices>
                <Footerservices>
                <FooterTitle>{t('footer.quickLinks')}</FooterTitle>
                <h3 style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={buy}>{t('footer.buy')}</h3>
                <h3 style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={sell}>{t('footer.sell')}</h3>
                <h3 style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={rent}>{t('footer.rent')}</h3>
                <h3 style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={realEstate}>{t('footer.realEstate')}</h3>
                </Footerservices>
                <Footerservices>
                <FooterTitle>{t('footer.getInTouch')}</FooterTitle>
                <div style={{
                    marginBottom: 17,
                    display: 'flex',
                    alignItems: 'center'
                }}><img src={Location} alt="location" style={{
                    marginRight: 10,
                    width: screen ? 22: 28,
                    height: screen ? 22: 28
                }}/> <div style={{marginTop:25}}>Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</div></div>
                <div style={{
                    marginBottom: 13,
                    display: 'flex',
                    alignItems: 'center'
                }}><img src={Call} alt="phone-call" style={{
                    marginRight: 10,
                    width: screen ? 22: 28,
                    height: screen ? 22: 28
                }}/> {t('contact.phoneNumber')}</div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}><img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    width: screen ? 22: 28,
                    height: screen ? 22: 28
                }}/> {t('contact.whatsApp')}</div>
                </Footerservices>
                <Footerservices style={{
                    
                }}><FooterTitle>{t('footer.socialMedia')}</FooterTitle>
                {screen ? <SocialMedia>
                    <img src={Facebook} style={{height: 30, width: 20}} alt="facebook" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100086745292985')}/>
                    <img src={Instagram} style={{height: 30, width: 20}}alt="instagram" onClick={()=>window.open('https://www.instagram.com/urbonyuplans/')}/>
                    <img src={Twitter}  style={{height: 30, width: 20}}alt="twitter" onClick={()=>window.open('https://twitter.com/urbony?s=20&t=G9L7Kg0KCcxsW_EIx7rezw')}/>
                    <img src={Youtube}  alt="youtube" style={{
                        marginRight: 100, height: 30, width: 20
                    }} onClick={()=>window.open('https://www.youtube.com/channel/UCS-bgyNPYQo8SIPlXASy6Iw')}/>
                    <Button onClick={Top}><img src={Arrow}  style={{height: 50, width: 30}}alt="arrow scroll-up"/></Button>
                </SocialMedia>: <SocialMedia>
                    <img src={Facebook} alt="facebook" style={{cursor: 'pointer'}} onClick={()=>window.open('https://www.facebook.com/profile.php?id=100086745292985')}/>
                    <img src={Instagram} alt="instagram" style={{cursor: 'pointer'}} onClick={()=>window.open('https://www.instagram.com/urbonyuplans/')}/>
                    <img src={Twitter} alt="twitter" style={{cursor: 'pointer'}} onClick={()=>window.open('https://twitter.com/urbony?s=20&t=G9L7Kg0KCcxsW_EIx7rezw')}/>
                    <img src={Youtube} alt="youtube" onClick={()=>window.open('https://www.youtube.com/channel/UCS-bgyNPYQo8SIPlXASy6Iw')} style={{cursor: 'pointer'}}/>
                </SocialMedia>}
                
                </Footerservices>
                {screen ? null: <Button onClick={Top}><img src={Arrow} alt="arrow scroll-up"/></Button>}
                
            </FooterContent>
            
        </Wrapper>
    )
}

export default Footer;