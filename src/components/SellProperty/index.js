import React, {useState} from "react";
import { Arrow, Content, Head, Line, Title, Wrapper } from "../Popular/Popular.styles";
import arrow from '../../assets/images/arrow.svg'
import { StepContent, StepDevelopped, Steps, TextContent } from "./SellPropert.styles";
import Step from '../../assets/images/step.svg'
import { useTranslation } from "react-i18next";
import {useLocation, useNavigate} from 'react-router-dom'
import { useGlobalState } from "../../store/state";
const SellProperty = props =>{
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate()
    const [corporate] = useGlobalState('corporate')
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    const Step1 = () => {
            setStep1(true)
            setStep2(false)
            setStep3(false)
            setStep4(false)
    }
    const offStep1 = () =>{
        setStep1(false)
    }
    const Step2 = () => {
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setStep4(false)        
    }
    const offStep2 = () =>{
        setStep2(false)
    }
    const Step3 = () => {
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep4(false)
             
    }
    const offStep3 = () =>{
        setStep3(false)
    }
    const Step4 = () => {
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(true)
    }
    const offStep4 = () =>{
        setStep4(false)
    }
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        {location.pathname==='/sell'? null:<Line style={{
                            marginTop: 29
                        }}/>}
                        
                        <h2>{props.title}</h2>
                    </Head>
                    <Head style={{
                        color: "rgba(217,11,66,1)",
                        cursor: 'pointer'
                        }} onClick={()=>navigate('/sign-up')}>
                            <h3>{t('sellProperty.start')}</h3>
                            <Arrow src={arrow}/>
                    </Head>
                </Title>
                <div style={{
                        color: "rgba(46,15,89,1)"
                        }}>
                <h1>{props.title1}</h1>
                <h2>{props.proposition}</h2>
                </div>

                <div style={{
                    marginBottom: 60
                }}>
                    <h3 style={{
                        fontWeight: 400
                    }}>{props.step}</h3>
                </div>
                {corporate || location.pathname==='/management' ? <>
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step1')}</div>{
                    step1 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep1}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step1}>+</div>
                }
                
                </Steps>
                {step1 ? <StepDevelopped>
                    <StepContent>
                        <h2>{t('propertyManagement.step1Title')}</h2>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content4')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content5')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content6')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content7')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content8')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content9')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content10')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step1Content11')}</h3>
                        </TextContent>
                        
                    </StepContent>
                </StepDevelopped>:null}
                
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step2')}</div>
                {
                    step2 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep2}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step2}>+</div>
                }
                </Steps>
                {step2 ? <StepDevelopped>
                    <StepContent>
                        <h2>{t('propertyManagement.step2Title')}</h2>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content4')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content5')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content6')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content7')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content8')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step2Content9')}</h3>
                        </TextContent>
                        
                   
                    </StepContent>
                </StepDevelopped>:null}
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step3')}</div>
                {
                    step3 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep3}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step3}>+</div>
                }
                </Steps>
                {step3 ? <StepDevelopped>
                    <StepContent style={{
                        height: '520px'
                    }}>
                        <h2>{t('propertyManagement.step3Title')}</h2>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content4')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content5')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content6')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>{t('propertyManagement.step3Content7')}</h3>
                        </TextContent>
                        <TextContent>
                        <h3>{t('propertyManagement.step3Conclusion')}</h3>
                        </TextContent>
                        
                        
                        
                    </StepContent>
                </StepDevelopped>:null}
                
                </>: <>
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step1')}</div>{
                    step1 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep1}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step1}>+</div>
                }
                
                </Steps>
                {step1 ? <StepDevelopped>
                    <StepContent>
                        <h2>{t('sellProperty.step1Title')}</h2>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content4')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content5')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step1" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step1Content6')}</h3>
                        </TextContent>
                        
                    </StepContent>
                </StepDevelopped>:null}
                
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step2')}</div>
                {
                    step2 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep2}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step2}>+</div>
                }
                </Steps>
                {step2 ? <StepDevelopped>
                    <StepContent>
                        <h2>{t('sellProperty.step2Title')}</h2>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step2Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step2Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step2Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step2" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step2Content4')}</h3>
                        </TextContent>
                   
                    </StepContent>
                </StepDevelopped>:null}
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step3')}</div>
                {
                    step3 ? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep3}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step3}>+</div>
                }
                </Steps>
                {step3 ? <StepDevelopped>
                    <StepContent style={{
                        height: '520px'
                    }}>
                        <h2>{t('sellProperty.step3Title')}</h2>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content3')}</h3>
                        </TextContent>
                        <h2>{t('sellProperty.step3Title2')}</h2>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content4')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content5')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step3" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step3Content6')}</h3>
                        </TextContent>
                        
                        
                    </StepContent>
                </StepDevelopped>:null}
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >{t('sellProperty.step4')}</div>
                {
                    step4? <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={offStep4}>-</div>:  <div style={{
                        fontWeight: 800,
                        paddingRight: 30,
                        cursor: "pointer",
                    }} onClick={Step4}>+</div>
                }
                </Steps>
                {step4 ? <StepDevelopped>
                    <StepContent>
                        <h2>{t('sellProperty.step4Title')}</h2>
                        <TextContent>
                        <img alt="step4" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step4Content1')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step4" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step4Content2')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step4" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step4Content3')}</h3>
                        </TextContent>
                        <TextContent>
                        <img alt="step4" src={Step} style={{
                            marginRight: 10,
                            width: 10,
                            height: 17
                        }}/>
                        <h3>{t('sellProperty.step4Content4')}</h3>
                        </TextContent>
                       <h3>{t('sellProperty.step4Conclusion1')}</h3>
                       <h3>{t('sellProperty.step4Conclusion2')}</h3>
                        
                    </StepContent>
                </StepDevelopped>:null}
                </>}
            </Content>
        </Wrapper>
    )
}
export default SellProperty