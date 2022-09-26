import React, {useState, useEffect} from "react";
import { Content, Form, Wrapper, Input, Button } from "../Login/Login.styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () =>{
    const {t} = useTranslation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const [email, setEmail] = useState('')
    const url = 'https://urbony.onrender.com/api/forgotpassword'
    
    
    const reset = async () => {
        const body = JSON.stringify({email});
        try {
           fetch(url, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXJib255LmNvbSIsImlhdCI6MTY2NDEzMjc4N30.Ef4YFhXx7cJ1_trOLoKdTJJGE33UG5RNF3vS30G7oog'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json.message)
                
                toast(json.message, 
                    {position: toast.POSITION.TOP_RIGHT})
                

               

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
            <h2 style={{
                    color:'rgba(46,15,89,1)',
                    fontSize: screen ? 30:45
                }}>Forgot Password</h2>

                <h3 style={{
                    color:'rgba(46,15,89,1)',
                    fontSize: screen? 20:35
                }}>Enter your email account to receive the password reset link.</h3>
                <Form>
                <h4 style={{
                    color: screen ? 'rgba(46,15,89,1)' : 'black'
                }}>{t('login.email')}</h4>
                <Input type="email" placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <Button style={{marginTop: 100}} onClick={reset}>Send Link</Button>
                <h3 style={{
                    fontSize: screen ? 20:35,
                    marginTop: 100
                }}>{t('login.member')}<Link to='/sign-up'>{t('login.create')}</Link></h3>
                </Form>
                <ToastContainer progressClassName="toastProgress"/>
            </Content>
        </Wrapper>
    )
}

export default ForgotPassword;