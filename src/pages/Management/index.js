import React, {useState, useEffect} from "react";
import { EstimationButton, EstmationContent, Estimator } from "../GetInTouch/GetInTouch.styles";
import {  Wrapper} from "../../components/WelcomeSection/Welcome.styles";
import { CardButton, Content, Head, Line, Title } from "../../components/Popular/Popular.styles";
import { Benefits, ManagementCard, ManagementContact, ManagementContent, ManagementText, ManagementContentUpper, ManagementOffer } from "./Management.styles";
import Nice from '../../assets/images/nice.svg'
import Bad from '../../assets/images/bad.svg'
import Estimation from '../../assets/images/estimation.svg'
import SellerRequestForm from "../../components/forms/SellerRequestForm";
import SellProperty from "../../components/SellProperty";
const Management = () => {
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    
    
    return(
        <>
        <Wrapper>
            <ManagementContentUpper>
            <ManagementText>
                    <h1>Urbony Management: </h1>
                    <h1>A Professional and transparent rental management</h1>
                    <h2 style={{
                        marginTop: 100
                    }}>Discover our offers in rental management</h2>
                </ManagementText>
            </ManagementContentUpper>
        </Wrapper>
        <Wrapper style={{
            backgroundImage: 'none'
        }}>
        <SellProperty title="Property management" title1="Urbony Management: A Professional and transparent rental management" step="No matter the situation of your property, we take full control management. Trevi Management is a team dedicated to the daily management of your real estate properties, and it helps you with all important steps of the relationship with your tenants. In addition to the collection of your rents, we become the single point of contact with your tenant and you no longer have to worry about the administrative and technical management of your property (works, maintenance, claims)."/>
        <Content>
            <ManagementContent>
        <Title>
            <Head>
                <Line style={{
                    marginTop: 35,
                    marginRight: 0
                }}/>
                <h1 style={{
                    color: 'rgba(46,15,89,1)'
                }}>Who calls upon our rental management services?</h1>
            </Head>
        </Title>
        <ManagementOffer>
            <ManagementContact>
                <h2 style={{
                    
                    color: 'rgba(46,15,89,1)'
                }}>Invest or landlord</h2>
                <p>Many owners prefer not to deal with the obligations associated to property management 
                    and entrust us with the rental management of their properties.</p>
            </ManagementContact>
            <ManagementContact>
                <h2 style={{
                    color: 'rgba(46,15,89,1)'
                }}>Member of the african diaspora and expatriates</h2>
                <p>Many people who work for international or Panafrican institutions and accept an assignment abroad for a few years, 
                    entrust us with the rental and management of their real estate for the duration of their stay abroad.
                </p>
            </ManagementContact>
            <ManagementContact>
                <h2 style={{
                    color: 'rgba(46,15,89,1)'
                }}>Private assets company or condominium</h2>
                <p>We manage large property holdings owned by companies or joint owners while respecting the interests of each party, 
                    in complete independence and objectivity with a permanent concern 
                    for quality and professionalism.
                </p>
            </ManagementContact>
        </ManagementOffer>
        </ManagementContent>
        <ManagementContent>
        <Title style={{
            marginBottom: 200
        }}>
            <Head>
                <Line style={{
                    marginTop: 35,
                    marginRight: 0
                }}/>
                <h1 style={{
                    color: 'rgba(46,15,89,1)',
                }}>Rental management fees: two formulas to control your costs according to your needs.</h1>
            </Head>
        </Title>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {screen ? <ManagementCard style={{
                height: '20%'
            }}>
                <h2 style={{
                    marginTop: 52,
                    
                }}>Basic offer</h2>
                <h3>Simple Rental Management</h3>
                <h2>as from</h2>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>5,000 BIF </span>excl. VAT / month</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>A complete management mandate combining accounting, 
                        technical and administrative services </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>A periodic management report </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='bad' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='bad'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>“Unpaid rent” insurance  </h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>REQUEST AN OFFER</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }}>REQUEST AN OFFER</CardButton>}
            </ManagementCard>:<ManagementCard>
                <h2 style={{
                    marginTop: 52
                }}>Basic offer</h2>
                <h3>Simple Rental Management</h3>
                <h2>as from</h2>
                <h2><span style={{color: 'rgba(46,15,89,1)'}}>5,000 BIF </span>excl. VAT / month</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>A complete management mandate combining accounting, 
                        technical and administrative services </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>A periodic management report </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Bad} alt='bad' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Bad} alt='bad'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>“Unpaid rent” insurance  </h4></div>
                </Benefits>
                
                {screen ? <CardButton style={{
                    width: 345,
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>REQUEST AN OFFER</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                    marginTop: 100
                }}>REQUEST AN OFFER</CardButton>}
            </ManagementCard>}
            {screen ? <ManagementCard style={{
                background: '#2E0F59',
                color: 'white',
                height: '20%'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}>Best Value</div>}
               
            <h2>Premium offer</h2>
                <h3>Rental management with guarantee of unpaid rents</h3>
                <h2>as from</h2>
                <h2>10,000 BIF excl. VAT / month</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>Rental management with unpaid rent guarantee 
                        from 10,000 BIF excl. VAT/month  </h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>A complete management mandate combining accounting, 
                        technical and administrative services </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>A periodic management report </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>“Unpaid rent” insurance  </h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>REQUEST AN OFFER</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>REQUEST AN OFFER</CardButton>}
                
            </ManagementCard>: <ManagementCard style={{
                background: '#2E0F59',
                color: 'white'
            }}>
                {screen ? null:  <div style={{
                    backgroundColor: 'rgba(217, 11, 66, 1)',
                    height: 35,
                    borderRadius: '10px 10px 0px 0px',
                    fontSize: '25px',
                    fontWeight: 700,
                    color: 'white'
                }}>Best Value</div>}
               
            <h2>Premium offer</h2>
                <h3>Rental management with guarantee of unpaid rents</h3>
                <h2>as from</h2>
                <h2>10,000 BIF excl. VAT / month</h2>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>Rental management with unpaid rent guarantee 
                        from 10,000 BIF excl. VAT/month  </h4></div>
                </Benefits>
                <Benefits>
                    {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    
                    <div style={{
                        textAlign: 'left',
                        marginTop: 18
                    }}>
                    <h4>A complete management mandate combining accounting, 
                        technical and administrative services </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>A periodic management report </h4></div>
                </Benefits>
                <Benefits>
                {screen ? <img src={Nice} alt='nice' style={{
                        marginRight: 20
                    }}/>: 
                    <img src={Nice} alt='nice'/>}
                    <div style={{
                        textAlign: 'left',
                        
                    }}>
                    <h4>“Unpaid rent” insurance  </h4></div>
                </Benefits>
                {screen ? <CardButton style={{
                    width: '100%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                   
                }}>REQUEST AN OFFER</CardButton>: <CardButton style={{
                    width: '70%',
                    backgroundColor: 'red',
                    fontWeight: 700,
                    fontSize: '20px',
                
                }}>REQUEST AN OFFER</CardButton>}
                
            </ManagementCard>}
            
            {screen ?  <EstimationButton style={{
                marginLeft: '8%',
                width: 282
            }}>
                    <EstmationContent style={{
                        marginLeft: 40
                    }}>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>:  <EstimationButton style={{
                    borderRadius: 10
            }}>
                    <EstmationContent>
                        GET FREE ESTIMATION
                        <Estimator src={Estimation} alt='estimation'/>
                    </EstmationContent>
                   </EstimationButton>}
           
        </div>
        
                   
        </ManagementContent>
        
        </Content>
        
        </Wrapper>
        
        <SellerRequestForm text="Would you like your property Rented by us? Contact us for more information"/>
        </>
    )
}

export default Management;