import React, {useState} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Button, Button2, Content,SearchIcon, Input, Overlay, OverlayContent, Search, TextButton, TextButton2, Toggle, WelcomeText, Wrapper, SubOverlay, More, MoreContent, Check } from "./Welcome.styles";
import search from '../../images/search-icon.svg'
import { useGlobalState } from "../../state";
import ArrowDown from '../../images/arrow_down.svg'
import ArrowUp from '../../images/arrow_up2.svg'

const Details = props =>{
    return(
        <>
        <MoreContent>
        <Check type='checkbox'/>
        <h4>{props.detail}</h4> 
        </MoreContent>
                               
        </>)
   
}


const Welcome = () =>{
    const [buy, setBuy] = useState(true);
    const [rent, setRent] = useState(false);
    const [corporate] = useGlobalState("corporate");
    const [more, setMore] = useState(false);
    const Rent = () =>{
        setBuy(false);
        setRent(true);
    }
    const Buy = () =>{
        setRent(false);
        setBuy(true);
        
    }
    
   const MoreFilters = () =>{
    setMore(true)
   }
    const LessFilters = () =>{
        setMore(false)
    }
    const Overlays = props =>{
        return(
            <Overlay>
                    <SubOverlay>
                    <OverlayContent><h2>TYPE</h2><select style={{
                        width: 150,
                        height: 60,
                        fontWeight: 400,
                        fontSize: 'large'
                    }}>
                        <option value="Select" disabled>Select</option>
                        <option value="Single Family Homes">Single Family Homes</option>
                        <option value="Town Homes">Town Homes</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Tiny home">Tiny home</option>
                        </select></OverlayContent>
                    <OverlayContent><h2>WHERE</h2><Input placeholder={props.location}/></OverlayContent>
                    <OverlayContent>{buy ? <h2>PRICE</h2>: <h2>RENT/MONTH</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} type="number"/></div></OverlayContent>
                    <OverlayContent><h2>BEDROOM(S)</h2><Input placeholder="Select"/></OverlayContent>
                    
                    <OverlayContent><Search><SearchIcon src={search}/><TextMenu style={{color: 'white', fontWeight: 700}}>SEARCH</TextMenu></Search></OverlayContent>
                    </SubOverlay>
                    
                    
                    {more ? <div style={{
                        display: 'flex',
                        marginLeft: 60,
                        cursor: 'pointer'
                    }} onClick={LessFilters}>
                        
                    <img src={ArrowUp} alt="arrow-up"/>
                    <h4 style={{
                        color: 'rgba(255,0,0,1)',
                        marginLeft: 5,
                        fontWeight: 700,
                        size: 18
                    }}>Less filters</h4>
                    </div>: <div style={{
                        display: 'flex',
                        marginLeft: 60,
                        cursor: 'pointer'
                    }} onClick={MoreFilters}>
                        
                    <img src={ArrowDown} alt="arrow-down"/>
                    <h4 style={{
                        color: 'rgba(255,0,0,1)',
                        marginLeft: 5,
                        fontWeight: 700,
                        size: 18
                    }}>More filters</h4>
                    </div>}
                    {more ? <More>
                        <div>
                            <h3>Internal Features</h3>
                            <Details detail='Aircon'/>
                            <Details detail='Alarm'/>
                            <Details detail='ABackup Generator'/>
                            <Details detail='En Suite Fibre'/>
                            <Details detail='Internet'/>
                            <Details detail='Furnished'/>
                            <Details detail='Serviced'/>
                            <Details detail='Service Charge Included'/>
                            <Details detail='Walk In Closet'/>
                        </div>
                        <div>
                            <h3>External Features</h3>
                            <Details detail='Balcony'/>
                            <Details detail='BBQ'/>
                            <Details detail='Borehole'/>
                            <Details detail='CCTV'/>
                            <Details detail='Electric Fence'/>
                            <Details detail='Garden'/>
                            <Details detail='Gym'/>
                            <Details detail='Parking'/>
                            <Details detail='Staff Quarters'/>
                            <Details detail='Swimming'/>
                            <Details detail='Pool'/>
                            <Details detail='Wheelchair Access'/>
                        </div>
                        <div>
                            <h3>Nearby</h3>
                            <Details detail='Bus Stop'/>
                            <Details detail='Golf Course'/>
                            <Details detail='Hospital'/>
                            <Details detail='Scenic View'/>
                            <Details detail='School'/>
                            <Details detail='Sea View'/>
                        </div>
                    </More>: null}
                    
                    
                </Overlay>
        )
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
                {corporate? <Overlays location="Location or area"/>: <Overlays location="Location of property"/>}
                
            </Content>
        </Wrapper>
    )
}

export default Welcome;