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

const Footer = () => {
    const Top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <Wrapper>
            <FooterContent>
                <Footerservices><FooterTitle>Services</FooterTitle>
                <h3>Rental Management</h3>
                <h3>Property Valuation</h3>
                
                </Footerservices>
                <Footerservices>
                <FooterTitle>Quick Links</FooterTitle>
                <h3>Buy</h3>
                <h3>Sell</h3>
                <h3>Rent</h3>
                <h3>Real Estate Projects</h3>
                </Footerservices>
                <Footerservices>
                <FooterTitle>Get In Touch</FooterTitle>
                <div style={{
                    marginBottom: 13
                }}><img src={Location} alt="location" style={{
                    marginRight: 10,
                }}/> Boulevard de l’Uprona N°91, 3ème Étage, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bujumbura, Burundi</div>
                <div style={{
                    marginBottom: 13
                }}><img src={Call} alt="phone-call" style={{
                    marginRight: 10
                }}/> +257 75 78 89 74</div>
                <div><img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10
                }}/> +41 76 679 74 63</div>
                </Footerservices>
                <Footerservices style={{
                    
                }}><FooterTitle>Follow Us</FooterTitle>
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