import React, { useState } from "react";
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
    const navigate = useNavigate()
    function creation(){
        setGlobalState('loggedIn', true)
        navigate('/myproperties')
    }
    return(
        <Wrapper>
            <Content>
            <h1>{t('creation.create')}</h1>
            <h2>{t('login.sell')}</h2>
            <Forms>
                <h3>{t('creation.fullName')}</h3>
                <Input type="text" placeholder={t('creation.nameHolder')}/>
                <h3>{t('login.email')}</h3>
                <Input type="email" placeholder={t('sellerRequestForm.emailHolder')}/>
                <h3>{t('creation.password')}</h3>
                <Input type="password" placeholder={t('creation.passwordHolder')}/>
                <h3>{t('creation.confirmPassword')}</h3>
                <Input type="password" placeholder={t('creation.confirmPassword')}/>

                <Payment>
                    <h3>{t('creation.method')}</h3>
                    <PaymentMode>
                        <input type="radio" value="card" name="mode" onChange={(e) => setMode(e.target.value)}/>
                        <img src={Card} alt="card"/>
                    </PaymentMode>
                    <PaymentMode>
                    <input type="radio" value="mobile" name="mode" onChange={(e) => setMode(e.target.value)}/>
                    <img src={Mpesa} alt="m-pesa"/>
                    <img src={Mobile} alt="ecocash-lumicash"/>
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
                            <Input style={{width: '80%'}} placeholder="YY" type="number"/>
                        </div>
                        <div>
                            <h3>CVV</h3>
                            <Input style={{width: '80%'}} placeholder="XXX" type="number"/>
                        </div>
                    </div>
                </PaymentForm>:<>
                {mode==='mobile' ? <PaymentForm>
                    <h3>{t('creation.mobile')}</h3>
                    <Input type="number" placeholder={t('creation.mobileHolder')}/>
                </PaymentForm>: null}
                </>}
                <h3>{t('creation.charge')} <span style={{color: 'rgba(46,15,89,1)'}}>10,000 BIF</span></h3>
                <Button onClick={creation}>{t('creation.createAccount')}</Button>
            </Forms>
            </Content>
        </Wrapper>
    )
}

export default AccountCreation;