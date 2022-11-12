import React, {useState, useEffect} from "react";
import { Button, Content, Delete, Details, DetailsContent, HouseImage, PencilLogo, Wrapper } from "./EditProperty.styles";
import { useParams } from "react-router-dom";
import Pencil from '../../assets/images/pencil.svg'
import { Input } from "../addProperty/addProperty.styles";
import { useTranslation } from "react-i18next";
import { Select } from "../addProperty/addProperty.styles";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Spinner";
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProperty = () =>{

    const {id} = useParams();
    const [property, setProperty] = useState("")
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [dialog, setDialog] = useState(false)

    
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
    const [prices, setPrice] = useState('')
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
                // eslint-disable-next-line
                const price = parseFloat(prices.replace(/[^\d\.\-]/g, ""))
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
        const deleteProperty = ()=>{
            try {
                
                fetch(url, {
                     method: 'DELETE',
                     headers: {
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
                     setDialog(false)
                     toast(json.message, 
                        {position: toast.POSITION.TOP_RIGHT})
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
            {loading ? (<Loading/>):(
                <Content>
                {dialog ?  <ReactDialogBox
              closeBox={()=>setDialog(false)}
              modalWidth='40%'
              headerBackgroundColor='rgba(46,15,89,1)'
              headerTextColor='white'
              headerHeight='65'
              closeButtonColor='white'
              bodyBackgroundColor='white'
              bodyTextColor='black'
              bodyHeight='200px'
              headerText='Confirmation'
            >
              <div>
                <h2>Are you sure you want to remove this property?</h2>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Delete style={{width: 170}} onClick={deleteProperty}>Yes</Delete>
                    <Delete style={{width: 170, backgroundColor: 'rgba(46,15,89,1)'}} onClick={()=>setDialog(false)}>No</Delete>
                </div>
              </div>
            </ReactDialogBox>: null}
            
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
                         value={prices} onChange={(e) =>{
                            const {value} = e.target
                        const formated = (Number(value.replace(/\D/g, '')) || '').toLocaleString()
                       
                        setPrice(formated)}
                        } 
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
                    <Select value={location} onChange={(e) => setLocation(e.target.value)} style={{width: '30%', marginRight: 10}}>
                <option value="select"> {t('Welcome.location')}</option>
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
                        <Delete onClick={()=>setDialog(true)}>Remove Property</Delete>
                </Details>
                <ToastContainer progressClassName="toastProgress"/>
                
                </Content>
            )}
            
            
        </Wrapper>
    )
}

export default EditProperty;