import React, {useState} from "react";
import { MoreContent, Check, Overlay, SubOverlay, More, OverlayContent, Input, Search, SearchIcon } from "./SearchForm.styles";
import ArrowDown from '../../../assets/images/arrow_down.svg'
import ArrowUp from '../../../assets/images/arrow_up2.svg'
import search from '../../../assets/images/search-icon.svg'
import { TextMenu } from "../../Header/Header.styles";
import { useGlobalState } from "../../../store/state";

const Details = props =>{
    return(
        <>
        <MoreContent>
        <Check type='checkbox'/>
        <h4>{props.detail}</h4> 
        </MoreContent>
                               
        </>)
   
}
const SearchForm = props => {
    const [more, setMore] = useState(false);
    const [homeBuy] = useGlobalState("homeBuy")

    const MoreFilters = () =>{
        setMore(true)
       }
        const LessFilters = () =>{
            setMore(false)
        }
    return (
        <>
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
        <OverlayContent>{homeBuy ? <h2>PRICE</h2>: <h2>RENT/MONTH</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} type="number"/></div></OverlayContent>
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
        </>
    )
}



export default SearchForm;