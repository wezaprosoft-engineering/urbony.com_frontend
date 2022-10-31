import React from "react";
import SellProperty from "../../../components/SellProperty";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
import { SellWrapper } from "./Sell.styles";
import { Content } from "../../../components/Popular/Popular.styles";
import { useTranslation } from "react-i18next";


const Sell = ()=>{
    
    const {t} = useTranslation();
   
    

    return(
        <>
        
        <SellWrapper>
        
        </SellWrapper>
        <SellProperty title={t('sellProperty.residentialTitle')} title1={t('sellProperty.residentialTitle1')} proposition={t('sellProperty.residentialProposition')} step={t('sellProperty.residentialStep')}/>
        <LastSales/>
        <Content>
        
        </Content>
        
        
        <SellerRequestForm text={t('Welcome.text2')}/>
        </>
    )
}

export default Sell;