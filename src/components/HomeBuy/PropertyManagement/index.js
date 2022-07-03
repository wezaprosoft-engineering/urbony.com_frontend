import React, {useState} from "react";
import { Arrow, Content, Head, Line, Title, Wrapper } from "../Popular/Popular.styles";
import arrow from '../../images/arrow.svg'
import { StepContent, StepDevelopped, Steps, TextContent } from "../SellProperty/SellPropert.styles";
import Step from '../../images/step.svg'

const PropertyManagement = () =>{
    const [step1, setStep1] = useState(false);
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
        if (step1 || step3){
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setStep4(false)
        }
    }
    const offStep2 = () =>{
        setStep2(false)
    }
    const Step3 = () => {
        if (step2 || step4){
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep4(false)
        }
    }
    const offStep3 = () =>{
        setStep3(false)
    }
    const Step4 = () => {
        if (step3){
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(true)
        }
    }
    const offStep4 = () =>{
        setStep4(false)
    }
    return(
        <Wrapper>
            <Content>
                <Title>
                    <Head>
                        <Line/>
                        <h3>Property Management</h3>
                    </Head>
                    <Head style={{
                        color: "rgba(217,11,66,1)"
                        }}>
                            <h3>Start Selling</h3>
                            <Arrow src={arrow}/>
                    </Head>
                </Title>
                <div style={{
                        color: "rgba(46,15,89,1)"
                        }}>
                <h2>Urbony Management: A Professional and transparent rental management</h2>
                
                </div>

                <div style={{
                    marginBottom: 60
                }}>
                    <h3 style={{
                        fontWeight: 400
                    }}>No matter the situation of your property, we take full control management.
                    Trevi Management is a team dedicated to the daily management of your real estate properties, and it 
                    helps you with all important steps of the relationship with your tenants. In addition to the collection of your rents,
                    we become the single point of contact with your tenant and you no longer have to worry about the administrative and technical management
                    of your property (works, maintenance, claims).
                    </h3>
                </div>
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >Step 1</div>{
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
                        <h2>Search for a tenant</h2>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>A first contact completely for free</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Contact avec un expert de l'immobilier</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>An essential step to get started</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>In-depth visit of your property by one of our experts</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Document analysis (expenses, plans ,leases, etc.)</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Submission of an evaluation file ("Example: Focus on My Property")</h3>
                        </TextContent>
                        
                    </StepContent>
                </StepDevelopped>:null}
                
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >Step 2</div>
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
                        <h2>We prepare your sales file in every aspect:</h2>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Legal</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Technical</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Administrative - Urban Planning</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Good information ensures a sale with total peace of mind!</h3>
                        </TextContent>
                   
                    </StepContent>
                </StepDevelopped>:null}
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >Step 3</div>
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
                        <h2>Let's get started: the Urbony machine is launched!</h2>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Follow-up of our applicants: people living in Burundi and abroad</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>30% of our sales are made in the first 3 weeks</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Photo report by a professional</h3>
                        </TextContent>
                        <h2>At advertising level: </h2>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Your property in XL format on all major specialized websites in real estate</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Your property in XL format on all major specialized websites in real estate</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Your property in the most important "paper" media</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Your property on social media (Facebook, Instagram, Twitter, ...)</h3>
                        </TextContent>
                        
                    </StepContent>
                </StepDevelopped>:null}
                <Steps><div
                style={{
                    paddingLeft: 30
                }}
                >Step 4</div>
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
                        <h2>The sale becomes reality!</h2>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Negotiation of the sale consditions</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>verification of the financial ability of the buyer</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Completion of the sales agreement with your notary</h3>
                        </TextContent>
                        <TextContent>
                        <img src={Step} style={{
                            marginRight: 10
                        }}/>
                        <h3>Support until the deed of sale</h3>
                        </TextContent>
                       <h3>Congratulations, you sold your property at the best conditions.</h3>
                       <h3>With Urbony, you knock on the right door!</h3>
                        
                    </StepContent>
                </StepDevelopped>:null}
            </Content>
        </Wrapper>
    )
}

export default PropertyManagement