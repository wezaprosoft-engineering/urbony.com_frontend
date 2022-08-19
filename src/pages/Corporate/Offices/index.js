import React from "react";
import Corporates from "../../../components/Corporate";
import { useTranslation } from "react-i18next";

const Offices = () =>{
    const {t} = useTranslation();
    return(
        <Corporates title={t('corporate.officeTitle')}
            tenant={t('corporate.officeSpaceTenant')}  buyer={t('corporate.officeSpaceBuyer')} owner={t('corporate.officeSpaceOwner')}
            tenant1="You are a contractor and you would like to rent an office space" 
            buyer1="You are a contractor and you would like to buy an office space"
            owner1={t('corporate.officeStepTitle')}
            tenant2="BROWSE OUR OFFICES FOR RENT"
            buyer2="BROWSE OUR OFFICES FOR BUY"
            owner2={t('corporate.officeButton')}
            />
    )
}

export default Offices;