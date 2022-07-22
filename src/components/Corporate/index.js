import React, {useState} from "react";
import { Content, Line, Title, Wrapper, Head } from "../Popular/Popular.styles";
import { Content as Content1, WelcomeText, Wrapper as Wrapper1 } from "../WelcomeSection/Welcome.styles";
import { H2, NOFocus, Step, StepDetail } from "./Corporate.styles";
import Step2 from '../../assets/images/step2.svg'
import { Button } from "../Header/Header.styles";
import Popular from "../Popular";
import SellerRequestForm from "../forms/SellerRequestForm";
import Estimation from '../../assets/images/estimation.svg'
import Office from '../../assets/images/office.jpeg'

const Corporates = props =>{

    const [tenant, setTenant] = useState(true)
    const [buyer, setBuyer] = useState(false)
    const [owner, setOwner] = useState(false)

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
            <Content1 style={{
                minHeight: 700
            }}>
                <WelcomeText style={{
                    
                    width: '80%',
                    paddingTop: 450
                }}>
                <h2>URBONY CORPORATE:</h2>
                <h2>{props.title}</h2>
                </WelcomeText>
            </Content1>
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
                <Head style={{
                    color: "rgba(46,15,89,1)",
                    marginBottom: 200
                }}> 
                    {tenant? <H2>{props.tenant}</H2>:<NOFocus onClick={makeTenant}>{props.tenant}</NOFocus> }
                    {buyer? <H2>{props.buyer}</H2>:<NOFocus onClick={makeBuyer}>{props.buyer}</NOFocus> }
                    {owner? <H2>{props.owner}</H2>:<NOFocus onClick={makeOwner}>{props.owner}</NOFocus> }
                    <h2>&nbsp;</h2>
                    <h2>&nbsp;</h2>
                </Head>
                {tenant? <h2>{props.tenant1}</h2>: <>
                {buyer ? <h2>{props.buyer1}</h2>:
                <h2>{props.owner1}</h2>}</>}
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
                <Button style={{
                    width: 785,
                    height: 55,
                    backgroundColor:'rgba(255,0,0,1)',
                    fontSize: 25,
                    fontWeight: 800,
                    marginTop: 80,
                    marginBottom: 80
                }}>{tenant ? <>{props.tenant2}</>:<>{buyer? <>{props.buyer2}</>: <>{props.owner2}</>}</>}</Button>
                <Popular margin="0px" Offices="Offices"/>
                <Button style={{
                    backgroundColor: 'red',
                    borderRadius: '10px',
                    height : '55px',
                    width: '100%',
                    fontWeight: 700,
                    fontSize: '35px',
                    marginTop: 100,
                    marginBottom: 100,
                    
                   }}><div style={{
                    display: 'flex',
                    
                    width: 410,
                    margin: 'auto auto auto auto'
                    
                   }}>Get Free Estimation <img src={Estimation} alt='estimation' style={{
                    width: 30,
                    height: 40,
                    marginLeft: 13
                   }}/></div></Button>
            </Content>
        </Wrapper>
        <SellerRequestForm  text="You too can sell better, faster and easier with Urbony!"/>
        </>
    )
}

export default Corporates;