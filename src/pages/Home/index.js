import React from "react";
import SellerRequestForm from "../../components/forms/SellerRequestForm";
import LastSales from "../../components/LastSales";
import Popular from "../../components/Popular";
import PropertyForSell from "../../components/PropertyForSell";
import SellProperty from "../../components/SellProperty";
import Welcome from "../../components/WelcomeSection";
import { useGlobalState } from "../../store/state";
import { useTranslation } from "react-i18next";

const Home = ()=>{
    const {t} = useTranslation();
    const [corporate] = useGlobalState("corporate")
    return(
        <>
            <Welcome/>
           {corporate ? null:<PropertyForSell/>} 
        <Popular underline="underline" Offices={t('popular.Offices')} Stores={t('popular.Stores')} Industrial={t('popular.Industrial')}/>
        {corporate ? <SellProperty title={t('sellProperty.corporateTitle')} title1={t('sellProperty.corporateTitle1')} step={t('sellProperty.corporateStep')}/>: <SellProperty title={t('sellProperty.residentialTitle')} title1={t('sellProperty.residentialTitle1')} proposition={t('sellProperty.residentialProposition')} step={t('sellProperty.residentialStep')}/>}
        <LastSales/>
        <SellerRequestForm text={t('Welcome.text2')}/>
            </>
    )
}

export default Home;