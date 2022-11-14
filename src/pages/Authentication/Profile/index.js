import React, { useEffect, useState } from "react";
import { Content, InformationContent, Wrapper } from "./Profile.styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../../components/Spinner";
import { setGlobalState } from "../../../store/state";
import { Input } from "../../addProperty/addProperty.styles";
import { Button } from "../../EditProperty/EditProperty.styles";
import { useNavigate } from "react-router-dom";

const Profile = ()=>{
    const id = localStorage.getItem('id')
    const [profileDetails, setProfileDetails] = useState('')
    const [loading, setLoading] = useState('')
    const editUrl = `https://urbony.onrender.com/api/user/${id}`
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const url = `https://urbony.onrender.com/api/user/${id}`
        try {
            setLoading(true)
            fetch(url,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
            }).then(json=>{
                console.log(json)
                setLoading(false)
                setProfileDetails(json)
            }).catch(error=>{
                console.log(error)
                setLoading(false)
                toast('Kindly login again, your access has expired', 
                    {position: toast.POSITION.TOP_RIGHT})
                    setGlobalState("loggedIn", false)
                localStorage.removeItem('token')
                localStorage.removeItem('name')
                localStorage.removeItem('id')
            })
        } catch (error) {
            
        }
    }, [])

    const [nameEdit, setNameEdit] = useState(false)
    const [emailEdit, setEmailEdit] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = ()=>{
        if(nameEdit){
            setNameEdit(false)
        }else{
            setNameEdit(true)
        }
    }

    const handleEmail = ()=>{
        if(emailEdit){
            setEmailEdit(false)
        }else{
            setEmailEdit(true)
        }
    }
    const update = async () => {
        var body;
        if(nameEdit){
            body = JSON.stringify({name})
        }
        else{
            body = JSON.stringify({email})
        }
        try {
            
           fetch(editUrl, {
                method: 'PATCH',
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            }).then(res => {
                if (res.ok){
                    return res.json()
                } else {
                    throw res.json()
                }
                
            }).then(json =>{
                console.log(json)
                localStorage.setItem('name', name)
                window.location.reload(false)
                
                

               

            }).catch(error =>{
                
                console.log(error)
                
            });

            
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <Wrapper>
            {loading ? <Loading/>: <Content>
       <h2>Informations</h2>
       <InformationContent>
        <h3>Name: </h3>
        <div style={{display: 'flex'}}>
        <h3 style={{marginRight: 20, color: 'rgba(46,15,89,1)'}}>{profileDetails.name}</h3>
        <h4 style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={handleName}>Edit</h4>
        </div>
        
       </InformationContent>
       {nameEdit? <div style={{display: 'flex'}}>
                        <Input style={{width: '30%', marginRight: 10}}
                         value={name} onChange={(e) => setName(e.target.value)}
                        />
                        <Button onClick={update}>Save</Button>
                        </div>: null}
       <InformationContent>
        <h3>Email: </h3>
        <div style={{display: 'flex'}}>
        <h3 style={{marginRight: 20, color: 'rgba(46,15,89,1)'}}>{profileDetails.email}</h3>
        <h4 style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={handleEmail}>Edit</h4>
        </div>
       </InformationContent>
       {emailEdit? <div style={{display: 'flex'}}>
                        <Input style={{width: '30%', marginRight: 10}}
                         value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button onClick={update}>Save</Button>
                        </div>: null}

       <h2 style={{marginTop: 100}}>Details</h2>
       <InformationContent>
        <h3>Number of properties uploaded: </h3>
        
        <h3 style={{color: 'rgba(46,15,89,1)'}}>{profileDetails.UserProperty?.length}</h3>
        
       </InformationContent>
       <div>
        {profileDetails.UserProperty?.length > 0 ?
    <>
    {profileDetails.UserProperty?.map((property)=>(
        <InformationContent key={property.propertyId} style={{width: '60%', cursor: 'pointer'}}
        onClick={()=>navigate(`/property/${property.propertyId}`)}
        >
            <h3>Property number <span style={{color:'rgba(46,15,89,1)'}}>{property.propertyId}</span></h3>
            <h3>Uploaded on :</h3>
            <h3>{(property.createdAt)}</h3>
        </InformationContent>
    ))}
    </>:<h3>You don't have any property</h3>    
    }
       </div>
       <InformationContent>
        <h3>Subscriptions: </h3>
        <div style={{display: 'flex'}}>
        <h3 style={{marginRight: 20, color: 'rgba(46,15,89,1)'}}>Basic</h3>
        <h4 style={{cursor: 'pointer', textDecoration: 'underline'}}>Edit</h4>
        </div>
       </InformationContent>
       <ToastContainer progressClassName="toastProgress"/>
            </Content>}
            
        </Wrapper>
    )
}

export default Profile;