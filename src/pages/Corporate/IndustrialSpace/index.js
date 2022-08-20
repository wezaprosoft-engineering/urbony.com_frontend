import React from "react";
import Corporates from "../../../components/Corporate";
import { useTranslation } from "react-i18next";

const IndustrialSpace = () =>{
    const {t} = useTranslation();
    return(
        <Corporates  title={t('corporate.industrialTitle')}
            tenant={t('corporate.industrialSpaceTenant')} buyer={t('corporate.industrialSpaceBuyer')} owner={t('corporate.industrialSpaceOwner')}
            tenant1="You are a contractor and you would like to rent industrial spaces" 
            buyer1="You are a contractor and you would like to buy industrial spaces"
            owner1={t('corporate.industrialStepTitle')}
            tenant2={t('corporate.industrialButton1')}
            buyer2={t('corporate.industrialButton2')}
            owner2={t('corporate.industrialButton3')}/> 
    )
}

export default IndustrialSpace;