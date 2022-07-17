import React from "react";
import { Content, GetInTouchForm, ImageBackground, Wrapper } from "./GetInTouch.styles";
import Background from '../../images/Getintouch.png'
import { InputRequest } from "../SellerRequestForm/SellerRequestForm.styles";
import { Button } from "../Header/Header.styles";
import Estimation from '../../images/estimation.svg'
import Location from '../../images/getintouchlocation.svg'
import Call from '../../images/getintouchcall.svg'
import WhatsApp from '../../images/getintouchwhatsapp.svg'





const GetInTouch = () => {
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
                    <InputRequest style={{
                        width: '893px',
                        height: '55px',
                        marginBottom: 10
                        
                    }} placeholder='Enter your name'/>
                    <InputRequest style={{
                        width: '893px',
                        height: '55px',
                        marginBottom: 10
                        
                    }} placeholder='Enter your email address'/>
                    <InputRequest style={{
                        width: '893px',
                        height: '118.29px',
                        marginBottom: 10,
                        marginRight: 500
                        
                    }} placeholder='Enter your message'/>
                   <Button style={{
                    backgroundColor: 'red',
                    borderRadius: '0px',
                    height : '55px',
                    width: '403px',
                    fontWeight: 700,
                    fontSize: '30px',
                    marginTop: 10,
                    marginBottom: 10
                   }}>Submit</Button>
                   <Button style={{
                    backgroundColor: 'red',
                    borderRadius: '0px',
                    height : '55px',
                    width: '100%',
                    fontWeight: 700,
                    fontSize: '35px',
                    marginTop: 200,
                    marginBottom: 200,
                    
                   }}><div style={{
                    display: 'flex',
                    
                    width: 410,
                    margin: 'auto auto auto auto'
                    
                   }}>Get Free Estimation <img src={Estimation} alt='estimation' style={{
                    width: 30,
                    height: 40,
                    marginLeft: 13
                   }}/></div></Button>
                    <h2 style={{
                        marginBottom: 40
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
                </GetInTouchForm>
            </Content>
        </Wrapper>
    )
}

export default GetInTouch;