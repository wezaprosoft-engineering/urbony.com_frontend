import React, {useState} from "react";
import {  Head, Line, Title, Wrapper } from "../../Popular/Popular.styles";
import { Container, InputRequest, RequestForm, Select, Star, SubmitButton, Content} from "./SellerRequestForm.styles";
import { useTranslation } from "react-i18next";
import {useLocation} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellerRequestForm = props => {
    
    const {t} = useTranslation();
    const locations = useLocation()
    const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [email, setEmail] = useState('')
        const [phoneNumber, setPhoneNumber] = useState('')
        const [location, setLocation] = useState('')
        const [propertyTypesId, setPropertyTypesId] = useState('')
        var requestType
        if(locations.pathname==='/management'){
            requestType = 'MANAGEMENT'
        }else{
             requestType = 'SELL'
        }
        const [uncompleted, setUncompleted] = useState('')
        
        
        const url='https://urbony.onrender.com/api/management'
        const sellerRequest = async () => {
            if(firstName.length===0 || lastName.length===0 || email.length===0 || phoneNumber.length ===0 || location.length ===0 || propertyTypesId.length===0){
                setUncompleted('Please fill in the required information!!')
            } else{
                const body = JSON.stringify({firstName, lastName, email, phoneNumber, location, propertyTypesId, requestType});
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
                        setPropertyTypesId('')
                        
        
                       
        
                    }).catch(error =>{
                        console.log(error)
                        
                    });
        
                    
                } catch (error) {
                    console.log(error)
                }
            }
           
            
        }
    
    return (
        <Wrapper style={{
            height: '1000px'
        }}>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3 style={{
                            color: 'rgba(46,15,89,1)'
                        }}>{props.text}</h3>                   </Head>
                </Title>
                <RequestForm>
                    <Container>
                        <h2>{t('sellerRequestForm.lastName')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.lastNameHolder')} inputMode="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.firstName')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.firstNameHolder')} inputMode="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.email')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.emailHolder')} inputMode="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.phoneNumber')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.phoneNumberHolder')} inputMode="numeric" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.locationOfProperty')}<Star>*</Star></h2>
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
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.typeOfProperty')}<Star>*</Star></h2>
                        <Select id="options" value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                        <option>{t('sellerRequestForm.option0')}</option>
                            <option value="1">{t('sellerRequestForm.option1')}</option>
                            <option value="2">{t('sellerRequestForm.option2')}</option>
                            <option value="3">{t('sellerRequestForm.option3')}</option>
                            <option value="4">{t('sellerRequestForm.option4')}</option>
                        </Select>
                        
                    </Container>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}><input type="checkbox" style={{
                        marginRight: 20
                    }}/>
                    <h4>{t('sellerRequestForm.condition')} <Star>*</Star></h4>
                    </div>
                    <div style={{width: '100%'}}><h3>{t('sellerRequestForm.field')} <Star>*</Star> {t('sellerRequestForm.mandatory')}</h3></div>
                    
                    <SubmitButton onClick={sellerRequest}>{t('sellerRequestForm.submit')}</SubmitButton>
                    <h4 style={{
                        color: 'red'
                    }}>{uncompleted}</h4>
                    <ToastContainer progressClassName="toastProgress"/>
                    
                </RequestForm>
            </Content>
        </Wrapper>
    )
}

export default SellerRequestForm;