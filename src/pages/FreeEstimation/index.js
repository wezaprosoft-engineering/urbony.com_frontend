import React, {useState, useEffect} from "react";
import { ManagementContentUpper, ManagementText } from "../Management/Management.styles";
import { Content as Content1, Wrapper as Wrapper1 } from "../../components/WelcomeSection/Welcome.styles";
import { Button, Content, Forms, Input, Select, Wrapper } from "./FreeEstimation.styles";
import LastSales from "../../components/LastSales";
import { Star } from "../../components/forms/SellerRequestForm/SellerRequestForm.styles";
import { useTranslation } from "react-i18next";
const FreeEstimation = () => {
    
        const {t} = useTranslation()
        const [screen, setScreen] = useState(
            window.matchMedia("(max-width: 414px)").matches
        )
        useEffect(()=> {
            window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
        }, []);
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

                        <Forms>
                            <div>
                                <h4>{t('sellerRequestForm.lastName')}<Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.lastNameHolder')}/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.firstName')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.firstNameHolder')} />
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.email')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.emailHolder')} type="email"/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.phoneNumber')} <Star>*</Star></h4>
                                <Input placeholder={t('sellerRequestForm.phoneNumberHolder')} type="number"/>
                            </div>
                        </Forms>

                        <h3>{t('Estimation.subtitle2')} <Star>*</Star></h3>
                        <Forms>
                            <div>
                                <h4>{t('sellerRequestForm.locationOfProperty')}<Star>*</Star></h4>
                                <Input style={{width: screen ? '95%' :1090}} placeholder={t('sellerRequestForm.locationHolder')}/>
                            </div>
                            <div>
                                <h4>{t('sellerRequestForm.typeOfProperty')} <Star>*</Star></h4>
                                <Select>
                                <option>{t('sellerRequestForm.option0')}</option>
                            <option value="Commercial Property">{t('sellerRequestForm.option1')}</option>
                            <option value="Industrial Property">{t('sellerRequestForm.option2')}</option>
                            <option value="Retail Property">{t('sellerRequestForm.option3')}</option>
                            <option value="Mixed-use Property">{t('sellerRequestForm.option4')}</option>
                                </Select>
                            </div>
                            <div>
                                <h4>{t('Estimation.content')} <Star>*</Star></h4>
                                <Select>
                                <option value={t('Estimation.content1')}>{t('Estimation.content1')}</option>
                            <option value={t('Estimation.content2')}>{t('Estimation.content2')}</option>
                                </Select>
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
                    <Button>{t('sellerRequestForm.submit')}</Button>
                    </Content>
                </Wrapper>
                <LastSales/>
                </>
        )
    
}

export default FreeEstimation;