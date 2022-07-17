import React from "react";
import { Content, Wrapper } from "../Popular/Popular.styles";

import { Content as Content1, WelcomeText, Wrapper as Wrapper1 } from "../WelcomeSection/Welcome.styles";
import { AboutContent } from "./AboutUs.styles";
import Location from '../../images/getintouchlocation.svg'
import Call from '../../images/getintouchcall.svg'
import WhatsApp from '../../images/getintouchwhatsapp.svg'
const AboutUs =() =>{
    return(
        <>
        <Wrapper1>
            <Content1 style={{
                minHeight: 459.48
            }}>
                <WelcomeText>
                <h2>Urbony: A platform integrating real estate services.</h2>
                </WelcomeText>
            </Content1>
        </Wrapper1>
        <Wrapper>
            <Content>
                <h2 style={{
                    fontWeight: 500,
                    fontSize: 30
                }}>A team of professionals who demonstrate every day a perfect knowledge of each of our businesses: </h2>
                <div>
                    <AboutContent>
                        <h3>Residential Real Estate</h3>
                        <h3>New Real Estate</h3>
                        <h3>Corporate Real Estate</h3>
                    </AboutContent>
                    <AboutContent>
                        <h3>Trustee(co-ownership)</h3>
                        <h3>Rental Management</h3>
                    </AboutContent>
                    <AboutContent>
                        <h3>Property Valuation</h3>
                    </AboutContent>
                </div>
                <p style={{
                    fontSize: 25
                }}>We are aiming for a leading position thanks to the control of the market 
                    by each of our departments 
                    (Urbony rental and sales, Urbony Rental Management)</p>
                <p style={{
                    fontSize: 25
                }}>A commitment to pursue a single objective: "every day better serve its customers". 
                    An independent company active in the business of real estate transactions 
                    (purchase/sale and rental) and property administration 
                    (property management, rental and trustee management) 
                    in the residential and professional sector.</p>

                    <h2 style={{
                        marginBottom: 40,
                        marginTop: 200,
                        color: 'rgba(46,15,89,1)'
                    }}>You can also reach us through</h2>
                    <div style={{
                    width: 355,
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    
                }}><img src={Location} alt="location" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/><h4> Boulevard de l’Uprona N°91, 3ème Étage, Bujumbura, Burundi</h4></div>
                <div style={{
                    color: 'black',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150
                }}><img src={Call} alt="phone-call" style={{
                    marginRight: 10,
                    width: '18.75px',
                    height: '25px',
                    
                }}/> <h4>+257 61 100 800</h4></div>
                <div style={{
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: "flex",
                    width: 150
                }}><img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/><h4> +257 75 78 89</h4></div>
            </Content>
        </Wrapper>
        </>


    )
}
export default AboutUs;