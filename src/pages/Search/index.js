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
import {SearchIcon, Input, Overlay, OverlayContent, Search, SubOverlay, More, MoreContent, Check, Input2, WelcomeButton, Select, MoreContentMobile, MoreContentDetails, Heading, Checked  } from "../../components/WelcomeSection/Welcome.styles";
import PropertyForSell from "../../components/PropertyForSell";


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
        <Check type='checkbox' value={props.value} onChange={props.onChange}/>
        <h4>{props.detail}</h4> 
        </MoreContent>}
        
                               
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

    const [internal, setInternal] = useState([
        {
            value: "",
        }
    ])
    const [external, setExternal] = useState([
        {
            value: "",
        }
    ])
    const [nearby, setNearby] = useState([
        {
            value: "",
        }
    ])
    

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
                    }}> 
                        <option value={t('Welcome.residentialOption1')} >{t('Welcome.residentialOption1')}</option>
                        <option value={t('Welcome.residentialOption2')}>{t('Welcome.residentialOption2')}</option>
                        <option value={t('Welcome.residentialOption3')}>{t('Welcome.residentialOption3')}</option>
                        <option value={t('Welcome.residentialOption4')}>{t('Welcome.residentialOption4')}</option>
                        <option value={t('Welcome.residentialOption5')}>{t('Welcome.residentialOption5')}</option>
                        <option value={t('Welcome.residentialOption6')} >{t('Welcome.residentialOption6')}</option>
                        <option value={t('Welcome.residentialOption7')}>{t('Welcome.residentialOption7')}</option>
                        <option value={t('Welcome.residentialOption8')}>{t('Welcome.residentialOption8')}</option>
                        <option value={t('Welcome.residentialOption9')}>{t('Welcome.residentialOption9')}</option>
                        <option value={t('Welcome.residentialOption10')}>{t('Welcome.residentialOption10')}</option>
                        <option value={t('Welcome.residentialOption11')} >{t('Welcome.residentialOption11')}</option>
                        <option value={t('Welcome.residentialOption12')}>{t('Welcome.residentialOption12')}</option>
                        
                        </select>}
                        </OverlayContent>
                            <OverlayContent><h2>{t('Welcome.where')}</h2><select style={{
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
                        <OverlayContent>{homeBuy ? <h2>{t('Welcome.price')}</h2>: <h2>{t('Welcome.rent_month')}</h2>}<div style={{display: 'flex', justifyContent: 'space-between' }}><Input placeholder="Min" style={{width: 100, marginRight: 5}} type="number"/><Input placeholder="Max" style={{width: 100, marginLeft: 5}} type="number"/></div></OverlayContent>
                        {corporate ? 
                        <OverlayContent><h2>{t('Welcome.area')}</h2><Input placeholder="Square meter" type="number"/></OverlayContent>:
                        <OverlayContent><h2>{t('Welcome.bedroom')}</h2><Input placeholder="Select"/></OverlayContent>}
                        
                        
                        <OverlayContent><Search><SearchIcon src={search}/><TextMenu style={{color: 'white', fontWeight: 700}}>{t('Welcome.search')}</TextMenu></Search></OverlayContent>
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
                                <Details detail={t('Welcome.internal1')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal1')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal1'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal2')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal2')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal2'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal3')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal3')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal3'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal4')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal4')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal4'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal5')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal5')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal5'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal6')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal6')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal6'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal7')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal7')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal7'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal8')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal8')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal8'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal9')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal9')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal9'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal10')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal10')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal10'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.internal11')} value={internal} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setInternal([...internal, {
                                                value: t('Welcome.internal11')
                                            }])
                                        } else{
                                            setInternal(
                                                internal.filter((values) => values.value !== t('Welcome.internal11'))
                                            );
                                        }
                                    }
                                }/>
                            </div>
                            <div>
                                <h3>{t('Welcome.external')}</h3>
                                <Details detail={t('Welcome.external1')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external1')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external1'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external2')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external2')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external2'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external3')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external3')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external3'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external4')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external4')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external4'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external5')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external5')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external5'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external6')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external6')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external6'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external7')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external7')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external7'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external8')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external8')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external8'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external9')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external9')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external9'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.external10')} value={external} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setExternal([...external, {
                                                value: t('Welcome.external10')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.external10'))
                                            );
                                        }
                                    }
                                }/>
                            </div>
                            <div>
                                <h3>{t('Welcome.nearby')}</h3>
                                <Details detail={t('Welcome.nearby1')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby1')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby1'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.nearby2')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby2')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby2'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.nearby3')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby3')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby3'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.nearby4')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby4')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby4'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.nearby5')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby5')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby5'))
                                            );
                                        }
                                    }
                                }/>
                                <Details detail={t('Welcome.nearby6')} value={nearby} onChange={
                                    (e) =>{
                                        if(e.target.checked){
                                            setNearby([...nearby, {
                                                value: t('Welcome.nearby6')
                                            }])
                                        } else{
                                            setInternal(
                                                external.filter((values) => values.value !== t('Welcome.nearby6'))
                                            );
                                        }
                                    }
                                }/>
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
                <Select>
                    <option value={t('Welcome.residentialOption1')} >{t('Welcome.residentialOption1')}</option>
                    <option value={t('Welcome.residentialOption2')}>{t('Welcome.residentialOption2')}</option>
                    <option value={t('Welcome.residentialOption3')}>{t('Welcome.residentialOption3')}</option>
                    <option value={t('Welcome.residentialOption4')}>{t('Welcome.residentialOption4')}</option>
                    <option value={t('Welcome.residentialOption5')}>{t('Welcome.residentialOption5')}</option>
                    <option value={t('Welcome.residentialOption6')} >{t('Welcome.residentialOption6')}</option>
                    <option value={t('Welcome.residentialOption7')}>{t('Welcome.residentialOption7')}</option>
                    <option value={t('Welcome.residentialOption8')}>{t('Welcome.residentialOption8')}</option>
                    <option value={t('Welcome.residentialOption9')}>{t('Welcome.residentialOption9')}</option>
                    <option value={t('Welcome.residentialOption10')}>{t('Welcome.residentialOption10')}</option>
                    <option value={t('Welcome.residentialOption11')} >{t('Welcome.residentialOption11')}</option>
                    <option value={t('Welcome.residentialOption12')}>{t('Welcome.residentialOption12')}</option>
                </Select>}
                
                <Select>
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
                <Input2 placeholder={homeRent? t('Welcome.rentMinimum'): t('Welcome.minimum')} type="number"/>
                <Input2 placeholder={homeRent? t('Welcome.rentMaximum'): t('Welcome.maximum')} type="number"/>
                {corporate ? <Input2 placeholder={t('Welcome.areaHolder')} type="number"/>:<Input2 placeholder={t('Welcome.chambre')}/>}
                
                <WelcomeButton>
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
                    {moreMobile ? <h4 onClick={() => setMoreMobile(false)}>{t('Welcome.lessFilters')}</h4>: <h4 onClick={() => setMoreMobile(true)}>{t('Welcome.moreFilters')}</h4>}
                    
                </MoreContentMobile>
                {moreMobile ? <More>
                        <Heading>
                        <h3>{t('Welcome.internal')}</h3>
                            <MoreContentDetails>
                            <Details detail={t('Welcome.internal1')}/>
                            <Details detail={t('Welcome.internal2')}/>
                            <Details detail={t('Welcome.internal3')}/>
                            <Details detail={t('Welcome.internal4')}/>
                            <Details detail={t('Welcome.internal5')}/>
                            <Details detail={t('Welcome.internal6')}/>
                            <Details detail={t('Welcome.internal7')}/>
                            <Details detail={t('Welcome.internal8')}/>
                            <Details detail={t('Welcome.internal9')}/>
                            <Details detail={t('Welcome.internal10')}/>
                            <Details detail={t('Welcome.internal11')}/>
                            </MoreContentDetails>
                        </Heading>
                        <Heading>
                        <h3>{t('Welcome.external')}</h3>
                            <MoreContentDetails>
                            <Details detail={t('Welcome.external1')}/>
                            <Details detail={t('Welcome.external2')}/>
                            <Details detail={t('Welcome.external3')}/>
                            <Details detail={t('Welcome.external4')}/>
                            <Details detail={t('Welcome.external5')}/>
                            <Details detail={t('Welcome.external6')}/>
                            <Details detail={t('Welcome.external7')}/>
                            <Details detail={t('Welcome.external8')}/>
                            <Details detail={t('Welcome.external9')}/>
                            <Details detail={t('Welcome.external10')}/>
                            </MoreContentDetails>
                            </Heading>
                        <Heading>
                        <h3>{t('Welcome.nearby')}</h3>
                            <MoreContentDetails>
                            <Details detail={t('Welcome.nearby1')}/>
                            <Details detail={t('Welcome.nearby2')}/>
                            <Details detail={t('Welcome.nearby3')}/>
                            <Details detail={t('Welcome.nearby4')}/>
                            <Details detail={t('Welcome.nearby5')}/>
                            <Details detail={t('Welcome.nearby6')}/>
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