import React, {useState, useEffect} from "react";
import { Content, Line, Title, Wrapper, Head } from "../Popular/Popular.styles";
import {  Wrapper as Wrapper1 } from "../WelcomeSection/Welcome.styles";
import { H2, NOFocus, Step, StepDetail, CorporateText, CorporateContentUpper, CorporateCardContent } from "./Corporate.styles";
import Step2 from '../../assets/images/step2.svg'
import { Button } from "../Header/Header.styles";
import Popular from "../Popular";
import SellerRequestForm from "../forms/SellerRequestForm";
import Estimation from '../../assets/images/estimation.svg'
import Office from '../../assets/images/office.jpeg'
import CorporateCardAppartment from "../CorporateCardAppartment";
import CoworkingDesk from '../../assets/images/Coworkingdesk.png'
import EnterpriseOffice from '../../assets/images/EnterpriseOffice.png'
import Servicedoffices from '../../assets/images/Servicedoffices.png'
import PrivateOffices from '../../assets/images/PrivateOffices.png'
import Warehouses from '../../assets/images/Warehouses.png'
import Depots from '../../assets/images/Depots.png'

import { useTranslation } from "react-i18next";
import {useLocation} from 'react-router-dom'
import { EstimationButton, Estimator, EstmationContent } from "../../pages/GetInTouch/GetInTouch.styles";
const Corporates = props =>{
    const {t, i18n} = useTranslation();
    const [tenant, setTenant] = useState(true)
    const [buyer, setBuyer] = useState(false)
    const [owner, setOwner] = useState(false)
    const location = useLocation()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);

    const makeTenant = () =>{
        setTenant(true)
        setBuyer(false)
        setOwner(false)
    }
    const makeBuyer = () =>{
        setTenant(false)
        setBuyer(true)
        setOwner(false)
    }
    const makeOwner = () =>{
        setTenant(false)
        setBuyer(false)
        setOwner(true)
    }
   

    return(
        <>
        <Wrapper1 style={{
            backgroundImage:`url(${Office})`,
            backgroundSize: 'cover'
        }}>
            <CorporateContentUpper>
                <CorporateText>
                <h2>{t('corporate.title')}</h2>
                <h2>{props.title}</h2>
                </CorporateText>
            </CorporateContentUpper>
        </Wrapper1>
        <Wrapper>
            <Content>
                <Head>
                    <Title>
                        <Line style={{
                            marginTop: 27
                        }}/>
                        <h2>{t('corporate.corporateTitle')}</h2>
                    </Title>
                </Head>
                {screen ? <div style={{
                    color: 'rgba(46,15,89,1)',
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    overflow: 'auto',
                    justifyContent: 'space-between',
                    
                    
                    
                    
                    
                }}>
                    {tenant? <H2>{props.tenant}</H2>:<NOFocus onClick={makeTenant}>{props.tenant}</NOFocus> }
                    {buyer? <H2>{props.buyer}</H2>:<NOFocus onClick={makeBuyer}>{props.buyer}</NOFocus> }
                    {owner? <H2>{props.owner}</H2>:<NOFocus onClick={makeOwner}>{props.owner}</NOFocus> }
                </div>: <Head style={{
                    color: "rgba(46,15,89,1)",
                    marginBottom: 200
                }}> 
                    {tenant? <H2>{props.tenant}</H2>:<NOFocus onClick={makeTenant}>{props.tenant}</NOFocus> }
                    {buyer? <H2>{props.buyer}</H2>:<NOFocus onClick={makeBuyer}>{props.buyer}</NOFocus> }
                    {owner? <H2>{props.owner}</H2>:<NOFocus onClick={makeOwner}>{props.owner}</NOFocus> }
                    <h2>&nbsp;</h2>
                    <h2>&nbsp;</h2>
                </Head>}
                
                {tenant? <>
                    {location.pathname==='/offices' ? <><CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText={t('corporate.servicedOffices')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText={t('corporate.coworkingDesk')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={EnterpriseOffice} CorporateCardAppartmentText={t('corporate.enterpriseOffice')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={PrivateOffices} CorporateCardAppartmentText={t('corporate.privateOffice')}/>
                   
                </CorporateCardContent></>: <>{
                    location.pathname==='/commercial-space' ?
                    <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText={t('corporate.smallSpace')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText={t('corporate.largeSpace')}/>
                    
                   
                </CorporateCardContent>: <CorporateCardContent>
                <CorporateCardAppartment CorporateCardAppartmentImage={Warehouses} CorporateCardAppartmentText={t('corporate.warehouses')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={Depots} CorporateCardAppartmentText={t('corporate.depots')}/>
                   
                </CorporateCardContent>
                }</>}
                </>: <>
                {buyer ? <>
                {location.pathname==='/offices' ? <CorporateCardContent>
                <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText={t('corporate.servicedOffices')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText={t('corporate.coworkingDesk')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={EnterpriseOffice} CorporateCardAppartmentText={t('corporate.enterpriseOffice')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={PrivateOffices} CorporateCardAppartmentText={t('corporate.privateOffice')}/>
                   
                </CorporateCardContent>: <>{
                    location.pathname==='/commercial-space' ?
                    <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText={t('corporate.servicedOffices')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText={t('corporate.coworkingDesk')}/>
                    
                   
                </CorporateCardContent>: <CorporateCardContent>
                <CorporateCardAppartment CorporateCardAppartmentImage={Warehouses} CorporateCardAppartmentText={t('corporate.warehouses')}/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={Depots} CorporateCardAppartmentText={t('corporate.depots')}/>
                   
                </CorporateCardContent>
                }</>}
                </> :
                <><h2>{props.owner1}</h2>
                <h3>{t('corporate.stepTitle')}</h3>
                <StepDetail>
                   <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>{t('corporate.step1')}</h3>
                    </Step>
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>{t('corporate.step2')}</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>{t('corporate.step3')}</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>{t('corporate.step4')}</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>{t('corporate.step5')}</h3>
                    </Step>  
                </StepDetail>
                {location.pathname==='/industrial-space' && owner ? null: <Button style={{
                    width: screen? '95%' :785,
                    height: screen? 40: 55,
                    backgroundColor:'rgba(255,0,0,1)',
                    fontSize: screen? 15: 25,
                    fontWeight: 800,
                    marginTop: 80,
                    marginBottom: 80
                }}>{tenant ? <>{props.tenant2}</>:<>{buyer? <>{props.buyer2}</>: <>{props.owner2}</>}</>}</Button>}
                
                
                </>}</>}
                {location.pathname==='/industrial-space'? <>{screen? <Button style={{
                    width: '95%',
                    height: 45,
                    backgroundColor:'rgba(255,0,0,1)',
                    fontSize: 18,
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 20
                }}>{tenant ? <>{props.tenant2}</>:<>{buyer? <>{props.buyer2}</>: <>{props.owner2}</>}</>}</Button>: <Button style={{
                    width: 785,
                    height: 55,
                    backgroundColor:'rgba(255,0,0,1)',
                    fontSize: 25,
                    fontWeight: 800,
                    marginTop: 80,
                    marginBottom: 80
                }}>{tenant ? <>{props.tenant2}</>:<>{buyer? <>{props.buyer2}</>: <>{props.owner2}</>}</>}</Button>}</>: null}
                {location.pathname==='/offices'? 
                <Popular margin="0px" Offices={t('popular.Offices')}/>:<>
                {location.pathname==='comercial-space'? 
                <Popular margin="0px" Offices={t('popular.Stores')}/>:
                <Popular margin="0px" Offices={t('popular.Industrial')}/>}
                </>
            }
                {screen ? <EstimationButton>
                    <EstmationContent>
                    {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                </EstimationButton>: <EstimationButton style={{
                    borderRadius: 10
                }}>
                    <EstmationContent>
                    {t('estimation.est')}
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                </EstimationButton>}
                
            </Content>
        </Wrapper>
        <SellerRequestForm  text={t('Welcome.text2')}/>
        </>
    )
}

export default Corporates;