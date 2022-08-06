import React, {useState, useEffect} from "react";
import { Content, Wrapper } from "../../components/Popular/Popular.styles";
import LocationBlack from '../../assets/images/location_black.svg'
import WhatsAppBlack from '../../assets/images/whatsapp_black.svg'
import CallBlack from '../../assets/images/call_black.svg'
import { Content as Content1, Wrapper as Wrapper1 } from "../../components/WelcomeSection/Welcome.styles";
import { AboutContent, AboutText } from "./AboutUs.styles";
import Location from '../../assets/images/getintouchlocation.svg'
import Call from '../../assets/images/getintouchcall.svg'
import WhatsApp from '../../assets/images/getintouchwhatsapp.svg'
import { ManagementContentUpper, ManagementText } from "../Management/Management.styles";
const AboutUs =() =>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        
            {screen ? <Wrapper1><ManagementContentUpper style={{
                height: 259
            }}>
            <ManagementText>
                <h2>Urbony: A platform integrating real estate services.</h2>
                </ManagementText>
                
            </ManagementContentUpper></Wrapper1>: <Wrapper1><Content1 style={{
                minHeight: 300
            }}>
            <ManagementText>
                <h1>Urbony: A platform integrating real estate services.</h1>
                </ManagementText>
                
            </Content1></Wrapper1>}
            
            
        
        <Wrapper>
            <Content style={{
                margin: screen ? 0 : 60
            }}>
                {screen ? <h3  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    margin: 10
                }}>
                    A team of professionals who demonstrate every day a perfect knowledge of each of our businesses: 
                </h3>: <h2 style={{
                    fontWeight: 500,
                    fontSize: 30
                }}>A team of professionals who demonstrate every day a perfect knowledge of each of our businesses: </h2>}
                

                    {screen ? <AboutText>
                        
                        
                            <h4>Residential Real Estate</h4>
                            <h4>New Real Estate</h4>
                            <h4>Corporate Real Estate</h4>
                            <h4>Trustee(co-ownership)</h4>
                            <h4>Rental Management</h4>
                            <h4>Property Valuation</h4>
                        
                        </AboutText>: 
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
                    </div>}
                    
                    
                {screen ? <><p style={{
                    fontSize: 18,
                    margin: 10
                }}>We are aiming for a leading position thanks to the control of the market 
                    by each of our departments 
                    (Urbony rental and sales, Urbony Rental Management)</p>
                <p style={{
                    fontSize: 18,
                    margin: 10
                }}>A commitment to pursue a single objective: "every day better serve its customers". 
                    An independent company active in the business of real estate transactions 
                    (purchase/sale and rental) and property administration 
                    (property management, rental and trustee management) 
                    in the residential and professional sector.</p></> : <><p style={{
                    fontSize: 18
                }}>We are aiming for a leading position thanks to the control of the market 
                    by each of our departments 
                    (Urbony rental and sales, Urbony Rental Management)</p>
                <p style={{
                    fontSize: 18
                }}>A commitment to pursue a single objective: "every day better serve its customers". 
                    An independent company active in the business of real estate transactions 
                    (purchase/sale and rental) and property administration 
                    (property management, rental and trustee management) 
                    in the residential and professional sector.</p></>}

                

                    <h2 style={{
                        marginBottom: 40,
                        marginTop: 200,
                        color: 'rgba(46,15,89,1)',
                        margin: screen ? 10: 0
                    }}>You can also reach us through</h2>
                    <div style={{
                    width: 355,
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: screen ? 5: 0
                    
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
                    width: 150,
                    margin: screen ? 5: 0
                }}> {screen ? <img src={CallBlack} alt="phone-call" style={{
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
                    width: 150,
                    margin: screen ? 5: 0
                }}>{screen ? <img src={WhatsAppBlack} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>: <img src={WhatsApp} alt="whatsapp" style={{
                    marginRight: 10,
                    
                }}/>}<h4> +257 75 78 89 67</h4></div>
            </Content>
        </Wrapper>
        </>


    )
}
export default AboutUs;