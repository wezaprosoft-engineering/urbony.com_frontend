import React, {useState, useEffect} from "react";
import { Content, DetailedContent, Details, DetailedInside,HouseImage, Wrapper, FeatureContent, PropertyForm } from "./SingleProperty.styles";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GetInTouchInput, Submit } from "../GetInTouch/GetInTouch.styles";
import Loading from "../../components/Spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bed from '../../assets/images/bed-solid.svg'
import Bath from '../../assets/images/bath-solid.svg'
import Ruler from '../../assets/images/ruler-vertical-solid.svg'
import Distance from '../../assets/images/distance.png'
import Floor from '../../assets/images/floor.png'
import Type from '../../assets/images/type.png'
import Check from '../../assets/images/check-solid.svg'
import urbonyLogo from '../../assets/images/Urbony.png'

const SingleProperty = () =>{
    const {t} = useTranslation()
    const {id} = useParams();
    const [property, setProperty] = useState("")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const bookingUrl = 'https://urbony.onrender.com/api/booking'
    const link = `https://urbony.com/property/${id}`
    
    useEffect(() =>{
        const url = `https://urbony.onrender.com/api/property/${id}`
       
        const propertyDetails = async () => {
            try {
                setLoading(true)
                fetch(url,{
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
                   setLoading(false)
                   setProperty(json)
                   
                   
                }).catch(error =>{
                    setLoading(false)
                    console.log(error)
                    
                });
            } catch (error) {
                console.log(error)
            }
        }
    
        propertyDetails();
        
    }, [id]);
    const book = () =>{
        try {
            const body = JSON.stringify({name, email, link, phone})
            fetch(bookingUrl, {
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
                toast(json.message, 
                    {position: toast.POSITION.TOP_RIGHT})
                    setName('')
                    setEmail('')
                    setPhoneNumber('')
                
                
                

               

            }).catch(error =>{
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }

    
    return(
        <Wrapper>
            {loading? (<Loading/>):(
                <Content>
                
            
                <Details>
                <HouseImage style={{
                    backgroundImage: `url(${property.coverImage})` 
                }}> 
                <div style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', display: 'flex', color: 'white', justifyContent: 'space-evenly', width: '100%', alignItems: 'center', backgroundColor: 'rgba(46,15,89, 0.6)'}}>
                <h1>{property.location}</h1>
                     <h1>BIF {(property.price)?.toLocaleString()}</h1>
                </div>
                
                </HouseImage>
                {property.gallery?.length > 0 ? <div style={{display: 'flex', flexWrap: 'wrap', marginTop: 10}}>
                {property.gallery?.map(galleries=>{
                    return(
                        <img src={galleries.url} alt="galleries" style={{width: '20%', height: '20%', marginRight: 10,}}/>
                       
                    )
                    })}
                 </div>: null}
                 <DetailedContent>
                    <DetailedInside>
                        <div>
                        <img src={Bed} alt="icon" width="40px" height="40px"/>
                        <h3>{property.bedrooms} Bedrooms</h3>
                        </div>
                        <div>
                        <img src={Bath} alt="icon" width="40px" height="40px"/>
                        <h3>{property.bathrooms} Bathrooms</h3>
                        </div>
                        
                    </DetailedInside>
                    <DetailedInside>
                        <div>
                        <img src={Ruler} alt="icon" width="40px" height="40px"/>
                        <h3>{property.livingArea} SQ M</h3>
                        </div>
                        <div>
                        <img src={Distance} alt="icon" width="40px" height="40px"/>
                        <h3>{property.distanceToRoad} M</h3>
                        </div>
                        
                        
                    </DetailedInside>
                    <DetailedInside>
                        <div>
                        <img src={Floor} alt="icon" width="40px" height="40px"/>
                        <h3>{property.floors} Floors</h3>
                        </div>
                        <div>
                        <img src={Type} alt="icon" width="40px" height="40px"/>
                        <h3>{property.type?.name}</h3>
                        </div>
                        
                        
                    </DetailedInside>
                 </DetailedContent>

                 {/* <h2 style={{color: 'rgba(46,15,89,1)'}}>Details</h2>
                <DetailsContent>
                        <h3>Price</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{(property.price)?.toLocaleString()}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Bedrooms</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.bedrooms}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>location</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.location}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Construction Year</h3>
                        <h3>{property.contructionYear}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Distance to road</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.distanceToRoad}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Living Area</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.livingArea}m2</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Number of floors</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.floors}</h3>
                    </DetailsContent>
                    
                    <DetailsContent>
                        <h3>Options</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.options}</h3>
                    </DetailsContent>
                    <DetailsContent>
                        <h3>Type</h3>
                        <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.type?.name}</h3>
                    </DetailsContent>*/}
                
                </Details>
                <div style={{marginTop: 70, width: '80%'}}>
                    <PropertyForm>
                        <div style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', marginTop: 10, justifyContent: 'space-between'}}>
                        <h2>URBONY</h2>
                        <img src={urbonyLogo} alt="logo" style={{width: 170, height: 50}}/>
                        </div>
                    <h4 style={{
                        width: '80%',
                        marginLeft: '3%',
                        marginTop: 110
                    }}>Leave us your details for our agent to be in touch with you </h4>
                <GetInTouchInput style={{
                    width: '80%',
                    height: 30,
                    borderColor: 'transparent',
                    backgroundColor: 'lightgray',
                    borderRadius: 0,
                    marginLeft: '3%',
                  
                }} placeholder={t('getInTouch.nameHolder')} value={name} onChange={(e) => {setName(e.target.value)}}/>
                <GetInTouchInput style={{
                    width: '80%',
                    height: 30,
                    borderColor: 'transparent',
                    backgroundColor: 'lightgray',
                    borderRadius: 0,
                    marginLeft: '3%',
                }} placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <GetInTouchInput style={{
                   width: '80%',
                   height: 30,
                   borderColor: 'transparent',
                   backgroundColor: 'lightgray',
                   borderRadius: 0,
                   marginLeft: '3%',
                }} placeholder={t('sellerRequestForm.phoneNumberHolder')} value={phone} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                <Submit style={{
                    width: 150,
                    height: 50,
                    marginLeft: '3%',
                    fontSize: 14
                }} onClick={book}>{t('getInTouch.submit')}</Submit>
                    </PropertyForm>
                   
                </div>
                <FeatureContent>
                    <div style={{display:'flex'}}>
                        <h4 style={{width: '33.33%', textDecoration: 'underline'}}>External Features</h4>
                        <h4 style={{width: '33.33%', textDecoration: 'underline'}}>Internal Features</h4>
                        <h4 style={{width: '33.33%', textDecoration: 'underline'}}>Nearby Features</h4>
                    </div>

                    <div style={{display: 'flex'}}>

                    <div style={{width: '33.33%'}}>
                        {property.externalFeatures?.length > 0 ? <>{
                            property.externalFeatures?.map((feature)=>{
                                return(
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Check} alt="check" width='15px' height='15px'/>
                                        <h4>{feature.name}</h4>
                                    </div>
                                )
                            })
                        }</>:null}
                    </div>
                    <div style={{width: '33.33%'}}>
                        {property.internalFeatures?.length > 0 ? <>{
                            property.internalFeatures?.map((feature)=>{
                                return(
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Check} alt="icon" width='15px' height='15px'/>
                                        <h4>{feature.name}</h4>
                                    </div>
                                )
                            })
                        }</>:null}
                    </div>
                    <div style={{width: '33.33%'}}>
                        {property.nearbyFeatures?.length > 0 ? <>{
                            property.nearbyFeatures?.map((feature)=>{
                                return(
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={Check} alt="icon" width='15px' height='15px'/>
                                        <h4>{feature.name}</h4>
                                    </div>
                                )
                            })
                        }</>:null}
                    </div>
                    </div>
                    
                </FeatureContent>
                
                <ToastContainer progressClassName="toastProgress"/>
                </Content>
            )}
            
        </Wrapper>
    )
}

export default SingleProperty;