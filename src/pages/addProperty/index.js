import React, { useState,useEffect } from "react";
import { BackgroundImage, Content, Input, Wrapper, Select, Button } from "./addProperty.styles";
import Upload from '../../assets/images/upload.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MoreContent, Check } from "../../components/WelcomeSection/Welcome.styles";
import { setGlobalState } from "../../store/state";
import Loading from "../../components/Spinner";
import axios from 'axios'
const Details = props =>{
    
    //const [checked, setChecked] = useState(false)
    
   
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 414px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 414px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        {screen ? <MoreContent>
            
            <Check type='checkbox' onChange={props.onChange}/>
            <h4>{props.detail}</h4> 
            
        
        
        </MoreContent>: <MoreContent>
        <Check type='checkbox' value={props.value} onChange={props.onChange} checked={props.checked} id={props.id} key={props.myKey}/>
        <h4 style={{
            fontSize: 15
        }}>{props.detail}</h4> 
        </MoreContent>}
        
                               
        </>)
   
}

const AddProperty = () =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [image, setImage2] = useState(null)
    const [coverImage, setCoverImage] = useState('')
    const [prices, setPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [location, setLocation] = useState('')
    const [contructionYear, setConstructionYear] = useState('')
    const [distanceToRoad, setDistanceToRoad] = useState('')
    const [livingArea, setLivingArea] = useState('')
    const [floors, setFloors] = useState('')
    const [options, setOption] = useState('')
    const [loading, setLoading] = useState(false)
    const [bathrooms, setBathrooms] = useState('')
    const id = localStorage.getItem('id')
    const userId = parseInt(id)
    var gallery = []
   // const [gallery, setGallery] = useState('')
   // const [gallery, setGallery] = useState('')
   const internalUrl = 'https://urbony.onrender.com/api/internalFeatures'
   const externalUrl = 'https://urbony.onrender.com/api/externalFeatures'
   const nearbyUrl = 'https://urbony.onrender.com/api/nearbyFeatures'
   const [internalFeature, setInternalFeatures] = useState('')
   const [externalFeature, setExternalFeatures] = useState('')
   const [nearbyFeature, setNearbyFeatures] = useState('')
    const url='https://urbony.onrender.com/api/property'
    let internalFeatures1;
    let externalFeatures1;
    let nearbyFeatures1
    const [internalFeatures, setInternal]= useState('')
    const [externalFeatures, setExternal]= useState('')
    const [nearbyFeatures, setNearby]= useState('')
        const add = async () => {
            // eslint-disable-next-line
            const price = parseFloat(prices.replace(/[^\d\.\-]/g, ""))
            const body = JSON.stringify({price, bedrooms, location, nearbyFeatures,bathrooms, contructionYear, distanceToRoad, externalFeatures,livingArea, floors, gallery,internalFeatures, options, coverImage, propertyTypesId, userId});
            try {
               fetch(url, {
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
                    navigate('/myproperties')
                    
                    
    
                   
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
            
            
        }
        const ImageUpload = async (file) => {
            var formdata = new FormData();
            formdata.append('file', file);
            
            try {
               fetch('https://urbony.onrender.com/api/upload', {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                }).then(res => {
                    if (res.ok){
                        return res.json()
                    } else {
                        throw res.json()
                    }
                    
                }).then(json =>{
                    console.log(json)
                    setCoverImage(json.url)
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
            
        }
       /* const ImagesUpload = async (files) => {
            var formdata = new FormData();
            formdata.append('files', files);
            
            try {
                console.log('launched')
                console.log(files)
               fetch('https://urbony.onrender.com/api/uploads', {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                }).then(res => {
                    if (res.ok){
                        return res.json()
                    } else {
                        throw res.json()
                    }
                    
                }).then(json =>{
                    console.log(json)
                   gallery.push(json)
                   // setGallery(...pictures)
                 //   console.log(gallery)
                    
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
            
        }*/
        
        const propertyUrl = 'https://urbony.onrender.com/api/property-types'
    const [property, setProperty] = useState('')
    const [propertyTypesId, setPropertytypesId] = useState('')
    const internal = () => {
        try {
            setLoading(true)
            fetch(internalUrl,{
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
               
                json.map((item1) =>(
                    item1.checked = false
                ))
               console.log(json)
               setLoading(false)
               setInternalFeatures(json)

               
            }).catch(error =>{
                setLoading(false)
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    const external = () => {
        try {
            setLoading(true)
            fetch(externalUrl,{
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
                json.map((item2) =>(
                    item2.checked = false
                ))
               console.log(json)
               setLoading(false)
               setExternalFeatures(json)
               
            }).catch(error =>{
                setLoading(false)
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
    const nearby = () => {
        try {
            setLoading(true)
            fetch(nearbyUrl,{
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
                json.map((item3) =>(
                    item3.checked = false
                ))
               console.log(json)
               setLoading(false)
               setNearbyFeatures(json)
               
            }).catch(error =>{
                setLoading(false)
                console.log(error)
                
            });
        } catch (error) {
            console.log(error)
        }
    }
const getProperty = ()=>{
    try {
        fetch(propertyUrl,{
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
           setPropertytypesId(json[0].id)

           
        }).catch(error =>{
            console.log(error)
            
        });
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    internal()
    external()
    nearby()
    getProperty()
}, []);


class ImagesUploading extends React.Component{
    state = {
        file: null
      }
    
     handleFile(e){
        let file = e.target.files
        this.setState({file: file})
      
     }
     handleUpload(e){
        console.log(this.state, "THE STATE --- $$$")
      let files = this.state.file
      var formdata = new FormData();
            formdata.append('files', files);

            axios.post(
                'https://ef70-197-232-153-52.ngrok.io/api/uploads' ,
                formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },}
                
            ).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
            
            /*try {
                console.log('launched')
                console.log(files)
                
               fetch('https://urbony.onrender.com/api/uploads', {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow',
                    
                }).then(res => {
                    if (res.ok){
                        return res.json()
                    } else {
                        throw res.json()
                    }
                    
                }).then(json =>{
                    console.log(json)
                  // gallery.push(json)
                   // setGallery(...pictures)
                 //   console.log(gallery)
                    
    
                }).catch(error =>{
                    console.log(error)
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }*/
     }
      render(){
        return(
            <form encType="multipart/form-data" id="upload_gallery">
                <label for="images" >Select images: </label>
                <input type="file" multiple="multiple" name="files" accept="images/*" onChange={(e)=>{this.handleFile(e)}}/>
                <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
                </form>
        )
      }
}

    return(
        <Wrapper>
            {loading ? (<Loading/>):(
                <Content>
                <h2>{t('addProperty.sell')}</h2>
                <h3>{t('addProperty.image')}</h3>
                {image ? <BackgroundImage style={{
                    backgroundColor: 'transparent',
                    backgroundImage: `url(${URL.createObjectURL(image)})`,
                     backgroundSize: 'cover'
                }}>


                </BackgroundImage>: 
                <BackgroundImage>
                    
                <div>
                <img src={Upload} alt="upload" style={{marginTop: 200}}/>
                <h4>{t('addProperty.select')}</h4>
                </div>
                <input type="file" name="house" style={{marginLeft: 100}}
                onChange={(event) => {
                    console.log(event.target.files[0].name);
                    //setImage(event.target.files[0].name);
                    //setImage('https://firebasestorage.googleapis.com/v0/b/residential-c062f.appspot.com/o/urbony%2Fhouse.jpeg?alt=media&token=a6eeca99-9d50-45b9-9fb8-7ad8fc808055')
                    setImage2(event.target.files[0]);
                    //console.log(image)
                    ImageUpload(event.target.files[0]);
                  }}
                />
                
            </BackgroundImage>
                }
                <ImagesUploading/>
                
                
                
                <h2>{t('addProperty.details')}</h2>
                <h4>{t('addProperty.price')}</h4>
                <Input placeholder={t('addProperty.priceHolder')} value={prices} onChange={(e) => {
                const {value} = e.target
                const formated = (Number(value.replace(/\D/g, ''))|| '').toLocaleString()
                setPrice(formated)
                }}/>
                <h4>{t('addProperty.living')}</h4>
                <Input placeholder={t('addProperty.livingHolder')} value={livingArea} onChange={(e) => setLivingArea(e.target.value)}/>
                <h4>Number of floors</h4>
                <Input type="number" placeholder="Enter number of floors" value={floors} onChange={(e) => setFloors(parseInt(e.target.value))}/>
                <h4>Construction year</h4>
                <Input placeholder="Enter construction year" value={contructionYear} onChange={(e) => setConstructionYear(e.target.value)}/>
                <h4>{t('addProperty.bedroom')}</h4>
                <Input type="number" placeholder={t('addProperty.bedroomHolder')} value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))}/>
                <h4>{t('addProperty.bathroom')}</h4>
                <Input type="number" placeholder={t('addProperty.bathroomHolder')} value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))}/>
                <h4>{t('addProperty.distance')}</h4>
                <Input placeholder={t('addProperty.distanceHolder')} value={distanceToRoad} onChange={(e) => setDistanceToRoad(e.target.value)}/>
                <h4>{t('sellerRequestForm.typeOfProperty')}</h4>
                <Select  value={propertyTypesId} onChange={(e) => setPropertytypesId(parseInt(e.target.value))}>
                {property.length > 0 ?(
                        property.map(house=>(
                            <option value={house.id} >{house.name}</option>
                        ))
                    ):<option>No Value</option>}
                        </Select>
                <h4>{t('sellerRequestForm.locationOfProperty')}</h4>
                <Select value={location} onChange={(e) => setLocation(e.target.value)}>
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
                <h4>{t('Estimation.content')}</h4>
                <Select id="value" value={options} onChange={(e) => setOption(e.target.value)}>
                    <option value="Type">Select type</option>
                                <option value="SELL">{t('Estimation.content1')}</option>
                            <option value="RENT">{t('Estimation.content2')}</option>
                                </Select>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    flexWrap: 'wrap',
                                    marginRight: '10%'
                                }}>

<div>
                                <h3>{t('Welcome.internal')}</h3>
                                {internalFeature.length > 0 ? <>
                                    {internalFeature.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setInternalFeatures([...internalFeature])
                                             internalFeatures1= internalFeature.filter((item1) =>
                                                
                                                item1.checked === true
                                               
                                            )
                                            
                                            setGlobalState("checked", true)
                                             internalFeatures1 = internalFeatures1.map((name)=> name.name)
                                             setInternal(internalFeatures1)
                                             console.log(internalFeatures)
                                             
                                            
                                          }}
                                          
                                        />
                                   
                                        
                                    )
                                })}
                                </>:null}
                               
                                
                            </div>
                            <div>
                                <h3>{t('Welcome.external')}</h3>
                                {externalFeature.length > 0 ? <>
                                    {externalFeature.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        myKey={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setExternalFeatures([...externalFeature])
                                             externalFeatures1 = externalFeature.filter((item2) =>
                                                item2.checked === true
                                            )
                                            setGlobalState("checked", true)
                                            externalFeatures1 = externalFeatures1.map((name)=> name.name)
                                            setExternal(externalFeatures1)
                                             console.log(externalFeatures)
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                                </>: null}
                                
                                
                            </div>
                            <div>
                                <h3>{t('Welcome.nearby')}</h3>
                                {nearbyFeature.length > 0 ? <>
                                    {nearbyFeature.map((details) => {
                                    return(
                                        <Details detail={details.name}
                                        key={details.id}
                                        id={details.id}
                                        checked={details.checked}
                                        onChange={(e) => {
                                            // add to list
                                            details.checked = !details.checked
                                            setNearbyFeatures([...nearbyFeature])
                                             nearbyFeatures1 = nearbyFeature.filter((item3) =>
                                                item3.checked === true
                                            )
                                            setGlobalState("checked", true)
                                            nearbyFeatures1 = nearbyFeatures1.map((name)=> name.name)
                                            setNearby(nearbyFeatures1)
                                             console.log(nearbyFeatures)
                                             
                                            
                                          }}
                                        />
                                        
                                    
                                        
                                    )
                                })}
                                </>: null}
                                
                                
                            </div>
                                </div>
                                
                <Button onClick={add}>{t('addProperty.add')}</Button>
            </Content>
            )}
            
        </Wrapper>
    )
}

export default AddProperty;