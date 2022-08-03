import React, {useState, useEffect} from "react";
import SellProperty from "../../../components/SellProperty";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
import { SellWrapper } from "./Sell.styles";
import Estimation from '../../../assets/images/estimation.svg'
import { useGlobalState } from "../../../store/state";
import { EstimationButton, Estimator, EstmationContent } from "../../GetInTouch/GetInTouch.styles";
import MenuNav from "../../../components/MenuNav";
const Sell = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const [mobileMenu] = useGlobalState("mobileMenu")
    return(
        <>
        
        <SellWrapper>
        {mobileMenu ? <MenuNav/>: null}
        </SellWrapper>
        <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>
        <LastSales/>
        {screen? <EstimationButton style={{
            marginLeft: 25
        }}><EstmationContent>
            GET FREE ESTIMATION
            <Estimator src={Estimation} alt='estimation'/>
            </EstmationContent></EstimationButton>: <EstimationButton style={{
            width: '80%',
            marginLeft: 90,
            borderRadius: 10
        }}><EstmationContent>
            GET FREE ESTIMATION
            <Estimator src={Estimation} alt='estimation'/>
            </EstmationContent></EstimationButton>}
        
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>
    )
}

export default Sell;