import React, {useState, useEffect} from "react";
import { Content , Wrapper } from "./Search.styles";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../store/state";
import ArrowDown from '../../assets/images/arrow_down.svg'
import ArrowUp from '../../assets/images/arrow_up2.svg'
import search from '../../assets/images/search-icon.svg'
import SearchMin from '../../assets/images/searchmin.svg'
import ArrowUpMobile from '../../assets/images/arrow_up_mobile.svg'
import { TextMenu } from "../../components/Header/Header.styles";
import {SearchIcon, Input, Overlay, OverlayContent, Search, SubOverlay, More, MoreContent, Check, Input2, WelcomeButton, Select, MoreContentMobile, MoreContentDetails, Heading } from "../../components/WelcomeSection/Welcome.styles";
import PropertyForSell from "../../components/PropertyForSell";


const Details = props =>{
    
    
    return(
        <>
         <MoreContent>
        <Check type='checkbox' value={props.value} onChange={props.onChange} checked={props.checked} id={props.id} key={props.myKey}/>
        <h4 style={{color: 'black'}}>{props.detail}</h4> 
        </MoreContent>
        
                               
        </>)
   
}

const Searches = () =>{
    const {t} = useTranslation();
    const [corporate] = useGlobalState("corporate");
    const [more, setMore] = useState(false);
    const [homeBuy] = useGlobalState("homeBuy");
    const [homeRent] = useGlobalState("homeRent")
    const [moreMobile, setMoreMobile] = useState(false)
    
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const [internalFeatures, setInternalFeatures] = useState('')
    const [externalFeatures, setExternalFeatures] = useState('')
    const [nearbyFeatures, setNearbyFeatures] = useState('')
    const [location, setLocation] = useState('')
    const [propertyTypesId, setPropertyTypesId] = useState('')
    const [price, setPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const internalUrl = 'https://urbony.onrender.com/api/internalFeatures'
    const externalUrl = 'https://urbony.onrender.com/api/externalFeatures'
    const nearbyUrl = 'https://urbony.onrender.com/api/nearbyFeatures'
    const searchUrl = 'https://urbony.onrender.com/api/property/search'
    const internal = () => {
        try {
            fetch(internalUrl,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
               
                json.map((item1) =>(
                    item1.checked = false
                ))
               console.log(json)
               setInternalFeatures(json)

               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    const external = () => {
        try {
            fetch(externalUrl,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
                json.map((item2) =>(
                    item2.checked = false
                ))
               console.log(json)
               setExternalFeatures(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    const nearby = () => {
        try {
            fetch(nearbyUrl,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json =>{
                json.map((item3) =>(
                    item3.checked = false
                ))
               console.log(json)
               setNearbyFeatures(json)
               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        internal();
        external();
        nearby();
    }, []);

    let selectedInternal;
    let selectedExternal;
    let selectedNearby
    const searchRequest = async () => {
        const body = JSON.stringify({propertyTypesId, location, price, bedrooms,  selectedExternal, selectedInternal, selectedNearby});
        try {
           fetch(searchUrl, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    
    const MoreFilters = () =>{
        setMore(true)
       }
        const LessFilters = () =>{
            setMore(false)
        }
        const Overlays = props =>{
            
            return(
                <Overlay style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), -3px -4px 4px rgba(0, 0, 0, 0.25)'
                }}>
                        <SubOverlay>
                        <OverlayContent><h2>{t('Welcome.type')}</h2>
                        {corporate ? 
                        <select style={{
                            width: 150,
                            height: '65px',
                            fontWeight: 400,
                            fontSize: 'large'
                        }}>
                            <option value={t('Welcome.residentialOption1')} >{t('Welcome.residentialOption1')}</option>
                            <option value={t('Welcome.residentialOption10')}>{t('Welcome.residentialOption10')}</option>
                        <option value={t('Welcome.residentialOption11')} >{t('Welcome.residentialOption11')}</option>
                        <option value={t('Welcome.residentialOption12')}>{t('Welcome.residentialOption12')}</option>
                            </select>
                    : <select style={{
                        width: 150,
                        height: '65px',
                        fontWeight: 400,
                        fontSize: 'large'
                    }} value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}> 
                        <option value="1" >{t('Welcome.residentialOption1')}</option>
                        <option value="2">{t('Welcome.residentialOption2')}</option>
                        <option value="3">{t('Welcome.residentialOption3')}</option>
                        <option value="4">{t('Welcome.residentialOption4')}</option>
                        <option value="5">{t('Welcome.residentialOption5')}</option>
                        <option value="6" >{t('Welcome.residentialOption6')}</option>
                        <option value="7">{t('Welcome.residentialOption7')}</option>
                        <option value="8">{t('Welcome.residentialOption8')}</option>
                        <option value="9">{t('Welcome.residentialOption9')}</option>
                        <option value="10">{t('Welcome.residentialOption10')}</option>
                        <option value="11" >{t('Welcome.residentialOption11')}</option>
                        <option value="12">{t('Welcome.residentialOption12')}</option>
                        
                        </select>}
                        </OverlayContent>
                            <OverlayContent><h2>{t('Welcome.where')}</h2><select style={{
                            width: '99%',
                            height: '65px',
                            fontWeight: 400,
                            fontSize: 'large'
                        }} value={location} onChange={(e) => setLocation(e.target.value)}>
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
                        <OverlayContent>{homeBuy ? <h2>{t('Welcome.price')}</h2>: <h2>{t('Welcome.rent_month')}</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} value={price} onChange={(e) => {setPrice(parseInt(e.target.value))}}/></div></OverlayContent>
                        {corporate ? 
                        <OverlayContent><h2>{t('Welcome.area')}</h2><Input placeholder="Square meter" type="number"/></OverlayContent>:
                        <OverlayContent><h2>{t('Welcome.bedroom')}</h2><Input placeholder="Select" value={bedrooms} onChange={(e) => {setBedrooms(parseInt(e.target.value))}}/></OverlayContent>}
                        
                        
                        <OverlayContent><Search onClick={searchRequest}><SearchIcon src={search}/><TextMenu style={{color: 'white', fontWeight: 700}}>{t('Welcome.search')}</TextMenu></Search></OverlayContent>
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
                        }}>{t('Welcome.lessFilters')}</h4>
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
                        }}>{t('Welcome.moreFilters')}</h4>
                        </div>}
                        {more ? <More>
                            <div>
                                <h3>{t('Welcome.internal')}</h3>
                                {internalFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setInternalFeatures([...internalFeatures])
                                             selectedInternal = internalFeatures.filter((item1) =>
                                                item1.checked === true
                                            )
                                             console.log(selectedInternal)
                                            
                                          }}
                                          
                                        />
                                   
                                        
                                    )
                                })}
                                
                            </div>
                            <div>
                                <h3>{t('Welcome.external')}</h3>
                                {externalFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setExternalFeatures([...externalFeatures])
                                             selectedExternal = externalFeatures.filter((item2) =>
                                                item2.checked === true
                                            )
                                             console.log(selectedExternal)
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                                
                            </div>
                            <div>
                                <h3>{t('Welcome.nearby')}</h3>
                                {nearbyFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        key={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setNearbyFeatures([...nearbyFeatures])
                                             selectedNearby = nearbyFeatures.filter((item3) =>
                                                item3.checked === true
                                            )
                                             console.log(selectedNearby)
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                                
                            </div>
                        </More>: null}
                        
                        
                    </Overlay>
            )
        }
        
    return(
        <>
        <Wrapper>
            <Content>
                <h2 style={{color: 'rgba(46,15,89,1)', marginLeft: screen ? 7:25}}>Our houses for sell</h2>
                {corporate? <Select>
                    <option value={t('Welcome.residentialOption1')} >{t('Welcome.residentialOption1')}</option>
                        <option value={t('Welcome.residentialOption10')}>{t('Welcome.residentialOption10')}</option>
                    <option value={t('Welcome.residentialOption11')} >{t('Welcome.residentialOption11')}</option>
                    <option value={t('Welcome.residentialOption12')}>{t('Welcome.residentialOption12')}</option>
                </Select>:
                <Select value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                    <option value="1">{t('Welcome.residentialOption1')}</option>
                    <option value="2">{t('Welcome.residentialOption2')}</option>
                    <option value="3">{t('Welcome.residentialOption3')}</option>
                    <option value="4">{t('Welcome.residentialOption4')}</option>
                    <option value="5">{t('Welcome.residentialOption5')}</option>
                    <option value="6" >{t('Welcome.residentialOption6')}</option>
                    <option value="7">{t('Welcome.residentialOption7')}</option>
                    <option value="8">{t('Welcome.residentialOption8')}</option>
                    <option value="9">{t('Welcome.residentialOption9')}</option>
                    <option value="10">{t('Welcome.residentialOption10')}</option>
                    <option value="11" >{t('Welcome.residentialOption11')}</option>
                    <option value="12">{t('Welcome.residentialOption12')}</option>
                </Select>}
                
                <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="select"> {t('Welcome.location')}</option>
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
                <Input2 placeholder={homeRent? t('Welcome.rentMinimum'): t('Welcome.minimum')} type="number"/>
                <Input2 placeholder={homeRent? t('Welcome.rentMaximum'): t('Welcome.maximum')} type="number" value={price} onChange={(e) => {setPrice(parseInt(e.target.value))}}/>
                {corporate ? <Input2 placeholder={t('Welcome.areaHolder')} type="number"/>:<Input2 placeholder={t('Welcome.chambre')} value={bedrooms} onChange={(e) => {setBedrooms(parseInt(e.target.value))}}/>}
                
                <WelcomeButton onClick={searchRequest}>
                    <div style={{
                        display: 'flex',
                        margin: 'auto auto auto auto',
                        paddingLeft:  screen ? 85:130,
                        paddingRight: 130,
                        
                    }}><img alt="search-min" src={SearchMin}/><h3>{t('Welcome.search')}</h3></div>
                </WelcomeButton>
                <MoreContentMobile>
                    <img src={ArrowUpMobile} alt='arrow-up-mobile' style={{
                        marginRight: 10
                    }}/>
                    {moreMobile ? <h4 style={{color: 'rgba(46,15,89,1)'}} onClick={() => setMoreMobile(false)}>{t('Welcome.lessFilters')}</h4>: <h4 style={{color: 'rgba(46,15,89,1)'}} onClick={() => setMoreMobile(true)}>{t('Welcome.moreFilters')}</h4>}
                    
                </MoreContentMobile>
                {moreMobile ? <More>
                        <Heading >
                        <h3 style={{color: 'black'}}>{t('Welcome.internal')}</h3>
                            <MoreContentDetails>
                            {internalFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setInternalFeatures([...internalFeatures])
                                             selectedInternal = internalFeatures.filter((item1) =>
                                                item1.checked === true
                                            )
                                             console.log(selectedInternal)
                                            
                                          }}
                                          
                                        />
                                   
                                        
                                    )
                                })}
                            </MoreContentDetails>
                        </Heading>
                        <Heading>
                        <h3 style={{color: 'black'}}>{t('Welcome.external')}</h3>
                            <MoreContentDetails>
                            {externalFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setExternalFeatures([...externalFeatures])
                                             selectedExternal = externalFeatures.filter((item2) =>
                                                item2.checked === true
                                            )
                                             console.log(selectedExternal)
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                            </MoreContentDetails>
                            </Heading>
                        <Heading>
                        <h3 style={{color: 'black'}}>{t('Welcome.nearby')}</h3>
                            <MoreContentDetails>
                            {nearbyFeatures.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        key={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setNearbyFeatures([...nearbyFeatures])
                                             selectedNearby = nearbyFeatures.filter((item3) =>
                                                item3.checked === true
                                            )
                                             console.log(selectedNearby)
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                            </MoreContentDetails>
                        </Heading>
                    </More>: null}
                <Overlays location={t('Welcome.location')}/>
            </Content>
        </Wrapper>
        <PropertyForSell/>
        </>
    )
}

export default Searches;