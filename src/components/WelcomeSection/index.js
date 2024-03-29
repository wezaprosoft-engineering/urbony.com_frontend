import React, {useState, useEffect} from "react";
import { TextMenu } from "../Header/Header.styles";
import { Button, Button2, Content,SearchIcon, Input, Overlay, OverlayContent, Search, TextButton, TextButton2, Toggle, WelcomeText, Wrapper, SubOverlay, More, MoreContent, Check, Input2, WelcomeButton, Select, MoreContentMobile, MoreContentDetails, Heading} from "./Welcome.styles";
import search from '../../assets/images/search-icon.svg'
import { useGlobalState, setGlobalState } from "../../store/state";
import ArrowDown from '../../assets/images/arrow_down.svg'
import ArrowUp from '../../assets/images/arrow_up2.svg'
import SearchMin from '../../assets/images/searchmin.svg'
import ArrowUpMobile from '../../assets/images/arrow_up_mobile.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Details = props =>{
    
    //const [checked, setChecked] = useState(false)
    
   
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        {screen ? <MoreContent>
            
            <Check type='checkbox' onChange={props.onChange}/>
            <h4>{props.detail}</h4> 
            
        
        
        </MoreContent>: <MoreContent>
        <Check type='checkbox' value={props.value} onChange={props.onChange} checked={props.checked} id={props.id} key={props.myKey}/>
        <h4 style={{
            fontSize: 15
        }}>{props.detail}</h4> 
        </MoreContent>}
        
                               
        </>)
   
}


