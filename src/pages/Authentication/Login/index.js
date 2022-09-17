import React, {useState, useEffect} from "react";
import { Button, Content, Form, Input, Wrapper } from "./Login.styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../../store/state";


const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const url = 'https://urbony.onrender.com/api/login'
    const {t} = useTranslation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const login = async () => {
        const body = JSON.stringify({email, password});
        try {
           fetch(url, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
                console.log(json.accessToken.token)
                localStorage.setItem('token', json.accessToken.token)
                localStorage.setItem('name', json.name)
                setGlobalState('loggedIn', true)
                navigate('/add-property')

               

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
                }}>{t('login.Login')}</h2>

                <h3 style={{
                    color:'rgba(46,15,89,1)',
                    fontSize: screen? 20:35
                }}>{t('login.sell')}</h3>
                <Form>
                <h4 style={{
                    color: screen ? 'rgba(46,15,89,1)' : 'black'
                }}>{t('login.email')}</h4>
                <Input type="email" placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <h4 style={{
                    color: screen ? 'rgba(46,15,89,1)' : 'black'
                }}>{t('login.Password')}</h4>
                <Input type="password" placeholder={t('login.passwordHolder')} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <Button onClick={login}>{t('login.Login')}</Button>
                <h3 style={{
                    fontSize: screen ? 20:35
                }}>{t('login.member')}<Link to='/sign-up'>{t('login.create')}</Link></h3>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default Login;