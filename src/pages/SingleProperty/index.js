import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Content, DetailedContent, Details, DetailedInside, Wrapper, FeatureContent, PropertyForm } from "./SingleProperty.styles";
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
import { FaChevronLeft } from 'react-icons/fa';
import GallerySlider from "../../components/Gallery/index";
import './style.css';
import FsLightbox from "fslightbox-react";


const SingleProperty = () => {
    const { t } = useTranslation()
    const { id } = useParams();
    const [property, setProperty] = useState("")
    const [toggler, setToggler] = useState(false);
    const [gallery, setGallery] = useState([]);
    const [sources, setSources] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const bookingUrl = 'https://urbony.onrender.com/api/booking'
    const link = `https://urbony.com/property/${id}`

    const navigate = useNavigate();
    const goFullscreen = () => {
        // setToggler(!toggler);
    }
    useEffect(() => {
        const url = `https://urbony.onrender.com/api/property/${id}`

        const propertyDetails = async () => {
            try {
                setLoading(true)
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4`
                    }
                }).then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        throw res.json()
                    }
                }).then(json => {
                    console.log(json)
                    setLoading(false)
                    setProperty(json);
                    let gl = [{ id: 0, "url": json.coverImage }]
                    setGallery(gl.concat(json.gallery));
                    let images = [];
                    gallery.forEach(item => {
                        let img = item.url;
                        images.push(img.replace(/ /g,"%20"));
                    });
                    setSources(images);
                }).catch(error => {
                    setLoading(false)
                    console.log(error)
                });
            } catch (error) {
                console.log(error)
            }
        }

        propertyDetails();

    }, [id]);
    const book = () => {
        try {
            const body = JSON.stringify({ name, email, link, phone })
            fetch(bookingUrl, {
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjMxMzk1NDR9.CkIOYVAOZZNdpPbosprA9w0hCEwRyQLW0jdRaQUJTW4'
                }
            }).then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw res.json()
                }

            }).then(json => {
                console.log(json)
                toast(json.message,
                    { position: toast.POSITION.TOP_RIGHT })
                setName('')
                setEmail('')
                setPhoneNumber('')

            }).catch(error => {
                console.log(error)

            });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Wrapper>
            {loading ? (<Loading />) : (
                <Content>
                    <Details>
                        {/* <HouseImage style={{
                            backgroundImage: `url(${property.coverImage})`
                        }}>
                            <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', display: 'flex', color: 'white', justifyContent: 'space-evenly', width: '100%', alignItems: 'center', backgroundColor: 'rgba(46,15,89, 0.6)' }}>
                                <h1>{property.location}</h1>
                                <h1>BIF {(property.price)?.toLocaleString()}</h1>
                            </div>

                        </HouseImage> */}
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.3em', fontWeight: 'bolder', marginBottom: '25px', cursor: 'pointer' }} onClick={() => navigate(-1)}>                            <FaChevronLeft />
                            <span>Back</span>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <GallerySlider gallery={gallery} slideshow={goFullscreen} />
                            <FsLightbox
                                toggler={toggler}
                                sources={sources}
                                type={"image"}
                            />
                            {/* {property.gallery?.map(galleries => {
                                return (
                                    <img src={galleries.url} alt="galleries" style={{ width: '20%', height: '20%', marginRight: 10, }} />

                                )
                            })} */}
                        </div>
                    </Details>
                    <div className="propDesc" style={{ marginTop: 70, display: 'flex', justifyContent: 'space-between' }}>
                        <DetailedContent className="feature">
                            <DetailedInside>
                                <div>
                                    <img src={Bed} alt="icon" width="40px" height="40px" />
                                    <h3>{property.bedrooms} Bedrooms</h3>
                                </div>
                                <div>
                                    <img src={Bath} alt="icon" width="40px" height="40px" />
                                    <h3>{property.bathrooms} Bathrooms</h3>
                                </div>

                            </DetailedInside>
                            <DetailedInside>
                                <div>
                                    <img src={Ruler} alt="icon" width="40px" height="40px" />
                                    <h3>{property.livingArea} SQ M</h3>
                                </div>
                                <div>
                                    <img src={Distance} alt="icon" width="40px" height="40px" />
                                    <h3>{property.distanceToRoad} M</h3>
                                </div>


                            </DetailedInside>
                            <DetailedInside>
                                <div>
                                    <img src={Floor} alt="icon" width="40px" height="40px" />
                                    <h3>{property.floors} Floors</h3>
                                </div>
                                <div>
                                    <img src={Type} alt="icon" width="40px" height="40px" />
                                    <h3>{property.type?.name}</h3>
                                </div>


                            </DetailedInside>
                        </DetailedContent>
                        <PropertyForm className="form" style={{ marginTop: '10px' }}>
                            <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                                <h2>URBONY</h2>
                                <img src={urbonyLogo} alt="logo" style={{ width: 170, height: 50 }} />
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

                            }} placeholder={t('getInTouch.nameHolder')} value={name} onChange={(e) => { setName(e.target.value) }} />
                            <GetInTouchInput style={{
                                width: '80%',
                                height: 30,
                                borderColor: 'transparent',
                                backgroundColor: 'lightgray',
                                borderRadius: 0,
                                marginLeft: '3%',
                            }} placeholder={t('sellerRequestForm.emailHolder')} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <GetInTouchInput style={{
                                width: '80%',
                                height: 30,
                                borderColor: 'transparent',
                                backgroundColor: 'lightgray',
                                borderRadius: 0,
                                marginLeft: '3%',
                            }} placeholder={t('sellerRequestForm.phoneNumberHolder')} value={phone} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                            <Submit style={{
                                width: 150,
                                height: 50,
                                marginLeft: '3%',
                                fontSize: 14
                            }} onClick={book}>{t('getInTouch.submit')}</Submit>
                        </PropertyForm>

                    </div>
                    <FeatureContent className="feature">
                        <div style={{ display: 'flex' }}>
                            <h4 style={{ width: '33.33%', textDecoration: 'underline' }}>External Features</h4>
                            <h4 style={{ width: '33.33%', textDecoration: 'underline' }}>Internal Features</h4>
                            <h4 style={{ width: '33.33%', textDecoration: 'underline' }}>Nearby Features</h4>
                        </div>

                        <div style={{ display: 'flex' }}>

                            <div style={{ width: '33.33%' }}>
                                {property.externalFeatures?.length > 0 ? <>{
                                    property.externalFeatures?.map((feature, index) => {
                                        return (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Check} alt="check" width='15px' height='15px' />
                                                <h4>{feature.name}</h4>
                                            </div>
                                        )
                                    })
                                }</> : null}
                            </div>
                            <div style={{ width: '33.33%' }}>
                                {property.internalFeatures?.length > 0 ? <>{
                                    property.internalFeatures?.map((feature, index) => {
                                        return (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Check} alt="icon" width='15px' height='15px' />
                                                <h4>{feature.name}</h4>
                                            </div>
                                        )
                                    })
                                }</> : null}
                            </div>
                            <div style={{ width: '33.33%' }}>
                                {property.nearbyFeatures?.length > 0 ? <>{
                                    property.nearbyFeatures?.map((feature, index) => {
                                        return (
                                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={Check} alt="icon" width='15px' height='15px' />
                                                <h4>{feature.name}</h4>
                                            </div>
                                        )
                                    })
                                }</> : null}
                            </div>
                        </div>

                    </FeatureContent>

                    <ToastContainer progressClassName="toastProgress" />
                </Content>
            )}

        </Wrapper>
    )
}

export default React.memo(SingleProperty);