const Welcome = props =>{
    const {t} = useTranslation();
    const [corporate] = useGlobalState("corporate");
    const [more, setMore] = useState(false);
    const navigate = useNavigate()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const [homeBuy] = useGlobalState("homeBuy");
    const [homeRent] = useGlobalState("homeRent")
    const [moreMobile, setMoreMobile] = useState(false)
    var options;
    const Rent = () =>{
        setGlobalState("homeBuy", false);
        setGlobalState("homeRent", true)
        options = "RENT"
        
    }
    const Buy = () =>{
        
        setGlobalState("homeBuy", true);
        setGlobalState("homeRent", false)
        options = "SELL"
        
    }
    
   const MoreFilters = () =>{
    setMore(true)
   }
    const LessFilters = () =>{
        setMore(false)
    }
    const [internalFeatures, setInternalFeatures] = useState('')
    const [externalFeatures, setExternalFeatures] = useState('')
    const [nearbyFeatures, setNearbyFeatures] = useState('')
    const [location, setLocation] = useState('')
   
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [area, setArea] = useState('')
    
    const internalUrl = 'https://urbony.onrender.com/api/internalFeatures'
    const externalUrl = 'https://urbony.onrender.com/api/externalFeatures'
    const nearbyUrl = 'https://urbony.onrender.com/api/nearbyFeatures'
    const searchUrl = 'https://urbony.onrender.com/api/property/search'
    const propertyUrl = 'https://urbony.onrender.com/api/property-types'
    const [property, setProperty] = useState('')

    const getProperty = ()=>{
        try {
            fetch(propertyUrl,{
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
               
                
               console.log(json)
               setProperty(json)

               
            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
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
        getProperty()
    }, []);
    const [propertyTypesId, setPropertyTypesId] = useState(property[0]?.id)
    let body;
    let selectedInternal;
    let selectedExternal;
    let selectedNearby
    const searchRequest = async () => {
        if(corporate){
            setBedrooms(parseInt(0))
            setPropertyTypesId(property[3]?.id)
            
             body = JSON.stringify({propertyTypesId, location, min, max, bedrooms, area,options, selectedExternal, selectedInternal, selectedNearby})
        }else{
            if(min.length===0){
                body = JSON.stringify({propertyTypesId, location, max, bedrooms,  selectedExternal, selectedInternal, selectedNearby});
            } else if(max.length===0){
                body = JSON.stringify({propertyTypesId, location, min, bedrooms,  selectedExternal, selectedInternal, selectedNearby});
            } else if(max.length===0 && min.length===0){
                body = JSON.stringify({propertyTypesId, location, bedrooms,  selectedExternal, selectedInternal, selectedNearby});
            } else if(bedrooms.length===0){
                body = JSON.stringify({propertyTypesId, location, min, max, selectedExternal, selectedInternal, selectedNearby});
            } else if(min.length===0 && max.length===0 && bedrooms.length===0){
                body = JSON.stringify({propertyTypesId, location, selectedExternal, selectedInternal, selectedNearby});
            }else{
         body = JSON.stringify({propertyTypesId, location, min, max, bedrooms,  selectedExternal, selectedInternal, selectedNearby});
            }
        }
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
                navigate('/search', {state:json})
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    
    const Overlays = props =>{
        
        return(
            
            <Overlay>
                    <SubOverlay>
                    <OverlayContent><h2>{t('Welcome.type')}</h2>
                    {corporate ? 
                    <select style={{
                        width: 150,
                        height: '65px',
                        fontWeight: 400,
                        fontSize: 'large'
                    }} value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                       {property.length > 0 ?(
                        property.slice(3,6).map(house=>(
                            <option value={house.id} >{house.name}</option>
                        ))
                    ):<option>No Value</option>}
                        </select>
                : <select style={{
                    width: 150,
                    height: '65px',
                    fontWeight: 400,
                    fontSize: 'large'
                }}   onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                    {property.length > 0 ?(
                        property.map((house, index)=>(
                            <option value={house.id} selected = {index === 0 ? 'selected':false}>{house.name}</option>
                        ))
                    ):<option>No Value</option>}
                 
                    
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
                    <OverlayContent>{homeBuy ? <h2>{t('Welcome.price')}</h2>: <h2>{t('Welcome.rent_month')}</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min   BIF" style={{width: 100, marginRight: 5}} value={min} onChange={(e) => {
                        const {value} = e.target
                        const formated = (Number(value.replace(/\D/g, '')) || '').toLocaleString()
                        setMin(formated)}}/>
                    <Input placeholder="Max BIF" style={{width: 100, marginLeft: 5}}  value={max} onChange={(e) => {
                        const {value} = e.target
                        const formated = (Number(value.replace(/\D/g, '')) || '').toLocaleString()
                        setMax(formated)}}/></div></OverlayContent>
                    {corporate ? 
                    <OverlayContent><h2>{t('Welcome.area')}</h2><Input placeholder="Square meter" type="number" value={area} onChange={(e) => {setArea(e.target.value)}}/></OverlayContent>:
                    <OverlayContent><h2>{t('Welcome.bedroom')}</h2><Input placeholder="Select" value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))
                        
                    }/></OverlayContent>}
                    
                    
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
                                            setGlobalState("checked", true)
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
                                            setGlobalState("checked", true)
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
                                            setGlobalState("checked", true)
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
        
        <Wrapper>
            <Content>
                <WelcomeText>
                    <h2>URBONY</h2>
                    <h2>{t('Welcome.text1')}</h2>
                    <h3>{t('Welcome.text2')}</h3>
                </WelcomeText>
                

                <Toggle>
                    {homeBuy ? <Button onClick={Buy}><TextButton>{t('Welcome.buy')}</TextButton></Button>: <Button2 onClick={Buy}><TextButton>{t('Welcome.buy')}</TextButton></Button2>}
                    {homeRent ? <Button onClick={Rent}><TextButton2>{t('Welcome.rent')}</TextButton2></Button> : <Button2 onClick={Rent}><TextButton2>{t('Welcome.rent')}</TextButton2></Button2>}
                   
                </Toggle>
                {corporate? <Select value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                {property.length > 0 ?(
                        property.slice(3,6).map(house=>(
                            <option value={house.id} >{house.name}</option>
                        ))
                    ):<option>No Value</option>}
                </Select>:
                <Select value={propertyTypesId} onChange={(e) => setPropertyTypesId(parseInt(e.target.value))}>
                     {property.length > 0 ?(
                        property.map(house=>(
                            <option value={house.id} >{house.name}</option>
                        ))
                    ):<option>No Value</option>}
                </Select>}
                
                <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Select" >{t('Welcome.location')}</option>
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
                <Input2 placeholder={homeRent? t('Welcome.rentMinimum'): t('Welcome.minimum')}  value={min} onChange={(e) => {
                        const {value} = e.target
                        const formated = (Number(value.replace(/\D/g, '')) || '').toLocaleString()
                        setMin(formated)}}/>
                <Input2 placeholder={homeRent? t('Welcome.rentMaximum'): t('Welcome.maximum')} value={max} onChange={(e) => {
                        const {value} = e.target
                        const formated = (Number(value.replace(/\D/g, '')) || '').toLocaleString()
                        setMax(formated)}}/>
                {corporate ? <Input2 placeholder={t('Welcome.areaHolder')} type="number" value={area} onChange={(e) => {setArea(e.target.value)}}/>:
                <Input2 placeholder={t('Welcome.chambre')} value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))
                }/>}
                
                <WelcomeButton onClick={searchRequest}>
                    <div style={{
                        display: 'flex',
                        margin: 'auto auto auto auto',
                        paddingLeft:  screen ? 85:130,
                        paddingRight: 130,
                        alignItems: 'center',
                        alignContent: 'center'
                        
                    }}><img alt="search-min" src={SearchMin} style={{width: 20, height: 20}}/><h3>{t('Welcome.search')}</h3></div>
                </WelcomeButton>
                <MoreContentMobile>
                    <img src={ArrowUpMobile} alt='arrow-up-mobile' style={{
                        marginRight: 10,
                        width: 10,
                        height: 30
                    }}/>
                    {moreMobile ? <h4 onClick={() => setMoreMobile(false)}>{t('Welcome.lessFilters')}</h4>: <h4 onClick={() => setMoreMobile(true)}>{t('Welcome.moreFilters')}</h4>}
                    
                </MoreContentMobile>
                {moreMobile ? <More>
                    <Heading >
                        <h3>{t('Welcome.internal')}</h3>
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
                        <h3>{t('Welcome.external')}</h3>
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
                        <h3>{t('Welcome.nearby')}</h3>
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
                
                
                 {Overlays ({location:t('Welcome.location')})}
                 
                
            </Content>
            
           
        </Wrapper>
        
    )
}

export default Welcome;