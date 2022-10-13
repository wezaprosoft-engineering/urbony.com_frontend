import React, { useState, useEffect } from "react";
import { Button, Content, Forms, Input, Payment, PaymentForm, PaymentMode, Wrapper } from "./AccountCreation.styles";
//import Card from '../../../assets/images/card.svg'
//import Mpesa from '../../../assets/images/mpesa.svg'
//import Mobile from '../../../assets/images/ecocashlumicash.svg'
import Paypal from '../../../assets/images/paypal.png'
import {  useGlobalState } from "../../../store/state";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../../../components/Spinner";
import Eye from '../../../assets/images/eye.png'
import EyeOff from '../../../assets/images/eye-off.png'
import { Iconcontainer } from "../Login/Login.styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AccountCreation = () =>{
    const {t} = useTranslation()
    //const [mode, setMode] = useState('')
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
 
    const [free] = useGlobalState('free')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    const [string, setString] = useState('')
    const Top = () =>{
        window.scrollTo({
            top: 10,
            behavior: "smooth",
        });
    };
    const [shownPassword, setShownPassword] = useState(false)
    const display = ()=>{
        if(shownPassword){
            setShownPassword(false)
        } else{
            setShownPassword(true)
        }
    }
    const register = async () => {
        const body = JSON.stringify({name ,email, password});
        if(name.length===0 && email.length=== 0 && password.length===0){
            setString(t('creation.required'))
        } else{
            if(password=== confirm){
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
                        setLoading(false)
                        toast('Account created successfully! Kindly proceed to login now', 
                            {position: toast.POSITION.TOP_RIGHT})
                        navigate('/login')
                     }).catch(error =>{
                         console.log(error)
                         setLoading(false)
                         setError('User with the same email exist')
                         
                     });
                     
                 } catch (error) {
                     console.log(error)
                 }
            } else{
                return 'Password do not match'
            }
        }
        
        
        
    }
    return(
        <Wrapper>
            {loading ? (<Loading/>): (
                 <Content>
                 <h1>{t('creation.create')}</h1>
                 <h2>{t('login.sell')}</h2>
                 <Forms>
                     <h3>{t('creation.fullName')}</h3>
                     <Input type="text" placeholder={t('creation.nameHolder')} value={name} onChange={(e) => {setName(e.target.value)}}/>
                     <h3>{t('login.email')}</h3>
                     <Input type="email" placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                     <h3>{t('creation.password')}</h3>
                     <div style={{display: "flex"}}>
                     <Input type={shownPassword? "text":"password"} placeholder={t('creation.passwordHolder')} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
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
                     
                     <h3>{t('creation.confirmPassword')}</h3>
                     <div style={{display: "flex"}}>
                     <Input type={shownPassword? "text":"password"} placeholder={t('creation.confirmPassword')} value={confirm} onChange={(e) => {setConfirm(e.target.value)}}/>
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
                     
                     {free ? null : <>
                         <Payment>
                         <h3>{t('creation.method')}</h3>
                         <PaymentMode>
                             <input type="radio" value="card" name="mode" />
                             <img src={Paypal} alt="paypal"/>
                         </PaymentMode>
                         {/*<PaymentMode>
                         <input type="radio" value="mobile" name="mode" onChange={(e) => setMode(e.target.value)}/>
                         <img src={Card} alt="card"/>
                         <img src={Mpesa} alt="m-pesa"/>
                         <img src={Mobile} alt="ecocash-lumicash" style={{
                             width: screen ? 170: 209
                         }}/>
                         </PaymentMode> */}
                         
                     </Payment>
                     <PaymentForm>
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
                     </PaymentForm>
                     {/*{mode==='card' ? <PaymentForm>
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
                     </>} */}
     
                     
                     </>}
                     
                    {/*<h3>{t('creation.charge')} <span style={{color: 'rgba(46,15,89,1)'}}>10,000 BIF</span></h3> */} 
                     <Button onClick={register} style={{marginTop: 30}}>{t('creation.createAccount')}</Button>
                     <h3 style={{color: 'red'}}>{string}</h3>
                     <h3 style={{color: 'red'}}>{error}</h3>
                 </Forms>
                 <ToastContainer progressClassName="toastProgress"/>
                 </Content>
            )}
           
        </Wrapper>
    )
}

export default AccountCreation;