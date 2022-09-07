import React, {useState, useEffect} from "react";
import { Button, Content, Form, Input, Wrapper } from "./Login.styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () =>{
    const {t} = useTranslation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
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
                <Input type="email" placeholder={t('sellerRequestForm.emailHolder')}/>
                <h4 style={{
                    color: screen ? 'rgba(46,15,89,1)' : 'black'
                }}>{t('login.Password')}</h4>
                <Input type="password" placeholder={t('login.passwordHolder')}/>
                <Button>{t('login.Login')}</Button>
                <h3 style={{
                    fontSize: screen ? 20:35
                }}>{t('login.member')}<Link to='/sign-up'>{t('login.create')}</Link></h3>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default Login;