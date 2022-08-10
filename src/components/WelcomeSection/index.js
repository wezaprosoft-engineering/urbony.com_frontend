import React, {useState, useEffect} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Button, Button2, Content,SearchIcon, Input, Overlay, OverlayContent, Search, TextButton, TextButton2, Toggle, WelcomeText, Wrapper, SubOverlay, More, MoreContent, Check, Input2, WelcomeButton, Select, MoreContentMobile, MoreContentDetails, Heading, Checked } from "./Welcome.styles";
import search from '../../assets/images/search-icon.svg'
import { useGlobalState, setGlobalState } from "../../store/state";
import ArrowDown from '../../assets/images/arrow_down.svg'
import ArrowUp from '../../assets/images/arrow_up2.svg'
import SearchMin from '../../assets/images/searchmin.svg'
import ArrowUpMobile from '../../assets/images/arrow_up_mobile.svg'


const Details = props =>{
    const [checked, setChecked] = useState(false)
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        {screen ? <MoreContent>
            {checked ? <>
            <Check type='checkbox' checked={checked} onChange={() => setChecked(false)}/>
            <h4>{props.detail}</h4> 
            </>: <>
            <Checked onClick={() => setChecked(true)}></Checked>
        <h4>{props.detail}</h4> 
            </>}
        
        
        </MoreContent>: <MoreContent>
        <Check type='checkbox'/>
        <h4>{props.detail}</h4> 
        </MoreContent>}
        
                               
        </>)
   
}


