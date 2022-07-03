import React from "react";
import { Button, FooterContent, Footerservices, FooterTitle, SocialMedia, Wrapper } from "./Footer.styles";
import Location from '../../images/footerlocation.svg'
import Call from '../../images/footercall.svg'
import WhatsApp from '../../images/footerwhatsapp.svg'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'
import Youtube from '../../images/youtube.svg'
import Arrow from '../../images/arrow_up.svg'

const Footer = () => {
    const Top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
                }}><img src={Location} style={{
                    marginRight: 10,
                }}/> Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</div>
                <div style={{
                    marginBottom: 13
                }}><img src={Call} style={{
                    marginRight: 10
                }}/> +257 61 100 800</div>
                <div><img src={WhatsApp} style={{
                    marginRight: 10
                }}/> +257 75 78 89</div>
                </Footerservices>
                <Footerservices style={{
                    width: '12%'
                }}><FooterTitle>Follow Us</FooterTitle>
                <SocialMedia>
                    <img src={Facebook}/>
                    <img src={Instagram}/>
                    <img src={Twitter}/>
                    <img src={Youtube}/>
                </SocialMedia>
                </Footerservices>
                <Button onClick={Top}><img src={Arrow}/></Button>
            </FooterContent>
            
        </Wrapper>
    )
}

export default Footer;