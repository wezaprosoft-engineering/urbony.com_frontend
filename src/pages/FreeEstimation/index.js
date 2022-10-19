import React, {useState, useEffect} from "react";
import { ManagementContentUpper, ManagementText } from "../Management/Management.styles";
import { Content as Content1, Wrapper as Wrapper1 } from "../../components/WelcomeSection/Welcome.styles";
import { Button, Content, Forms, Input, Select, Wrapper } from "./FreeEstimation.styles";
import LastSales from "../../components/LastSales";
import { Star } from "../../components/forms/SellerRequestForm/SellerRequestForm.styles";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FreeEstimation = () => {
    
        const {t} = useTranslation()
        const [screen, setScreen] = useState(
            window.matchMedia("(max-width: 414px)").matches
        )
        useEffect(()=> {
            window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
        }, []);
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [email, setEmail] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [location, setLocation] = useState('')
        const [options, setOptions] = useState('')
        const [propertyTypesId, setPropertyTypesId] = useState('')
        const requestType = 'ESTIMATE'
        const url='https://urbony.onrender.com/api/estimate'
        const estimate = async () => {
            const body = JSON.stringify({firstName, lastName, email, phoneNumber, location, options,propertyTypesId, requestType});
            try {
               fetch(url, {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                    }
                }).then(res => {
                    if (res.ok){
                        return res.json()
                    } else {
                        throw res.json()
                    }
                    
                }).then(json =>{
                    console.log(json)
                    toast(json.message, 
                        {position: toast.POSITION.TOP_RIGHT})
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhoneNumber('')
                    setLocation('')
                    setOptions('')
                    setPropertyTypesId('')
    
                   
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
            
        }
        return(
            <>
            
                {screen ? <Wrapper1><ManagementContentUpper style={{
                    height: 259
                }}>
                <ManagementText>
                    <h2>{t('Estimation.main')}</h2>
                    </ManagementText>
                    
                </ManagementContentUpper></Wrapper1>: <Wrapper1><Content1 style={{
                    minHeight: 300
                }}>
                <ManagementText>
                    <h1>{t('Estimation.main')}</h1>
                    </ManagementText>
                    
                </Content1></Wrapper1>}

                <Wrapper>
                    <Content>
                        <h2>{t('Estimation.title')}</h2>
                        <h3>{t('Estimation.subtitle')}</h3>

                        <Forms id="estimate">
                            <div>
                                <h4>{t('sellerRequestForm.lastName')}<Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.lastNameHolder')} value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.firstName')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.firstNameHolder')} value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.email')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.emailHolder')} type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.phoneNumber')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.phoneNumberHolder')} type="number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                            </div>
                        </Forms>

                        <h3>{t('Estimation.subtitle2')} <Star>*</Star></h3>
                        <Forms>
                            <div style={{width: '100%'}}>
                                <h4>{t('sellerRequestForm.locationOfProperty')}<Star>*</Star></h4>
                                <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Select" >{t('Welcome.location')}</option>
                        <option value="Bubanza">Bubanza</option>
                        <option value="Bujumbura Mairie">Bujumbura Mairie</option>
                        <option value="Bujumbura Rural">Bujumbura Rural</option>
                        <option value="Cibitoke">Cibitoke</option>
                        <option value="Muramvya">Muramvya</option>
                        <option value="Mwaro">Mwaro</option>
                        <option value="Cankuzo">Cankuzo</option>
                        <option value="Gitega">Gitega</option>
                        <option value="Rutana">Rutana</option>
                        <option value="Ruyigi">Ruyigi</option>
                        <option value="Karusi">Karusi</option>
                        <option value="Kayanza">Kayanza</option>
                        <option value="Kirundo">Kirundo</option>
                        <option value="Muyinga">Muyinga</option>
                        <option value="Ngozi">Ngozi</option>
                        <option value="Bururi">Bururi</option>
                        <option value="Makamba">Makamba</option>
                        <option value="Rumonge">Rumonge</option>
                </Select>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%'}}>
                            <div>
                                <h4>{t('sellerRequestForm.typeOfProperty')} <Star>*</Star></h4>
                                <Select id="options" value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                                <option>{t('sellerRequestForm.option0')}</option>
                            <option value="1">{t('sellerRequestForm.option1')}</option>
                            <option value="2">{t('sellerRequestForm.option2')}</option>
                            <option value="3">{t('sellerRequestForm.option3')}</option>
                            <option value="4">{t('sellerRequestForm.option4')}</option>
                                </Select>
                            </div>
                            <div>
                                <h4>{t('Estimation.content')} <Star>*</Star></h4>
                                <Select id="value" value={options} onChange={(e) => setOptions(e.target.value)}>
                                <option value="SELECT">Select</option>
                                <option value="SELL">{t('Estimation.content1')}</option>
                            <option value="RENT">{t('Estimation.content2')}</option>
                                </Select>
                            </div>
                            </div>
                            
                            
                        </Forms>
                        <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}><input type="checkbox" style={{
                        marginRight: 20
                    }}/>
                    <h4>{t('sellerRequestForm.condition')} <Star>*</Star></h4>
                    </div>

                    <div style={{width: '100%'}}><h3>{t('sellerRequestForm.field')} <Star>*</Star> {t('sellerRequestForm.mandatory')}</h3></div>
                    <Button onClick={estimate}>{t('sellerRequestForm.submit')}</Button>
                    <ToastContainer progressClassName="toastProgress"/>
                    </Content>
                </Wrapper>
                <LastSales/>
                </>
        )
    
}

export default FreeEstimation;