const Welcome = props =>{
    const [corporate] = useGlobalState("corporate");
    const [more, setMore] = useState(false);

    const [homeBuy] = useGlobalState("homeBuy");
    const [homeRent] = useGlobalState("homeRent")
    const [moreMobile, setMoreMobile] = useState(false)
    const Rent = () =>{
        setGlobalState("homeBuy", false);
        setGlobalState("homeRent", true)
        
    }
    const Buy = () =>{
        
        setGlobalState("homeBuy", true);
        setGlobalState("homeRent", false)
        
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
                        height: '65px',
                        fontWeight: 400,
                        fontSize: 'large'
                    }}>
                        <option value="Select" disabled>Select</option>
                        <option value="Single Family Homes">Single Family Homes</option>
                        <option value="Town Homes">Town Homes</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Tiny home">Tiny home</option>
                        </select></OverlayContent>
                        <OverlayContent><h2>WHERE</h2><select style={{
                        width: '99%',
                        height: '65px',
                        fontWeight: 400,
                        fontSize: 'large'
                    }}>
                        <option value="Select" >{props.location}</option>
                        <option value="Bubanza">Bubanza</option>
                        <option value="Bujumbura Mairie">Bujumbura Mairie</option>
                        <option value="Bujumbura Rural">Bujumbura Rural</option>
                        <option value="Cibitoke">Cibitoke</option>
                        <option value="Muramvya">Muramvya</option>
                        <option value="Mwaro">Mwaro</option>
                        <option value="Cankuzo">Cankuzo</option>
                        <option value="Gitega">Gitega</option>
                        <option value="Rutana">Rutana</option>
                        <option value="Ruyigi">Ruyigi</option>
                        <option value="Karusi">Karusi</option>
                        <option value="Kayanza">Kayanza</option>
                        <option value="Kirundo">Kirundo</option>
                        <option value="Muyinga">Muyinga</option>
                        <option value="Ngozi">Ngozi</option>
                        <option value="Bururi">Bururi</option>
                        <option value="Makamba">Makamba</option>
                        <option value="Rumonge">Rumonge</option>
                        </select></OverlayContent>
                    <OverlayContent>{homeBuy ? <h2>PRICE</h2>: <h2>RENT/MONTH</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} type="number"/></div></OverlayContent>
                    {corporate ? 
                    <OverlayContent><h2>AREA</h2><Input placeholder="Square meter" type="number"/></OverlayContent>:
                    <OverlayContent><h2>BEDROOM(S)</h2><Input placeholder="Select"/></OverlayContent>}
                    
                    
                    <OverlayContent><Search><SearchIcon src={search}/><TextMenu style={{color: 'white', fontWeight: 700}}>SEARCH</TextMenu></Search></OverlayContent>
                    </SubOverlay>
                    
                    
                    {more ? <div style={{
                        display: 'flex',
                        marginLeft: 60,
                        cursor: 'pointer',
                        lineHeight: 0
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
                        cursor: 'pointer',
                        lineHeight: 0
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
                            <Details detail='Lift/Elevator'/>
                            <Details detail='Gym'/>
                        </div>
                        <div>
                            <h3>External Features</h3>
                            <Details detail='Balcony'/>
                            <Details detail='BBQ'/>
                            <Details detail='Borehole'/>
                            <Details detail='CCTV'/>
                            <Details detail='Electric Fence'/>
                            <Details detail='Garden'/>
                            <Details detail='Parking'/>
                            <Details detail='Staff Quarters'/>
                            <Details detail='Swimming Pool'/>
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
                    {homeBuy ? <Button onClick={Buy}><TextButton>BUY</TextButton></Button>: <Button2 onClick={Buy}><TextButton>BUY</TextButton></Button2>}
                    {homeRent ? <Button onClick={Rent}><TextButton2>RENT</TextButton2></Button> : <Button2 onClick={Rent}><TextButton2>RENT</TextButton2></Button2>}
                   
                </Toggle>
                <Select>
                <option value="Select" disabled>Select type of property</option>
                        <option value="Single Family Homes">Single Family Homes</option>
                        <option value="Town Homes">Town Homes</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Tiny home">Tiny home</option>
                </Select>
                <Select>
                <option value="Select" >Location of property</option>
                        <option value="Bubanza">Bubanza</option>
                        <option value="Bujumbura Mairie">Bujumbura Mairie</option>
                        <option value="Bujumbura Rural">Bujumbura Rural</option>
                        <option value="Cibitoke">Cibitoke</option>
                        <option value="Muramvya">Muramvya</option>
                        <option value="Mwaro">Mwaro</option>
                        <option value="Cankuzo">Cankuzo</option>
                        <option value="Gitega">Gitega</option>
                        <option value="Rutana">Rutana</option>
                        <option value="Ruyigi">Ruyigi</option>
                        <option value="Karusi">Karusi</option>
                        <option value="Kayanza">Kayanza</option>
                        <option value="Kirundo">Kirundo</option>
                        <option value="Muyinga">Muyinga</option>
                        <option value="Ngozi">Ngozi</option>
                        <option value="Bururi">Bururi</option>
                        <option value="Makamba">Makamba</option>
                        <option value="Rumonge">Rumonge</option>
                </Select>
                <Input2 placeholder={homeRent? "Enter minimum rent": "Enter minimum price"} type="number"/>
                <Input2 placeholder={homeRent? "Enter minimum rent": "Enter minimum price"} type="number"/>
                {corporate ? <Input2 placeholder="Area" type="number"/>:<Input2 placeholder="Enter Bedroom(s)"/>}
                
                <WelcomeButton>
                    <div style={{
                        display: 'flex',
                        margin: 'auto auto auto auto',
                        paddingLeft: 130,
                        paddingRight: 130,
                    }}><img alt="search-min" src={SearchMin}/><h3>SEARCH</h3></div>
                </WelcomeButton>
                <MoreContentMobile>
                    <img src={ArrowUpMobile} alt='arrow-up-mobile' style={{
                        marginRight: 10
                    }}/>
                    {moreMobile ? <h4 onClick={() => setMoreMobile(false)}>Less Filters</h4>: <h4 onClick={() => setMoreMobile(true)}>More Filters</h4>}
                    
                </MoreContentMobile>
                {moreMobile ? <More>
                        <Heading>
                            <h3>Internal Features</h3>
                            <MoreContentDetails>
                            <Details detail='Aircon'/>
                            <Details detail='Alarm'/>
                            <Details detail='A Backup Generator'/>
                            <Details detail='En Suite Fibre'/>
                            <Details detail='Internet'/>
                            <Details detail='Furnished'/>
                            <Details detail='Serviced'/>
                            <Details detail='Service Charge Included'/>
                            <Details detail='Walk In Closet'/>
                            <Details detail='Lift/elevator'/>
                            <Details detail='Gym'/>
                            </MoreContentDetails>
                        </Heading>
                        <Heading>
                            <h3>External Features</h3>
                            <MoreContentDetails>
                            <Details detail='Balcony'/>
                            <Details detail='BBQ'/>
                            <Details detail='Borehole'/>
                            <Details detail='CCTV'/>
                            <Details detail='Electric Fence'/>
                            <Details detail='Garden'/>
                            <Details detail='Parking'/>
                            <Details detail='Staff Quarters'/>
                            <Details detail='Swimming Pool'/>
                            <Details detail='Wheelchair Access'/>
                            </MoreContentDetails>
                            </Heading>
                        <Heading>
                            <h3>Nearby</h3>
                            <MoreContentDetails>
                            <Details detail='Bus Stop'/>
                            <Details detail='Golf Course'/>
                            <Details detail='Hospital'/>
                            <Details detail='Scenic View'/>
                            <Details detail='School'/>
                            <Details detail='Sea View'/>
                            </MoreContentDetails>
                        </Heading>
                    </More>: null}
                
                
                {corporate? <Overlays location="Location or area"/>: <Overlays location="Location of property"/>}
                
            </Content>
            
           
        </Wrapper>
        
    )
}

export default Welcome;