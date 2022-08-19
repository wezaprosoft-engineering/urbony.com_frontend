import React from "react";
import {  Head, Line, Title, Wrapper } from "../../Popular/Popular.styles";
import { Container, InputRequest, RequestForm, Select, Star, SubmitButton, Content} from "./SellerRequestForm.styles";
import { useTranslation } from "react-i18next";

const SellerRequestForm = props => {
    
    const {t} = useTranslation();
    
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
                        <InputRequest placeholder={t('sellerRequestForm.lastNameHolder')} inputMode="text"/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.firstName')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.firstNameHolder')} inputMode="text"/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.email')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.emailHolder')} inputMode="email"/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.phoneNumber')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.phoneNumberHolder')} inputMode="numeric"/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.locationOfProperty')}<Star>*</Star></h2>
                        <InputRequest placeholder={t('sellerRequestForm.locationHolder')}/>
                    </Container>
                    <Container>
                        <h2>{t('sellerRequestForm.typeOfProperty')}<Star>*</Star></h2>
                        <Select>
                        <option disabled>Select type of property</option>
                            <option value="Commercial Property">Commercial Property</option>
                            <option value="Industrial Property">Industrial Property</option>
                            <option value="Retail Property">Retail Property</option>
                            <option value="Mixed-use Property">Mixed-use Property</option>
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
                    
                    <SubmitButton>{t('sellerRequestForm.submit')}</SubmitButton>
                    
                </RequestForm>
            </Content>
        </Wrapper>
    )
}

export default SellerRequestForm;