import React from "react";
import { BackgroundImage, Content, Input, Wrapper, Select, Button } from "./addProperty.styles";
import Upload from '../../assets/images/upload.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AddProperty = () =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <h2>{t('addProperty.sell')}</h2>
                <h3>{t('addProperty.image')}</h3>
                <BackgroundImage>
                    <img src={Upload} alt="upload" style={{marginTop: 200}}/>
                    <h4>{t('addProperty.select')}</h4>
                </BackgroundImage>
                <h2>{t('addProperty.details')}</h2>
                <h4>{t('addProperty.price')}</h4>
                <Input type="number" placeholder={t('addProperty.priceHolder')}/>
                <h4>{t('addProperty.living')}</h4>
                <Input type="number" placeholder={t('addProperty.livingHolder')}/>
                <h4>{t('addProperty.land')}</h4>
                <Input type="number" placeholder={t('addProperty.landHolder')}/>
                <h4>{t('addProperty.bathroom')}</h4>
                <Input type="number" placeholder={t('addProperty.bathroomHolder')}/>
                <h4>{t('addProperty.shower')}</h4>
                <Input type="number" placeholder={t('addProperty.showerHolder')}/>
                <h4>{t('sellerRequestForm.typeOfProperty')}</h4>
                <Select>
                        <option>{t('sellerRequestForm.option0')}</option>
                            <option value="Commercial Property">{t('sellerRequestForm.option1')}</option>
                            <option value="Industrial Property">{t('sellerRequestForm.option2')}</option>
                            <option value="Retail Property">{t('sellerRequestForm.option3')}</option>
                            <option value="Mixed-use Property">{t('sellerRequestForm.option4')}</option>
                        </Select>
                <h4>{t('sellerRequestForm.locationOfProperty')}</h4>
                <Input placeholder={t('sellerRequestForm.locationHolder')}/>
                <Button onClick={()=> navigate('/myproperties')}>{t('addProperty.add')}</Button>
            </Content>
        </Wrapper>
    )
}

export default AddProperty;