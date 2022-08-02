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


import {useLocation} from 'react-router-dom'
import { EstimationButton, Estimator, EstmationContent } from "../../pages/GetInTouch/GetInTouch.styles";
const Corporates = props =>{

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
                <h2>URBONY CORPORATE:</h2>
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
                        <h2>Are you an </h2>
                    </Title>
                </Head>
                {screen ? <div style={{
                    color: 'rgba(46,15,89,1)'
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
                    {location.pathname==='/offices' ? <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText='Serviced offices'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText='Coworking Desk'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={EnterpriseOffice} CorporateCardAppartmentText='Enterprise Office'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={PrivateOffices} CorporateCardAppartmentText='Private offices'/>
                   
                </CorporateCardContent>: <>{
                    location.pathname==='/commercial-space' ?
                    <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText='Small space'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText='Large space'/>
                    
                   
                </CorporateCardContent>: <CorporateCardContent>
                <CorporateCardAppartment CorporateCardAppartmentImage={Warehouses} CorporateCardAppartmentText='Warehouses'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={Depots} CorporateCardAppartmentText='Depots'/>
                   
                </CorporateCardContent>
                }</>}
                </>: <>
                {buyer ? <>
                {location.pathname==='/offices' ? <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText='Serviced offices'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText='Coworking Desk'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={EnterpriseOffice} CorporateCardAppartmentText='Enterprise Office'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={PrivateOffices} CorporateCardAppartmentText='Private offices'/>
                   
                </CorporateCardContent>: <>{
                    location.pathname==='/commercial-space' ?
                    <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Servicedoffices} CorporateCardAppartmentText='Serviced offices'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={CoworkingDesk} CorporateCardAppartmentText='Coworking Desk'/>
                    
                   
                </CorporateCardContent>: <CorporateCardContent>
                    <CorporateCardAppartment CorporateCardAppartmentImage={Warehouses} CorporateCardAppartmentText='Warehouses'/>
                    <CorporateCardAppartment  CorporateCardAppartmentImage={Depots} CorporateCardAppartmentText='Depots'/>
                   
                </CorporateCardContent>
                }</>}
                </> :
                <><h2>{props.owner1}</h2>
                <h3>We offer a service attentive to your need in office real estate:</h3>
                <StepDetail>
                   <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>Very diverse portfolio in office spaces</h3>
                    </Step>
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>Present everywhere in Burundi</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>Personalized support: a single point of contact manages your file.</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>Objective advice on the quality and cost of the surfaces presented.</h3>
                    </Step> 
                    <Step>
                    <img src={Step2} alt="step2"/>
                    <h3>A good knowledge of your needs allows an optimal selection of the spaces presented: avoid wasting time</h3>
                    </Step>  
                </StepDetail>
                {location.pathname==='/industrial-space' && owner ? null: <Button style={{
                    width: 785,
                    height: 55,
                    backgroundColor:'rgba(255,0,0,1)',
                    fontSize: 25,
                    fontWeight: 800,
                    marginTop: 80,
                    marginBottom: 80
                }}>{tenant ? <>{props.tenant2}</>:<>{buyer? <>{props.buyer2}</>: <>{props.owner2}</>}</>}</Button>}
                
                
                </>}</>}
                {location.pathname==='/industrial-space'? <>{screen? <Button style={{
                    width: 368,
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
                <Popular margin="0px" Offices="Offices"/>:<>
                {location.pathname==='comercial-space'? 
                <Popular margin="0px" Offices="Stores"/>:
                <Popular margin="0px" Offices="Industrial Spaces"/>}
                </>
            }
                {screen ? <EstimationButton>
                    <EstmationContent>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                </EstimationButton>: <EstimationButton style={{
                    borderRadius: 10
                }}>
                    <EstmationContent>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                </EstimationButton>}
                
            </Content>
        </Wrapper>
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>
    )
}

export default Corporates;