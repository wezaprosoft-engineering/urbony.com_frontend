import React from "react";
import { Content, Logo } from "./EstimationButton.style";
import Estimation from '../../assets/images/estimation.svg'

const EstimationButton = () => {
    return(
        <EstimationButton>
            <Content>
                GET FREE ESTIMATION
                <Logo src={Estimation} alt='estimation'/>
            </Content>
        </EstimationButton>
    )
}

export default EstimationButton;