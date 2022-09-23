import React, {useState, useEffect} from "react";
import { Button, Content, Details, DetailsContent, HouseImage, PencilLogo, Wrapper } from "./EditProperty.styles";
import { useParams } from "react-router-dom";
import Pencil from '../../assets/images/pencil.svg'
import { Input } from "../addProperty/addProperty.styles";
import { useTranslation } from "react-i18next";
import { Select } from "../addProperty/addProperty.styles";
import { useNavigate } from "react-router-dom";

const EditProperty = () =>{

    const {id} = useParams();
    const [property, setProperty] = useState("")
    const {t} = useTranslation()
    const navigate = useNavigate()
   

    
    useEffect(() =>{
        const url = `https://urbony.onrender.com/api/property/${id}`
        const propertyDetails = async () => {
            try {
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
                   setProperty(json)
                   
                   
                }).catch(error =>{
                    console.log(error)
                    
                });
            } catch (error) {
                console.log(error)
            }
        }
    
        propertyDetails();
        
    }, [id]);
    const [price, setPrice] = useState('')
    const [priceEdit, setPriceEdit] = useState(false)
    const [bedrooms, setBedrooms] = useState('')
    const [bedroomsEdit, setBedroomsEdit] = useState(false)
    const [location, setLocation] = useState('')
    const [locationEdit, setLocationEdit] = useState(false)
    const [contructionYear, setConstructionYear] = useState('')
    const [contructionYearEdit, setConstructionYearEdit] = useState(false)
    const [distanceToRoad, setDistanceToRoad] = useState('')
    const [distanceToRoadEdit, setDistanceToRoadEdit] = useState(false)
    const [livingArea, setLivingArea] = useState('')
    const [livingAreaEdit, setLivingAreaEdit] = useState(false)
    const [floors, setFloors] = useState('')
    const [floorsEdit, setFloorsEdit] = useState(false)
    const [options, setOption] = useState('')
    const [optionsEdit, setOptionEdit] = useState(false)
    
   
    

    const handlePrice = ()=>{
        if (priceEdit){
            setPriceEdit(false)
        } else{
            setPriceEdit(true)
        }
    }
    const handleBedrooms = ()=>{
        if (bedroomsEdit){
            setBedroomsEdit(false)
        } else{
            setBedroomsEdit(true)
        }
    }
    const handleLocation = ()=>{
        if (locationEdit){
            setLocationEdit(false)
        } else{
            setLocationEdit(true)
        }
    }
    const handleConstructionYear = ()=>{
        if (contructionYearEdit){
            setConstructionYearEdit(false)
        } else{
            setConstructionYearEdit(true)
        }
    }
    const handleDistance = ()=>{
        if (distanceToRoadEdit){
            setDistanceToRoadEdit(false)
        } else{
            setDistanceToRoadEdit(true)
        }
    }
    const handleLivingArea = ()=>{
        if (livingAreaEdit){
            setLivingAreaEdit(false)
        } else{
            setLivingAreaEdit(true)
        }
    }
    const handleFloors = ()=>{
        if (floorsEdit){
            setFloorsEdit(false)
        } else{
            setFloorsEdit(true)
        }
    }
    const handleOptions = ()=>{
        if (optionsEdit){
            setOptionEdit(false)
        } else{
            setOptionEdit(true)
        }
    }
    
    const url=`https://urbony.onrender.com/api/property/${id}`
        const update = async () => {
            var body;
            if(priceEdit){
                body = JSON.stringify({price})
            }else if(bedroomsEdit){
                body = JSON.stringify({bedrooms})
            }else if(locationEdit){
                body = JSON.stringify({location})
            }else if(contructionYearEdit){
                body = JSON.stringify({contructionYear})
            }else if(distanceToRoadEdit){
                body = JSON.stringify({distanceToRoad})
            }else if(livingAreaEdit){
                body = JSON.stringify({livingArea})
            }else if(floorsEdit){
                body = JSON.stringify({floors})
            }else{
                body = JSON.stringify({options})
            }
            try {
               fetch(url, {
                    method: 'PATCH',
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
                    navigate('/myproperties')
                    
                    
    
                   
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
            
        }
    return(
        <Wrapper>
            <Content>
                
            
            <Details>
            <HouseImage src={property.coverImage} alt='cover-image'/>
            <h2 style={{color: 'rgba(46,15,89,1)'}}>Details</h2>
            <DetailsContent>
                    <h3>Price</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{(property.price)?.toLocaleString()}</h3>
                    <PencilLogo src={Pencil} onClick={handlePrice}/>
                    
                </DetailsContent>
                {priceEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                    <Button onClick={update}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Bedrooms</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.bedrooms}</h3>
                    <PencilLogo src={Pencil} onClick={handleBedrooms}/>
                </DetailsContent>
                {bedroomsEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    type="number" value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>location</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.location}</h3>
                    <PencilLogo src={Pencil} onClick={handleLocation}/>
                </DetailsContent>
                {locationEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Construction Year</h3>
                    <h3>{property.contructionYear}</h3>
                    <PencilLogo src={Pencil} onClick={handleConstructionYear}/>
                </DetailsContent>
                {contructionYearEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    value={contructionYear} onChange={(e) => setConstructionYear(e.target.value)}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Distance to road</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{(property.distanceToRoad)}</h3>
                    <PencilLogo src={Pencil} onClick={handleDistance}/>
                </DetailsContent>
                {distanceToRoadEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    value={distanceToRoad} onChange={(e) => setDistanceToRoad(e.target.value)}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Living Area</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.livingArea}m2</h3>
                    <PencilLogo src={Pencil} onClick={handleLivingArea}/>
                </DetailsContent>
                {livingAreaEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    value={livingArea} onChange={(e) => setLivingArea(e.target.value)}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Number of floors</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.floors}</h3>
                    <PencilLogo src={Pencil} onClick={handleFloors}/>
                </DetailsContent>
                {floorsEdit ? <div style={{display: 'flex'}}>
                    <Input style={{width: '30%', marginRight: 10}}
                    type="number" value={floors} onChange={(e) => setFloors(parseInt(e.target.value))}
                    />
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
                <DetailsContent>
                    <h3>Options</h3>
                    <h3 style={{color: 'rgba(46,15,89,1)'}}>{property.options}</h3>
                    <PencilLogo src={Pencil} onClick={handleOptions}/>
                </DetailsContent>
                {optionsEdit ? <div style={{display: 'flex'}}>
                <Select id="value" value={options} onChange={(e) => setOption(e.target.value)}
                style={{width: '30%', marginRight: 10, height: 50}}
                >
                    <option value="Type">Select type</option>
                                <option value="SELL">{t('Estimation.content1')}</option>
                            <option value="RENT">{t('Estimation.content2')}</option>
                                </Select>
                    <Button onClick={()=>update()}>Save</Button>
                    </div>: null}
            </Details>
            
            
            </Content>
            
        </Wrapper>
    )
}

export default EditProperty;