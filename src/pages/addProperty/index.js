import React, { useState } from "react";
import { BackgroundImage, Content, Input, Wrapper, Select, Button } from "./addProperty.styles";
import Upload from '../../assets/images/upload.svg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AddProperty = () =>{
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [image, setImage2] = useState(null)
    const [coverImage, setCoverImage] = useState('')
    const [price, setPrice] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [location, setLocation] = useState('')
    const [contructionYear, setConstructionYear] = useState('')
    const [distanceToRoad, setDistanceToRoad] = useState('')
    const [livingArea, setLivingArea] = useState('')
    const [floors, setFloors] = useState('')
    const [options, setOption] = useState('')
    const [propertyTypesId, setPropertytypesId] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const id = localStorage.getItem('id')
    const userId = parseInt(id)
    const url='https://urbony.onrender.com/api/property'
        const add = async () => {
            const body = JSON.stringify({price, bedrooms, location, bathrooms, contructionYear, distanceToRoad,livingArea, floors, options, coverImage, propertyTypesId, userId});
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
    return(
        <Wrapper>
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
                
                <h2>{t('addProperty.details')}</h2>
                <h4>{t('addProperty.price')}</h4>
                <Input type="number" placeholder={t('addProperty.priceHolder')} value={price} onChange={(e) => setPrice(parseInt(e.target.value))}/>
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
                    <option value="1" >{t('Welcome.residentialOption1')}</option>
                    <option value="2">{t('Welcome.residentialOption2')}</option>
                    <option value="3">{t('Welcome.residentialOption3')}</option>
                    <option value="4">{t('Welcome.residentialOption4')}</option>
                    <option value="5">{t('Welcome.residentialOption5')}</option>
                    <option value="6" >{t('Welcome.residentialOption6')}</option>
                    <option value="7">{t('Welcome.residentialOption7')}</option>
                    <option value="8">{t('Welcome.residentialOption8')}</option>
                    <option value="9">{t('Welcome.residentialOption9')}</option>
                    <option value="10">{t('Welcome.residentialOption10')}</option>
                    <option value="11" >{t('Welcome.residentialOption11')}</option>
                    <option value="12">{t('Welcome.residentialOption12')}</option>
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
                <Button onClick={add}>{t('addProperty.add')}</Button>
            </Content>
        </Wrapper>
    )
}

export default AddProperty;