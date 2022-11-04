import React from "react";
import { CorporateCardAppartmentText, Wrapper } from "./Corporate.styles";

const CorporateCardAppartment = props =>{
    return(
        <Wrapper style={{
            backgroundImage: `url(${props.CorporateCardAppartmentImage})`,
             
        }} onClick={props.onClick}>
            <CorporateCardAppartmentText>
                {props.CorporateCardAppartmentText}
            </CorporateCardAppartmentText>
        </Wrapper>
    )
}

export default CorporateCardAppartment;