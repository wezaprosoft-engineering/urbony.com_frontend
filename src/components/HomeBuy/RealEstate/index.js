import React from "react";
import { CardButton, Content, Head, Line, Title, Wrapper } from "../Popular/Popular.styles";
import { Input } from "../WelcomeSection/Welcome.styles";
import { CardContent, Description, RealEstateCard } from "./RealEstate.styles";
import Estate from '../../images/realEstate.png'


const RealEstate = () =>{
    return(
       <Wrapper>
        <Content style={{display: 'grid'}}>
           <Head>
            <Title>
                <Line style={{
                    border: '3px solid rgba(46,15,89,1)',
                    marginTop: 30,
                }}/>
                <h2 style={{
                    fontWeight: 500
                }}>Our Real Estate Projects</h2>
            </Title>
            <Title style={{
                marginTop: 55
            }}>
                    <h2 style={{
                            fontWeight: 500
                        }}>Filter By: </h2>
                        <Input placeholder='Price' type='number' style={{
                            backgroundColor: 'rgba(46,15,89,1)',
                            textAlign: 'center',
                            width: 255,
                            height: 45,
                            borderRadius: 5,
                            color: 'white',
                            fontWeight: 500,
                            marginTop: 10,
                            marginLeft: 20,
                            borderColor: 'transparent'
                        }}/>
                    </Title>
           </Head>
           <RealEstateCard>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                            backgroundSize: 'cover',
                            width: '50%'
                        }}>

                        </CardContent>
                        <CardContent style={{
                            width: '60%'
                        }}>
                            <Description>
                            <h1>Residential Homes</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/Houses READY TO MOVE IN !</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>Brussels - Building Pompidou. Magnificient building at
                            only 200m from metro Yser.
                            Perfectly located building composed of 46 kots/flats.
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            marginTop: 90
                            }}>Delivery Date: 23 July 2023</h2>
                            
                            </Description>
                            <div style={{
                                marginTop: 45
                            }}>
                            <h2 style={{
                                marginLeft:27,
                                marginTop: -20
                            }}>Price</h2>
                            <Description style={{
                                margin: 0,
                                marginLeft: 30,
                                display: 'flex',
                                justifyContent:'space-between',
                                marginTop: -25
                                
                            }}>
                                
                                <div style={{
                                    display: 'flex',
                                    
                                }}>
                                <Line style={{
                                    color: 'red',
                                    borderLeft: '1px solid red',
                                    height: 102,
                                    width: 0,
                                    marginTop: 5
                                    
                                }}/>
                                <div style={{
                                    marginTop: -10
                                }}>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>Flat Studio from: </h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </div>
                                
                                </div>
                                <CardButton style={{
                                    backgroundColor: 'red',
                                    width: 295,
                                    height: 89,
                                    borderRadius: '20px 0px 10px 0px',
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    marginTop: 27
                                }}>Discover</CardButton>
                                
                            </Description>
                            </div>
                            
                            
                        </CardContent>
           </RealEstateCard>
           <RealEstateCard>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                            backgroundSize: 'cover',
                            width: '50%'
                        }}>

                        </CardContent>
                        <CardContent style={{
                            width: '60%'
                        }}>
                            <Description>
                            <h1>Residential Homes</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/Houses READY TO MOVE IN !</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>Brussels - Building Pompidou. Magnificient building at
                            only 200m from metro Yser.
                            Perfectly located building composed of 46 kots/flats.
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            marginTop: 90
                            }}>Delivery Date: 23 July 2023</h2>
                            
                            </Description>
                            <div style={{
                                marginTop: 45
                            }}>
                            <h2 style={{
                                marginLeft:27,
                                marginTop: -20
                            }}>Price</h2>
                            <Description style={{
                                margin: 0,
                                marginLeft: 30,
                                display: 'flex',
                                justifyContent:'space-between',
                                marginTop: -25
                                
                            }}>
                                
                                <div style={{
                                    display: 'flex',
                                    
                                }}>
                                <Line style={{
                                    color: 'red',
                                    borderLeft: '1px solid red',
                                    height: 102,
                                    width: 0,
                                    marginTop: 5
                                    
                                }}/>
                                <div style={{
                                    marginTop: -10
                                }}>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>Flat Studio from: </h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </div>
                                
                                </div>
                                <CardButton style={{
                                    backgroundColor: 'red',
                                    width: 295,
                                    height: 89,
                                    borderRadius: '20px 0px 10px 0px',
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    marginTop: 27
                                }}>Discover</CardButton>
                                
                            </Description>
                            </div>
                            
                            
                        </CardContent>
           </RealEstateCard>
           <RealEstateCard>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                            backgroundSize: 'cover',
                            width: '50%'
                        }}>

                        </CardContent>
                        <CardContent style={{
                            width: '60%'
                        }}>
                            <Description>
                            <h1>Residential Homes</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/Houses READY TO MOVE IN !</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>Brussels - Building Pompidou. Magnificient building at
                            only 200m from metro Yser.
                            Perfectly located building composed of 46 kots/flats.
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            marginTop: 90
                            }}>Delivery Date: 23 July 2023</h2>
                            
                            </Description>
                            <div style={{
                                marginTop: 45
                            }}>
                            <h2 style={{
                                marginLeft:27,
                                marginTop: -20
                            }}>Price</h2>
                            <Description style={{
                                margin: 0,
                                marginLeft: 30,
                                display: 'flex',
                                justifyContent:'space-between',
                                marginTop: -25
                                
                            }}>
                                
                                <div style={{
                                    display: 'flex',
                                    
                                }}>
                                <Line style={{
                                    color: 'red',
                                    borderLeft: '1px solid red',
                                    height: 102,
                                    width: 0,
                                    marginTop: 5
                                    
                                }}/>
                                <div style={{
                                    marginTop: -10
                                }}>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>Flat Studio from: </h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </div>
                                
                                </div>
                                <CardButton style={{
                                    backgroundColor: 'red',
                                    width: 295,
                                    height: 89,
                                    borderRadius: '20px 0px 10px 0px',
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    marginTop: 27
                                }}>Discover</CardButton>
                                
                            </Description>
                            </div>
                            
                            
                        </CardContent>
           </RealEstateCard>
           <RealEstateCard>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                            backgroundSize: 'cover',
                            width: '50%'
                        }}>

                        </CardContent>
                        <CardContent style={{
                            width: '60%'
                        }}>
                            <Description>
                            <h1>Residential Homes</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/Houses READY TO MOVE IN !</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>Brussels - Building Pompidou. Magnificient building at
                            only 200m from metro Yser.
                            Perfectly located building composed of 46 kots/flats.
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            marginTop: 90
                            }}>Delivery Date: 23 July 2023</h2>
                            
                            </Description>
                            <div style={{
                                marginTop: 45
                            }}>
                            <h2 style={{
                                marginLeft:27,
                                marginTop: -20
                            }}>Price</h2>
                            <Description style={{
                                margin: 0,
                                marginLeft: 30,
                                display: 'flex',
                                justifyContent:'space-between',
                                marginTop: -25
                                
                            }}>
                                
                                <div style={{
                                    display: 'flex',
                                    
                                }}>
                                <Line style={{
                                    color: 'red',
                                    borderLeft: '1px solid red',
                                    height: 102,
                                    width: 0,
                                    marginTop: 5
                                    
                                }}/>
                                <div style={{
                                    marginTop: -10
                                }}>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>Flat Studio from: </h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </div>
                                
                                </div>
                                <CardButton style={{
                                    backgroundColor: 'red',
                                    width: 295,
                                    height: 89,
                                    borderRadius: '20px 0px 10px 0px',
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    marginTop: 27
                                }}>Discover</CardButton>
                                
                            </Description>
                            </div>
                            
                            
                        </CardContent>
           </RealEstateCard>
           <RealEstateCard>
                        <CardContent style={{
                            backgroundImage: `url(${Estate})`,
                            backgroundSize: 'cover',
                            width: '50%'
                        }}>

                        </CardContent>
                        <CardContent style={{
                            width: '60%'
                        }}>
                            <Description>
                            <h1>Residential Homes</h1>
                            <h2 style={{
                                color: 'rgba(217, 11, 66, 1)',
                                fontWeight: 500,
                                
                            }}>Makamba 103</h2>
                            <h2 style={{
                                fontWeight: 700
                            }}>46 KOTS/Houses READY TO MOVE IN !</h2>

                            <p style={{
                                fontWeight: 400,
                                marginTop: 50
                            }}>Brussels - Building Pompidou. Magnificient building at
                            only 200m from metro Yser.
                            Perfectly located building composed of 46 kots/flats.
                            </p>

                            <h2 style={{fontWeight: 500,
                            color: 'rgba(46,15,89,1)',
                            marginTop: 90
                            }}>Delivery Date: 23 July 2023</h2>
                            
                            </Description>
                            <div style={{
                                marginTop: 45
                            }}>
                            <h2 style={{
                                marginLeft:27,
                                marginTop: -20
                            }}>Price</h2>
                            <Description style={{
                                margin: 0,
                                marginLeft: 30,
                                display: 'flex',
                                justifyContent:'space-between',
                                marginTop: -25
                                
                            }}>
                                
                                <div style={{
                                    display: 'flex',
                                    
                                }}>
                                <Line style={{
                                    color: 'red',
                                    borderLeft: '1px solid red',
                                    height: 102,
                                    width: 0,
                                    marginTop: 5
                                    
                                }}/>
                                <div style={{
                                    marginTop: -10
                                }}>
                                <h2 style={{
                                    fontSize: 25,
                                    fontWeight: 500
                                }}>Flat Studio from: </h2>
                                <h2 style={{
                                    color: 'rgba(46,15,89,1)'
                                }}>BIF 120000</h2>
                                </div>
                                
                                </div>
                                <CardButton style={{
                                    backgroundColor: 'red',
                                    width: 295,
                                    height: 89,
                                    borderRadius: '20px 0px 10px 0px',
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    marginTop: 27
                                }}>Discover</CardButton>
                                
                            </Description>
                            </div>
                            
                            
                        </CardContent>
           </RealEstateCard>
           <CardButton style={{
            margin: 'auto',
            marginTop: 120,
            marginBottom: 240,
            width: 574,
            height: 69,
            borderRadius: 10,
            fontSize: 30,
            fontWeight: 700
           }}>Load More</CardButton>
        </Content>
       </Wrapper> 
    )
}

export default RealEstate