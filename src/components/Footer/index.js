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

const Footer = () => {
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
    return(
        <Wrapper>
            <FooterContent>
                <Footerservices><FooterTitle>{t('footer.services')}</FooterTitle>
                <h3>{t('footer.rental')}</h3>
                <h3>{t('footer.property')}</h3>
                
                </Footerservices>
                <Footerservices>
                <FooterTitle>{t('footer.quickLinks')}</FooterTitle>
                <h3>{t('footer.buy')}</h3>
                <h3>{t('footer.sell')}</h3>
                <h3>{t('footer.rent')}</h3>
                <h3>{t('footer.realEstate')}</h3>
                </Footerservices>
                <Footerservices>
                <FooterTitle>{t('footer.getInTouch')}</FooterTitle>
                <div style={{
                    marginBottom: 13,
                    display: 'flex'
                }}><img src={Location} alt="location" style={{
                    marginRight: 10,
                }}/> <div style={{marginTop:25}}>Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</div></div>
                <div style={{
                    marginBottom: 13
                }}><img src={Call} alt="phone-call" style={{
                    marginRight: 10
                }}/> {t('contact.phoneNumber')}</div>
                <div><img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10
                }}/> {t('contact.whatsApp')}</div>
                </Footerservices>
                <Footerservices style={{
                    
                }}><FooterTitle>{t('footer.socialMedia')}</FooterTitle>
                {screen ? <SocialMedia>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Instagram} alt="instagram"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Youtube} alt="youtube" style={{
                        marginRight: 100
                    }}/>
                    <Button onClick={Top}><img src={Arrow} alt="arrow scroll-up"/></Button>
                </SocialMedia>: <SocialMedia>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Instagram} alt="instagram"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Youtube} alt="youtube"/>
                </SocialMedia>}
                
                </Footerservices>
                {screen ? null: <Button onClick={Top}><img src={Arrow} alt="arrow scroll-up"/></Button>}
                
            </FooterContent>
            
        </Wrapper>
    )
}

export default Footer;