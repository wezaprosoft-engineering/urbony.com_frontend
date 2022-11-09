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
    const Form =()=>{
        let offsetTop = document.getElementById('estimate').offsetTop;
        window.scrollTo({
            top: offsetTop-100,
            behavior: 'smooth'
        })
    }
    
        const {t, i18n} = useTranslation()
        const [screen, setScreen] = useState(
            window.matchMedia("(max-width: 414px)").matches
        )
        useEffect(()=> {
            window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
        }, []);
        const propertyUrl = 'https://urbony.onrender.com/api/property-types'
        const [property, setProperty] = useState('')
        const [checked, setChecked] = useState(false)

    const getProperty = ()=>{
        try {
            fetch(propertyUrl,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               
                
               console.log(json)
               setProperty(json)
               setPropertyTypesId(property[0]?.id)
               
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        
        getProperty()
    }, []);
        useEffect(()=>{
            Form()
        },[]);

        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [email, setEmail] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [location, setLocation] = useState('')
        const [options, setOptions] = useState('')
        const [propertyTypesId, setPropertyTypesId] = useState('')
        const requestType = 'ESTIMATE'
        const url='https://urbony.onrender.com/api/estimate'
        const [error, setError] = useState('')
        const estimate = async () => {
            if(checked){
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
            }else{
                setError('You have to accept the terms and general conditions')
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
                    <Content id="estimate">
                        <h2>{t('Estimation.title')}</h2>
                        <h3>{t('Estimation.subtitle')}</h3>

                        <Forms >
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
                                {property.length > 0 ?(
                        property.map(house=>(
                            <option value={house.id} >{house.name}</option>
                        ))
                    ):<option>No Value</option>}
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
                    }} onChange={()=> {
                        if(checked){
                            setChecked(false)
                        }else{
                            setChecked(true)
                        }
                    }}/>
                    <h4>{t('sellerRequestForm.condition')} <a href={i18n.language==='fr' ? "https://firebasestorage.googleapis.com/v0/b/urbony-cb822.appspot.com/o/Conditions%20generales%20Urbony%20french.docx.pdf?alt=media&token=a14bd9f1-390b-4dcb-a305-e9a2e8b9ec4d": "https://firebasestorage.googleapis.com/v0/b/urbony-cb822.appspot.com/o/General%20Conditions%20Urbony%20english.docx.pdf?alt=media&token=6292114c-10f5-406a-8ee0-4f8e72e5c26c"} target="_blank" rel="noopener noreferrer">{t('sellerRequestForm.generalConditions')}</a><Star>*</Star></h4>
                    </div>

                    <div style={{width: '100%'}}><h3>{t('sellerRequestForm.field')} <Star>*</Star> {t('sellerRequestForm.mandatory')}</h3></div>
                    <Button onClick={estimate}>{t('sellerRequestForm.submit')}</Button>
                    <h4 style={{color: 'red'}}>{error}</h4>
                    <ToastContainer progressClassName="toastProgress"/>
                    </Content>
                </Wrapper>
                <LastSales/>
                </>
        )
    
}

export default FreeEstimation;