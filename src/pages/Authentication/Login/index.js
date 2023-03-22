import React, {useState, useEffect} from "react";
import { Button, Content, Form, Iconcontainer, Input, Wrapper } from "./Login.styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../../store/state";
import Loading from "../../../components/Spinner";
import Eye from '../../../assets/images/eye.png'
import EyeOff from '../../../assets/images/eye-off.png'


const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const url = 'https://urbony.onrender.com/api/login'
    const {t} = useTranslation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const [loading, setLoading] = useState(false)
    const Top = () =>{
        window.scrollTo({
            top: 10,
            behavior: "auto",
        });
    };
    const login = async () => {
        const body = JSON.stringify({email, password});
        try {
            Top()
            setLoading(true)
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
                console.log('token',json.accessToken.token)
                localStorage.setItem('token', json.accessToken.token)
                localStorage.setItem('name', json.name)
                localStorage.setItem('id', json.id)
                setGlobalState('loggedIn', true)
                setLoading(false)
                navigate('/myproperties')

               

            }).catch(error =>{
                console.log(error)
                
                setLoading(false)
                setError('Incorect username or password')
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    const [shownPassword, setShownPassword] = useState(false)
    const display = ()=>{
        if(shownPassword){
            setShownPassword(false)
        } else{
            setShownPassword(true)
        }
    }
    return(
        <Wrapper>
            {loading ? (<Loading/>): (
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
                <div style={{display: 'flex'}}>
                <Input type={shownPassword ? "text" : "password"} placeholder={t('login.passwordHolder')} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <Iconcontainer onClick={display}>
                    {shownPassword ? <img src={EyeOff} style={{
                    height: screen? 45:40,
                    width: screen? 40:35
                }} alt="eye-off"/>: <img src={Eye} style={{
                    height: screen? 45:40,
                    width: screen? 40:35
                }} alt="eye-on"/>}
                
                </Iconcontainer>
                </div>
                
                <h5 style={{fontSize: 17, 
                    marginBottom: -10, 
                    color: 'red', 
                    marginLeft: screen? '53%':'71.5%',
                    cursor: 'pointer'}} onClick={()=> navigate('/forgot-password')}>{t('login.forgot')}</h5>
                <Button onClick={login}>{t('login.Login')}</Button>
                <h5 style={{fontSize: 17, 
                    marginBottom: -10, 
                    color: 'red', 
                    marginLeft: screen? '53%':'71.5%',
                    }}>{error}</h5>
                <h3 style={{
                    fontSize: screen ? 20:35
                }}>{t('login.member')}<Link to='/sign-up'>{t('login.create')}</Link></h3>
                </Form>
            </Content>
            )}
            
        </Wrapper>
    )
}

export default Login;