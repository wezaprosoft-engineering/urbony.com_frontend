import React from "react";
import Corporates from "../../../components/Corporate";
import { useTranslation } from "react-i18next";

const CommercialSpace = () =>{
    const {t} = useTranslation();
    return(
        <Corporates title={t('corporate.commercialTitle')}
            tenant={t('corporate.storeSpaceTenant')} buyer={t('corporate.storeSpaceBuyer')} owner={t('corporate.storeSpaceOwner')}
            tenant1="You are a contractor and you would like to rent a commercial space" 
            buyer1="You are a contractor and you would like to buy commercial spaces"
            owner1={t('corporate.commercialStepTitle')}
            tenant2="BROWSE OUR STORE FOR RENT"
            buyer2="BROWSE OUR STORE FOR BUY"
            owner2={t('corporate.commercialButton')}/> 
    )
}

export default CommercialSpace;