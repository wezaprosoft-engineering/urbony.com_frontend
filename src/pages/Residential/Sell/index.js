import React, {useState, useEffect} from "react";
import SellProperty from "../../../components/SellProperty";
import LastSales from "../../../components/LastSales";
import SellerRequestForm from "../../../components/forms/SellerRequestForm";
import { SellWrapper } from "./Sell.styles";
import Estimation from '../../../assets/images/estimation.svg'
import { EstimationButton, Estimator, EstmationContent } from "../../GetInTouch/GetInTouch.styles";
const Sell = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        
        <SellWrapper></SellWrapper>
        <SellProperty title="Sell your property" title1="Consider selling properties in Burundi?" proposition="You're at the right place" step="Stages of selling your property: complete expertise and support for the sale of your property : apartment, house, land, villa, investment property."/>
        <LastSales/>
        {screen? <EstimationButton style={{
            marginLeft: 25
        }}><EstmationContent>
            GET FREE ESTIMATION
            <Estimator src={Estimation} alt='estimation'/>
            </EstmationContent></EstimationButton>: null}
        
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>
    )
}

export default Sell;