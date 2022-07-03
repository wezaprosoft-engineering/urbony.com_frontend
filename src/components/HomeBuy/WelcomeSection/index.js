import React, {useState} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Button, Button2, Content,SearchIcon, Input, Overlay, OverlayContent, Search, TextButton, TextButton2, Toggle, WelcomeText, Wrapper } from "./Welcome.styles";
import search from '../../images/search-icon.svg'
const Welcome = () =>{
    const [buy, setBuy] = useState(true);
    const [rent, setRent] = useState(false);

    const Rent = () =>{
        setBuy(false);
        setRent(true);
    }
    const Buy = () =>{
        setRent(false);
        setBuy(true);
        
    }
    return(
        <Wrapper>
            <Content>
                <WelcomeText>
                    <h2>URBONY</h2>
                    <h3>The first real estate network created by real estate agents for real estate agents</h3>
                    <h4>You too can sell better, faster and easier with Urbony!</h4>
                </WelcomeText>

                <Toggle>
                    {buy ? <Button onClick={Buy}><TextButton>BUY</TextButton></Button>: <Button2 onClick={Buy}><TextButton>BUY</TextButton></Button2>}
                    {rent ? <Button onClick={Rent}><TextButton2>RENT</TextButton2></Button> : <Button2 onClick={Rent}><TextButton2>RENT</TextButton2></Button2>}
                   
                </Toggle>

                <Overlay>
                    <OverlayContent><h2>TYPE</h2><Input placeholder="Select" type="number"/></OverlayContent>
                    <OverlayContent><h2>WHERE</h2><Input placeholder="City or Postal code"/></OverlayContent>
                    <OverlayContent>{buy ? <h2>PRICE</h2>: <h2>RENT/MONTH</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} type="number"/></div></OverlayContent>
                    <OverlayContent><h2>BEDROOM(S)</h2><Input placeholder="Select"/></OverlayContent>
                    
                    <OverlayContent><Search><SearchIcon src={search}/><TextMenu style={{color: 'white'}}>SEARCH</TextMenu></Search></OverlayContent>
                </Overlay>
            </Content>
        </Wrapper>
    )
}

export default Welcome;