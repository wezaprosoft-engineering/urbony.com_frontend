import React, {useState, useEffect} from "react";
import { Content, Details, DetailsContent, Wrapper } from "./SingleProperty.styles";
import { useParams } from "react-router-dom";

const SingleProperty = () =>{

    const {id} = useParams();
    const [property, setProperty] = useState("")
   

    
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
    return(
        <Wrapper>
            <Content>Single property
            <h2 style={{color: 'rgba(46,15,89,1)'}}>Details</h2>
                {property.length > 0 ? <>
                    {property.map(
                        house => (
                            
                            <Details>
                
                <DetailsContent>
                    <h3>Price</h3>
                    <h3>{house.price}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Bedrooms</h3>
                    <h3>{house.bedrooms}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>location</h3>
                    <h3>{house.location}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Construction Year</h3>
                    <h3>{house.constructionYear}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Distance to road</h3>
                    <h3>{house.distanceToroad}</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Living Area</h3>
                    <h3>{house.livingArea}m2</h3>
                </DetailsContent>
                <DetailsContent>
                    <h3>Number of floors</h3>
                    <h3>{house.floors}</h3>
                </DetailsContent>
                
                <DetailsContent>
                    <h3>Options</h3>
                    <h3>{house.options}</h3>
                </DetailsContent>
                
            </Details>
                        )
                    )}
                </>: <h2>Loading</h2>}
            
            </Content>
            
        </Wrapper>
    )
}

export default SingleProperty;