import React, {useState, useEffect} from "react";
import SellProperty from "../../../components/SellProperty";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
import { SellWrapper } from "./Sell.styles";
import Estimation from '../../../assets/images/estimation.svg'
import { EstimationButton, Estimator, EstmationContent } from "../../GetInTouch/GetInTouch.styles";
import { Content } from "../../../components/Popular/Popular.styles";
import { useTranslation } from "react-i18next";
const Sell = ()=>{
    const {t, i18n} = useTranslation();
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        
        <SellWrapper>
        
        </SellWrapper>
        <SellProperty title={t('sellProperty.residentialTitle')} title1={t('sellProperty.residentialTitle1')} proposition={t('sellProperty.residentialProposition')} step={t('sellProperty.residentialStep')}/>
        <LastSales/>
        <Content>
        {screen? <EstimationButton style={{
            marginLeft: '5%'
        }}><EstmationContent>
            {t('estimation.est')}
            <Estimator src={Estimation} alt='estimation'/>
            </EstmationContent></EstimationButton>: <EstimationButton style={{
            width: '80%',
            marginLeft: 90,
            borderRadius: 10
        }}><EstmationContent>
           {t('estimation.est')}
            <Estimator src={Estimation} alt='estimation'/>
            </EstmationContent></EstimationButton>}
        </Content>
        
        
        <SellerRequestForm text={t('Welcome.text2')}/>
        </>
    )
}

export default Sell;