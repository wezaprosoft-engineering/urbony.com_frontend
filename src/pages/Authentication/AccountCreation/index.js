import React, { useState, useEffect } from "react";
import { Button, Content, Forms, Input, Payment, PaymentForm, PaymentMode, Wrapper } from "./AccountCreation.styles";
import Card from '../../../assets/images/card.svg'
import Mpesa from '../../../assets/images/mpesa.svg'
import Mobile from '../../../assets/images/ecocashlumicash.svg'
import { setGlobalState } from "../../../store/state";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AccountCreation = () =>{
    const {t} = useTranslation()
    const [mode, setMode] = useState('')
    const url = 'https://urbony.onrender.com/api/register'
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const navigate = useNavigate()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    function creation(){
        setGlobalState('loggedIn', true)
        navigate('/myproperties')
    }

    const register = async () => {
        const body = JSON.stringify({name ,email, password});
        if(password=== confirm){
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
                    navigate('/login')
                 }).catch(error =>{
                     console.log(error)
                     
                 });
                 
             } catch (error) {
                 console.log(error)
             }
        } else{
            return 'Password do not match'
        }
        
        
    }
    return(
        <Wrapper>
            <Content>
            <h1>{t('creation.create')}</h1>
            <h2>{t('login.sell')}</h2>
            <Forms>
                <h3>{t('creation.fullName')}</h3>
                <Input type="text" placeholder={t('creation.nameHolder')} value={name} onChange={(e) => {setName(e.target.value)}}/>
                <h3>{t('login.email')}</h3>
                <Input type="email" placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <h3>{t('creation.password')}</h3>
                <Input type="password" placeholder={t('creation.passwordHolder')} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <h3>{t('creation.confirmPassword')}</h3>
                <Input type="password" placeholder={t('creation.confirmPassword')} value={confirm} onChange={(e) => {setConfirm(e.target.value)}}/>

                <Payment>
                    <h3>{t('creation.method')}</h3>
                    <PaymentMode>
                        <input type="radio" value="card" name="mode" onChange={(e) => setMode(e.target.value)}/>
                        <img src={Card} alt="card"/>
                    </PaymentMode>
                    <PaymentMode>
                    <input type="radio" value="mobile" name="mode" onChange={(e) => setMode(e.target.value)}/>
                    <img src={Mpesa} alt="m-pesa"/>
                    <img src={Mobile} alt="ecocash-lumicash" style={{
                        width: screen ? 170: 209
                    }}/>
                    </PaymentMode>
                </Payment>

                {mode==='card' ? <PaymentForm>
                    <h3>{t('creation.card')}</h3>
                    <Input type="number" placeholder={t('creation.cardHolder')} style={{width: '83%'}}/>
                    <div style={{display: 'flex'}}>
                        <div>
                            <h3>{t('creation.expiration')}</h3>
                            <Input style={{width: '80%'}} placeholder="MM" type="number"/>
                        </div>
                        <div>
                            <h3>{t('creation.year')}</h3>
                            <Input style={{width: '80%', marginTop: screen ? 23: 0}} placeholder="YY" type="number"/>
                        </div>
                        <div>
                            <h3>CVV</h3>
                            <Input style={{width: '80%',  marginTop: screen ? 23: 0}} placeholder="XXX" type="number"/>
                        </div>
                    </div>
                </PaymentForm>:<>
                {mode==='mobile' ? <PaymentForm>
                    <h3>{t('creation.mobile')}</h3>
                    <Input type="number" placeholder={t('creation.mobileHolder')}/>
                </PaymentForm>: null}
                </>}
               {/*<h3>{t('creation.charge')} <span style={{color: 'rgba(46,15,89,1)'}}>10,000 BIF</span></h3> */} 
                <Button onClick={register} style={{marginTop: 30}}>{t('creation.createAccount')}</Button>
            </Forms>
            </Content>
        </Wrapper>
    )
}

export default AccountCreation;